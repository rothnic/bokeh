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


class Coord(object):
    x = None
    y = None


class Facet(object):
    """A subset of data."""

    def __init__(self, data, x=None, y=None):

        self.title = None
        self.data = data
        self.x = x
        self.y = y

    def __mul__(self, other):
        return other

    def __div__(self, other):
        return other


class FacetGroup(object):
    """A generic mapping of individual facets into a coordinate system.

    This would typically not be used standalone.
    """

    def __init__(self, data, x=None, y=None):
        self.data = data
        x, y = self._validate_inputs(x, y)
        self.x_labels = self.create_labels(x)
        self.y_labels = self.create_labels(y)
        self.x_facets = self.create_facets(self.x_labels)
        self.y_facets = self.create_facets(self.y_labels)

    def _validate_inputs(self, x, y):
        return self._to_list(x), self._to_list(y)

    @staticmethod
    def _to_list(val):
        if not isinstance(val, list) and val is not None:
            return [val]
        else:
            return val

    @staticmethod
    def unique(vals):
        return sorted(set(vals))

    def create_labels(self, axis):
        """Creates the unique labels for the facets."""

        if not axis:
            return None

        # Can facet by multiple columns per axis, need to collect
        # the unique values for each dimension
        labels = {}
        for dim in axis:
            labels[dim] = self.unique(self.data[dim])
        return labels

    def create_facets(self, labels):

        facets = {}

        if not labels:
            return facets

        for dim, labels in labels.iteritems():

            for label in labels:
                # need to generate x,y coord of facet here
                facets[dim + str(label)] = Facet(data=self.filter(dim, label))

        return facets

    def filter(self, dim, label):
        return self.data[self.data[dim] == label]


class FacetGrid(FacetGroup):
    """Maps individual facets into a grid of plots."""

    @property
    def width(self):
        return max(len(self.x_facets.keys()), 1)

    @property
    def height(self):
        return max(len(self.y_facets.keys()), 1)


def cross(x, y):
    return product(x, y)


def combinations(unique_vals):

    for labels in unique_vals:
        pass

# def facets(data, x=None, y=None):
#     pass
