
from itertools import product
from odo import odo
from blaze import sort

def distinct(col):
    return sorted(set(col))


def cross(*cols):
    """Possible combinations.

      cols: iterables

      returns: iterable of tuples, where each tuple is the
      identifier for possible combination of unique values between columns.

      example: ('a', True), ('b', True), ('a', False), ('b', False)
    """
    cols = [distinct(col) for col in cols]
    return product(*cols)


def nest(data, *cols):
    """A one dimensional representation of hierarchical data.

    col 1/col 2 -> a 1d list of plots or visual attributes

    Sex/Pregnant - ('Male', False), ('Female', True), ('Male', False), ('Female', True)
    Nesting produces a hierarchical decomposition of data, with only
    the labels being used that exist:
    ('Male', False), ('Female', True), ('Female', False)

    For faceting, the difference in nesting and crossing is that nesting would produce
    one row of 3 plots, while crossing would produce a 2x2 grid of plots. Both would identify the
    same subsets of data, except crossing would have one additional empty dataset.

    Bar chart with counts per group, using nesting.
    Sex:
        Male: 2
        Female -> Pregnant: 1
        Female -> Not Pregnant: 1

    To nest multiple columns, there must be an order associated with it. We can assume the order
    given, is the order they should be nested.

    The pandas equivalent of nesting is:
    df[cols].drop_duplicates()

    """
    return sorted(odo(data[list(cols)].distinct(), list))


def blend(*cols):
    """Combines multiple variables into one."""
    pass


def color_generator():
    pass


class Dimension(object):
    pass


class Categorical(Dimension):
    """Categorical variables split graphs when applied to aesthetics.


    """


class Transform(object):
    def __init__(self):
        pass