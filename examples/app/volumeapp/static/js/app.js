window.volumeapp = {};
volumeapp = window.volumeapp;
volumeapp.main = function(){
  AppView = Bokeh.ContinuumView.View.extend({
    initialize : function () {
      this.render();
      window.appview = this;
    },
    slide : function(event, ui){
      var slice = Math.round(ui.value);
      var new_slice = [slice, null, null];
      var server_source = this.mget_obj('server_data_source');
      server_source.set('index_slice', new_slice);
    },
    slider_bounds : function(min, max) {
      $('#sliceslider').slider({
        min : min,
        max : max,
        step : (max - min) / 50,
        value : min
      });
    },
    render : function(){
      var model = this.mget_obj('image_plot');
      var view = new model.default_view({model : model});
      var model = this.mget_obj('splat_plot');
      var splatview = new model.default_view({model : model});
      $('#mainimage').append(view.el);
      $('#splatimage').append(splatview.el);      
      $('#sliceslider').slider({
        orientation : "vertical",
        animate : "fast",
        slide : $.proxy(this.slide, this)
      });
      this.slider_bounds(0, 47);
    }
  });
  
  App = Bokeh.HasProperties.extend({
    default_view : AppView,
    type : 'App'
  });

  Apps = Backbone.Collection.extend({
    model : App
  });
  apps = new Apps()
  Bokeh.Collections.register("App", apps)
}
