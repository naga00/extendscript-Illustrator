//@include "EPSSaveOptionsEx.jsx";

;(function(){
function FileStream() {}

FileStream.save = function() {
    if (documents.length < 1) return;
    try {
        activeDocument.save();
    } catch (error) {}
};

FileStream.saveDialog = function() {
    if (documents.length < 1) return;
    var savefile = File.saveDialog("	保存ファイル名を入れて下さい");
    if (savefile.exists) {
        var flag = confirm("	すでに同じ名前のファイルがありますが、上書きしますか？");
        if (!flag) {
            return;
        }
    }
    try {
        activeDocument.saveAs(savefile, option);
    } catch (error) {}
};

FileStream.saveAs = function(fileName, option) {
    if (documents.length < 1) return;
    var savefile = new File(fileName);
    if (savefile.exists) {
        var flag = confirm("	すでに同じ名前のファイルがありますが、上書きしますか？");
        if (!flag) {
            return;
        }
    }
    try {
        activeDocument.saveAs(savefile, option);
    } catch (error) {}
};

FileStream.exportFileDialog = function() {
    if (documents.length < 1) return;
    var savefile = File.saveDialog("保存ファイル名をいれてください", "*");
    if (savefile.exists) {
        var flag = confirm("	すでに同じ名前のファイルがありますが、上書きしますか？");
        if (!flag) {
            return;
        }
    }
    try {
        activeDocument.exportFile(savefile, type, option);
    } catch (error) {}
};

$.global.FileStream = FileStream;
})();

FileStream.exportFileAs = function(fileName, type, option) {
    if (documents.length < 1) return;
    var savefile = new File(fileName);
    if (savefile.exists) {
        var flag = confirm("	すでに同じ名前のファイルがありますが、上書きしますか？");
        if (!flag) {
            return;
        }
    }
    try {
        activeDocument.exportFile(savefile, type, option);
    } catch (error) {}
};