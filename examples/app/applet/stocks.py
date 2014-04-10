import bokeh.server
from bokeh.plotting import line, circle, session, rect
from bokeh.objects import Range1d 
from bokeh.widgetobjects import (VBoxModelForm, HBox, VBox,
                                 BokehApplet, TextInput, PreText, 
                                 Select, Slider)
from bokeh.objects import Plot, ColumnDataSource
from bokeh.plotobject import PlotObject
from bokeh.properties import (Dict, Float, String, Instance)
import numpy as np
import logging
logging.basicConfig(level=logging.DEBUG)

import os
from os.path import join, dirname, splitext
import pandas as pd
data_dir = join(dirname(__file__), "daily")
tickers = os.listdir(data_dir)
tickers = [splitext(x)[0].split("table_")[-1] for x in tickers]

class StockInputModel(VBoxModelForm):
    """Input Widgets, define the fields you want to 
    read from the input here as bokeh properties
    input_specs is a list of dictionary, specifying
    how the kind of input widget you want for each
    property.  the name field must match
    one of the properties, for example here, 
    we use names of offset and scale.  You can
    also specify title, if you want a different
    label in the generated form
    """
    ticker1 = String(default="AAPL")
    ticker2 = String(default="GOOG")
    input_specs = [
        {"widget" : Select,
         "name" : "ticker1",
         "value" : "AAPL",
         "options" : ["AAPL","GOOG","INTC","BRCM","YHOO"]
     },
        {"widget" : Select,
         "name" : "ticker2",
         "value" : "GOOG",
         "options" : ["AAPL","GOOG","INTC","BRCM","YHOO"]
     }
    ]
    
