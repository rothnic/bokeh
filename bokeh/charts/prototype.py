__author__ = 'Nick'

from blaze import *

db = Data('sqlite:///../../remotedata/lahman2013.sqlite')

from blaze.interactive import InteractiveSymbol
import pandas as pd
from bokeh.plotting import figure, show, output_file
from itertools import cycle

# really need robust color iterators, for hue, brightness, opacity, etc.
color_iter = cycle(['red', 'green', 'blue'])

output_file("charts_proto.html")


# Scatter Builder should handle conversion between table oriented data and direct interface
class ScatterBuilder(object):
    def __init__(self, data, x, y, color, **kwargs):
        if not isinstance(data, InteractiveSymbol):
            data = Data(data)
        self.data = data
        self.x = x
        self.y = y
        self.color = color
        self._figure = figure(**kwargs)

    def build(self):
        color_labels = odo(sort(self.data[self.color].distinct()), pd.Series)
        print color_labels

        # this should be simple looping and overlay
        # with blaze, this should incorporate the vis operations into the network of data operations
        for index, color_label in color_labels.iteritems():

            # Create a query for the specific group
            group = self.data[self.data[self.color] == str(color_label)]

            # Must materialize the data for plotting
            # Many plots will be doing some kind of aggregation here
            # print (compute(group[self.x], self.data))
            x = odo(group[self.x], pd.Series)
            y = odo(group[self.y], pd.Series)

            # directly adds the glyphs via lower level bokeh interface
            self._figure.circle(x=x, y=y, color=next(color_iter))

        show(self._figure)


class Scatter(object):
    def __init__(self, x, y, color):
        pass


if __name__ == '__main__':
    # not the best demo, since scatter doesn't work for big data, but works
    # kinda slow
    sb = ScatterBuilder('sqlite:///../../remotedata/lahman2013.sqlite::Teams', 'yearID', 'Rank', 'name')
    sb.build()

    # you could also do this outside the scope, which makes sense for single charts with small data
    db = Data('sqlite:///../../remotedata/lahman2013.sqlite::Teams')
    df = odo(db, pd.DataFrame)

    sb = ScatterBuilder(df, 'yearID', 'Rank', 'name')
    sb.build()

    # the blaze approach should support manually piecing together simple data, while maintaining the same
    # operations internal to the chart
    yearID = [1, 2, 3, 4, 5]
    Rank = [5, 5, 2, 3, 4]
    team_name = ['b', 'b', 'b', 'c', 'c']
    simple_data = {'yearID': yearID, 'Rank': Rank, 'name': team_name}

    # this works, but doesn't work in blaze
    df = pd.DataFrame(simple_data)
    print df

    # fails right now
    #sb = ScatterBuilder(simple_data, 'yearID', 'Rank', 'name')
    #sb.build()
