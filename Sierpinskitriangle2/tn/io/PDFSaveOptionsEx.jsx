(function(){
    function PDFSaveOptionsEx(trimMarks, compatibility, generateThumbnails) {
        var option = new PDFSaveOptions();
        option.trimMarks = (trimMarks != null) ? trimMarks : false; // トリムマークあり
        option.compatibility = (compatibility != null) ? compatibility : PDFCompatibility.ACROBAT7;
        option.generateThumbnails = (generateThumbnails != null) ? generateThumbnails : true;
        return option;
    }

    $.global.PDFSaveOptionsEx = PDFSaveOptionsEx;
})();