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
var palette = ColorKit.getColorScheme("Klein");
$.writeln("Using color scheme: " + palette.name);
//setBackgroundLayer(document, RGBColor.ofHex("#f5f5f5")); //#f5f5f5, #0f0f0f
setBackgroundLayerWithGradient(document, palette.colors, {
    numColors: 4,
    gradientType: GradientType.LINEAR,
    randomAngle: false,
    angle: 90
});
addLayer(document, "main");


var pathItemsEx = new PathItemsEx();

var depth = 9;
var triangleCount = 0;

function drawTris(level, maxLevels, x0, y0, x1, y1, x2, y2) {
    // 3つの辺の中点を計算
    var ax = x0 + (x1 - x0) / 2;
    var ay = y0 + (y1 - y0) / 2;
    var bx = x2 + (x1 - x2) / 2;
    var by = y2 + (y1 - y2) / 2;
    var cx = x0 + (x2 - x0) / 2;
    var cy = y0 + (y2 - y0) / 2;

    // 中央の逆三角形を描画（グラデーション付き）
    triangleCount++;
    pathItemsEx.drawTriangleEx(ax, ay, bx, by, cx, cy, ax, ay);
    var pathItem = pathItemsEx.pathObj;
    pathItem.stroked = false;
    pathItem.filled = true;

    var centerX = (ax + bx + cx) / 3;
    var centerY = (ay + by + cy) / 3;
    var size = Math.max(Math.abs(cx - ax), Math.abs(ay - cy));

    ColorKit.applyGradientWithOrigin(pathItem, palette.colors, centerX, centerY, size, {
        numColors: 3,
        gradientType: GradientType.LINEAR,
        randomAngle: true,
        angle: 0
    });

    level++;

    if (level >= maxLevels) {
        // 最小レベルに達したら、外側の3つの三角形を描画
        // 上の三角形
        triangleCount++;
        pathItemsEx.drawTriangleEx(ax, ay, x1, y1, bx, by, ax, ay);
        pathItem = pathItemsEx.pathObj;
        pathItem.stroked = false;
        pathItem.filled = true;
        centerX = (ax + x1 + bx) / 3;
        centerY = (ay + y1 + by) / 3;
        size = Math.max(Math.abs(bx - ax), Math.abs(ay - y1));
        ColorKit.applyGradientWithOrigin(pathItem, palette.colors, centerX, centerY, size, {
            numColors: 3,
            gradientType: GradientType.LINEAR,
            randomAngle: true,
            angle: 0
        });


        triangleCount++;
        pathItemsEx.drawTriangleEx(x0, y0, ax, ay, cx, cy, x0, y0);
        pathItem = pathItemsEx.pathObj;
        pathItem.stroked = false;
        pathItem.filled = true;
        centerX = (x0 + ax + cx) / 3;
        centerY = (y0 + ay + cy) / 3;
        size = Math.max(Math.abs(cx - x0), Math.abs(y0 - ay));
        ColorKit.applyGradientWithOrigin(pathItem, palette.colors, centerX, centerY, size, {
            numColors: 3,
            gradientType: GradientType.LINEAR,
            randomAngle: true,
            angle: 0
        });

        // 右下の三角形
        triangleCount++;
        pathItemsEx.drawTriangleEx(cx, cy, bx, by, x2, y2, cx, cy);
        pathItem = pathItemsEx.pathObj;
        pathItem.stroked = false;
        pathItem.filled = true;
        centerX = (cx + bx + x2) / 3;
        centerY = (cy + by + y2) / 3;
        size = Math.max(Math.abs(x2 - cx), Math.abs(cy - y2));
        ColorKit.applyGradientWithOrigin(pathItem, palette.colors, centerX, centerY, size, {
            numColors: 3,
            gradientType: GradientType.LINEAR,
            randomAngle: true,
            angle: 0
        });
    } else {
        // 外側の3つの三角形に対して再帰
        drawTris(level, maxLevels, ax, ay, x1, y1, bx, by);
        drawTris(level, maxLevels, x0, y0, ax, ay, cx, cy);
        drawTris(level, maxLevels, cx, cy, bx, by, x2, y2);
    }
}

var margin = 50;
var h = Math.sqrt(documentPreset.width * documentPreset.width - (documentPreset.width / 2) * (documentPreset.width / 2));

var verticalOffset = (documentPreset.height - h) / 2 + 30;
var bottomY = verticalOffset;
var topY = h + verticalOffset - margin;

// 背景の三角形を描画
pathItemsEx.drawTriangle(margin, bottomY, documentPreset.width / 2, topY, documentPreset.width - margin, bottomY);
var bgPathItem = pathItemsEx.pathObj;
bgPathItem.stroked = false;
bgPathItem.filled = true;
var whiteColor = new RGBColor();
whiteColor.red = 255;
whiteColor.green = 255;
whiteColor.blue = 255;
pathItemsEx.setFillColor(whiteColor);

$.writeln("Starting Sierpinski triangle with depth: " + depth);
drawTris(0, depth, margin, bottomY, documentPreset.width / 2, topY, documentPreset.width - margin, bottomY);
$.writeln("Total triangles drawn: " + triangleCount);

// 描画を更新
app.redraw();