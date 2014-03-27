from __future__ import print_function
from os.path import join
import numpy as np
import uuid
from bokeh.objects import (PlotObject, ServerDataSource, Plot, ColumnDataSource)
from bokeh.properties import (HasProps, Dict, Enum, Either, Float, Instance, Int,
                              List, String, Color, Include, Bool, Tuple, Any)
import posixpath
from arraymanagement.client import ArrayClient
import tables

class App(PlotObject):
    server_data_source = Instance(ServerDataSource, has_ref=True)
    splat_data_source = Instance(ServerDataSource, has_ref=True)
    image_plot = Instance(Plot, has_ref=True)
    data_directory = String()
    splat_plot = Instance(Plot, has_ref=True)
    line1 = Instance(Plot, has_ref=True)
    line2 = Instance(Plot, has_ref=True)    
    line_source = Instance(ColumnDataSource, has_ref=True)

    def __init__(self, *args, **kwargs):
        super(App, self).__init__(*args, **kwargs)
        self._client = None

    @property
    def client(self):
        if not self._client:
            self._client = ArrayClient(self.data_directory)
        return self._client
        
    def update(self, **kwargs):
        super(App, self).update(**kwargs)
        if self.server_data_source:
            self.server_data_source.on_change('selection_spec', self, 'selection_change')

    def selection_change(self, obj, attrname, old, new):
        name = "temp-" + str(uuid.uuid4())
        fname = name + ".table"
        fpath = join(self.data_directory, "defaultuser", fname)
        f = tables.File(fpath, "a")
        data = self.client[self.server_data_source.data_url].node[:,:,:]
        print (new)
        xdims = np.round(np.interp(new['image_bounds_x'], [0, 10], [0, 256]))
        ydims = np.round(np.interp(new['image_bounds_y'], [0, 10], [0, 256]))
        xdims.sort()
        ydims.sort()
        xsize = xdims[1] - xdims[0]
        ysize = ydims[1] - ydims[0]
        xtiles = 7
        ytiles = 7
        numslices = 47
        bigarray = np.ones((ytiles * ysize, xtiles * xsize))
        bigarray = np.mean(data) * bigarray
        subdata = data[:, ydims[0]:ydims[1], xdims[0]:xdims[1]]
        for sliceidx in range(numslices):
            yidx = sliceidx % ytiles
            xidx = sliceidx // xtiles
            start_x = xidx * xsize
            end_x = xidx * xsize + xsize
            start_y = yidx * ysize
            end_y = yidx * ysize + ysize
            print (bigarray.shape, start_y, end_y, start_x, end_x)
            
            bigarray[start_y:end_y, start_x:end_x] = subdata[sliceidx,:,:]
        f.createArray("/","splat",bigarray)
        f.close()
        url = posixpath.join("/defaultuser", fname, "splat")
        self.splat_data_source.data_url = url
        
        means = subdata.mean(axis=1).mean(axis=1)
        max = subdata.max(axis=1).sum(axis=1)
        self.line_source.data['avg'] = means.tolist()
        self.line_source.data['max'] = max.tolist()
        self.line_source._dirty = True
        
        
