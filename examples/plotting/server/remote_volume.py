import numpy as np
from bokeh.plotting import *
from bokeh.objects import Range1d

N = 1000

x = np.linspace(0, 10, N)
y = np.linspace(0, 10, N)
xx, yy = np.meshgrid(x, y)
d = np.sin(xx)*np.cos(yy)

output_server("remote_volume")
#output_server("image2")
source = RemoteDataSource(data_url="/defaultuser/volume.table/volume", 
                          owner_username="defaultuser",
                          index_slice=[None, None, 5],
                          data={'x': [0], 
                                'y': [0], 
                                'global_offset_x' : [0],
                                'global_offset_y' : [0],
                                'global_dw' : [10],
                                'global_dh' : [10],
                                'dw' : [10], 
                                'dh' : [10], 
                                'palette': ["Spectral-11"]
                            }
)

image(
    source=source,
    image="image",
    x="x",
    y="y",
    dw="dw",
    dh="dh",
    width=400,
    height=400,
    palette="palette",
    x_range=Range1d(start=0, end=10), 
    y_range=Range1d(start=0, end=10),
    tools="pan,wheel_zoom,box_zoom,reset,previewsave"
)

source = RemoteDataSource(data_url="/defaultuser/volume.table/volume", 
                          owner_username="defaultuser",
                          index_slice=[None, None, 25],
                          data={'x': [0], 
                                'y': [0], 
                                'global_offset_x' : [0],
                                'global_offset_y' : [0],
                                'global_dw' : [10],
                                'global_dh' : [10],
                                'dw' : [10], 
                                'dh' : [10], 
                                'palette': ["Spectral-11"]
                            }
)

image(
    source=source,
    image="image",
    x="x",
    y="y",
    dw="dw",
    dh="dh",
    width=400,
    height=400,
    palette="palette",
    x_range=Range1d(start=0, end=10), 
    y_range=Range1d(start=0, end=10),
    tools="pan,wheel_zoom,box_zoom,reset,previewsave"
)

