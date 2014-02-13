import numpy as np
from bokeh.plotting import *
from bokeh.objects import Range1d

N = 100

x = np.linspace(0, 10, N)
y = np.linspace(0, 10, N)
z = np.linspace(0, 20, N)
xx, yy, zz = np.meshgrid(x, y, z)
d = np.sin(xx)*np.cos(yy + zz)

output_server("image")

image(
    image=[d], x=[0], y=[0], dw=[10], dh=[10], palette=["Spectral-11"],
    width=200, height=200,
    x_range = Range1d(start=0, end=10), y_range = Range1d(start=0, end=10),
    tools="pan,wheel_zoom,box_zoom,reset,previewsave", name="image_example"
)
show()  # open a browser
