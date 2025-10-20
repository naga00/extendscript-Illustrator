(function() {
    function DocumentEx(isNewDocument, documentPreset) {
        isNewDocument = (isNewDocument != undefined) ? isNewDocument : true;
        var doc;
        if (isNewDocument) {
            doc = documents.addDocument(documentPreset.colorMode, documentPreset);
        } else {
            if (app.documents.length > 0) {
                doc = app.documents[0];
            } else {
                doc = app.documents.addDocument(documentPreset.colorMode, documentPreset);
            }
        }
        doc.layers.removeAll();
        return doc;
    }

    Document.prototype.addBackground = function(color) {
        this.views[0].zoom = 1;
        this.layers[0].name = "background";
        var pathItemsEx = new PathItemsEx();
        pathItemsEx.setDefaultStrokeColor(color);
        pathItemsEx.setDefaultFillColor(color);
        pathItemsEx.drawRect(0, activeDocument.height, activeDocument.width, activeDocument.height);
        this.layers[0].locked = true;
    }

    Document.prototype.addBackgroundLayer = function() {
        this.views[0].zoom = 1
        this.layers[0].name = "background";
    };

    Document.prototype.removeBackgroundLayer = function() {
        this.layers.remove("background");
    };

    Document.prototype.getLayer = function(name) {
        return this.layers.getByName(name);
    };

    Document.prototype.addLayer = function(name) {
        this.layers.add();
        this.layers[0].name = name;
    };

    Document.prototype.removeLayer = function(name) {
        this.layers.remove(name);
    };

    $.global.DocumentEx = DocumentEx;
})();