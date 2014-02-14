define [
  "common/plot_widget",
  "common/has_parent",
  "common/continuum_view",
  "./app_template",
  "jquery_ui/slider",
], (PlotWidget, HasParent, ContinuumView, app_template, slider) ->

  class AppView extends ContinuumView.View
    template : app_template
    initialize : (options) ->
      super(options)
      @plot = @mget_obj('image_plot')
      @plot_view = new @plot.default_view('model' : @plot)
      @vert_plot = @mget_obj('vert_plot')
      @vert_plot_view = new @plot.default_view('model' : @vert_plot)
      @horiz_plot = @mget_obj('horiz_plot')
      @horiz_plot_view = new @plot.default_view('model' : @horiz_plot)
      @render()
      @listenTo(@plot_view.y_range, 'change', @auto_lat_slider_bounds)
      @listenTo(@plot_view.x_range, 'change', @auto_long_slider_bounds)
      return @

    time_slider_bounds : (min, max) ->
      @$el.find(".app_slider").slider(
        min: min
        max: max
        step: (max - min) / 50.0 ,
        value: min
      )
    lat_slider_bounds : (min, max) ->
      @$el.find(".vert_slider").slider(
        min: min
        max: max
        step: (max - min) / 50.0 ,
        value: (min + max)/2
      )
    long_slider_bounds : (min, max) ->
      @$el.find(".horiz_slider").slider(
        min: min
        max: max
        step: (max - min) / 50.0 ,
        value: (min + max)/2
      )
    auto_long_slider_bounds : () =>
      end = @plot_view.x_range.get('end')
      start = @plot_view.x_range.get('start')
      remote = @mget_obj('remote_data_source')
      global_x_range = remote.get('data').global_x_range
      global_start = global_x_range[0]
      global_end = global_x_range[1]
      min = @long_slice_max * (start - global_start) / (global_end - global_start)
      max = @long_slice_max * (end - global_start) / (global_end - global_start)
      console.log('long slider bonds', min, max)
      @long_slider_bounds(min, max)
      @long_slide((min + max)/2)

    auto_lat_slider_bounds : () =>
      end = @plot_view.y_range.get('end')
      start = @plot_view.y_range.get('start')
      remote = @mget_obj('remote_data_source')
      global_y_range = remote.get('data').global_y_range
      global_start = global_y_range[0]
      global_end = global_y_range[1]
      min = @lat_slice_max * (start - global_start) / (global_end - global_start)
      max = @lat_slice_max * (end - global_start) / (global_end - global_start)
      console.log('lat slider bonds', min, max)
      @lat_slider_bounds(min, max)
      @lat_slide((min+ max)/2)
    lat_slide :  (value) ->
        remote = @mget_obj('horiz_source')
        current_slice = remote.get('index_slice')
        new_slice = (x for x in current_slice)
        new_slice[0] = Math.round(value)
        remote.set('index_slice', new_slice)

    long_slide : (value) ->
        remote = @mget_obj('vert_source')
        current_slice = remote.get('index_slice')
        new_slice = (x for x in current_slice)
        new_slice[1] = Math.round(value)
        remote.set('index_slice', new_slice)

    render : () ->
      super()
      @plot_view.$el.detach()
      @$el.html('')
      @$el.html(@template())
      @$(".image_plot").append(@plot_view.$el)
      @$(".vert_plot").append(@vert_plot_view.$el)
      @$(".horiz_plot").append(@horiz_plot_view.$el)
      @time_slice_max = 93
      @time_slice_min = 0
      @lat_slice_max = 4095
      @lat_slice_min = 0
      @long_slice_max = 8191
      @long_slice_min = 0
      @$el.find(".app_slider").slider(
        orientation: "vertical",
        animate: "fast",
        slide: ( event, ui ) =>
          remote = @mget_obj('remote_data_source')
          current_slice = remote.get('index_slice')
          new_slice = (x for x in current_slice)
          new_slice[2] = Math.round(ui.value)
          remote.set('index_slice', new_slice)
      )
      @time_slider_bounds(@time_slice_min, @time_slice_max)
      @$el.find(".vert_slider").slider(
        orientation: "vertical",
        animate: "fast",
        slide: (event, ui) => @lat_slide(ui.value)
      )
      #@lat_slider_bounds(@lat_slice_min, @lat_slice_max)
      @auto_lat_slider_bounds()
      @$el.find(".horiz_slider").slider(
        orientation: "horizontal",
        animate: "fast",
        slide: (event, ui) => @long_slide(ui.value)
      )
      @long_slider_bounds(@long_slice_min, @long_slice_max)

  class App extends HasParent
    type : "App"
    default_view : AppView

  class Apps extends Backbone.Collection
    model: App

  return {
    "Model": App
    "Collection": new Apps()
  }
