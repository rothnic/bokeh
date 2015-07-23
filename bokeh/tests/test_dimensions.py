from __future__ import absolute_import

import unittest

from bokeh.util.dimensions import distinct, cross, nest
from blaze import Data
import os


class TestDimensions(unittest.TestCase):

    @classmethod
    def setup_class(cls):
        """ setup any state specific to the execution of the given class (which
        usually contains tests).
        """
        cls.str_data = ['a', 'a', 'c', 'd', 'b']
        cls.int_data = [2, 5, 3, 3, 7]

        cls.sex_data = ['M', 'M', 'F', 'M']
        cls.log_data = [True, True, False, False]

        cls.mpg = Data(os.path.abspath('../sampledata/auto-mpg.csv'))

    def test_distinct(self):
        dist_data = distinct(self.str_data)
        assert len(dist_data) == 4

    def test_distinct_sorted(self):
        assert distinct(self.str_data)[1] == 'b'

    def test_cross(self):

        for item in cross(self.str_data, self.int_data):
            # each item in iterable should be a tuple
            assert isinstance(item, tuple)
            # number of values is equal to number of columns provided
            assert len(item) == 2

    def test_nest(self):
        combs = nest(self.mpg, 'cyl', 'origin')
        assert len(combs) == 9
        assert combs[0][0] == 3
