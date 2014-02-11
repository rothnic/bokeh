import scipy
import scipy.misc
import numpy as np
def downsample(image, image_x_axis, image_y_axis,
               x_bounds, y_bounds, x_resolution, y_resolution):
    x_bounds = np.searchsorted(image_x_axis, x_bounds)
    y_bounds = np.searchsorted(image_y_axis, y_bounds)
    subset = image[x_bounds[0]:x_bounds[1],
                   y_bounds[0]:y_bounds[1]]
    return scipy.misc.imresize(image, (x_resolution, y_resolution),
                               interp='bicubic')
                        
