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
        // 「いいえ」が選択されたら処理しない
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



/*
function save(fileName) {
	var file = new File(workPath+fileName+".ai");
	app.activeDocument.saveAs(file);
}

function saveEPS(fileName) {
	var file = new File(workPath+fileName+".eps");
	var newSaveOptions = new EPSSaveOptions();
	newSaveOptions.compatibility = Compatibility.ILLUSTRATOR8;
	newSaveOptions.preview = EPSPreview.COLORTIFF;
	app.activeDocument.saveAs(file, newSaveOptions);
}

function fontName() {
	sel = activeDocument.selection;
	for(var i=0; i<sel.length; i++) {
		txtRange = sel[i].textRange();
		alert(txtRange.characters[0].font);
	}
}
*/




/*
function deb(text) {
	pd = activeDocument.textArtItems.add();
	pd.contents = text;
	var x = 0;
	var y = 0;
	pd.position = [x, y];
	pd.width = 20;
	pd.height = 20;
}

*/

/*
function fontList() {
	var fontListFile = workPath + "/fontList.txt";
	var newFile = new File(fontListFile);
	newFile.open("write");
	for(var i=0; i<TextFaces.length; i++) {
		newFile.writeln("¥'" + Textfaces[i].name + "¥'");
	}
	newFile.close();

	if(newFile.exists) {
		alert("Font List : " + fontListFile);
	}
}
*/
//fontList();