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
var palette = ColorKit.getColorScheme("Hofmann");
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

var depth = 6;
var pentagonCount = 0;

// ランダム深さモード設定
var randomDepthMode = true; // true: 各方向で異なる深さ, false: 通常の均等分割
var depthVariation = 7; // 深さの変化量（0〜この値の範囲でランダムに減少）

function drawPentaflake(level, maxLevels, x, y, side) {
    var degrees72 = Math.PI * 72 / 180;
    var angle = 3 * degrees72;

    if (level == 0) {
        var pathItem = activeDocument.pathItems.add();
        var points = [];

        var currentX = x;
        var currentY = y;
        points.push([currentX, currentY]);

        for (var i = 0; i < 5; i++) {
            currentX = currentX + Math.cos(angle) * side;
            currentY = currentY + Math.sin(angle) * side;
            points.push([currentX, currentY]);
            angle += degrees72;
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

        pentagonCount++;

    } else {
        var scaleFactor = 1 / (2 + Math.cos(degrees72) * 2);
        side *= scaleFactor;
        var distance = side + side * Math.cos(degrees72) * 2;
        var depthReductions = [];
        if (randomDepthMode) {
            depthReductions.push(0);
            depthReductions.push(level - 1);
            for (var j = 0; j < 3; j++) {
                depthReductions.push(Math.floor(Math.random() * (depthVariation + 1)));
            }
            for (var j = depthReductions.length - 1; j > 0; j--) {
                var k = Math.floor(Math.random() * (j + 1));
                var temp = depthReductions[j];
                depthReductions[j] = depthReductions[k];
                depthReductions[k] = temp;
            }
        } else {
            for (var j = 0; j < 5; j++) {
                depthReductions.push(0);
            }
        }

        for (var i = 0; i < 5; i++) {
            var nextX = x + Math.cos(angle) * distance;
            var nextY = y + Math.sin(angle) * distance;
            var depthReduction = depthReductions[i];
            var nextLevel = level - 1 - depthReduction;
            if (nextLevel >= 0) {
                drawPentaflake(nextLevel, maxLevels, nextX, nextY, side);
            } else {
                drawPentaflake(0, maxLevels, nextX, nextY, side);
            }
            x = nextX;
            y = nextY;
            angle += degrees72;
        }
    }
}

var margin = 0;
var w = documentPreset.width;
var h = documentPreset.height;
var radius = w / 2 - 2 * margin;
var side = radius * Math.sin(Math.PI / 5) * 2;

$.writeln("Starting Pentaflake with depth: " + depth);

var startY = h / 2 + radius * 0.92;
drawPentaflake(depth, depth, w / 2, startY, side);
$.writeln("Total pentagons drawn: " + pentagonCount);

app.redraw();