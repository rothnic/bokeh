console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "9bcedc2a-5bcb-4749-b32a-f77e5ed8f125", "dimension": 1}, "type": "LinearAxis", "id": "9bcedc2a-5bcb-4749-b32a-f77e5ed8f125"}, {"attributes": {"plot": {"type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, "id": "1862c05a-4e91-44ea-9ddd-ad17a0358383", "doc": null}, "type": "ResizeTool", "id": "1862c05a-4e91-44ea-9ddd-ad17a0358383"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "8a7fb1f4-89c0-4e91-949e-c09c34ca2fa0"}, {"type": "DataRange1d", "id": "55c18e13-d8cd-4565-b458-972d18177116"}], "dimensions": ["width", "height"], "id": "8d493949-1615-4221-8926-888951b325e1"}, "type": "ZoomTool", "id": "8d493949-1615-4221-8926-888951b325e1"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "7b945a21-2cfe-42d1-aa61-6062e9cdf9af", "dimension": 0}, "type": "LinearAxis", "id": "7b945a21-2cfe-42d1-aa61-6062e9cdf9af"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "bc8a1ccf-8787-45fe-95f2-aeeb3315af65"}, "doc": null, "id": "84fb345d-be5c-4e07-99b3-8bf1b216b4f1", "xdata_range": {"type": "DataRange1d", "id": "08efef43-05bf-4272-aac2-ace6f0db6c38"}, "ydata_range": {"type": "DataRange1d", "id": "30ef128e-83bd-4c2a-b94e-acf83d30fb10"}, "glyphspec": {"line_color": {"value": "green"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "green"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "square", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "84fb345d-be5c-4e07-99b3-8bf1b216b4f1"}, {"attributes": {"plot": {"type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, "doc": null, "dimension": 1, "id": "dc5b734b-9ec7-4c07-9320-41785214643b"}, "type": "Grid", "id": "dc5b734b-9ec7-4c07-9320-41785214643b"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "2b6cb520-1c3e-4d58-8fbf-7ef1c326f160"}, {"type": "DataRange1d", "id": "e6eb9b03-8f88-4207-bd87-e58a4b8df611"}], "dimensions": ["width", "height"], "id": "463f0d4f-ad49-413e-af13-d34d130a3cee"}, "type": "ZoomTool", "id": "463f0d4f-ad49-413e-af13-d34d130a3cee"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "acef4325-cb81-4a28-acf0-5070b34dc607"}, "columns": ["x"]}], "id": "2b6cb520-1c3e-4d58-8fbf-7ef1c326f160", "doc": null}, "type": "DataRange1d", "id": "2b6cb520-1c3e-4d58-8fbf-7ef1c326f160"}, {"attributes": {"plot": {"type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, "id": "82c13939-ec1a-4c3c-a273-7a1236d437c5", "doc": null}, "type": "ResizeTool", "id": "82c13939-ec1a-4c3c-a273-7a1236d437c5"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 0, "id": "f5a36c9f-18b2-4788-8b6b-46de80db4c1c"}, "type": "Grid", "id": "f5a36c9f-18b2-4788-8b6b-46de80db4c1c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "acef4325-cb81-4a28-acf0-5070b34dc607"}, "doc": null, "id": "b85a70e6-441f-4242-820d-cd682065e0b4", "xdata_range": {"type": "DataRange1d", "id": "2b6cb520-1c3e-4d58-8fbf-7ef1c326f160"}, "ydata_range": {"type": "DataRange1d", "id": "e6eb9b03-8f88-4207-bd87-e58a4b8df611"}, "glyphspec": {"line_color": {"value": "blue"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "blue"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "square", "name": "scatter_example"}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "b85a70e6-441f-4242-820d-cd682065e0b4"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0c00de29-5075-4b1a-8e8a-6c74618cf310"}, "columns": ["x"]}], "id": "8a7fb1f4-89c0-4e91-949e-c09c34ca2fa0", "doc": null}, "type": "DataRange1d", "id": "8a7fb1f4-89c0-4e91-949e-c09c34ca2fa0"}, {"attributes": {"plot": {"type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, "id": "f61ede17-0fd6-4d93-b6ec-5b0f30e8c74f", "doc": null}, "type": "ResizeTool", "id": "f61ede17-0fd6-4d93-b6ec-5b0f30e8c74f"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, {"type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, {"type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, {"type": "Plot", "id": "scatter_example"}], "id": "50d80cbe-c3d5-4d26-97b2-ee70fd39c395"}, "type": "PlotContext", "id": "50d80cbe-c3d5-4d26-97b2-ee70fd39c395"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "bc8a1ccf-8787-45fe-95f2-aeeb3315af65"}, "type": "ColumnDataSource", "id": "bc8a1ccf-8787-45fe-95f2-aeeb3315af65"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "5991235c-5999-4823-ba6c-7b28db359128"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "f0a8fd05-c593-4aa9-8a2b-d4b261d26cf2"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "f5a8cee2-d0c7-417c-b254-18c70d2b9000"}, {"type": "LinearAxis", "id": "7160c0b2-4081-4735-8d45-2a0e459ed256"}, {"type": "Grid", "id": "88f194d3-f652-4d10-bbaa-c3c176bf0616"}, {"type": "Grid", "id": "7508901e-0d01-4efa-a7ee-e35cfe3e898e"}, {"type": "GlyphRenderer", "id": "654a5cb4-077e-4350-84dc-08da1b01e326"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3", "tools": [{"type": "PanTool", "id": "6fa1ba1b-5374-4977-aca8-6155517e9acf"}, {"type": "ZoomTool", "id": "e5652352-d1a7-440d-8ee0-96f24e2c1aff"}, {"type": "ResizeTool", "id": "f61ede17-0fd6-4d93-b6ec-5b0f30e8c74f"}], "canvas_width": 600}, "type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "08efef43-05bf-4272-aac2-ace6f0db6c38"}, {"type": "DataRange1d", "id": "30ef128e-83bd-4c2a-b94e-acf83d30fb10"}], "dimensions": ["width", "height"], "doc": null, "id": "58af2a05-f496-405f-826e-0f5629e3c8df"}, "type": "PanTool", "id": "58af2a05-f496-405f-826e-0f5629e3c8df"}, {"attributes": {"plot": {"type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, "location": "min", "bounds": "auto", "doc": null, "id": "250cbfea-c48a-49b9-9cbb-6a7726426702", "dimension": 1}, "type": "LinearAxis", "id": "250cbfea-c48a-49b9-9cbb-6a7726426702"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "08247956-2804-43be-ba1a-962f28b9c9ea"}, "type": "ColumnDataSource", "id": "08247956-2804-43be-ba1a-962f28b9c9ea"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0c00de29-5075-4b1a-8e8a-6c74618cf310"}, "doc": null, "id": "ddeaff0b-1032-47d6-b1f0-162837fd9321", "xdata_range": {"type": "DataRange1d", "id": "8a7fb1f4-89c0-4e91-949e-c09c34ca2fa0"}, "ydata_range": {"type": "DataRange1d", "id": "55c18e13-d8cd-4565-b458-972d18177116"}, "glyphspec": {"line_color": {"value": "red"}, "fill_color": {"value": "red"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "red"}, "angle_units": "deg", "fill_color": {"value": "red"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "ddeaff0b-1032-47d6-b1f0-162837fd9321"}, {"attributes": {"plot": {"type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, "doc": null, "dimension": 0, "id": "95ef0e23-9d09-4563-8ad1-8deabafff965"}, "type": "Grid", "id": "95ef0e23-9d09-4563-8ad1-8deabafff965"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 1, "id": "f3ca69e6-a8fd-4e66-a05a-aa3bc89160f6"}, "type": "Grid", "id": "f3ca69e6-a8fd-4e66-a05a-aa3bc89160f6"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "2b6cb520-1c3e-4d58-8fbf-7ef1c326f160"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "e6eb9b03-8f88-4207-bd87-e58a4b8df611"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "7b945a21-2cfe-42d1-aa61-6062e9cdf9af"}, {"type": "LinearAxis", "id": "9bcedc2a-5bcb-4749-b32a-f77e5ed8f125"}, {"type": "Grid", "id": "f5a36c9f-18b2-4788-8b6b-46de80db4c1c"}, {"type": "Grid", "id": "f3ca69e6-a8fd-4e66-a05a-aa3bc89160f6"}, {"type": "GlyphRenderer", "id": "b85a70e6-441f-4242-820d-cd682065e0b4"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "scatter_example", "tools": [{"type": "PanTool", "id": "32e8c527-ed8a-41ae-ba65-22bf928de254"}, {"type": "ZoomTool", "id": "463f0d4f-ad49-413e-af13-d34d130a3cee"}, {"type": "ResizeTool", "id": "d7475810-4d05-4438-a6bc-c1e474eae82e"}], "canvas_width": 600}, "type": "Plot", "id": "scatter_example"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "0c00de29-5075-4b1a-8e8a-6c74618cf310"}, "type": "ColumnDataSource", "id": "0c00de29-5075-4b1a-8e8a-6c74618cf310"}, {"attributes": {"plot": {"type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, "doc": null, "dimension": 1, "id": "7508901e-0d01-4efa-a7ee-e35cfe3e898e"}, "type": "Grid", "id": "7508901e-0d01-4efa-a7ee-e35cfe3e898e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "acef4325-cb81-4a28-acf0-5070b34dc607"}, "columns": ["y"]}], "id": "e6eb9b03-8f88-4207-bd87-e58a4b8df611", "doc": null}, "type": "DataRange1d", "id": "e6eb9b03-8f88-4207-bd87-e58a4b8df611"}, {"attributes": {"plot": {"type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, "location": "min", "bounds": "auto", "doc": null, "id": "f5a8cee2-d0c7-417c-b254-18c70d2b9000", "dimension": 0}, "type": "LinearAxis", "id": "f5a8cee2-d0c7-417c-b254-18c70d2b9000"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0c00de29-5075-4b1a-8e8a-6c74618cf310"}, "columns": ["y"]}], "id": "55c18e13-d8cd-4565-b458-972d18177116", "doc": null}, "type": "DataRange1d", "id": "55c18e13-d8cd-4565-b458-972d18177116"}, {"attributes": {"plot": {"type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, "location": "min", "bounds": "auto", "doc": null, "id": "7f2490a7-3c53-4753-b0e1-5a147f2c4c19", "dimension": 0}, "type": "LinearAxis", "id": "7f2490a7-3c53-4753-b0e1-5a147f2c4c19"}, {"attributes": {"plot": {"type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, "location": "min", "bounds": "auto", "doc": null, "id": "7160c0b2-4081-4735-8d45-2a0e459ed256", "dimension": 1}, "type": "LinearAxis", "id": "7160c0b2-4081-4735-8d45-2a0e459ed256"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "8a7fb1f4-89c0-4e91-949e-c09c34ca2fa0"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "55c18e13-d8cd-4565-b458-972d18177116"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "50e04fa1-316d-4441-84a4-b791099eaf8a"}, {"type": "LinearAxis", "id": "250cbfea-c48a-49b9-9cbb-6a7726426702"}, {"type": "Grid", "id": "5278215a-fe8e-43df-ac08-0def22a84c11"}, {"type": "Grid", "id": "dc5b734b-9ec7-4c07-9320-41785214643b"}, {"type": "GlyphRenderer", "id": "ddeaff0b-1032-47d6-b1f0-162837fd9321"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c", "tools": [{"type": "PanTool", "id": "d0b1c08a-a72e-4333-90c0-45d9c3835ee2"}, {"type": "ZoomTool", "id": "8d493949-1615-4221-8926-888951b325e1"}, {"type": "ResizeTool", "id": "1862c05a-4e91-44ea-9ddd-ad17a0358383"}], "canvas_width": 600}, "type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "2b6cb520-1c3e-4d58-8fbf-7ef1c326f160"}, {"type": "DataRange1d", "id": "e6eb9b03-8f88-4207-bd87-e58a4b8df611"}], "dimensions": ["width", "height"], "doc": null, "id": "32e8c527-ed8a-41ae-ba65-22bf928de254"}, "type": "PanTool", "id": "32e8c527-ed8a-41ae-ba65-22bf928de254"}, {"attributes": {"plot": {"type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, "location": "min", "bounds": "auto", "doc": null, "id": "6d1b6735-1169-40db-a224-bd8793281184", "dimension": 1}, "type": "LinearAxis", "id": "6d1b6735-1169-40db-a224-bd8793281184"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "08247956-2804-43be-ba1a-962f28b9c9ea"}, "columns": ["y"]}], "id": "f0a8fd05-c593-4aa9-8a2b-d4b261d26cf2", "doc": null}, "type": "DataRange1d", "id": "f0a8fd05-c593-4aa9-8a2b-d4b261d26cf2"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "08247956-2804-43be-ba1a-962f28b9c9ea"}, "columns": ["x"]}], "id": "5991235c-5999-4823-ba6c-7b28db359128", "doc": null}, "type": "DataRange1d", "id": "5991235c-5999-4823-ba6c-7b28db359128"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "08efef43-05bf-4272-aac2-ace6f0db6c38"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "30ef128e-83bd-4c2a-b94e-acf83d30fb10"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "7f2490a7-3c53-4753-b0e1-5a147f2c4c19"}, {"type": "LinearAxis", "id": "6d1b6735-1169-40db-a224-bd8793281184"}, {"type": "Grid", "id": "95ef0e23-9d09-4563-8ad1-8deabafff965"}, {"type": "Grid", "id": "fc05f455-6d36-47ed-8925-64d1f3c75e09"}, {"type": "GlyphRenderer", "id": "84fb345d-be5c-4e07-99b3-8bf1b216b4f1"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0", "tools": [{"type": "PanTool", "id": "58af2a05-f496-405f-826e-0f5629e3c8df"}, {"type": "ZoomTool", "id": "ff63059d-e5f9-46d7-a525-d803ab00e3b2"}, {"type": "ResizeTool", "id": "82c13939-ec1a-4c3c-a273-7a1236d437c5"}], "canvas_width": 600}, "type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "5991235c-5999-4823-ba6c-7b28db359128"}, {"type": "DataRange1d", "id": "f0a8fd05-c593-4aa9-8a2b-d4b261d26cf2"}], "dimensions": ["width", "height"], "doc": null, "id": "6fa1ba1b-5374-4977-aca8-6155517e9acf"}, "type": "PanTool", "id": "6fa1ba1b-5374-4977-aca8-6155517e9acf"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "acef4325-cb81-4a28-acf0-5070b34dc607"}, "type": "ColumnDataSource", "id": "acef4325-cb81-4a28-acf0-5070b34dc607"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "8a7fb1f4-89c0-4e91-949e-c09c34ca2fa0"}, {"type": "DataRange1d", "id": "55c18e13-d8cd-4565-b458-972d18177116"}], "dimensions": ["width", "height"], "doc": null, "id": "d0b1c08a-a72e-4333-90c0-45d9c3835ee2"}, "type": "PanTool", "id": "d0b1c08a-a72e-4333-90c0-45d9c3835ee2"}, {"attributes": {"plot": {"type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, "doc": null, "dimension": 0, "id": "5278215a-fe8e-43df-ac08-0def22a84c11"}, "type": "Grid", "id": "5278215a-fe8e-43df-ac08-0def22a84c11"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "08efef43-05bf-4272-aac2-ace6f0db6c38"}, {"type": "DataRange1d", "id": "30ef128e-83bd-4c2a-b94e-acf83d30fb10"}], "dimensions": ["width", "height"], "id": "ff63059d-e5f9-46d7-a525-d803ab00e3b2"}, "type": "ZoomTool", "id": "ff63059d-e5f9-46d7-a525-d803ab00e3b2"}, {"attributes": {"plot": {"type": "Plot", "id": "9dfee8a6-4185-4db5-9d02-ca2ad97294b0"}, "doc": null, "dimension": 1, "id": "fc05f455-6d36-47ed-8925-64d1f3c75e09"}, "type": "Grid", "id": "fc05f455-6d36-47ed-8925-64d1f3c75e09"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bc8a1ccf-8787-45fe-95f2-aeeb3315af65"}, "columns": ["y"]}], "id": "30ef128e-83bd-4c2a-b94e-acf83d30fb10", "doc": null}, "type": "DataRange1d", "id": "30ef128e-83bd-4c2a-b94e-acf83d30fb10"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bc8a1ccf-8787-45fe-95f2-aeeb3315af65"}, "columns": ["x"]}], "id": "08efef43-05bf-4272-aac2-ace6f0db6c38", "doc": null}, "type": "DataRange1d", "id": "08efef43-05bf-4272-aac2-ace6f0db6c38"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "08247956-2804-43be-ba1a-962f28b9c9ea"}, "doc": null, "id": "654a5cb4-077e-4350-84dc-08da1b01e326", "xdata_range": {"type": "DataRange1d", "id": "5991235c-5999-4823-ba6c-7b28db359128"}, "ydata_range": {"type": "DataRange1d", "id": "f0a8fd05-c593-4aa9-8a2b-d4b261d26cf2"}, "glyphspec": {"line_color": {"value": "#FF00FF"}, "fill_color": {"value": "#FF00FF"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "#FF00FF"}, "angle_units": "deg", "fill_color": {"value": "#FF00FF"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "654a5cb4-077e-4350-84dc-08da1b01e326"}, {"attributes": {"plot": {"type": "Plot", "id": "1ead6c5a-1836-43a4-aef8-3ceaa7e8fef3"}, "doc": null, "dimension": 0, "id": "88f194d3-f652-4d10-bbaa-c3c176bf0616"}, "type": "Grid", "id": "88f194d3-f652-4d10-bbaa-c3c176bf0616"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "id": "d7475810-4d05-4438-a6bc-c1e474eae82e", "doc": null}, "type": "ResizeTool", "id": "d7475810-4d05-4438-a6bc-c1e474eae82e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "5991235c-5999-4823-ba6c-7b28db359128"}, {"type": "DataRange1d", "id": "f0a8fd05-c593-4aa9-8a2b-d4b261d26cf2"}], "dimensions": ["width", "height"], "id": "e5652352-d1a7-440d-8ee0-96f24e2c1aff"}, "type": "ZoomTool", "id": "e5652352-d1a7-440d-8ee0-96f24e2c1aff"}, {"attributes": {"plot": {"type": "Plot", "id": "6709861e-b171-4cf3-8221-8c0efbb4aa0c"}, "location": "min", "bounds": "auto", "doc": null, "id": "50e04fa1-316d-4441-84a4-b791099eaf8a", "dimension": 0}, "type": "LinearAxis", "id": "50e04fa1-316d-4441-84a4-b791099eaf8a"}];
    var modeltype = "PlotContext";
    var elementid = "a608c4c0-af9f-4d33-b4ce-fee6dea522ad";
    var plotID = "scatter_example";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));