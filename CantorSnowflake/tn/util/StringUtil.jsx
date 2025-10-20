;(function(){
function StringUtil() {}


// -----------------------------------------------------------------------
// 日本語ファイル名を変換する関数 (MacOS Xのみ。Windowsは不要)
// -----------------------------------------------------------------------
StringUtil.prototype.convertKana = function(filename) {
    var dakuten = "%E3%82%99";
    var handakuten = "%E3%82%9A";
    filename = convertKanaSub(File.encode(filename), dakuten, 1);
    filename = convertKanaSub(filename, handakuten, 2);
    return File.decode(filename);
};

// 日本語ファイル名変換サブ処理
StringUtil.prototype.convertKanaSub = function(srcName, code, count) {
    srcName = srcName.replace(/%E3%82%BF%E3%82%99/g, "%E3%83%80"); // ダだけ特殊処理
    var text = srcName.split(code); // 濁点
    for (var i = 0; i < text.length - 1; i++) {
        var str = text[i];
        if (str == "") continue;
        var body = str.substring(0, str.length - 2);
        var footL = str.substring(str.length - 2, str.length);
        var hexL = eval("0x" + footL) + count;
        hexL = hexL.toString(16).toUpperCase();
        text[i] = body + hexL;
    }
};

$.global.StringUtil = StringUtil;
})();