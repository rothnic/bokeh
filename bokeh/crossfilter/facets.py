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


class Facet(Coord):

    def __init__(self, data, x=None, y=None):

        self.title = None
        self.data = data
        self.x = x
        self.y = y

    def __mul__(self, other):
        return other


class Facets(object):

    def __init__(self, data, x=None, y=None, facet_func='Grid'):
        self.data = data
        x, y = self._validate_inputs(x, y)
        self.x_labels = self.create_labels(x)
        self.y_labels = self.create_labels(y)
        self.facets = self.create_facets(self.x_labels, self.y_labels)

    def _validate_inputs(self, x, y):
        return self._to_list(x), self._to_list(y)

    def _to_list(self, val):
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

        labels = {}

        for dim in axis:
            labels[dim] = self.unique(self.data[dim])

        return labels

    def create_facets(self, x_labels, y_labels):

        facets = {}

        for dim, labels in x_labels.iteritems():

            for label in labels:
                # need to generate x,y coord of facet here
                facets[dim + str(label)] = Facet(data=self.filter(dim, label))

        return facets

    def filter(self, dim, label):
        return self.data[self.data[dim] == label]

    @property
    def width(self):
        return len(self.facets.keys())

    @property
    def height(self):
        return 1


def cross(x, y):
    return product(x, y)

def combinations(unique_vals):

    for labels in unique_vals:
        pass

# def facets(data, x=None, y=None):
#     pass
