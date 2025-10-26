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
var palette = ColorKit.getColorScheme("PlaygroundSunset");
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

var depth = 4;
var pentagonCount = 0;
var randomDepthMode = true;
var depthVariation = 4;

function drawPentaflake(level, maxLevels, x, y, side, rotated) {
    var degrees72 = Math.PI * 72 / 180;
    var angle = -Math.PI / 2;

    if (rotated) {
        angle += Math.PI;
    }

    if (level == 0) {
        var pathItem = activeDocument.pathItems.add();
        var points = [];
        for (var i = 0; i < 5; i++) {
            var currentX = x + Math.cos(angle) * side;
            var currentY = y + Math.sin(angle) * side;
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
        var newSide = side * scaleFactor;
        var distance = newSide + newSide * Math.cos(degrees72) * 2;
        var depthReductions = [];
        if (level == maxLevels && randomDepthMode) {
            depthReductions.push(0); // 1つは最大深度まで（nextLevel = level - 1 = 3）
            depthReductions.push(level - 1); // 1つは即座に描画（nextLevel = 0）
            // 残り4つ（中心1 + 周囲3）はランダム（nextLevel = 1 or 2）
            // depthReduction = 1 or 2 だけを生成（0と3は除外）
            for (var j = 0; j < 4; j++) {
                depthReductions.push(1 + Math.floor(Math.random() * (level - 2)));
            }
            $.writeln("depthReductions before shuffle: " + depthReductions.join(", "));
            for (var j = depthReductions.length - 1; j > 0; j--) {
                var k = Math.floor(Math.random() * (j + 1));
                var temp = depthReductions[j];
                depthReductions[j] = depthReductions[k];
                depthReductions[k] = temp;
            }
            $.writeln("depthReductions after shuffle: " + depthReductions.join(", "));
            $.writeln("Center: depthReduction=" + depthReductions[0] + ", nextLevel=" + (level - 1 - depthReductions[0]));
            for (var j = 0; j < 5; j++) {
                var nextLevel = level - 1 - depthReductions[j + 1];
                $.writeln("Direction " + j + ": depthReduction=" + depthReductions[j + 1] + ", nextLevel=" + nextLevel);
            }
        } else {
            for (var j = 0; j < 6; j++) {
                depthReductions.push(0);
            }
        }
        // 中心に再帰的に描画（depthReductions[0]を使用）
        var centerDepthReduction = depthReductions[0];
        var centerNextLevel = level - 1 - centerDepthReduction;
        if (centerNextLevel >= 0) {
            drawPentaflake(centerNextLevel, maxLevels, x, y, newSide, !rotated);
        } else {
            drawPentaflake(0, maxLevels, x, y, newSide, !rotated);
        }
        for (var i = 0; i < 5; i++) {
            var nextX = x + Math.cos(angle) * distance;
            var nextY = y + Math.sin(angle) * distance;
            var depthReduction = depthReductions[i + 1];
            var nextLevel = level - 1 - depthReduction;
            if (nextLevel >= 0) {
                drawPentaflake(nextLevel, maxLevels, nextX, nextY, newSide, rotated);
            } else {
                drawPentaflake(0, maxLevels, nextX, nextY, newSide, rotated);
            }
            angle += degrees72;
        }
    }
}

var margin = 0;
var w = documentPreset.width;
var h = documentPreset.height;
var radius = w / 2 - 2 * margin;
var side = radius * Math.sin(Math.PI / 5) * 1.7;

$.writeln("Starting Pentaflake with depth: " + depth);

var startY = h / 2 - 50;
drawPentaflake(depth, depth, w / 2, startY, side, true);
$.writeln("Total pentagons drawn: " + pentagonCount);

app.redraw();