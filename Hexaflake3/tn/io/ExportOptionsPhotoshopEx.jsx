(function(){
    function ExportOptionsPhotoshopEx(antiAliasing, editableText, embedICCProfile, imageColorSpace, maximumEditability, resolution, warnings, writeLayers) {
        var option = new ExportOptionsPhotoshop();
        option.antiAliasing = (antiAliasing != null) ? antiAliasing : true; // アンチエイリアス ON
        option.editableText = (editableText != null) ? editableText : true; // テキストをテキストレイヤーに変換するかどうか
        option.embedICCProfile = (embedICCProfile != null) ? embedICCProfile : false; // ICCプロファイルを埋め込むか
        option.imageColorSpace = (imageColorSpace != null) ? imageColorSpace : ImageColorSpace.CMYK; // カラーモード
        option.maximumEditability = (maximumEditability != null) ? maximumEditability : true; // 編集機能を最大限に保持する 
        option.resolution = (resolution != null) ? resolution : 72; // 解像度(72〜2400)
        option.warnings = (warnings != null) ? warnings : true; // 出力設定警告
        option.writeLayers = (writeLayers != null) ? writeLayers : true; // レイヤーとして書き出す
        return option;
    }

    $.global.ExportOptionsPhotoshopEx = ExportOptionsPhotoshopEx;
})();