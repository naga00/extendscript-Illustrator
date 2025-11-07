(function() {
    /**
     * 左上原点のY座標を、IllustratorのスクリプトAPIが期待する座標に変換
     * 
     * @param {Number} y - 左上原点でのY座標（y=0が上端、y=heightが下端）
     * @returns {Number} 変換後のY座標（符号反転した値）
     * 
     * 説明：
     * IllustratorのスクリプトAPI（ellipse、rectangle等）は、左上原点の座標系を使用しているが、
     * Y軸の方向が通常とは逆（上向きが正、下向きが負）になっている。
     * そのため、左上原点でのY座標を符号反転させる必要がある。
     * 
     * 例：y = 1000 の場合
     * - convertY(1000) = -1000
     * - これにより、左上原点での座標が正しく変換される
     */
    function convertY(y) {
        return -y;
    }

    $.global.convertY = convertY;
})();

