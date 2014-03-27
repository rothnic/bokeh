
define [
  "underscore",
  "backbone",
  "common/has_properties",
], (_, Backbone, HasProperties) ->

  ajax_throttle = (func) ->
    busy = false
    resp = null
    has_callback = false
    callback = () ->
      console.log('called','busy', busy, 'has_callback', has_callback)
      if busy
        console.log('busy')
        has_callback = true
      else
        console.log('executing')
        busy = true
        resp = func()
        window.resp = resp
        resp.always(() ->
          console.log('done, setting to false')
          busy = false
          if has_callback
            has_callback = false
            callback()
        )
    return callback
  class ServerDataSource extends HasProperties
    # Datasource where the data is defined column-wise, i.e. each key in the
    # the data attribute is a column name, and its value is an array of scalars.
    # Each column should be the same length.
    type: 'ServerDataSource'

    initialize : (attrs, options) =>
      super(attrs, options)
      @callbacks = {}

    stoplistening_for_updates : (column_data_source) ->
      if @callbacks[column_data_source.get('id')]
        for entry in @callbacks[column_data_source.get('id')]
          @stopListening.apply(this, entry)

    listen_for_line1d_updates : (column_data_source, domain_range, screen_range
                                  primary_column, domain_name, columns) ->
      #ensure we only have one set of events bound
      @stoplistening_for_updates(column_data_source)
      @line1d_update(column_data_source, domain_range, screen_range
          primary_column, domain_name, columns
        )
      throttle = _.throttle(@line1d_update, 300)
      callback = () => throttle(column_data_source, domain_range, screen_range
        primary_column, domain_name, columns
      )
      @listenTo(screen_range, 'change', callback)
      @listenTo(domain_range, 'change', callback)
      @callbacks[column_data_source.get('id')] = [
        [screen_range, 'change', callback],
        [domain_range, 'change', callback]
      ]

    line1d_update : (column_data_source, domain_range, screen_range,
                     primary_column, domain_name, columns) =>
      #console.log('calling update')
      data_url = @get('data_url')
      owner_username = @get('owner_username')
      prefix = @get_base().Config.prefix
      url = "#{prefix}/bokeh/data/#{owner_username}#{data_url}"
      domain_resolution = (screen_range.get('end') - screen_range.get('start')) / 2
      domain_resolution = Math.floor(domain_resolution)
      domain_limit = [domain_range.get('start'), domain_range.get('end')]
      if _.any(_.map(domain_limit, (x) -> _.isNaN(x)))
        domain_limit = 'auto'
      params = [primary_column, domain_name, columns,
          domain_limit
        , domain_resolution]
      params = JSON.stringify(params)
      $.ajax(
        dataType: 'json'
        url : url
        xhrField :
          withCredentials : true
        success : (data) ->
          if domain_limit == 'auto'
            domain_range.set(
                start : data.domain_limit[0],
                end : data.domain_limit[1]
              ,
                silent : true
            )
            #console.log('setting range', data.domain_limit)
          column_data_source.set('data', data.data)
          #console.log('setting data', _.values(data.data)[0].length)
        data :
          downsample_function : 'line1d'
          downsample_parameters : params
      )

    listen_for_heatmap_updates : (column_data_source, x_data_range,
          y_data_range,
          x_screen_range, y_screen_range,
            ) ->
      #ensure we only have one set of events bound
      @stoplistening_for_updates(column_data_source)
      #throttle = _.throttle(@heatmap_update, 300)
      callback = ajax_throttle(() =>
        @heatmap_update(column_data_source, x_data_range,
          y_data_range,
          x_screen_range, y_screen_range)
      )
      callback()

      set_selection_and_update = () =>
        spec = column_data_source.get('selection_spec')
        @save({'selection_spec': spec}, {'patch' : true})
        callback()
      @data_source_listen(column_data_source, this, 'change:data_url', callback)
      for range in [x_data_range, y_data_range, x_screen_range, y_screen_range]
        @data_source_listen(column_data_source, range, 'change', callback)
      @data_source_listen(column_data_source, this, 'change:index_slice', callback)
      @data_source_listen(column_data_source, this, 'change:data_slice', callback)
      @data_source_listen(column_data_source, column_data_source,
        'change:selected', callback)
      @data_source_listen(column_data_source, column_data_source,
        'change:selection_spec', set_selection_and_update)
      return null

    data_source_listen : (data_source, obj, event, callback) =>
      ds_id = data_source.get('id')
      if not @callbacks[ds_id]?
        @callbacks[ds_id] = []
      @callbacks[ds_id].push(obj, event, callback)
      @listenTo(obj, event, callback)

    heatmap_update : (column_data_source, x_data_range,
          y_data_range,
          x_screen_range, y_screen_range) =>
      data_url = @get('data_url')
      owner_username = @get('owner_username')
      prefix = @get_base().Config.prefix
      url = "#{prefix}/bokeh/data/#{owner_username}#{data_url}"
      x_resolution = x_screen_range.get('end') - x_screen_range.get('start')
      y_resolution = y_screen_range.get('end') - y_screen_range.get('start')
      x_bounds = [x_data_range.get('start'), x_data_range.get('end')]
      y_bounds = [y_data_range.get('start'), y_data_range.get('end')]
      global_x_range = @get('data').global_x_range
      global_y_range = @get('data').global_y_range
      global_offset_x = @get('data').global_offset_x[0]
      global_offset_y = @get('data').global_offset_y[0]
      index_slice = @get('index_slice')
      data_slice = @get('data_slice')
      console.log('executing', x_bounds, y_bounds)
      params = [global_x_range, global_y_range,
        global_offset_x, global_offset_y,
        x_bounds, y_bounds, x_resolution,
        y_resolution, index_slice, data_slice,
        @get('transpose')
      ]
      params = JSON.stringify(params)
      #console.log(y_bounds)
      $.ajax(
        dataType: 'json'
        url : url
        xhrField :
          withCredentials : true
        success : (data) =>
          #hack
          old_data = _.clone(this.get('data'))
          new_data = _.extend(old_data, data)
          column_data_source.set('data', new_data)
        data :
          downsample_function : 'heatmap'
          downsample_parameters : params
      )

  class ServerDataSources extends Backbone.Collection
    model: ServerDataSource
  return {
    "Model": ServerDataSource,
    "Collection": new ServerDataSources()
  }
