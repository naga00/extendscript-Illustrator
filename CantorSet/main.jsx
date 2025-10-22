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
var palette = ColorKit.getColorScheme("BambooGrove"); //BambooGrove
$.writeln("Using color scheme: " + palette.name);
setBackgroundLayerWithGradient(document, palette.colors, {
    numColors: 4,
    gradientType: GradientType.LINEAR,
    randomAngle: false,
    angle: 90
});
addLayer(document, "main");


var pathItemsEx = new PathItemsEx();

var spacing = 320;
cantorSet(50, 690, 900, 45); // 一番下
cantorSet(50, 690 - spacing, 900, 45); // 中段
cantorSet(50, 690 - spacing * 2, 900, 45); // 一番上

function cantorSet(x, y, len, h) {
    if (len >= 1) {
        pathItemsEx.drawRect(x, y, len, h / 3);
        var pathItem = pathItemsEx.pathObj;
        pathItem.stroked = false;
        pathItem.filled = true;

        var centerX = x + len / 2;
        var centerY = y - h / 6;

        ColorKit.applyGradientWithOrigin(pathItem, palette.colors, centerX, centerY, len, {
            numColors: 3,
            gradientType: GradientType.LINEAR,
            randomAngle: false,
            angle: 45
        });

        y += h;
        cantorSet(x, y, len / 3, h);
        cantorSet(x + len * 2 / 3, y, len / 3, h);
    }
}