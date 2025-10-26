(function(){
    function ExportOptionsJPEGEx(antiAliasing, artBoardClipping, horizontalScale, verticalScale, matter, matteColor, optimization, qualitySetting, saveAsHTML) {
        var option = new ExportOptionsJPEG();
        option.antiAliasing = (antiAliasing != null) ? antiAliasing : true; // アンチエイリアス ON
        option.artBoardClipping = (artBoardClipping != null) ? artBoardClipping : true; // アートボード内だけを保存
        option.horizontalScale = (horizontalScale != null) ? horizontalScale : 100; // 水平の割合
        option.verticalScale = (verticalScale != null) ? verticalScale : 100; // 縦方向の割合
        option.matter = (matter != null) ? matter : false; // マットカラー（背景色）を付ける
        if (matteColor == null) {
            matteColor = new RGBColor();
            matteColor.r = 0;
            matteColor.g = 0;
            matteColor.b = 0;
        }
        option.matteColor = matteColor;
        option.optimization = (optimization != null) ? optimization : true;
        option.qualitySetting = (qualitySetting != null) ? qualitySetting : 100; // 画像品質
        option.saveAsHTML = (saveAsHTML != null) ? saveAsHTML : false; // HTMLファイルも同時に保存しない
        return option;
    }

    $.global.ExportOptionsJPEGEx = ExportOptionsJPEGEx;
})();