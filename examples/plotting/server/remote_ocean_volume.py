import numpy as np
from bokeh.plotting import *
from bokeh.objects import Range1d, MouseSlicer
from bokeh.appobject import App

output_server("remote_ocean_slider")
#output_server("image2")
source = RemoteDataSource(data_url="/defaultuser/oceantemperature/big.table/big", 
                          owner_username="defaultuser",
                          index_slice=[None, None, 0],
                          data={'x': [0], 
                                'y': [0], 
                                'global_offset_x' : [0],
                                'global_offset_y' : [0],
                                'global_dw' : [10],
                                'global_dh' : [10],
                                'dw' : [10], 
                                'dh' : [10], 
                                'palette': ["Spectral-256"]
                            }
)

plot = image(
    source=source,
    image="image",
    x="x",
    y="y",
    dw="dw",
    dh="dh",
    width=600,
    height=400,
    palette="palette",
    x_range=Range1d(start=0, end=10), 
    y_range=Range1d(start=0, end=10),
    tools="pan,wheel_zoom,box_zoom,reset,previewsave"
)

slicer = MouseSlicer(remote_data_source=source,
                     max_slice=41,
                     slice_dimension=2)
session().add(slicer)
curplot().tools.append(slicer)
curplot()._dirty = True

app = App(remote_data_source=source,
          image_plot=curplot())
session().add(app)
session().plotcontext.children = [app]
print session().store_all()


# source = RemoteDataSource(data_url="/defaultuser/oceantemperature/big.table/big", 
#                           owner_username="defaultuser",
#                           index_slice=[None, 2000, None],
#                           data={'x': [0], 
#                                 'y': [0], 
#                                 'global_offset_x' : [0],
#                                 'global_offset_y' : [0],
#                                 'global_dw' : [10],
#                                 'global_dh' : [10],
#                                 'dw' : [10], 
#                                 'dh' : [10], 
#                                 'palette': ["Spectral-256"]
#                             }
# )

# image(
#     source=source,
#     image="image",
#     x="x",
#     y="y",
#     dw="dw",
#     dh="dh",
#     width=200,
#     height=600,
#     palette="palette",
#     x_range=Range1d(start=0, end=10), 
#     y_range=Range1d(start=0, end=10),
#     tools="pan,wheel_zoom,box_zoom,reset,previewsave"
# )
