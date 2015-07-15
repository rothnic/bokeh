from __future__ import absolute_import

import unittest

from bokeh.util.dimensions import distinct, cross


class TestDimensions(unittest.TestCase):

    @classmethod
    def setup_class(cls):
        """ setup any state specific to the execution of the given class (which
        usually contains tests).
        """
        cls.str_data = ['a', 'a', 'c', 'd', 'b']
        cls.int_data = [2, 5, 3, 3, 7]

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
