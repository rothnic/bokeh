__author__ = 'Nick'

import unittest
from bokeh.crossfilter.facets import FacetGrid
from bokeh.plotting import figure, output_file, save, show
from bokeh.models.plots import GridPlot


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

    def test_facet_xy_grid(self):
        facets = FacetGrid(self.df, x='cyl', y='yr')

        x = 'mpg'
        y = 'displ'

        def plotter_func(data):
            """A simple plotting function, pre-configured for columns."""
            plot = figure()
            plot.scatter(x=x, y=y, source=data)
            return plot

        grid = facets.plot(plotter_func)
        self.assertIsInstance(grid, GridPlot)
        output_file(filename='test.html')
        show(grid)


if __name__ == "__main__":
    unittest.main()