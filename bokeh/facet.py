"""
facet (noun) - a face, such as the sides of an object. Frames of frames.
Places frames on its own coordinate system. Splits a coordinate system into a
dimension, defined by the frames.

data.col1 = [1, 2, 3, 4, 5]
data.col2 = ['a', 'a', 'b', 'a', 'c']

facets(data, x='col2') -> [facet('a', a_data, x=1, y=1)]

"""

# ToDo: Address crossing vs. nesting
"""
Crossing generates all possible combinations, even impossible ones.

Nesting only uses the possible combinations. Not sure how to only
collect the possible combinations, except by assuming that only the
possible combinations exist. This could simply be a unique on multiple
columns simultaneously, which will only detect the combinations that exist.
"""

from itertools import product
from bokeh.models.plots import GridPlot
from bokeh.models.sources import ColumnDataSource


class Coord(object):
    x = None
    y = None


class Dimension(object):

    def __init__(self, name):
        self.name = name


class Frame(object):
    """A dimensional context. Represented by N dimensions (dim_1, dim_2, ... dim_N).

    Facet(Frame) -> (label: Coord in Frame, label: Coord in Frame)
    """
    def __init__(self, *dims):
        self.dims = dims
        for dim in self.dims:
            setattr(self, dim, Dimension(name=dim))


class Cartesian(Frame):
    """A 2D frame, where glyphs can be mapped into x, y positions by coordinates."""
    def __init__(self):
        super(Cartesian, self).__init__('x', 'y')


class Facet(object):
    """Represents a subset of data."""

    def __init__(self, dim, value):

        self.title = None
        self.dim = dim
        self.value = value

    def filter(self, data):
        return data[data[self.dim] == self.value]

    def __mul__(self, other):
        return other

    def __div__(self, other):
        return other


class FacetGroup(object):
    """A generic mapping of individual facets into a coordinate system.

    This would typically not be used standalone.
    """

    def __init__(self, data, frame, **dims):
        self.data = data
        self.dims = frame.dims
        dims = self._validate_inputs(**dims)
        self.frame_labels = []
        self.create_frame_labels()
        self.create_facets(**dims)

    def _validate_inputs(self, **dims):
        for k, v in dims.iteritems():
            dims[k] = self._to_list(dims[k])
        return dims

    @staticmethod
    def _to_list(val):
        if not isinstance(val, list) and val is not None:
            return [val]
        else:
            return val

    @staticmethod
    def unique(vals):
        """A way to get the unique values, sorted by default."""
        return sorted(set(vals))

    def create_frame_labels(self):

        for dim in self.dims:
            prop_name = dim + '_labels'
            setattr(self, prop_name, None)
            self.frame_labels.append(prop_name)

    def create_labels(self, **dims):
        """Creates the unique labels for the facets."""

        if not dim:
            return None

        # Can facet by multiple columns per axis, need to collect
        # the unique values for each dimension
        labels = {}
        for name, facet in dims.iteritems():
            labels[dim] = self.unique(self.data[dim])
        return labels

    def create_facets(self, **labels):
        """Returns a dict containing facets for each value."""
        facets = {}

        # return empty dict if we have no labels for this dimension
        if not labels:
            return facets

        # iterate over each dimension/column and its unique values/labels
        for dim, labels in labels.iteritems():

            for label in labels:
                # need to generate x,y coord of facet here
                facets[dim + str(label)] = Facet(dim=dim, value=label)

        return facets

    def filter(self, facets):
        """Filter down to data for intersection of facets."""
        data = self.data

        for facet in facets:
            if not data.empty:
                data = facet.filter(data)

        return data

    def plot(self, plot_func):
        pass


class FacetGrid(FacetGroup):
    """Maps individual facets into a grid of plots."""

    @property
    def width(self):
        return max(len(self.x_facets.keys()), 1)

    @property
    def height(self):
        return max(len(self.y_facets.keys()), 1)

    def plot(self, plot_func):
        """Generates a GridPlot with after running plot_func for each case."""
        grid = []

        # iterate over x and y facets, generating each row as a list of plots
        for x_dim, x_facet in self.x_facets.iteritems():
            row = []
            for y_dim, y_facet in self.y_facets.iteritems():

                # filter the data for both x and y facets
                data = self.filter([x_facet, y_facet])
                data = ColumnDataSource(data=data)

                # append the plot
                row.append(plot_func(data))

            grid.append(row)

        return GridPlot(children=grid)


def cross(x, y):
    return product(x, y)

def combinations(unique_vals):

    for labels in unique_vals:
        pass

# def facets(data, x=None, y=None):
#     pass
