(function() {
    PathItemsEx.prototype.pathItems;
    PathItemsEx.prototype.pathObj;
    PathItemsEx.prototype.strokeColor;
    PathItemsEx.prototype.fillColor;
    PathItemsEx.prototype.pathPoints;

    function PathItemsEx() {
        PathItemsEx.initialize();
    }

    PathItemsEx.initialize = function() {
        PathItemsEx.prototype.length = activeDocument.pathItems.length;
        PathItemsEx.prototype.parent = activeDocument.pathItems.parent;
        PathItemsEx.prototype.typename = activeDocument.pathItems.typename;

        PathItemsEx.prototype.getDefaultStroked = function() {
            return activeDocument.defaultStroked;
        };

        PathItemsEx.prototype.setDefaultStroked = function(value) {
            activeDocument.defaultStroked = value;
        };

        PathItemsEx.prototype.getDefaultFilled = function() {
            return activeDocument.defaultFilled;
        };

        PathItemsEx.prototype.setDefaultFilled = function(value) {
            activeDocument.defaultFilled = value;
        };

        PathItemsEx.prototype.getDefaultStrokeOverprint = function() {
            return activeDocument.defaultStrokeOverprint;
        };

        PathItemsEx.prototype.setDefaultStrokeOverprint = function(value) {
            activeDocument.defaultStrokeOverprint = value;
        };

        PathItemsEx.prototype.getDefaultFillOverprint = function() {
            return activeDocument.defaultFillOverprint;
        };

        PathItemsEx.prototype.setDefaultFillOverprint = function(value) {
            activeDocument.defaultFillOverprint = value;
        };

        PathItemsEx.prototype.getDefaultStrokeCap = function() {
            return activeDocument.defaultStrokeCap;
        };

        PathItemsEx.prototype.setDefaultStrokeCap = function(value) {
            activeDocument.defaultStrokeCap = value;
        };

        PathItemsEx.prototype.getDefaultStrokeJoin = function() {
            return activeDocument.defaultStrokeJoin;
        };

        PathItemsEx.prototype.setDefaultStrokeJoin = function(value) {
            activeDocument.defaultStrokeJoin = value;
        };

        PathItemsEx.prototype.getDefaultStrokeMiterLimit = function() {
            return activeDocument.defaultStrokeMiterLimit;
        };

        PathItemsEx.prototype.setDefaultStrokeMiterLimit = function(value) {
            activeDocument.defaultStrokeMiterLimit = value;
        };

        PathItemsEx.prototype.getDefaultStrokeWidth = function() {
            return activeDocument.defaultStrokeWidth;
        };

        PathItemsEx.prototype.setDefaultStrokeWidth = function(value) {
            activeDocument.defaultStrokeWidth = value;
        }

        PathItemsEx.prototype.getDefaultStrokeDashes = function() {
            return activeDocument.defaultStrokeDashes;
        };

        PathItemsEx.prototype.setDefaultStrokeDashes = function(value) {
            activeDocument.defaultStrokeDashes = value;
        };

        PathItemsEx.prototype.getDefaultStrokeDashOffset = function() {
            return activeDocument.defaultStrokeDashOffset;
        };

        PathItemsEx.prototype.setDefaultStrokeDashOffset = function(value) {
            activeDocument.defaultStrokeDashOffset = value;
        };

        PathItemsEx.prototype.getDefaultStrokeColor = function() {
            return activeDocument.defaultStrokeColor;
        };

        PathItemsEx.prototype.setDefaultStrokeColor = function(color) {
            activeDocument.defaultStrokeColor = color;
        };

        PathItemsEx.prototype.getDefaultFillColor = function() {
            return activeDocument.defaultFillColor;
        };

        PathItemsEx.prototype.setDefaultFillColor = function(color) {
            activeDocument.defaultFillColor = color;
        };

        PathItemsEx.prototype.setDefaultStrokeCMYKColor = function(cyan, magenta, yellow, black) {
            strokeColor.cyan = cyan;
            strokeColor.magenta = magenta;
            strokeColor.yellow = yellow;
            strokeColor.black = black;
            PathItemsEx.prototype.setDefaultStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setDefaultFillCMYKColor = function(cyan, magenta, yellow, black) {
            fillColor.cyan = cyan;
            fillColor.magenta = magenta;
            fillColor.yellow = yellow;
            fillColor.black = black;
            PathItemsEx.prototype.setDefaultFillColor(fillColor);
        };

        PathItemsEx.prototype.setDefaultStrokeRGBColor = function(red, green, blue) {
            strokeColor.red = red;
            strokeColor.green = green;
            strokeColor.blue = blue;
            PathItemsEx.prototype.setDefaultStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setDefaultFillRGBColor = function(red, green, blue) {
            fillColor.red = red;
            fillColor.green = green;
            fillColor.blue = blue;
            PathItemsEx.prototype.setDefaultFillColor(fillColor);
        };

        PathItemsEx.prototype.setDefaultStrokeGrayColor = function(gray) {
            strokeColor.gray = gray;
            PathItemsEx.prototype.setDefaultStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setDefaultFillGrayColor = function(gray) {
            fillColor.gray = gray;
            PathItemsEx.prototype.setDefaultFillColor(fillColor);
        };

        PathItemsEx.prototype.setDefaultStrokeLabColor = function(l, a, b) {
            strokeColor.l = l;
            strokeColor.a = a;
            strokeColor.b = b;
            PathItemsEx.prototype.setDefaultStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setDefaultFillLabColor = function(l, a, b) {
            fillColor.l = l;
            fillColor.a = a;
            fillColor.b = b;
            PathItemsEx.prototype.setDefaultFillColor(fillColor);
        };

        PathItemsEx.prototype.setDefaultStrokeNoColor = function(ncolor) {
            PathItemsEx.prototype.setDefaultStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setDefaultFillLNoColor = function(ncolor) {
            PathItemsEx.prototype.setDefaultFillColor(fillColor);
        };

        PathItemsEx.prototype.defaultLineStyle = function(width, cap, join, miterLimit) {
            PathItemsEx.prototype.setDefaultStrokeWidth(width);
            PathItemsEx.prototype.setDefaultStrokeCap(cap);
            PathItemsEx.prototype.setDefaultStrokeJoin(joint);
            PathItemsEx.prototype.setDefaultStrokeMiterLimit(miterLimit);
        };

        PathItemsEx.prototype.getStroked = function() {
            return pathObj.stroked;
        };

        PathItemsEx.prototype.setStroked = function(value) {
            pathObj.stroked = value;
        };

        PathItemsEx.prototype.getFilled = function() {
            return pathObj.filled;
        };

        PathItemsEx.prototype.setFilled = function(value) {
            pathObj.filled = value;
        };

        PathItemsEx.prototype.getStrokeWidth = function() {
            return pathObj.strokeWidth;
        };

        PathItemsEx.prototype.setStrokeWidth = function(value) {
            pathObj.strokeWidth = value;
        };

        PathItemsEx.prototype.getStrokeColor = function() {
            return pathObj.strokeColor;
        };

        PathItemsEx.prototype.setStrokeColor = function(color) {
            pathObj.strokeColor = color;
        };

        PathItemsEx.prototype.getFillColor = function() {
            return pathObj.fillColor;
        };

        PathItemsEx.prototype.setFillColor = function(color) {
            pathObj.fillColor = color;
        };

        PathItemsEx.prototype.setStrokeCMYKColor = function(cyan, magenta, yellow, black) {
            strokeColor.cyan = cyan;
            strokeColor.magenta = magenta;
            strokeColor.yellow = yellow;
            strokeColor.black = black;
            PathItemsEx.prototype.setStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setFillCMYKColor = function(cyan, magenta, yellow, black) {
            fillColor.cyan = cyan;
            fillColor.magenta = magenta;
            fillColor.yellow = yellow;
            fillColor.black = black;
            PathItemsEx.prototype.setFillColor(fillColor);
        };

        PathItemsEx.prototype.setStrokeRGBColor = function(red, green, blue) {
            strokeColor.red = red;
            strokeColor.green = green;
            strokeColor.blue = blue;
            PathItemsEx.prototype.setStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setFillRGBColor = function(red, green, blue) {
            fillColor.red = red;
            fillColor.green = green;
            fillColor.blue = blue;
            PathItemsEx.prototype.setFillColor(fillColor);
        };

        PathItemsEx.prototype.setStrokeGrayColor = function(gray) {
            strokeColor.gray = gray;
            PathItemsEx.prototype.setStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setFillGrayColor = function(gray) {
            fillColor.gray = gray;
            PathItemsEx.prototype.setFillColor(fillColor);
        };

        PathItemsEx.prototype.setStrokeLabColor = function(l, a, b) {
            strokeColor.l = l;
            strokeColor.a = a;
            strokeColor.b = b;
            PathItemsEx.prototype.setStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setFillLabColor = function(l, a, b) {
            fillColor.l = l;
            fillColor.a = a;
            fillColor.b = b;
            PathItemsEx.prototype.setFillColor(fillColor);
        };

        PathItemsEx.prototype.setStrokeNoColor = function(ncolor) {
            PathItemsEx.prototype.setStrokeColor(strokeColor);
        };

        PathItemsEx.prototype.setFillLNoColor = function(ncolor) {
            PathItemsEx.prototype.setFillColor(fillColor);
        };

        PathItemsEx.prototype.setStrokeCap = function(cap) {
            pathObj.strokeCap = cap;
        };

        PathItemsEx.prototype.setStrokeJoin = function(join) {
            pathObj.strokeJoin = join;
        };

        PathItemsEx.prototype.setStrokeMiterLimit = function(miterLimit) {
            pathObj.strokeLimit = miterLimit;
        };

        PathItemsEx.prototype.setStrokeDashes = function(dashes) {
            pathObj.strokeDashes = dashes;
        };

        PathItemsEx.prototype.setStrokeDashOffset = function(offset) {
            pathObj.strokeDashOffset = offset;
        };

        PathItemsEx.prototype.add = function() {
            pathItems.add();
        };

        PathItemsEx.prototype.removeAll = function() {
            pathItems.removeAll();
        };

        PathItemsEx.prototype.getByName = function(name) {
            pathItems.getByName(name);
        };

        PathItemsEx.prototype.index = function(itemKey) {
            pathItems.index(itemKey);
        };

        PathItemsEx.prototype.clear = function() {
            pathItems.removeAll();
        };

        PathItemsEx.prototype.setOpacity = function(opacity) {
            pathObj.opacity = opacity;
        };

        PathItemsEx.prototype.setAlpha = function(alpha) {
            PathItemsEx.prototype.setOpacity(alpha);
        };

        /*
        BlendModes.COLORBLEND, BlendModes.COLORBURN, BlendModes.COLORDODGE, BlendModes.DARKEN,
        BlendModes.DIFFERENCE, BlendModes.EXCLUSION, BlendModes.HARDLIGHT, BlendModes.HUE,
        BlendModes.LIGHTEN, BlendModes.LUMINOSITY, BlendModes.MULTIPLY, BlendModes.NORMAL, 
        BlendModes.OVERLAY, BlendModes.SATURATIONBLEND, BlendModes.SCREEN, BlendModes.SOFTLIGHT
        */
        PathItemsEx.prototype.setBlendMode = function(blendMode) {
            pathObj.blendingMode = blendMode;
        };

        PathItemsEx.prototype.lineStyle = function(width, cap, join, miterLimit) {
            PathItemsEx.prototype.setStrokeWidth(width);
            PathItemsEx.prototype.setStrokeCap(cap);
            PathItemsEx.prototype.setStrokeJoin(joint);
            PathItemsEx.prototype.setStrokeMiterLimit(miterLimit);
        };

        PathItemsEx.prototype.setEntirePath = function(pathPoints) {
            pathObj = activeDocument.pathItems.add();
            pathObj.setEntirePath(pathPoints);
        };

        PathItemsEx.prototype.drawLine = function(x0, y0, x1, y1) {
            PathItemsEx.prototype.moveTo(x0, y0);
            PathItemsEx.prototype.lineTo(x1, y1);
        };

        PathItemsEx.prototype.moveTo = function(x0, y0) {
            pathObj = activeDocument.pathItems.add();
            pathPoints = new Array();
            pathPoints.push([x0, y0]);
            pathObj.setEntirePath(pathPoints);
        };

        PathItemsEx.prototype.lineTo = function(x0, y0) {
            pathPoints.push([x0, y0]);
            pathObj.setEntirePath(pathPoints);
        };

        PathItemsEx.prototype.moveCurveTo = function(x0, y0, pointType) {
            pathObj = activeDocument.pathItems.add();
            nPathObj = pathObj.pathPoints.add();
            nPathObj.anchor = [x0, y0];
            nPathObj.leftDirection = [x0, y0];
            nPathObj.rightDirection = [x0, y0];
            nPathObj.pointType = (pointType != null) ? pointType : PointType.SMOOTH; /// SMOOTH, CORNER
        };

        PathItemsEx.prototype.lineCurveTo = function(x0, y0, pointType) {
            nPathObj = pathObj.pathPoints.add();
            nPathObj.anchor = [x0, y0];
            nPathObj.leftDirection = [x0, y0];
            nPathObj.rightDirection = [x0, y0];
            nPathObj.pointType = (pointType != null) ? pointType : PointType.SMOOTH; /// SMOOTH, CORNER
        };

        PathItemsEx.prototype.curveTo = function(x0, y0, x1, y1, pointType) {
            nPathObj = pathObj.pathPoints.add();
            nPathObj.anchor = [x1, y1];
            nPathObj.leftDirection = [x0, y0];
            nPathObj.rightDirection = [x1, y1];
            nPathObj.pointType = (pointType != null) ? pointType : PointType.SMOOTH; /// SMOOTH, CORNER
        };

        PathItemsEx.prototype.curveMoveTo3 = function(x0, y0, x1, y1, x2, y2, pointType) {
            pathObj = activeDocument.pathItems.add();
            nPathObj = pathObj.pathPoints.add();
            nPathObj.anchor = [x0, y0];
            nPathObj.leftDirection = [x1, y1];
            nPathObj.rightDirection = [x2, y2];
            nPathObj.pointType = (pointType != null) ? pointType : PointType.SMOOTH; /// SMOOTH, CORNER
        };

        PathItemsEx.prototype.curveTo3 = function(x0, y0, x1, y1, x2, y2, pointType) {
            nPathObj = pathObj.pathPoints.add();
            nPathObj.anchor = [x0, y0];
            nPathObj.leftDirection = [x1, y1];
            nPathObj.rightDirection = [x2, y2];
            nPathObj.pointType = (pointType != null) ? pointType : PointType.SMOOTH; /// SMOOTH, CORNER		
        };

        PathItemsEx.prototype.drawDot = function(x, y, reversed) {
            pathObj = activeDocument.pathItems.rectangle(y, x, 1, 1, reversed);
        };

        PathItemsEx.prototype.drawRect = function(x, y, width, height, type, reversed) {
            if (type == "center") {
                x = x - width / 2;
                y = y + height / 2;
            }
            pathObj = activeDocument.pathItems.rectangle(y, x, width, height, reversed);
        };

        PathItemsEx.prototype.drawRoundRect = function(x, y, width, height, horizontalRadius, verticalRadius, type, reversed) {
            if (type == "center") {
                x = x - width / 2;
                y = y + height / 2;
            }
            pathObj = activeDocument.pathItems.roundedRectangle(x, y, width, height, horizontalRadius, verticalRadius, reversed);
        };

        PathItemsEx.prototype.drawCircle = function(x, y, radius, type, reversed, inscribed) {
            if (type == "center") {
                x = x - radius / 2;
                y = y + radius / 2;
            }
            pathObj = activeDocument.pathItems.ellipse(y, x, radius, radius, reversed, inscribed);
        };

        PathItemsEx.prototype.drawEllipse = function(x, y, width, height, type, reversed, inscribed) {
            if (type == "center") {
                x = x - width / 2;
                y = y + height / 2;
            }
            pathObj = activeDocument.pathItems.ellipse(y, x, width, height, reversed, inscribed);
        };

        PathItemsEx.prototype.drawRegularPolygon = function(centerX, centerY, radius, sides, reversed) {
            pathObj = activeDocument.pathItems.polygon(centerX, centerY, radius, sides, reversed);
        };

        PathItemsEx.prototype.drawStar = function(centerX, centerY, radius, innerRadius, points, reversed) {
            pathObj = activeDocument.pathItems.star(centerX, centerY, radius, innerRadius, points, reversed)
        };

        PathItemsEx.prototype.drawTriangle = function(x0, y0, x1, y1, x2, y2) {
            PathItemsEx.prototype.moveTo(x0, y0);
            PathItemsEx.prototype.lineTo(x1, y1);
            PathItemsEx.prototype.lineTo(x2, y2);
            PathItemsEx.prototype.lineTo(x0, y0);
        };

        PathItemsEx.prototype.drawQuad = function(x0, y0, x1, y1, x2, y2, x3, y3) {
            PathItemsEx.prototype.moveTo(x0, y0);
            PathItemsEx.prototype.lineTo(x1, y1);
            PathItemsEx.prototype.lineTo(x2, y2);
            PathItemsEx.prototype.lineTo(x3, y3);
            PathItemsEx.prototype.lineTo(x0, y0);
        };

        PathItemsEx.prototype.drawPolygon = function(points, vertexLength, isClose) {
            PathItemsEx.prototype.moveTo(points[0].x, points[0].y);
            for (var i = 1; i < vertexLength; i++) {
                PathItemsEx.prototype.lineTo(points[i].x, points[i].y);
            }
            if (isClose) {
                PathItemsEx.prototype.lineTo(points[0].x, points[0].y);
            }
        };

        PathItemsEx.prototype.drawSmoothCurvedLine = function(points, vertex) {
            if (points.length < 1) return;
            PathItemsEx.prototype.moveCurveTo(points[0].x, points[0].y);
            var i = 1;
            while (i < vertex) {
                PathItemsEx.prototype.curveTo(points[i - 1].x, points[i - 1].y, (points[i].x + points[i - 1].x) / 2, (points[i].y + points[i - 1].y) / 2);
                i++;
            }
        };

        PathItemsEx.prototype.drawSmoothCurvedRing = function(points, vertex) {
            if (points.length < 1) return;
            var pointsLength = points.length;
            PathItemsEx.prototype.moveTo((points[0].x + points[pointsLength - 1].x) / 2, (points[0].y + points[pointsLength - 1].y) / 2);
            var i = 0;
            while (i < vertex - 1) {
                PathItemsEx.prototype.curveTo(points[i].x, points[i].y, (points[i].x + points[i + 1].x) / 2, (points[i].y + points[i + 1].y) / 2);
                i++;
            }
            PathItemsEx.prototype.curveTo(points[pointsLength - 1].x, points[pointsLength - 1].y, (points[pointsLength - 1].x + points[0].x) / 2, (points[pointsLength - 1].y + points[0].y) / 2);
        };

        PathItemsEx.prototype.drawArc = function(x, y, xRadius, yRadius, arc, startAngle) {
            if (Math.abs(arc) >= 360) arc = 360;
            var segs = Math.ceil(Math.abs(arc) / 45);
            if (segs < 1) return;
            var segAngle = arc / segs;
            var theta = -(segAngle / 180) * Math.PI;
            var angle = -(startAngle / 180) * Math.PI;
            var ax = x + Math.cos(angle) * xRadius;
            var ay = y + Math.sin(angle) * yRadius;
            PathItemsEx.prototype.moveTo(x, y);
            PathItemsEx.prototype.lineTo(ax, ay);
            for (var i = 0; i < segs; i++) {
                angle += theta;
                var angleMid = angle - (theta / 2);
                var bx = x + Math.cos(angle) * xRadius;
                var by = y + Math.sin(angle) * yRadius;
                var cx = x + Math.cos(angleMid) * (xRadius / Math.cos(theta / 2));
                var cy = y + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
                PathItemsEx.prototype.curveTo(cx, cy, bx, by);
            }
            PathItemsEx.prototype.lineCurveTo(x, y);
        };

        PathItemsEx.prototype.drawArcLine = function(x, y, xRadius, yRadius, arc, startAngle) {
            if (Math.abs(arc) >= 360) arc = 360;
            var segs = Math.ceil(Math.abs(arc) / 45);
            if (segs < 1) return;
            var segAngle = arc / segs;
            var theta = -(segAngle / 180) * Math.PI;
            var angle = -(startAngle / 180) * Math.PI;
            var ax = x + Math.cos(angle) * xRadius;
            var ay = y + Math.sin(angle) * yRadius;
            PathItemsEx.prototype.moveTo(ax, ay);
            for (var i = 0; i < segs; i++) {
                angle += theta;
                var angleMid = angle - (theta / 2);
                var bx = x + Math.cos(angle) * xRadius;
                var by = y + Math.sin(angle) * yRadius;
                var cx = x + Math.cos(angleMid) * (xRadius / Math.cos(theta / 2));
                var cy = y + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
                PathItemsEx.prototype.curveTo(cx, cy, bx, by);
            }
        };

        PathItemsEx.prototype.drawDevidedBezier = function(x1, y1, x2, y2, x3, y3, x4, y4, step) {
            step = (step != null) ? step : 0.04;
            for (var t = 0; t <= 1 + step; t += step) {
                var b1 = Math.pow((1 - t), 3);
                var b2 = 3 * t * (Math.pow((1 - t), 2));
                var b3 = 3 * Math.pow(t, 2) * (1 - t);
                var b4 = Math.pow(t, 3);
                var bx2 = b1 * x1 + b2 * x2 + b3 * x3 + b4 * x4;
                var by2 = b1 * y1 + b2 * y2 + b3 * y3 + b4 * y4;
                if (t == 0) {
                    var bx1 = bx2;
                    var by1 = by2;
                }
                PathItemsEx.prototype.drawLine(bx1, by1, bx2, by2);
                bx1 = bx2;
                by1 = by2;
            }
        }

        PathItemsEx.prototype.drawGear = function(x, y, side, innerRadius, outerRadius, angle, holeSides, holeRadius) {
            if (side < 3) return;
            var step = (Math.PI * 2) / side;
            var qtrStep = step / 4;
            var startAngle = (angle / 180) * Math.PI;
            PathItemsEx.prototype.moveTo(x + (Math.cos(startAngle) * outerRadius), y - (Math.sin(startAngle) * outerRadius));
            for (var i = 1; i <= side; i++) {
                var dx = x + Math.cos(startAngle + (step * i) - (qtrStep * 3)) * innerRadius;
                var dy = y - Math.sin(startAngle + (step * i) - (qtrStep * 3)) * innerRadius;
                PathItemsEx.prototype.lineTo(dx, dy);
                dx = x + Math.cos(startAngle + (step * i) - (qtrStep * 2)) * innerRadius;
                dy = y - Math.sin(startAngle + (step * i) - (qtrStep * 2)) * innerRadius;
                PathItemsEx.prototype.lineTo(dx, dy);
                dx = x + Math.cos(startAngle + (step * i) - qtrStep) * outerRadius;
                dy = y - Math.sin(startAngle + (step * i) - qtrStep) * outerRadius;
                PathItemsEx.prototype.lineTo(dx, dy);
                dx = x + Math.cos(startAngle + (step * i)) * outerRadius;
                dy = y - Math.sin(startAngle + (step * i)) * outerRadius;
                PathItemsEx.prototype.lineTo(dx, dy);
            }
            if (holeSides > 2) {
                step = (Math.PI * 2) / holeSides;
                PathItemsEx.prototype.moveTo(x + (Math.cos(startAngle) * holeRadius), y - (Math.sin(startAngle) * holeRadius));
                for (var n = 1; n <= holeSides; n++) {
                    dx = x + Math.cos(startAngle + (step * n)) * holeRadius;
                    dy = y - Math.sin(startAngle + (step * n)) * holeRadius;
                    PathItemsEx.prototype.lineTo(dx, dy);
                }
            }
        };

        PathItemsEx.prototype.drawGuideLine = function(x0, y0, x1, y1, strokeWidth, strokeColor, locked) {
            pathObj = activeDocument.pathItems.add();
            pathObj.setEntirePath([
                [x0, y0],
                [x1, y1]
            ]);
            pathObj.stroked = true; // 先にtrueを設定した後で線幅を指定しないとダメ
            pathObj.strokeWidth = (strokeWidth != null) ? strokeWidth : 1;
            if (strokeColor == null) {
                strokeColor = new CMYKColor();
                strokeColor.cyan = 0;
                strokeColor.magenta = 100;
                strokeColor.yellow = 0;
                strokeColor.black = 0;
            }
            option.strokeColor = strokeColor;
            pathObj.guides = true; // ガイドとして作成する
            pathObj.locked = true; // ロックする
        };

    };

    $.global.PathItemsEx = PathItemsEx;
})();