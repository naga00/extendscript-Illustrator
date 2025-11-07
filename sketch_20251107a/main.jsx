//@include "tn/system/VersionCheck.jsx";
//@include "tn/system/System.jsx";
//@include "tn/geom/Coordinate.jsx";
//@include "tn/system/Capabilities.jsx";
//@include "tn/document/DocumentEx.jsx";
//@include "tn/util/UtilKit.jsx";
//@include "tn/color/ColorKit.jsx";


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
var palette = ColorKit.getColorScheme("VintageSky"); //VintageSky
$.writeln("Using color scheme: " + palette.name);
/*
setBackgroundLayerWithGradient(document, palette.colors, {
    numColors: 4,
    gradientType: GradientType.LINEAR,
    randomAngle: false,
    angle: 90
});
*/
addLayer(document, "main");


var w = documentPreset.width;
var h = documentPreset.height;
var margin = 0;
var dotCount = 500;
var minRadius = 2;
var maxRadius = 13;

var opacity = 100; // 透明度（0-100）
var blendMode = BlendModes.SCREEN; // ブレンドモード
// BlendModes.NORMAL, BlendModes.MULTIPLY, BlendModes.SCREEN, BlendModes.OVERLAY,
// BlendModes.SOFTLIGHT, BlendModes.HARDLIGHT, BlendModes.COLORDODGE, BlendModes.COLORBURN,
// BlendModes.DARKEN, BlendModes.LIGHTEN, BlendModes.DIFFERENCE, BlendModes.EXCLUSION

for (var i = 0; i < dotCount; i++) {
    var radius = minRadius + Math.random() * (maxRadius - minRadius);
    
    var x = Math.random() * w;
    var y = Math.random() * h;
    var circle = activeDocument.pathItems.ellipse(
        convertY(y - radius), // top: 左下原点での上端Y座標
        x - radius, // left: 左端X座標
        radius * 2, // width
        radius * 2, // height
        false, // reversed
        true // inscribed
    );
    
    circle.stroked = false;
    circle.filled = true;

    ColorKit.applyGradientWithOrigin(circle, palette.colors,
        x, convertY(y), radius, {
            numColors: 3,
            gradientType: GradientType.RADIAL,
            randomAngle: true,
            angle: 0
        });

    circle.opacity = opacity;
    circle.blendingMode = blendMode;
}


app.redraw();