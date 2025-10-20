/* 
Illustrator ExtendScript Unified Color Library
統合された色ライブラリ - ColorKit + ColorUtil + ColorEx機能
*/

(function() {

    // ===========================================
    // Color Scheme Definitions
    // ===========================================
    var colorScheme = [{
            name: 'RGB',
            colors: ['#FF0000', '#00FF00', '#0000FF']
        },
        {
            name: 'RGBGradient',
            colors: ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF', '#FF00FF', '#FF007F']
        },
        {
            name: 'CMY',
            colors: ['#0097d7', '#e5007f', '#FFF100']
        },
        {
            name: 'CMYK',
            colors: ['#0097d7', '#e5007f', '#FFF100', '#231815']
        },
        {
            name: 'PopMix',
            colors: ['#FF002E', '#FA7fEA', '#000000', '#FBB009', '#018203']
        },
        {
            name: 'Mono',
            colors: ['#000000', '#ffffff']
        },
        {
            name: 'Monet',
            colors: ['#184430', '#548150', '#DEB738', '#734321', '#852419']
        },
        {
            name: 'Picasso',
            colors: ['#ff793f', '#58a142', '#cc2323', '#b969fd', '#ffae14']
        },
        {
            name: 'Hokusai',
            colors: ['#1F284C', '#2D4472', '#6E6352', '#D9CCAC', '#ECE2C6']
        },
        {
            name: 'Warhol',
            colors: ['#F26386', '#F588AF', '#A4D984', '#FCBC52', '#FD814E']
        },
        {
            name: 'Mondrian',
            colors: ['#EAEFE9', '#E70503', '#000591', '#FDDE06', '#050103']
        },
        {
            name: 'Rothko',
            colors: ['#E49A16', '#E19713', '#D67629', '#DA6E2E', '#D85434']
        }
    ];

    // ===========================================
    // Color Conversion Functions
    // ===========================================

    // RGB→HSV変換
    function RGBtoHSV(r, g, b) {
        var cmin, cmax;
        var h = s = v = 0;
        var colorObj = new Object();
        if (r >= g) cmax = r;
        else cmax = g;
        if (b > cmax) cmax = b;
        if (r <= g) cmin = r;
        else cmin = g;
        if (b < cmin) cmin = b;
        v = cmax;
        c = cmax - cmin;
        if (cmax == 0) s = 0;
        else s = c / cmax;
        if (s != 0) {
            if (r == cmax) {
                h = (g - b) / c;
            } else {
                if (g == cmax) {
                    h = 2 + (b - r) / c;
                } else {
                    if (b == cmax) h = 4 + (r - g) / c;
                }
            }
            h = h * 60;
            if (h < 0) h = h + 360;
        }
        colorObj.h = h;
        colorObj.s = s;
        colorObj.v = v;
        return colorObj;
    }

    // HSV→RGB変換(返される値は小数値で0〜1.0)
    function HSVtoRGB(h, s, v) {
        var r = g = b = 0;
        var colorObj = new Object();
        if (s < 0) s = 0;
        if (s > 1) s = 1;
        if (v < 0) v = 0;
        if (v > 1) v = 1;
        h = h % 360;
        if (h < 0) h = h + 360;
        h = h / 60;
        var i = Math.floor(h);
        var f = h - i;
        var p1 = v * (1 - s);
        var p2 = v * (1 - s * f);
        var p3 = v * (1 - s * (1 - f));
        if (i == 0) {
            r = v;
            g = p3;
            b = p1;
        }
        if (i == 1) {
            r = p2;
            g = v;
            b = p1;
        }
        if (i == 2) {
            r = p1;
            g = v;
            b = p3;
        }
        if (i == 3) {
            r = p1;
            g = p2;
            b = v;
        }
        if (i == 4) {
            r = p3;
            g = p1;
            b = v;
        }
        if (i == 5) {
            r = v;
            g = p1;
            b = p2;
        }
        colorObj.r = r;
        colorObj.g = g;
        colorObj.b = b;
        return colorObj;
    }

    // RGB→YCbCr変換
    function RGBtoYCbCr(r, g, b) {
        var colorObj = new Object();
        colorObj.Y = 0.29891 * r + 0.58661 * g + 0.11448 * b;
        colorObj.Cb = -0.16874 * r - 0.33126 * g + 0.50000 * b;
        colorObj.Cr = 0.50000 * r - 0.41869 * g - 0.08131 * b;
        return colorObj;
    }

    // YCbCr→RGB変換 (マイナス値は0に修正する)
    function YCbCrtoRGB(Y, Cb, Cr) {
        var colorObj = new Object();
        colorObj.r = Y + 1.40200 * Cr;
        colorObj.g = Y - 0.34414 * Cb - 0.71414 * Cr;
        colorObj.b = Y + 1.77200 * Cb;
        if (colorObj.r < 0) colorObj.r = 0;
        if (colorObj.g < 0) colorObj.g = 0;
        if (colorObj.b < 0) colorObj.b = 0;
        return colorObj;
    }

    // RGB to HSL conversion
    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h * 360, s * 100, l * 100];
    }

    // HSL to RGB conversion
    function hslToRgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        var r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            var hue2rgb = function(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    // ===========================================
    // Color Format Conversion Functions
    // ===========================================

    // Hex to RGB conversion
    function hexToRGB(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    // RGB to Hex conversion
    function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // RGB to Illustrator Color (0-1 range)
    function rgbToAIColor(r, g, b) {
        var color = new RGBColor();
        color.red = r;
        color.green = g;
        color.blue = b;
        return color;
    }

    // Hex to Illustrator Color
    function hexToAIColor(hex) {
        var rgb = hexToRGB(hex);
        return rgbToAIColor(rgb[0], rgb[1], rgb[2]);
    }

    // ===========================================
    // Extended Color Constructors
    // ===========================================

    function RGBColorEx(red, green, blue) {
        var color = new RGBColor();
        color.red = red;
        color.green = green;
        color.blue = blue;
        return color;
    }

    RGBColor.prototype.create = function(red, green, blue) {
        var color = new RGBColor();
        color.red = red;
        color.green = green;
        color.blue = blue;
        return new RGBColor(red, green, blue);
    }

    RGBColor.prototype.random = function(red, green, blue) {
        red = (red != null) ? red : 255;
        green = (green != null) ? green : 255;
        blue = (blue != null) ? blue : 255;
        var color = new RGBColor();
        color.red = Math.random() * red;
        color.green = Math.random() * green;
        color.blue = Math.random() * blue;
        return color;
    }

    function CMYKColorEx(cyan, magenta, yellow, black) {
        var color = new CMYKColor();
        color.cyan = cyan;
        color.magenta = magenta;
        color.yellow = yellow;
        color.black = black;
        return color;
    }

    CMYKColor.prototype.random = function(cyan, magenta, yellow, black) {
        cyan = cyan != null ? cyan : 100;
        magenta = magenta != null ? magenta : 100;
        yellow = yellow != null ? yellow : 100;
        black = black != null ? black : 100;
        var color = new CMYKColor();
        color.cyan = Math.random() * cyan;
        color.magenta = Math.random() * magenta;
        color.yellow = Math.random() * yellow;
        color.black = Math.random() * black;
        return color;
    }

    function GrayColorEx(gray) {
        var color = new GrayColor();
        color.gray = gray;
        return color;
    }

    GrayColor.prototype.random = function(gray) {
        gray = gray != null ? gray : 100;
        var color = new GrayColor();
        color.gray = Math.random() * gray;
        return color;
    }

    function LabColorEx(l, a, b) {
        var color = new LabColor();
        color.l = l;
        color.a = a;
        color.b = b;
        return color;
    }

    LabColor.prototype.random = function(l, a, b) {
        l = (l != null) ? l : 255;
        if (!a) a = 128 - Math.random() * 256;
        if (!b) b = 128 - Math.random() * 256;
        var color = new LabColor();
        color.l = Math.random() * l;
        color.a = Math.random() * a;
        color.b = Math.random() * b;
        return color;
    }

    // ===========================================
    // Color Scheme Functions
    // ===========================================

    // Get color scheme by name
    function getColorScheme(name) {
        var lowercaseName = name.toLowerCase();
        for (var i = 0; i < colorScheme.length; i++) {
            if (colorScheme[i].name.toLowerCase() === lowercaseName) {
                return colorScheme[i];
            }
        }
        return {
            name: 'Default',
            colors: ['#ffffff', '#000000']
        };
    }

    // Get color scheme by index
    function getColorSchemeByIndex(index) {
        if (index >= 0 && index < colorScheme.length) {
            return colorScheme[index];
        }
        return {
            name: 'Default',
            colors: ['#ffffff', '#000000']
        };
    }

    // Get random color scheme
    function getRandomColorScheme() {
        var index = Math.floor(Math.random() * colorScheme.length);
        return colorScheme[index];
    }

    // Get random color from scheme
    function getRandomColorFromScheme(scheme) {
        var index = Math.floor(Math.random() * scheme.colors.length);
        return scheme.colors[index];
    }

    // Shuffle colors in scheme
    function getColorSchemeShuffledColors(name) {
        var scheme = getColorScheme(name);
        var shuffled = scheme.colors.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return {
            name: scheme.name,
            colors: shuffled
        };
    }

    // Generate color scheme from base color
    function generateColorScheme(baseColor, scheme) {
        scheme = scheme || 'complementary';
        var rgb = hexToRGB(baseColor);
        var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
        var h = hsl[0],
            s = hsl[1],
            l = hsl[2];
        var colors = [];

        switch (scheme) {
            case 'complementary':
                colors = [
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 180) % 360, s, l))
                ];
                break;
            case 'analogous':
                colors = [
                    rgbToHex.apply(null, hslToRgb((h - 30 + 360) % 360, s, l)),
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 30) % 360, s, l))
                ];
                break;
            case 'triadic':
                colors = [
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 120) % 360, s, l)),
                    rgbToHex.apply(null, hslToRgb((h + 240) % 360, s, l))
                ];
                break;
            case 'tetradic':
                colors = [
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 90) % 360, s, l)),
                    rgbToHex.apply(null, hslToRgb((h + 180) % 360, s, l)),
                    rgbToHex.apply(null, hslToRgb((h + 270) % 360, s, l))
                ];
                break;
            default:
                colors = [baseColor];
        }

        return colors;
    }

    // ===========================================
    // Illustrator Integration Functions
    // ===========================================

    // Apply color to path item
    function applyColorToPath(pathItem, hexColor, isFill) {
        var color = hexToAIColor(hexColor);
        if (isFill) {
            pathItem.filled = true;
            pathItem.fillColor = color;
        } else {
            pathItem.stroked = true;
            pathItem.strokeColor = color;
        }
    }

    // Create gradient from color array
    function createGradient(colors, name) {
        var doc = app.activeDocument;
        var gradient = doc.gradients.add();
        gradient.name = name || "Custom Gradient";
        gradient.type = GradientType.LINEAR;

        // Remove default gradient stops
        while (gradient.gradientStops.length > 0) {
            gradient.gradientStops[0].remove();
        }

        // Add color stops
        var step = 100 / (colors.length - 1);
        for (var i = 0; i < colors.length; i++) {
            var stop = gradient.gradientStops.add();
            stop.rampPoint = i * step;
            stop.color = hexToAIColor(colors[i]);
        }

        return gradient;
    }

    // Apply gradient to path
    function applyGradientToPath(pathItem, gradient, angle) {
        angle = angle || 0;
        pathItem.filled = true;

        var gradientColor = new GradientColor();
        gradientColor.gradient = gradient;
        gradientColor.angle = angle;

        pathItem.fillColor = gradientColor;
    }

    // Example usage function
    function exampleUsage() {
        if (!app.documents.length) {
            alert("Please open a document first.");
            return;
        }

        var doc = app.activeDocument;
        var scheme = getColorScheme("Monet");

        // Create rectangles with scheme colors
        var startX = 100;
        var startY = 100;
        var size = 100;

        for (var i = 0; i < scheme.colors.length; i++) {
            var rect = doc.pathItems.rectangle(startY, startX + (i * size), size, size);
            applyColorToPath(rect, scheme.colors[i], true);
        }

        alert("Created " + scheme.colors.length + " rectangles with " + scheme.name + " color scheme!");
    }

    // ===========================================
    // Export Public API
    // ===========================================
    $.global.ColorKit = {
        // Color Scheme Functions
        getColorScheme: getColorScheme,
        getColorSchemeByIndex: getColorSchemeByIndex,
        getRandomColorScheme: getRandomColorScheme,
        getRandomColorFromScheme: getRandomColorFromScheme,
        getColorSchemeShuffledColors: getColorSchemeShuffledColors,
        generateColorScheme: generateColorScheme,

        // Color Conversion Functions
        RGBtoHSV: RGBtoHSV,
        HSVtoRGB: HSVtoRGB,
        RGBtoYCbCr: RGBtoYCbCr,
        YCbCrtoRGB: YCbCrtoRGB,
        rgbToHsl: rgbToHsl,
        hslToRgb: hslToRgb,

        // Format Conversion Functions
        hexToRGB: hexToRGB,
        rgbToHex: rgbToHex,
        hexToAIColor: hexToAIColor,
        rgbToAIColor: rgbToAIColor,

        // Illustrator Integration Functions
        applyColorToPath: applyColorToPath,
        createGradient: createGradient,
        applyGradientToPath: applyGradientToPath,

        // Extended Color Constructors
        RGBColorEx: RGBColorEx,
        CMYKColorEx: CMYKColorEx,
        GrayColorEx: GrayColorEx,
        LabColorEx: LabColorEx,

        // Utility Functions
        exampleUsage: exampleUsage
    };

    // Backward compatibility - export individual modules
    $.global.ColorUtil = {
        RGBtoHSV: RGBtoHSV,
        HSVtoRGB: HSVtoRGB,
        RGBtoYCbCr: RGBtoYCbCr,
        YCbCrtoRGB: YCbCrtoRGB
    };
    $.global.RGBColorEx = RGBColorEx;
    $.global.CMYKColorEx = CMYKColorEx;
    $.global.GrayColorEx = GrayColorEx;
    $.global.LabColorEx = LabColorEx;

})();