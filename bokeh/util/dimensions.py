
from itertools import product

def distinct(col):
    return sorted(set(col))

def cross(*cols):
    """Possible combinations.

      cols: iterables

      returns: iterable of tuples, where each tuple is the
      identifier for possible combination of unique values between columns
    """
    cols = [distinct(col) for col in cols]
    return product(*cols)


def nest(*cols):
    """Existing combinations."""
    pass


def color_generator():
    pass