from __future__ import absolute_import

from ..properties import HasProps, Int, Float, String, Instance, List


class ColumnType(HasProps):
    """Generic column type with associated metadata descriptions."""

    confidence = Float(default=0.0, help="""
    A numerical confidence between 0 and 1 to represent how well the data
    in the column fits the classification type. This is used since there
    can be cases where discrete data looks very much like continuous data
    and vice versa. For example, you would not want to plot a box in a box
    plot for every discrete value if there are hundreds.""")

    def __init__(self, col, **properties):
        super(ColumnType, self).__init__(**properties)
        self.validate(col)
        self.update_props(col)

    def validate(self, col):
        """Performs custom checks on provided column, and sets confidence."""

        raise NotImplementedError('ColumnType must check the data for the validity as that type.')

    def update_props(self, col):
        """Sets metadata properties, if criteria is met."""

        if self.confidence > 0:
            desc = col.describe()
            props = self.properties()

            for k, v in desc.iteritems():
                if k in props:
                    setattr(self, k, v)

    def __str__(self):
        return self.__class__.__name__ + '(%f)' % self.confidence

    def __repr__(self):
        return self.__class__.__name__ + '(%f)' % self.confidence


class ContinuousColumn(ColumnType):
    """All numerical data."""

    count = Float
    mean = Float
    std = Float
    min = Float
    max = Float

    def validate(self, col):
        if col.dtype != object:
            self.confidence = 0.5


class DiscreteColumn(ColumnType):
    """An assessment on the likelihood of being Discrete/Categorical."""

    count = Float(help="""
    The number of values in the column.""")
    unique = Float(help="""
    The number of unique values in the column.""")
    top = String(help="""
    The most frequent discrete value in the column.""")
    freq = Float(help="""
    The count of top, the most frequent discrete value.""")

    def validate(self, col):
        if col.dtype == object or col.dtype == int:
            self.confidence = 0.5


class CategoricalColumn(DiscreteColumn):
    """A special discrete case, which is more likely a facet."""

    categories = List(String)
    max_cats = Int(help="""
    Optional designation for how many categories are too many for plotting
    the column as categorical data.""")

    def validate(self, col):
        super(CategoricalColumn, self).validate(col)
        unique_vals = col.unique()

        # if we have the same number of unique values as values,
        # not a good categorical source
        if len(unique_vals) == len(col):
            self.confidence -= 0.1

        # a high ratio between length of col and unique values is a good indicator
        if (len(col) / len(unique_vals)) > 5:
            self.confidence += 0.1

    def update_props(self, col):
        super(CategoricalColumn, self).update_props(col)
        self.categories = [str(x) for x in col.unique()]


class TimeColumn(DiscreteColumn):
    """Tries to identify columns that contain time or datetime-like data."""

    def validate(self, col):
        if col.is_time_series:
            self.confidence = 1.0


class ConstantColumn(ColumnType):
    """Identifies if a column contains only a single unique value."""

    def validate(self, col):
        if len(col.unique()) == 1:
            self.confidence = 1.0


ColumnTypes = [ContinuousColumn, CategoricalColumn, DiscreteColumn,
               TimeColumn, ConstantColumn]


class ColumnMetadata(HasProps):
    """Generic type for describing any valid type matches for a column."""

    name = String(help="""
    The name of the column on the ColumnDataSource.""")

    types = List(Instance(ColumnType), default=[], help="""
    A list of valid types that match the kind of data contained in the
    column""")

    def __init__(self, **properties):
        col_data = properties.pop('col_data')
        super(ColumnMetadata, self).__init__(**properties)
        self.collect_types(col_data)

    def __str__(self):
        return 'Column[%s]<%s>' % (self.name,
                                   ','.join([str(col_type) for col_type in self.types]))

    def collect_types(self, col_data):

        types = []
        for col_class in ColumnTypes:

            # Create column class for column's data
            md = col_class(col_data)
            if md.confidence > 0:
                types.append(md)

        if len(types) == 0:
            types.append(None)
        else:
            # sort the valid type matches by the confidence
            types = sorted(types, key=lambda the_type: the_type.confidence, reverse=True)

        self.types = types