class StockApp(BokehApplet):
    #layout of app
    jsmodel = "VBox"
    
    #text statistics
    pretext = Instance(PreText, has_ref=True)
    
    #plots
    plot = Instance(Plot, has_ref=True)
    line_plot1 = Instance(Plot, has_ref=True)
    line_plot2 = Instance(Plot, has_ref=True)    
    hist1 = Instance(Plot, has_ref=True)
    hist2 = Instance(Plot, has_ref=True)
    
    #datsource
    source = Instance(ColumnDataSource, has_ref=True)
    
    #layout boxes
    mainrow = Instance(HBox, has_ref=True)
    histrow = Instance(HBox, has_ref=True)
    statsbox = Instance(VBox, has_ref=True)

    def __init__(self, *args, **kwargs):
        super(StockApp, self).__init__(*args, **kwargs)
        self._dfs = {}
    def get_data(self, ticker1, ticker2):
        fname = join(data_dir, "table_%s.csv" % ticker1.lower())
        data1 = pd.read_csv(fname, 
                            names=['date', 'foo', 'o', 'h', 'l', 'c', 'v'], 
                            header=False,
                            parse_dates=['date'])
        data1 = data1.set_index('date')
        fname = join(data_dir, "table_%s.csv" % ticker2.lower())        
        data2 = pd.read_csv(fname, 
                            names=['date', 'foo', 'o', 'h', 'l', 'c', 'v'], 
                            header=False,
                            parse_dates=['date'])
        data2 = data2.set_index('date')
        data = pd.DataFrame({ticker1 : data1.c, ticker2 : data2.c})
        data[ticker1 + "_returns"] = data[ticker1].diff()
        data[ticker2 + "_returns"] = data[ticker2].diff()
        data = data.dropna()
        return data
        
    def create(self, session):
        """
        This function is called once, and is responsible for 
        creating all objects (plots, datasources, etc)
        """
        self.mainrow = HBox()
        self.histrow = HBox()
        self.statsbox = VBox()
        
        self.modelform = StockInputModel()
        self.modelform.create_inputs(session)
        ticker1 = self.modelform.ticker1
        ticker2 = self.modelform.ticker2
        self.pretext = PreText(text="")
        self.make_source()
        self.make_plots(ticker1, ticker2)
        self.make_stats()
        self.set_children()
        self.add_all(session)
        
    @property
    def df(self):
        ticker1 = self.modelform.ticker1
        ticker2 = self.modelform.ticker2
        if self._dfs.get((ticker1,ticker2)) is None:
            df = self.get_data(ticker1, ticker2)
            self._dfs[ticker1, ticker2] = df
        return self._dfs[ticker1, ticker2]
    @property
    def selected_df(self):
        pandas_df = self.df
        selected = self.source.selected
        if selected:
            pandas_df = pandas_df.iloc[selected, :]
        return pandas_df

    def make_source(self):
        self.source = ColumnDataSource(data=self.df)
        
    def make_plots(self, ticker1, ticker2):
        self.plot = circle(ticker1 + "_returns", ticker2 + "_returns",
                           size=2,
                           title="%s vs %s" %(ticker1, ticker2),
                           source=self.source,
                           plot_width=400, plot_height=400,
                           tools="pan,wheel_zoom,select",
                           title_text_font_size="10pt",
                           nonselection_alpha=0.02
        )
        self.line_plot1 = circle('date', ticker1, 
                                 title=ticker1,
                                 size=2,
                                 x_axis_type='datetime',
                                 source=self.source,
                                 title_text_font_size="10pt",
                                 plot_width=1000, plot_height=200,
                                 nonselection_alpha=0.02,
                                 tools="pan,wheel_zoom,select",)
        self.line_plot2 = circle("date", ticker2, 
                                 title=ticker2,
                                 size=2,
                                 x_range=self.line_plot1.x_range,
                                 x_axis_type='datetime',
                                 title_text_font_size="10pt",
                                 source=self.source,
                                 plot_width=1000, plot_height=200,
                                 nonselection_alpha=0.02,
                                 tools="pan,wheel_zoom,select",
        )
        self.hist_plots()

    def hist_plots(self):
        ticker1 = self.modelform.ticker1
        ticker2 = self.modelform.ticker2
        
        global_hist, global_bins = np.histogram(self.df[ticker1 + "_returns"], bins=50)
        hist, bins = np.histogram(self.selected_df[ticker1 + "_returns"], bins=50)
        width = 0.7 * (bins[1] - bins[0]) 
        center = (bins[:-1] + bins[1:]) / 2 
        start = global_bins.min()
        end = global_bins.max()
        top = hist.max()
        self.hist1 = rect(center, hist/2.0, width, hist, 
                          title="%s hist" % ticker1,
                          plot_width=500, plot_height=200,
                          tools="",
                          title_text_font_size="10pt",
                          x_range=Range1d(start=start, end=end),
                          y_range=Range1d(start=0, end=top))
        global_hist, global_bins = np.histogram(self.df[ticker2 + "_returns"], bins=50)
        hist, bins = np.histogram(self.selected_df[ticker2 + "_returns"], bins=50)
        width = 0.7 * (bins[1] - bins[0]) 
        center = (bins[:-1] + bins[1:]) / 2 
        start = global_bins.min()
        end = global_bins.max()
        top = hist.max()
        self.hist2 = rect(center, hist/2.0, width, hist,
                          title="%s hist" % ticker2,
                          plot_width=500, plot_height=200,
                          tools="",
                          title_text_font_size="10pt",
                          x_range=Range1d(start=start, end=end),
                          y_range=Range1d(start=0, end=top))
        
    def set_children(self):
        self.children = [self.mainrow, self.histrow, self.line_plot1, self.line_plot2]
        self.mainrow.children = [self.modelform, self.plot, self.statsbox]
        self.histrow.children = [self.hist1, self.hist2]
        self.statsbox.children = [self.pretext]

    def input_change(self, obj, attrname, old, new):
        """
        This function is called whenever the input form changes
        This is responsible for updating the plot, or whatever
        you want.  The signature is 
        obj : the object that changed
        attrname : the attr that changed
        old : old value of attr
        new : new value of attr
        """
        if attrname in ("ticker1", "ticker2"):
            ticker1 = self.modelform.ticker1
            ticker2 = self.modelform.ticker2
            self.make_source()
            self.make_plots(ticker1, ticker2)
            self.set_children()
            
    def setup_events(self):
        super(StockApp, self).setup_events()
        if self.source:
            self.source.on_change('selected', self, 'selection_change')
            
    def make_stats(self):
        stats = self.selected_df.describe()
        self.pretext.text = str(stats)
        
    def selection_change(self, obj, attrname, old, new):
        self.make_stats()
        self.hist_plots()
        self.set_children()
# the following addes "/exampleapp" as a url which renders StockApp
        
bokeh_url = "http://localhost:5006"
StockApp.add_route("/backtest", bokeh_url)


if __name__ == "__main__":

    bokeh.server.run()
