//@include "tn/system/VersionCheck.jsx";
//@include "tn/system/System.jsx";
//@include "tn/system/Capabilities.jsx";
//@include "tn/document/DocumentEx.jsx";
//@include "tn/util/UtilKit.jsx";
//@include "tn/color/ColorKit.jsx";
//@include "tn/geom/Point.jsx";
//@include "tn/geom/PVector.jsx";
//@include "tn/path/GuideItems.jsx";
//@include "tn/path/PathItemsEx.jsx";
//@include "tn/io/FileStream.jsx";
//@include "tn/io/SaveOptions.jsx";
//@include "tn/io/ExportOptions.jsx";

var documentPreset = new DocumentPreset();
documentPreset.title = "Title";
documentPreset.width = 1000;
documentPreset.height = 1000;
documentPreset.colorMode = DocumentColorSpace.RGB;
documentPreset.rasterResolution = DocumentRasterResolution.ScreenResolution;
documentPreset.previewMode = DocumentPreviewMode.DefaultPreview;

var documentEx = new DocumentEx(true, documentPreset);
documentEx.defaultStroked = true;
documentEx.defaultFilled = true;
documentEx.defaultStrokeOverprint = false;
documentEx.defaultFillOverprint = false;
documentEx.defaultStrokeCap = StrokeCap.BUTTENDCAP;
documentEx.defaultStrokeJoin = StrokeJoin.MITERENDJOIN;
documentEx.defaultStrokeMiterLimit = 4;
documentEx.defaultStrokeWidth = 1;

var palette = ColorKit.getColorScheme('Picasso');
documentEx.addBackground(new RGBColor().create(245, 245, 245));

documentEx.addLayer("layer1");


// 定数定義
var THIRD_PI = Math.PI / 3;
var MAX_DEPTH = 6;

function hexagon(centerX, centerY, length) {
    var points = [];

    for (var i = 0; i < 6; i++) {
        var angle = i * THIRD_PI;
        var x = centerX + Math.cos(angle) * length;
        var y = centerY - Math.sin(angle) * length;
        points.push([x, y]);
    }
    var pathItem = activeDocument.activeLayer.pathItems.add();
    var color = ColorKit.hexToAIColor(palette.colors[UtilKit.randomInt(palette.colors.length - 1)]);
    pathItem.setEntirePath(points);
    pathItem.stroked = true;
    pathItem.filled = true;
    pathItem.strokeColor = color;
    color = ColorKit.hexToAIColor(palette.colors[UtilKit.randomInt(palette.colors.length - 1)]);
    pathItem.fillColor = color;
    pathItem.strokeWidth = 0.1;
    pathItem.closed = true;
}


function cantorSnowflake(x, y, length, depth) {
    if (length < 1 || depth >= MAX_DEPTH) return;
    hexagon(x, y, length);
    for (var i = 0; i < 6; i++) {
        var angle = i * THIRD_PI;
        var offset = length * 2 / 3;
        var newX = x + Math.cos(angle) * offset;
        var newY = y - Math.sin(angle) * offset;
        cantorSnowflake(newX, newY, length / 3, depth + 1);
    }
}

cantorSnowflake(500, 500, 450, 0);