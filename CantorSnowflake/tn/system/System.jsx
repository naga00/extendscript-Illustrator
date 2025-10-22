(function(){
    function System() {}

    System.trace = function(value) {
        alert(value);
    };

    System.save = function() {
        if (documents.length > 0) {
            try {
                activeDocument.save();
            } catch (error) {}
        }
    };

    System.saveAs = function(fileName) {
        var fileObj = new File(fileName);
        if (fileObj.exists) {
            var flag = confirm("	すでに同じ名前のファイルがありますが、上書きしますか？");
            if (!flag) {
                return;
            }
        }
        activeDocument.saveAs(fileObj);
    };

    System.saveDialog = function(fileName) {
        if (documents.length > 0) {
            try {
                activeDocument.save();
            } catch (error) {
                var fileObj = File.saveDialog("	保存ファイル名を入れて下さい");
                if (fileObj) {
                    activeDocument.saveAs(fileObj);
                }
            }
        }
    };

    System.showFontList = function() {
        var txt = "";
        for (var i = 0; i < app.textFonts.length; i++) {
            var txt = txt + app.textFonts[i].family + " " + app.textFonts[i].style + "\r";
        }
        var txtObj = app.activeDocument.textFrames.add();
        txtObj.contents = txt;
    };

    $.global.System = System;
})();