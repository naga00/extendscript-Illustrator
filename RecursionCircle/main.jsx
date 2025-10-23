//@include "tn/system/VersionCheck.jsx";
//@include "tn/system/System.jsx";
//@include "tn/system/Capabilities.jsx";
//@include "tn/document/DocumentEx.jsx";
//@include "tn/util/UtilKit.jsx";
//@include "tn/color/ColorKit.jsx";
//@include "tn/path/PathItemsEx.jsx";


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
var palette = ColorKit.getColorScheme("Olympia");
$.writeln("Using color scheme: " + palette.name);
/*
setBackgroundLayerWithGradient(document, palette.colors, {
    numColors: 3,
    gradientType: GradientType.LINEAR,
    randomAngle: false,
    angle: 90
});
*/

setBackgroundLayer(document, RGBColor.ofHex("#f5f5f5")); //#f5f5f5, #0f0f0f
addLayer(document, "main");


var maxLevel = 10;

function drawCircle(x, radius, level) {
    if (level < 1) return;

    var pathItemsEx = new PathItemsEx();
    pathItemsEx.drawEllipse(x, activeDocument.height / 2, radius * 2, radius * 2, "center");

    var pathItem = pathItemsEx.pathObj;
    pathItem.stroked = true;
    pathItem.filled = true;

    var strokeColor = RGBColor.ofHex(palette.colors[UtilKit.randomInt(palette.colors.length - 1)]);
    pathItem.strokeColor = strokeColor;
    pathItem.strokeWidth = 0.5;

    // 各円にグラデーションを適用
    ColorKit.applyGradientWithOrigin(pathItem, palette.colors, x, activeDocument.height / 2, radius, {
        numColors: 4,
        gradientType: GradientType.LINEAR,
        randomAngle: false,
        angle: 90
    });

    if (level > 1) {
        level = level - 1;
        drawCircle(x - radius / 2, radius / 2, level);
        drawCircle(x + radius / 2, radius / 2, level);
    }
}

drawCircle(activeDocument.width / 2, 450, maxLevel);