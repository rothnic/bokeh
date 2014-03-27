from __future__ import print_function
import numpy as np
from bokeh.objects import PlotObject, ServerDataSource, Plot
from bokeh.properties import (HasProps, Dict, Enum, Either, Float, Instance, Int,
    List, String, Color, Include, Bool, Tuple, Any)

#from arraymanagement.client import ArrayClient
class App(PlotObject):
    server_data_source = Instance(ServerDataSource, has_ref=True)
    image_plot = Instance(Plot, has_ref=True)
    data_directory = String()
    def __init__(self, *args, **kwargs):
        super(App, self).__init__(*args, **kwargs)
         
