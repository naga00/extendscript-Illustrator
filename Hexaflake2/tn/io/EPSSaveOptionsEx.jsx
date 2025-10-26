(function(){
    function EPSSaveOptionsEx(cmykPostScript, compatibility, compatibleGradientPrinting, embedAllFonts, embedLinkedFiles, flattenOuput, includeDocumentThumbnails, overprint, postScript, preview) {
        var option = new EPSSaveOptions();
        option.cmykPostScript = (cmykPostScript != null) ? cmykPostScript : true; // CMYKポストスクリプト
        option.compatibility = (compatibility != null) ? compatibility : Compatibility.ILLUSTRATOR14;
        option.compatibleGradientPrinting = (compatibleGradientPrinting != null) ? compatibleGradientPrinting : false; // コンパチブルグラデーション＆グラデーションメッシュプリント
        option.embedAllFonts = (embedAllFonts != null) ? embedAllFonts : false; // フォントの埋め込み(trueなら埋め込み)
        option.embedLinkedFiles = (embedLinkedFiles != null) ? embedLinkedFiles : true; // リンクファイルの埋め込み(配置した画像を含む)
        option.flattenOuput = (flattenOuput != null) ? flattenOuput : OutputFlattening.PRESERVEPATHS; // 透明化の処理
        option.includeDocumentThumbnails = (includeDocumentThumbnails != null) ? includeDocumentThumbnails : true; // サムネールの作成
        option.overprint = (overprint != null) ? overprint : PDFOverprint.PRESERVEPDFOVERPRINT;
        option.postScript = (postScript != null) ? postScript : EPSPostScriptLevelEnum.LEVEL3; // PostScript Level 3
        option.preview = (preview != null) ? preview : EPSPreview.None; // EPSプレビューなし
        return option;
    }

    $.global.EPSSaveOptionsEx = EPSSaveOptionsEx;
})();