__author__ = 'Nick'

import unittest
from ..crossfilter.facets import FacetGrid


class TestFacet(unittest.TestCase):

    def setUp(self):
        from bokeh.sampledata.autompg import autompg
        self.df = autompg
        self.str_list = ['a', 'b', 'c', 'd']
        self.num_list = [1, 4, 2, 3]

    def test_facet_x(self):
        facets = FacetGrid(self.df, x='cyl')
        print(facets.width)
        self.assertEqual(facets.width, 5)

    def test_temp(self):
        x = True
        self.assertEqual(x, True)


if __name__ == "__main__":
    unittest.main()