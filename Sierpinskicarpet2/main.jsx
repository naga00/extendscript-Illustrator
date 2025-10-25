//@include "tn/system/VersionCheck.jsx";
//@include "tn/system/System.jsx";
//@include "tn/system/Capabilities.jsx";
//@include "tn/document/DocumentEx.jsx";
//@include "tn/util/UtilKit.jsx";
//@include "tn/color/ColorKit.jsx";
//@include "tn/path/PathItemsEx.jsx";
//@include "tn/geom/PVector.jsx";


var documentPreset = new DocumentPreset();
documentPreset.title = "Sketch";
documentPreset.width = 1000;
documentPreset.height = 1000;
documentPreset.colorMode = DocumentColorSpace.RGB;
documentPreset.rasterResolution = DocumentRasterResolution.ScreenResolution;
documentPreset.previewMode = DocumentPreviewMode.DefaultPreview;

var document = new DocumentEx(false, documentPreset);
document.defaultStroked = true;
document.defaultFilled = true;
document.defaultStrokeOverprint = false;
document.defaultFillOverprint = false;
document.defaultStrokeCap = StrokeCap.BUTTENDCAP;
document.defaultStrokeJoin = StrokeJoin.MITERENDJOIN;
document.defaultStrokeMiterLimit = 4;
document.defaultStrokeWidth = 1;

//var palette = ColorKit.getRandomColorScheme();
var palette = ColorKit.getColorScheme("Giftcard_sub");
$.writeln("Using color scheme: " + palette.name);
setBackgroundLayer(document, RGBColor.ofHex("#f5f5f5")); //#f5f5f5, #0f0f0f
/*
setBackgroundLayerWithGradient(document, palette.colors, {
    numColors: 4,
    gradientType: GradientType.LINEAR,
    randomAngle: false,
    angle: 90
});
*/
addLayer(document, "main");


var pathItemsEx = new PathItemsEx();

var depth = 5;
var squareCount = 0;

function drawCarpet(level, maxLevels, x, y, size) {
    if (level >= maxLevels) {
        return;
    }
    var newSize = size / 3;
    squareCount++;
    var centerX = x + newSize;
    var centerY = y + newSize;
    pathItemsEx.drawCircle(centerX + newSize / 2, centerY + newSize / 2, newSize, "center");
    var pathItem = pathItemsEx.pathObj;
    pathItem.stroked = false;
    pathItem.filled = true;
    ColorKit.applyGradientWithOrigin(pathItem, palette.colors,
        centerX + newSize / 2, centerY + newSize / 2, newSize, {
            numColors: 3,
            gradientType: GradientType.LINEAR,
            randomAngle: true,
            angle: 0
        });

    level++;
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            if (row === 1 && col === 1) continue;
            var newX = x + col * newSize;
            var newY = y + row * newSize;
            drawCarpet(level, maxLevels, newX, newY, newSize);
        }
    }
}

var margin = 50;
var carpetSize = Math.min(documentPreset.width, documentPreset.height) - margin * 2;
var startX = (documentPreset.width - carpetSize) / 2;
var startY = (documentPreset.height - carpetSize) / 2;

/*
pathItemsEx.drawRect(startX, startY + carpetSize, carpetSize, carpetSize);
var bgPathItem = pathItemsEx.pathObj;
bgPathItem.stroked = false;
bgPathItem.filled = true;
var whiteColor = new RGBColor();
whiteColor.red = 255;
whiteColor.green = 255;
whiteColor.blue = 255;
pathItemsEx.setFillColor(whiteColor);
*/

$.writeln("Starting Sierpinski carpet with depth: " + depth);
drawCarpet(0, depth, startX, startY, carpetSize);
$.writeln("Total squares drawn: " + squareCount);

app.redraw();