(function() {
    function DocumentEx(isNewDocument, documentPreset) {
        isNewDocument = (isNewDocument != undefined) ? isNewDocument : true;
        var doc;
        if (isNewDocument) {
            doc = app.documents.addDocument(documentPreset.colorMode, documentPreset);
        } else {
            if (app.documents.length > 0) {
                doc = app.activeDocument;
            } else {
                doc = app.documents.addDocument(documentPreset.colorMode, documentPreset);
            }
        }
        doc.layers.removeAll();
        return doc;
    }

    function setBackgroundLayer(doc, color) {
        doc.views[0].zoom = 1;
        doc.layers[0].name = "background";
        var pathItemsEx = new PathItemsEx();
        pathItemsEx.setDefaultStrokeColor(color);
        pathItemsEx.setDefaultFillColor(color);
        pathItemsEx.drawRect(0, doc.height, doc.width, doc.height);
    }

    function setBackgroundLayerWithGradient(doc, colors, options) {
        options = options || {};
        doc.views[0].zoom = 1;
        doc.layers[0].name = "background";
        var rect = doc.pathItems.rectangle(doc.height, 0, doc.width, doc.height);
        var numColors = options.numColors || 2;
        var gradientType = options.gradientType || GradientType.LINEAR;
        var randomAngle = options.randomAngle !== undefined ? options.randomAngle : true;
        var angle = options.angle;
        
        ColorKit.applyGradientWithOrigin(rect, colors, doc.width/2, doc.height/2, Math.max(doc.width, doc.height), {
            numColors: numColors,
            gradientType: gradientType,
            randomAngle: randomAngle,
            angle: angle
        });
        return rect;
    }

    function addLayer(doc, name) {
        doc.layers.add();
        doc.layers[0].name = name;
    }

    $.global.DocumentEx = DocumentEx;
    $.global.setBackgroundLayer = setBackgroundLayer;
    $.global.setBackgroundLayerWithGradient = setBackgroundLayerWithGradient;
    $.global.addLayer = addLayer;
})();