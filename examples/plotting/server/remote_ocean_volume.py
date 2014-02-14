import numpy as np
from bokeh.plotting import *
from bokeh.objects import Range1d, MouseSlicer
from bokeh.appobject import App
#-90-90
#-180:180
output_server("remote_ocean_slider", url="http://localhost:5007/")
#output_server("image2")
long_range=Range1d(start=-180, end=180)
lat_range=Range1d(start=-90, end=90)
time_range = Range1d(start=2012, end=2014)

source = RemoteDataSource(data_url="/defaultuser/oceantemperature/big4.table/big", 
                          owner_username="defaultuser",
                          index_slice=[None, None, 0],
                          data={'x': [0], 
                                'y': [0], 
                                'global_offset_x' : [0],
                                'global_offset_y' : [0],
                                'global_x_range' : [-180, 180],
                                'global_y_range' : [-90, 90],
                                'dw' : [10], 
                                'dh' : [10], 
                                'palette': ["Spectral-256"]
                            }
)

main_plot = image(
    source=source,
    image="image",
    x="x",
    y="y",
    dw="dw",
    dh="dh",
    width=600,
    height=400,
    x_range=long_range,
    y_range=lat_range,
    palette="palette",
    tools="pan,wheel_zoom,box_zoom,reset,previewsave"
)

vert_source = RemoteDataSource(data_url="/defaultuser/oceantemperature/big4.table/big", 
                               owner_username="defaultuser",
                               index_slice=[None, 0, None],
                               data={'x': [0], 
                                     'y': [0], 
                                     'global_offset_x' : [0],
                                     'global_offset_y' : [0],
                                     'global_x_range' : [2012, 2014],
                                     'global_y_range' : [-90, 90],
                                     'dw' : [10], 
                                     'dh' : [10], 
                                     'palette': ["Spectral-256"]
                                 }
)

vert_plot = image(
    source=vert_source,
    image="image",
    x="x",
    y="y",
    dw="dw",
    dh="dh",
    width=300,
    height=400,
    palette="palette",
    x_range=time_range,
    y_range=lat_range,
    tools="pan"
)


horiz_source = RemoteDataSource(data_url="/defaultuser/oceantemperature/big4.table/big", 
                                owner_username="defaultuser",
                                index_slice=[0, None, None],
                                transpose=True,
                                data={'x': [0], 
                                      'y': [0],
                                      'global_y_range' : [2012, 2014],
                                      'global_x_range' : [-180, 180],
                                      'global_offset_x' : [0],
                                      'global_offset_y' : [0],
                                      'dw' : [10], 
                                      'dh' : [10], 
                                      'palette': ["Spectral-256"]
                                  }
)

horiz_plot = image(
    source=horiz_source,
    image="image",
    x="x",
    y="y",
    dw="dw",
    dh="dh",
    width=600,
    height=300,
    palette="palette",
    x_range=long_range,
    y_range=time_range,
    tools="pan"
)

app = App(remote_data_source=source,
          vert_source=vert_source,
          horiz_source=horiz_source,
          image_plot=main_plot,
          vert_plot=vert_plot,
          horiz_plot=horiz_plot
)
session().add(app)
session().plotcontext.children = [app]
print session().store_all()

