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
        doc.layers[0].locked = true;
    }

    function addLayer(doc, name) {
        doc.layers.add();
        doc.layers[0].name = name;
    }

    $.global.DocumentEx = DocumentEx;
    $.global.setBackgroundLayer = setBackgroundLayer;
    $.global.addLayer = addLayer;
})();