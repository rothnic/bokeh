__author__ = 'Nick'

import unittest
from ..crossfilter.facets import Facets

class TestFacet(unittest.TestCase):

    def setUp(self):
        from bokeh.sampledata.autompg import autompg
        self.df = autompg
        self.str_list = ['a', 'b', 'c', 'd']
        self.num_list = [1, 4, 2, 3]

    def test_facet_x(self):
        facets = Facets(self.df, x='cyl')
        print(facets.width)
        self.assertEqual(facets.width, 5)


if __name__ == "__main__":
    unittest.main()