/*
//@include "tn/path/GuideItems.jsx";

var guideItems new GuideItems();
guideItems.drawFitGuideX(10);
guideItems.drawFitGuideY(10);
guideItems.drawFitGuide(10, 10);
guideItems.drawGuideMiddleX();
guideItems.drawGuideMiddleY();
guideItems.drawGuideMiddle();
guideItems.drawGuideMarginLeft(10);
guideItems.drawGuideMarginRight(10);
guideItems.drawGuideMarginTop(10);
guideItems.drawGuideMarginBottom(10);
guideItems.drawGuideMarginLR(10);
guideItems.drawGuideMarginTB(10);
guideItems.drawGuideMarginCenter(10, 10);
*/

//@include "GuidePathItems.jsx";

(function(){
GuideItems.prototype.guidePathItems;

function GuideItems() {
    GuideItems.initialize();
}

GuideItems.initialize = function() {
    guidePathItems = new GuidePathItems();
    guidePathItems.setLocked(false);

    GuideItems.prototype.drawFitGuideX = function(divideX) {
        var stepX = activeDocument.width / divideX;
        for (var i = 0; i <= divideX; i++) {
            var x = i * stepX;
            pathItems = guidePathItems.add();
            pathItems.setEntirePath([
                [x, 0],
                [x, activeDocument.height]
            ]);
        }
    };

    GuideItems.prototype.drawFitGuideY = function(divideY) {
        var stepY = activeDocument.height / divideY;
        for (var i = 0; i <= divideY; i++) {
            var y = i * stepY;
            pathItems = guidePathItems.add();
            pathItems.setEntirePath([
                [0, y],
                [activeDocument.width, y]
            ]);
        }
    };

    GuideItems.prototype.drawFitGuide = function(divideX, divideY) {
        GuideItems.prototype.drawFitGuideX(divideX);
        GuideItems.prototype.drawFitGuideY(divideY);
    };

    GuideItems.prototype.drawGuideMiddleX = function() {
        pathItems = guidePathItems.add();
        var middleX = activeDocument.width / 2;
        pathItems.setEntirePath([
            [middleX, 0],
            [middleX, activeDocument.height]
        ]);
    };

    GuideItems.prototype.drawGuideMiddleY = function() {
        pathItems = guidePathItems.add();
        var middleY = activeDocument.height / 2;
        pathItems.setEntirePath([
            [0, middleY],
            [activeDocument.width, middleY]
        ]);
    };

    GuideItems.prototype.drawGuideMiddle = function() {
        GuideItems.prototype.drawGuideMiddleX();
        GuideItems.prototype.drawGuideMiddleY();
    };

    GuideItems.prototype.drawGuideMarginLeft = function(w) {
        pathItems = guidePathItems.add();
        pathItems.setEntirePath([
            [w, 0],
            [w, activeDocument.height]
        ]);
    };

    GuideItems.prototype.drawGuideMarginRight = function(w) {
        pathItems = guidePathItems.add();
        var x = activeDocument.width - w;
        pathItems.setEntirePath([
            [x, 0],
            [x, activeDocument.height]
        ]);
    };

    GuideItems.prototype.drawGuideMarginTop = function(h) {
        pathItems = guidePathItems.add();
        pathItems.setEntirePath([
            [0, h],
            [activeDocument.width, h]
        ]);
    };

    GuideItems.prototype.drawGuideMarginBottom = function(h) {
        pathItems = guidePathItems.add();
        var y = activeDocument.height - h;
        pathItems.setEntirePath([
            [0, y],
            [activeDocument.width, y]
        ]);
    };

    GuideItems.prototype.drawGuideMarginLR = function(w) {
        GuideItems.prototype.drawGuideMarginLeft(w);
        GuideItems.prototype.drawGuideMarginRight(w);
    };

    GuideItems.prototype.drawGuideMarginTB = function(h) {
        GuideItems.prototype.drawGuideMarginTop(h);
        GuideItems.prototype.drawGuideMarginBottom(h);
    };

    GuideItems.prototype.drawGuideMarginCenter = function(w, h) {
        GuideItems.prototype.drawGuideMarginLR(w);
        GuideItems.prototype.drawGuideMarginTB(h);
    };


};

$.global.GuideItems = GuideItems;
})();