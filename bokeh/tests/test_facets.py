__author__ = 'Nick'

import unittest
from ..crossfilter.facets import FacetGrid, Facet


class TestFacet(unittest.TestCase):

    def setUp(self):
        from bokeh.sampledata.autompg import autompg
        self.df = autompg
        self.str_list = ['a', 'b', 'c', 'd', 'b']
        self.num_list = [1, 4, 2, 3, 2]

    def test_facet_x(self):
        facets = FacetGrid(self.df, x='cyl')
        self.assertEqual(facets.width, 5)
        self.assertEqual(facets.height, 1)

    # def test_mult(self):
    #     facet_cyl = Facet(self.df, x='cyl')
    #     facet_cyl2 = Facet(self.df, x='cyl')
    #     facet_cyl = facet_cyl * facet_cyl2
    #     x = len(facet_cyl)

    def test_facet_y(self):
        facets = FacetGrid(self.df, y='cyl')
        self.assertEqual(facets.height, 5)
        self.assertEqual(facets.width, 1)

    def test_facet_xy(self):
        """Evaluates shape of grid from faceting."""
        facets = FacetGrid(self.df, x='cyl', y='yr')
        self.assertEqual(facets.width, 5)
        self.assertEqual(facets.height, 13)

if __name__ == "__main__":
    unittest.main()