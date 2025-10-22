//@include "tn/system/VersionCheck.jsx";
//@include "tn/system/System.jsx";
//@include "tn/system/Capabilities.jsx";
//@include "tn/document/DocumentEx.jsx";
//@include "tn/util/UtilKit.jsx";
//@include "tn/color/ColorKit.jsx";
//@include "tn/path/PathItemsEx.jsx";


var documentPreset = new DocumentPreset();
documentPreset.title = "Title";
documentPreset.width = 1000;
documentPreset.height = 1000;
documentPreset.colorMode = DocumentColorSpace.RGB;
documentPreset.rasterResolution = DocumentRasterResolution.ScreenResolution;
documentPreset.previewMode = DocumentPreviewMode.DefaultPreview;

var document = app.documents.addDocument(documentPreset.colorMode, documentPreset);
document.defaultStroked = true;
document.defaultFilled = true;
document.defaultStrokeOverprint = false;
document.defaultFillOverprint = false;
document.defaultStrokeCap = StrokeCap.BUTTENDCAP;
document.defaultStrokeJoin = StrokeJoin.MITERENDJOIN;
document.defaultStrokeMiterLimit = 4;
document.defaultStrokeWidth = 1;

var palette = ColorKit.getRandomColorScheme();
$.writeln("Using color scheme: " + palette.name);
setBackgroundLayer(document, RGBColor.ofHex(palette.colors[UtilKit.randomInt(palette.colors.length - 1)]));

addLayer(document, "main");


var THIRD_PI = Math.PI / 3;
var MAX_DEPTH = 5;

function hexagon(centerX, centerY, length) {
    var points = [];

    for (var i = 0; i < 6; i++) {
        var angle = i * THIRD_PI;
        var x = centerX + Math.cos(angle) * length;
        var y = centerY - Math.sin(angle) * length;
        points.push([x, y]);
    }
    var pathItem = activeDocument.activeLayer.pathItems.add();
    pathItem.setEntirePath(points);
    pathItem.stroked = true;
    pathItem.filled = true;
    pathItem.closed = true;

    var strokeColor = RGBColor.ofHex(palette.colors[UtilKit.randomInt(palette.colors.length - 1)]);
    pathItem.strokeColor = strokeColor;
    pathItem.strokeWidth = 0.1;

    ColorKit.applyGradientWithOrigin(pathItem, palette.colors, centerX, centerY, length, {
        numColors: 2,
        gradientType: GradientType.LINEAR,
        randomAngle: true
    });
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