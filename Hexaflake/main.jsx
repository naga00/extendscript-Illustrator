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

var palette = ColorKit.getRandomColorScheme();
//var palette = ColorKit.getColorScheme("Hofmann");
$.writeln("Using color scheme: " + palette.name);
setBackgroundLayer(document, RGBColor.ofHex("#f5f5f5")); //#f5f5f5, #0f0f0f

/*
setBackgroundLayerWithGradient(document, palette.colors, {
    numColors: 2,
    gradientType: GradientType.LINEAR,
    randomAngle: false,
    angle: 90
});
*/
addLayer(document, "main");


var pathItemsEx = new PathItemsEx();

var depth = 6;
var hexagonCount = 0;

// ランダム深さモード設定
var randomDepthMode = true; // true: 各方向で異なる深さ, false: 通常の均等分割
var depthVariation = 6; // 深さの変化量（0〜この値の範囲でランダムに減少）

function drawHexaflake(level, maxLevels, x, y, side) {
    var degrees60 = Math.PI * 60 / 180;
    var angle = Math.PI / 6; // 30度から開始

    if (level == 0) {
        var pathItem = activeDocument.pathItems.add();
        var points = [];

        var currentX = x;
        var currentY = y;
        points.push([currentX, currentY]);

        for (var i = 0; i < 6; i++) {
            currentX = currentX + Math.cos(angle) * side;
            currentY = currentY + Math.sin(angle) * side;
            points.push([currentX, currentY]);
            angle += degrees60;
        }

        pathItem.setEntirePath(points);
        pathItem.closed = true;
        pathItem.stroked = false;
        pathItem.filled = true;
        pathItem.strokeWidth = 0.5;

        ColorKit.applyGradientWithOrigin(pathItem, palette.colors,
            x, y, side, {
                numColors: 3,
                gradientType: GradientType.RADIAL,
                randomAngle: true,
                angle: 0
            });

        hexagonCount++;

    } else {
        var scaleFactor = 1 / 3;
        side *= scaleFactor;
        var distance = side * 2;
        var depthReductions = [];
        if (randomDepthMode) {
            depthReductions.push(0);
            depthReductions.push(level - 1);
            for (var j = 0; j < 4; j++) {
                depthReductions.push(Math.floor(Math.random() * (depthVariation + 1)));
            }
            for (var j = depthReductions.length - 1; j > 0; j--) {
                var k = Math.floor(Math.random() * (j + 1));
                var temp = depthReductions[j];
                depthReductions[j] = depthReductions[k];
                depthReductions[k] = temp;
            }
        } else {
            for (var j = 0; j < 6; j++) {
                depthReductions.push(0);
            }
        }

        for (var i = 0; i < 6; i++) {
            var nextX = x + Math.cos(angle) * distance;
            var nextY = y + Math.sin(angle) * distance;
            var depthReduction = depthReductions[i];
            var nextLevel = level - 1 - depthReduction;
            if (nextLevel >= 0) {
                drawHexaflake(nextLevel, maxLevels, nextX, nextY, side);
            } else {
                drawHexaflake(0, maxLevels, nextX, nextY, side);
            }
            x = nextX;
            y = nextY;
            angle += degrees60;
        }
    }
}

var margin = 0;
var w = documentPreset.width;
var h = documentPreset.height;
var radius = w / 2 - 2 * margin;
var side = radius * 0.97;

$.writeln("Starting Hexaflake with depth: " + depth);

var startX = w / 2;
var startY = h / 2 - side;
drawHexaflake(depth, depth, startX, startY, side);
$.writeln("Total hexagons drawn: " + hexagonCount);

app.redraw();