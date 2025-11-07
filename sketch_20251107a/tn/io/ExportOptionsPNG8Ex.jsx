(function(){
    function ExportOptionsPNG8Ex(transparency, antiAliasing, colorCount, colorDither, artBoardClipping, horizontalScale, verticalScale, interlaced, matter, matteColor, saveAsHTML) {
        var option = new ExportOptionsPNG8();
        option.transparency = (transparency != null) ? transparency : true; // 透明OFF
        option.antiAliasing = (antiAliasing != null) ? antiAliasing : true; // アンチエイリアス ON
        option.colorCount = (colorCount != null) ? colorCount : 256; // 16色で書き出し
        option.colorDither = (colorDither != null) ? colorDither : ColorDitherMethod.NOREDUCTION; // 誤差拡散
        option.artBoardClipping = (artBoardClipping != null) ? artBoardClipping : true; // アートボード内だけを保存
        option.horizontalScale = (horizontalScale != null) ? horizontalScale : 100; // 水平の割合
        option.verticalScale = (verticalScale != null) ? verticalScale : 100; // 縦方向の割合
        option.interlaced = (interlaced != null) ? interlaced : false; // インターレースOFF
        option.matter = (matter != null) ? matter : true; // マットカラー（背景色）を付ける
        if (matteColor == null) {
            matteColor = new RGBColor();
            matteColor.r = 0;
            matteColor.g = 0;
            matteColor.b = 0;
        }
        option.matteColor = matteColor;
        option.saveAsHTML = (saveAsHTML != null) ? saveAsHTML : false; // HTMLファイルも同時に保存しない
        return option;
    }

    $.global.ExportOptionsPNG8Ex = ExportOptionsPNG8Ex;
})();