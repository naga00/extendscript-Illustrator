(function() {
    var ver = app.version;
    var verList = ver.split(".");
    if (parseInt(verList[0]) < 14) {
        alert("Illustrator CS4以前では動作しません");
        return;
    }
})();