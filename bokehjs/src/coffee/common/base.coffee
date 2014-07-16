define (require) ->

  # add some useful functions to underscore
  require("common/custom").monkey_patch()

  Config = {}
  url = window.location.href
  if url.indexOf('/bokeh') > 0
    Config.prefix = url.slice(0, url.indexOf('/bokeh')) + "/" #keep trailing slash
  else
    Config.prefix = '/'
  console.debug('setting prefix to', Config.prefix)

  locations =
    Plot:                      -> require('common/plot')
    GMapPlot:                  -> require('common/gmap_plot')
    GridPlot:                  -> require('common/grid_plot')
    PlotContext:               -> require('common/plot_context')
    PlotList:                  -> require('common/plot_context')

    DataFactorRange:           -> require('range/data_factor_range')
    DataRange1d:               -> require('range/data_range1d')
    FactorRange:               -> require('range/factor_range')
    Range1d:                   -> require('range/range1d')

    Glyph:                     -> require('renderer/glyph/glyph_factory')
    LinearAxis:                -> require('renderer/guide/linear_axis')
    LogAxis:                   -> require('renderer/guide/log_axis')
    CategoricalAxis:           -> require('renderer/guide/categorical_axis')
    DatetimeAxis:              -> require('renderer/guide/datetime_axis')
    Grid:                      -> require('renderer/guide/grid')
    Legend:                    -> require('renderer/annotation/legend')
    BoxSelection:              -> require('renderer/overlay/box_selection')

    ColumnDataSource:          -> require('source/column_data_source')
    ServerDataSource:          -> require('source/server_data_source')

    AbstractTicker:            -> require('ticking/abstract_ticker')
    AdaptiveTicker:            -> require('ticking/adaptive_ticker')
    BasicTicker:               -> require('ticking/basic_ticker')
    BasicTickFormatter:        -> require('ticking/basic_tick_formatter')
    LogTicker:                 -> require('ticking/log_ticker')
    LogTickFormatter:          -> require('ticking/log_tick_formatter')
    CategoricalTicker:         -> require('ticking/categorical_ticker')
    CategoricalTickFormatter:  -> require('ticking/categorical_tick_formatter')
    CompositeTicker:           -> require('ticking/composite_ticker')
    DatetimeTicker:            -> require('ticking/datetime_ticker')
    DatetimeTickFormatter:     -> require('ticking/datetime_tick_formatter')
    DaysTicker:                -> require('ticking/days_ticker')
    MonthsTicker:              -> require('ticking/months_ticker')
    SingleIntervalTicker:      -> require('ticking/single_interval_ticker')
    YearsTicker:               -> require('ticking/years_ticker')

    PanTool:                   -> require('tool/pan_tool')
    WheelZoomTool:             -> require('tool/wheel_zoom_tool')
    ResizeTool:                -> require('tool/resize_tool')
    ClickTool:                 -> require('tool/click_tool')
    CrosshairTool:             -> require('tool/crosshair_tool')
    BoxSelectTool:             -> require('tool/box_select_tool')
    BoxZoomTool:               -> require('tool/box_zoom_tool')
    HoverTool:                 -> require('tool/hover_tool')
    DataRangeBoxSelectTool:    -> require('tool/data_range_box_select_tool')
    PreviewSaveTool:           -> require('tool/preview_save_tool')
    EmbedTool:                 -> require('tool/embed_tool')
    ResetTool:                 -> require('tool/reset_tool')
    ObjectExplorerTool:        -> require('tool/object_explorer_tool')

    DataSlider:                -> require('widget/data_slider')
    DataTable:                 -> require('widget/data_table')
    HandsonTable:              -> require('widget/handson_table')
    TableColumn:               -> require('widget/table_column')
    PivotTable:                -> require('widget/pivot_table')
    ObjectExplorer:            -> require('widget/object_explorer')

    IPythonRemoteData:         -> require('widget/pandas/ipython_remote_data')
    PandasPivotTable:          -> require('widget/pandas/pandas_pivot_table')
    PandasPlotSource:          -> require('widget/pandas/pandas_plot_source')
    Paragraph:                 -> require('widget/paragraph')
    HBox:                      -> require('widget/hbox')
    VBox:                      -> require('widget/vbox')
    VBoxModelForm:             -> require('widget/vboxmodelform')
    TextInput:                 -> require('widget/textinput')
    PreText:                   -> require('widget/pretext')
    Select:                    -> require('widget/selectbox')
    Slider:                    -> require('widget/slider')
    CrossFilter:               -> require('widget/crossfilter')
    MultiSelect:               -> require('widget/multiselect')
    DateRangeSlider:           -> require('widget/date_range_slider')
    DatePicker:                -> require('widget/date_picker')
    Panel:                     -> require('widget/panel')
    Tabs:                      -> require('widget/tabs')
    Dialog:                    -> require('widget/dialog')

    Const:                     -> require('transforms/const')
    Count:                     -> require('transforms/count')
    Cuberoot:                  -> require('transforms/cuberoot')
    Id:                        -> require('transforms/id')
    Interpolate:               -> require('transforms/interpolate')
    Seq:                       -> require('transforms/seq')
    Spread:                    -> require('transforms/spread')

  module_cache = {}
  collection_overrides = {}

  Collections = (typename) ->
    if collection_overrides[typename]
      return collection_overrides[typename]

    module_loader = locations[typename]

    if not module_loader?
      throw new Error("common/base: unknown collection '#{typename}'")

    module = module_cache[typename]

    if not module?
      module = require(typename)

      if module?
          module_cache[typename] = module
      else
          throw new Error("common/base: improperly implemented collection: #{typename}")

    return module.Collection

  Collections.register = (name, collection) ->
    collection_overrides[name] = collection

  return {
    collection_overrides: collection_overrides # for testing only
    mod_cache: module_cache # for testing only
    locations: locations
    Collections: Collections
    Config: Config
  }
