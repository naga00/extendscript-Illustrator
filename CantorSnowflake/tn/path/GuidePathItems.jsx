(function() {
    GuidePathItems.pathItems;
    GuidePathItems.stroked;
    GuidePathItems.strokeColor;
    GuidePathItems.guides;
    GuidePathItems.locked;

    function GuidePathItems() {
        this.pathItems = null;
        this.stroked = true;
        this.strokeWidth = 1;
        this.strokeColor = null;
        this.guides = true;
        this.locked = true;
        GuidePathItems.initialize();
        this.setStroked(true);
        this.setStrokeWidth(1);
        var strokeColor = new CMYKColor();
        strokeColor.cyan = 0;
        strokeColor.magenta = 0;
        strokeColor.yellow = 0;
        strokeColor.black = 0;
        this.setStrokeColor(strokeColor);
        this.setGuides(true);
        this.setLocked(true);
    }

    GuidePathItems.initialize = function() {
        var documentObj = app.activeDocument;

        GuidePathItems.prototype.add = function() {
            this.pathItems = documentObj.pathItems.add();
            this.pathItems.stroked = this.stroked;
            this.pathItems.strokeWidth = this.strokeWidth;
            this.pathItems.strokeColor = this.strokeColor;
            this.pathItems.guides = this.guides;
            this.pathItems.locked = this.locked;
            return this.pathItems;
        };

        GuidePathItems.prototype.removeAll = function() {
            this.pathItems.removeAll();
        }

        GuidePathItems.prototype.setStroked = function(stroked) {
            this.stroked = stroked;
        };

        GuidePathItems.prototype.setStrokeWidth = function(strokeWidth) {
            this.strokeWidth = strokeWidth;
        };

        GuidePathItems.prototype.setStrokeColor = function(strokeColor) {
            this.strokeColor = strokeColor;
        };

        GuidePathItems.prototype.setGuides = function(guides) {
            this.guides = guides;
        };

        GuidePathItems.prototype.setLocked = function(locked) {
            this.locked = locked;
        };
    };

    $.global.GuidePathItems = GuidePathItems;
})();