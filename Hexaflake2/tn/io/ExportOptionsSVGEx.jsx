(function(){
    function ExportOptionsSVGEx(embedRasterImages, embedAllFonts, documentEncoding, fontType, fontSubsetting, compressed, requireDocumentPassword, documentPassword) {
        var option = new ExportOptionsSVG();
        option.embedRasterImages = (embedRasterImages != null) ? embedRasterImages : true; // 画像を埋め込む時はtrue
        option.embedAllFonts = (embedAllFonts != null) ? embedAllFonts : true; // フォントを埋め込まない時はfalse
        option.documentEncoding = (documentEncoding != null) ? documentEncoding : SVGDocumentEncoding.UTF8; // 文字コードはUTF-8
        option.fontType = (fontType != null) ? fontType : SVGFontType.OUTLINEFONT; // アウトラインにする
        option.fontSubsetting = (fontSubsetting != null) ? fontSubsetting : SVGFontSubsetting.GLYPHSUSED;
        option.compressed = (compressed != null) ? compressed : false; // 圧縮する場合はtrue	
        option.requireDocumentPassword = false; // 開くときにパスワードが必要
        option.documentPassword = "";
        return option;
    }

    $.global.ExportOptionsSVGEx = ExportOptionsSVGEx;
})();