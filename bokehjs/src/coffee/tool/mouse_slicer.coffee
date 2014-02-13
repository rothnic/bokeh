define [
  "underscore",
  "backbone",
  "./tool",
  "./event_generators",
], (_, Backbone, Tool, EventGenerators) ->

  OnePointWheelEventGenerator = EventGenerators.OnePointWheelEventGenerator

  class MouseSlicerView extends Tool.View

    initialize: (options) ->
      super(options)

    eventGeneratorClass: OnePointWheelEventGenerator
    evgen_options: { buttonText: "MouseSlicer" }
    tool_events: { zoom: "_slice" }

    _slice: (e) ->
      delta = e.originalEvent.wheelDelta
      remote = @mget_obj('remote_data_source')
      if not remote
        return
      if not remote.get('index_slice')
        return
      slice_dimension = @mget('slice_dimension')
      current_slice = remote.get('index_slice')[slice_dimension]
      if delta > 0
        max_val = @mget('max_slice')
        if current_slice + 1 <= max_val
          new_slice = (x for x in current_slice)
          new_slice[slice_dimension] = current_slice + 1
          remote.set('index_slice', new_slice)
          console.log('setting', new_slice)
      else
        if current_slice - 1 >= 0
          new_slice = (x for x in current_slice)
          new_slice[slice_dimension] = current_slice - 1
          remote.set('index_slice', new_slice)
          console.log('setting', new_slice)
      return null

  class MouseSlicer extends Tool.Model
    default_view: MouseSlicerView
    type: "MouseSlicer"

  class MouseSlicers extends Backbone.Collection
    model: MouseSlicer

  return {
    "Model": MouseSlicer
    "Collection": new MouseSlicers(),
    "View": MouseSlicerView,
  }
