from .objects import PlotObject, RemoteDataSource, Plot
from .properties import (HasProps, MetaHasProps, Any, Dict, Enum,
        Either, Float, Instance, Int, List, String, Color, DashPattern, Percent,
        Size, LineProps, FillProps, TextProps, Include, Bool)

class App(PlotObject):
    remote_data_source = Instance(RemoteDataSource, has_ref=True)
    image_plot = Instance(Plot, has_ref=True)
    
