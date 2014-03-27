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
      var imagemodel = this.mget_obj('image_plot');
      var view = new imagemodel.default_view({model : imagemodel});
      this.imageview = view;
      var model = this.mget_obj('splat_plot');
      var splatview = new model.default_view({model : model});
      var model = this.mget_obj('line1');
      var line1view = new model.default_view({model : model});
      var model = this.mget_obj('line2');
      var line2view = new model.default_view({model : model});
      $('#mainimage').append(view.el);
      $('#splatimage').append(splatview.el);      
      $('#subplot1').append(line1view.el);
      $('#subplot2').append(line2view.el);      
      $('#sliceslider').slider({
        orientation : "vertical",
        animate : "fast",
        slide : $.proxy(this.slide, this)
      });
      this.slider_bounds(0, 47);
      boxtool = _.filter(imagemodel.get_obj('tools'), 
                         function(x){return x.type == 'BoxSelectTool'})[0]
      boxtoolview = this.imageview.tools[boxtool.id]
      $(document).on('keydown', function(e){
        if (e.keyCode == 38 ){ //up
          boxtoolview.yrange[0] = boxtoolview.yrange[0] + 5;
          boxtoolview.yrange[1] = boxtoolview.yrange[1] + 5;
          boxtoolview.trigger('boxselect', boxtoolview.xrange, boxtoolview.yrange);
          boxtoolview._select_data();
          e.preventDefault();
          return false;
        }else if (e.keyCode == 40){ //down
          boxtoolview.yrange[0] = boxtoolview.yrange[0] - 5;
          boxtoolview.yrange[1] = boxtoolview.yrange[1] - 5;
          boxtoolview.trigger('boxselect', boxtoolview.xrange, boxtoolview.yrange);
          boxtoolview._select_data();
          e.preventDefault();
          return false;
        }else if (e.keyCode == 37){ //left
          boxtoolview.xrange[0] = boxtoolview.xrange[0] - 5;
          boxtoolview.xrange[1] = boxtoolview.xrange[1] - 5;
          boxtoolview.trigger('boxselect', boxtoolview.xrange, boxtoolview.yrange);
          boxtoolview._select_data();
          e.preventDefault();
          return false;
          
        }else if (e.keyCode == 39){ //right
          boxtoolview.xrange[0] = boxtoolview.xrange[0] + 5;
          boxtoolview.xrange[1] = boxtoolview.xrange[1] + 5;
          boxtoolview.trigger('boxselect', boxtoolview.xrange, boxtoolview.yrange);
          boxtoolview._select_data();
          e.preventDefault();
          return false;
        }
        
        
      });
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
