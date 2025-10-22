(function() {
    GuidePathItems.pathItems;
    GuidePathItems.stroked;
    GuidePathItems.strokeColor;
    GuidePathItems.guides;
    GuidePathItems.locked;

    function GuidePathItems() {
        GuidePathItems.initialize();
        GuidePathItems.prototype.setStroked(true);
        GuidePathItems.prototype.setStrokeWidth(1);
        var strokeColor = new CMYKColor();
        strokeColor.cyan = 0;
        strokeColor.magenta = 0;
        strokeColor.yellow = 0;
        strokeColor.black = 0;
        GuidePathItems.prototype.setStrokeColor(strokeColor);
        GuidePathItems.prototype.setGuides(true);
        GuidePathItems.prototype.setLocked(true);
    }

    GuidePathItems.initialize = function() {
        var documentObj = app.activeDocument;

        GuidePathItems.prototype.add = function() {
            pathItems = documentObj.pathItems.add();
            pathItems.stroked = GuidePathItems.stroked;
            pathItems.strokeWidth = GuidePathItems.strokeWidth;
            pathItems.strokeColor = GuidePathItems.strokeColor;
            pathItems.guides = GuidePathItems.guides;
            pathItems.locked = GuidePathItems.locked;
            return pathItems;
        };

        GuidePathItems.prototype.removeAll = function() {
            pathItems.removeAll();
        }

        GuidePathItems.prototype.setStroked = function(stroked) {
            GuidePathItems.stroked = stroked;
        };

        GuidePathItems.prototype.setStrokeWidth = function(strokeWidth) {
            GuidePathItems.strokeWidth = strokeWidth;
        };

        GuidePathItems.prototype.setStrokeColor = function(strokeColor) {
            GuidePathItems.strokeColor = strokeColor;
        };

        GuidePathItems.prototype.setGuides = function(guides) {
            GuidePathItems.guides = guides;
        };

        GuidePathItems.prototype.setLocked = function(locked) {
            GuidePathItems.locked = locked;
        };
    };

    $.global.GuidePathItems = GuidePathItems;
})();