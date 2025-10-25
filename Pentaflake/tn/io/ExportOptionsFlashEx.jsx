(function(){
    function ExportOptionsFlashEx(generateHTML, resolution, frameRate, convertTextToOutlines, exportVersion) {
        var option = new ExportOptionsFlash();
        option.generateHTML = (generateHTML != null) ? generateHTML : false;
        option.resolution = (resolution != null) ? resolution : 72; // 出力解像度
        option.frameRate = (frameRate != null) ? frameRate : 15; // フレームレート(15fps)
        option.convertTextToOutlines = (convertTextToOutlines != null) ? convertTextToOutlines : true; // 文字はアウトライン化する
        option.exportVersion = (exportVersion != null) ? exportVersion : FlashExportVersion.FLASHVERSION9;
        return option;
    }

    $.global.ExportOptionsFlashEx = ExportOptionsFlashEx;
})();