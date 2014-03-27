from flask import Flask, render_template
from os.path import dirname, join, abspath
import logging
approot = abspath(dirname(dirname(__file__)))
app = Flask('volumeapp')
app.debug = True
from bokeh.plotting import output_server, session, image, line
from bokeh.objects import ServerDataSource, ColumnDataSource
from volumeapp.objects import App
import uuid

def make_plot(force=False):
    docid = str(uuid.uuid4())
    output_server(docid)
    sess = session()
    import numpy as np
    from bokeh.objects import Range1d, ServerDataSource
    source = ServerDataSource(data_url="/defaultuser/image_stack.table/stack", 
                              owner_username="defaultuser",
                              index_slice=[30,None,None],
                              data={'x': [0], 
                                    'y': [0],
                                    'global_x_range' : [0, 10],
                                    'global_y_range' : [0, 10],
                                    'global_offset_x' : [0],
                                    'global_offset_y' : [0],
                                    'dw' : [10], 
                                    'dh' : [10], 
                                    'palette': ["Spectral-11"]
                                }
                          )
    
    splat_source = ServerDataSource(data_url="/defaultuser/splat.table/splat", 
                                    owner_username="defaultuser",
                                    index_slice=[None,None],
                                    data={'x': [0], 
                                          'y': [0],
                                          'global_x_range' : [0, 10],
                                          'global_y_range' : [0, 10],
                                          'global_offset_x' : [0],
                                          'global_offset_y' : [0],
                                          'dw' : [10], 
                                          'dh' : [10], 
                                          'palette': ["Spectral-11"]
                                      }
    )
    
    plot = image(
        source=source,
        image="image",
        x="x",
        y="y",
        dw="dw",
        dh="dh",
        plot_width=500,
        plot_height=500,
        palette="palette",
        x_range=Range1d(start=0, end=10), 
        y_range=Range1d(start=0, end=10),
        tools="pan,wheel_zoom,box_zoom,reset,select"
    )
    splat_plot = image(
        source=splat_source,
        image="image",
        x="x",
        y="y",
        dw="dw",
        dh="dh",
        plot_width=500,
        plot_height=500,
        palette="palette",
        x_range=Range1d(start=0, end=10), 
        y_range=Range1d(start=0, end=10),
        tools="pan,wheel_zoom,box_zoom,reset,select"
    )
    line_source = ColumnDataSource(data={'slice' : range(47), 
                                         'avg' : [], 
                                         'sum' :[], 
                                         'max' : []})
    line1 = line(source=line_source, x='slice', y='avg', plot_width=1000, 
                 plot_height=200)
    line2 = line(source=line_source, x='slice', y='max', plot_width=1000, 
                 plot_height=200)
    app = App(server_data_source=source, image_plot=plot, splat_plot=splat_plot,
              splat_data_source=splat_source,
              line1=line1,
              line2=line2,
              line_source=line_source,
              data_directory="/home/hugoshi/work/bokeh/remotedata")
    source.on_change('selection_spec', app, 'selection_change')
    source._dirty = True
    sess.plotcontext.children = [app]
    sess.plotcontext._dirty = True
    
    sess.add(app)
    print (sess.store_all())
    
    return docid
        
@app.route("/app")
def main():
    import logging
    logging.basicConfig(level=logging.DEBUG)
    docid = make_plot(force=True)
    return render_template('page.html', docid=docid)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=5050)
