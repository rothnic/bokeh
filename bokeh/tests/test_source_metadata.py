from __future__ import absolute_import

import unittest

from ..models.source_metadata import ColumnMetadata, ColumnType, CategoricalColumn
from ..models.source_metadata import ConstantColumn, ContinuousColumn, DiscreteColumn, TimeColumn
from ..sampledata.autompg import autompg

class TestSourceMetadata(unittest.TestCase):

    def setUp(self):
        unittest.TestCase.setUp(self)
        self.data = autompg
        self.meta = {}
        self.setup_meta()

    def test_col_type_validate(self):
        """Make sure we cannot instantiate ColumnType on its own."""
        self.assertRaises(NotImplementedError, lambda: ColumnType('testcolname'))

    def setup_meta(self):
        """Make sure we can correctly generate ColumnMetadata for each column."""
        meta = {}
        cols = self.data.columns
        for col in cols:
            meta[col] = ColumnMetadata(name=col, col_data=self.data[col])
        self.meta = meta

    def test_col_meta_type(self):
        """Evaluate the types for the column metadata."""

        # cylinder should have highest confidence in categorical type
        cyl = self.meta['cyl']
        cyl_types = cyl.types
        self.assertIsInstance(cyl_types[0], CategoricalColumn)

if __name__ == "__main__":
    unittest.main()