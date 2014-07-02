
define [
  "underscore",
  "backbone",
  "./tool",
], (_, Backbone, Tool) ->

  class ClickToolView extends Tool.View
    initialize: (options) ->
      super(options)

    view_coords: (sx, sy) ->
      [vx, vy] = [
        @plot_view.view_state.sx_to_vx(sx),
        @plot_view.view_state.sy_to_vy(sy)
      ]
      return [vx, vy]

    bind_bokeh_events: () ->

      tool_name = "click_tool"

      @tool_button = $("<button class='bk-toolbar-button'> Click </button>")
      @plot_view.$el.find('.bk-button-bar').append(@tool_button)

      @tool_button.click(=>
        if @active
          @plot_view.eventSink.trigger("clear_active_tool")
        else
          @plot_view.eventSink.trigger("active_tool", tool_name)
        )

      @plot_view.eventSink.on("#{tool_name}:deactivated", =>
        @active=false;
        @tool_button.removeClass('active')
        @div.hide()
      )

      @plot_view.eventSink.on("#{tool_name}:activated", =>
        @active=true;
        @tool_button.addClass('active')
      )

      @plot_view.canvas.bind("click", (e) =>
        if not @active
          return
        offset = $(e.currentTarget).offset()
        left = if offset? then offset.left else 0
        top = if offset? then offset.top else 0
        e.bokehX = e.pageX - left
        e.bokehY = e.pageY - top

        [vx, vy] = @view_coords(e.bokehX, e.bokehY)

        irh = @plot_view.view_state.get( 'inner_range_horizontal')
        irv = @plot_view.view_state.get( 'inner_range_vertical')
        xstart = irh.get('start')
        xend = irh.get('end')
        ystart = irv.get('start')
        yend = irv.get('end')
        if vx < xstart  or vx > xend or vy < ystart or vy > yend
          @div.hide()
          return

        @_select(vx, vy, e)
      )
      @plot_view.canvas_wrapper.css('cursor', 'crosshair')


    _select: (vx, vy, e) ->
      geometry = {
        type: 'point'
        vx: vx
        vy: vy
      }
      x = @plot_view.xmapper.map_from_target(vx)
      y = @plot_view.ymapper.map_from_target(vy)
      datasources = {}
      datasource_selections = {}
      renderers = @mget('renderers')
      for renderer in renderers
        datasource = renderer.get_obj('data_source')
        datasources[datasource.id] = datasource
      for renderer in renderers
        datasource_id = renderer.get_obj('data_source').id
        _.setdefault(datasource_selections, datasource_id, [])
        selected = @plot_view.renderers[renderer.id].hit_test(geometry)
        ds = datasources[datasource_id]

        if selected == null
          continue

        @trigger('clicked', selected, ds)

      return null

  class ClickTool extends Tool.Model
    default_view: ClickToolView
    type: "ClickTool"

    dinitialize: (attrs, options) ->
      super(attrs, options)
      names = @get('names')
      all_renderers = @get_obj('plot').get_obj('renderers')
      renderers = (r for r in all_renderers when r.type == "Glyph")
      if names.length > 0
        renderers = (r for r in renderers when names.indexOf(r.get('name')) >= 0)
      @set('renderers', renderers)

    defaults: () ->
      return _.extend(super(), {
        renderers: []
        names: []
      })

    display_defaults: () ->
      super()

  class ClickTools extends Backbone.Collection
    model: ClickTool

  return {
    "Model": ClickTool,
    "Collection": new ClickTools(),
    "View": ClickToolView,
  }
