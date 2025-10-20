(function() {

    // Random utility functions
    function random(min, max) {
        if (typeof max === 'undefined') {
            // random(max) - returns 0 to max
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    }

    function randomInt(min, max) {
        if (typeof max === 'undefined') {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Array utility functions

    // 配列のシャッフル
    function shuffleArray(array) {
        var arr = array.slice(); // コピーを作成
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    // 配列のリピート複製
    function repeatArray(array, repeatCount) {
        repeatCount = repeatCount || 3;
        var result = [];
        for (var i = 0; i < repeatCount; i++) {
            for (var j = 0; j < array.length; j++) {
                result.push(array[j]);
            }
        }
        return result;
    }

    // 配列からランダムに1つの要素を取得して返す関数
    function getRandomElementFromArray(array) {
        if (!array || array.length === 0) {
            return null;
        }
        var randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    // ランダムな偶数を取得
    function randomEvenInt(minNum, maxNum) {
        if (minNum % 2 !== 0) minNum++;
        if (maxNum % 2 !== 0) maxNum--;
        if (minNum > maxNum) return null;
        var randomEven = minNum + 2 * Math.floor(Math.random() * ((maxNum - minNum) / 2 + 1));
        return randomEven;
    }

    // ランダムな奇数を取得
    function randomOddInt(minNum, maxNum) {
        if (minNum % 2 === 0) minNum++;
        if (maxNum % 2 === 0) maxNum--;
        if (minNum > maxNum) return null;
        var randomOdd = minNum + 2 * Math.floor(Math.random() * ((maxNum - minNum) / 2 + 1));
        return randomOdd;
    }

    // 整数numの約数を昇順で一覧と数を返す
    function divisor(num) {
        var results = [];
        var sqrt = Math.floor(Math.sqrt(num));
        for (var i = 1; i <= sqrt; i++) {
            if (num % i === 0) {
                results.push(i);
                if (i !== num / i) {
                    results.push(num / i);
                }
            }
        }
        results.sort(function(a, b) {
            return a - b;
        });
        return {
            divisors: results,
            count: results.length
        };
    }

    // 乱数が指定されたしきい値以下であるかどうかを判定する
    function isRandomBelowThreshold(threshold) {
        threshold = threshold || 0.1;
        return Math.random() < threshold;
    }

    // 数を限定した配列を返す
    function getArrayWithLimitedLength(array, limit) {
        var maxLength = (typeof limit === 'undefined') ? array.length : Math.min(array.length, limit);
        return array.slice(0, maxLength);
    }

    // 0から指定された上限値までの乱数による角度(ラジアン)を生成する
    function getRandomAngleInRadians(maxAngle) {
        maxAngle = maxAngle || (Math.PI * 2);
        return Math.random() * maxAngle;
    }

    // 指定された数のステップから、ランダムな角度(ラジアン)を生成する
    function getRandomStepAngleInRadians(numSteps, minAngle, maxAngle) {
        minAngle = minAngle || 0;
        maxAngle = maxAngle || (Math.PI * 2);

        if (numSteps <= 0) {
            throw new Error('numSteps must be a positive number');
        }
        if (minAngle >= maxAngle) {
            throw new Error('minAngle must be less than maxAngle');
        }

        var angleRange = maxAngle - minAngle;
        var stepAngle = angleRange / numSteps;
        var randomStep = Math.floor(Math.random() * numSteps);
        return minAngle + (randomStep * stepAngle);
    }

    // 2点間の角度（ラジアン）を計算する関数
    function getAngleBetweenPoints(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    }

    // 配列の最後に指定した要素を追加し、配列の先頭と末尾を接続したような円形(循環)の配列を作成する関数
    function circularizeElements(array, element) {
        var circularArray = array.slice();
        circularArray.push(element);
        return circularArray;
    }

    // 指定した数だけ元の配列の要素を繰り返し使用して新しい配列を生成する関数
    function assignCycleElements(array, count) {
        if (!array || array.length === 0) {
            return [];
        }
        var result = [];
        for (var i = 0; i < count; i++) {
            var index = i % array.length;
            result.push(array[index]);
        }
        return result;
    }

    // 指定した数だけ元の配列からランダムに要素を選択して新しい配列を生成する関数
    function assignRandomElements(array, count) {
        if (!array || array.length === 0) {
            return [];
        }
        var result = [];
        for (var i = 0; i < count; i++) {
            var randomIndex = Math.floor(Math.random() * array.length);
            result.push(array[randomIndex]);
        }
        return result;
    }

    // 重み付けされた確率に基づいて要素を選択し、指定した数だけ新しい配列を生成する関数
    function assignWeightedElements(array, weights, count) {
        if (!array || array.length === 0) {
            return [];
        }

        var fullWeights = weights.slice();
        while (fullWeights.length < array.length) {
            fullWeights.push(1);
        }

        var totalWeight = 0;
        for (var i = 0; i < fullWeights.length; i++) {
            totalWeight += fullWeights[i];
        }

        var result = [];
        for (var i = 0; i < count; i++) {
            var randomNum = Math.random() * totalWeight;
            var chosenElement;
            for (var j = 0; j < array.length; j++) {
                randomNum -= fullWeights[j];
                if (randomNum <= 0) {
                    chosenElement = array[j];
                    break;
                }
            }
            result.push(chosenElement);
        }
        return result;
    }

    // 元の配列の要素をできるだけ均等に使用して、指定した数だけ新しい配列を生成する関数
    function assignBalancedElements(array, count) {
        if (!array || array.length === 0) {
            return [];
        }

        var result = [];
        var elementCounts = {};
        for (var i = 0; i < array.length; i++) {
            elementCounts[array[i]] = 0;
        }

        for (var i = 0; i < Math.min(array.length, count); i++) {
            result.push(array[i]);
            elementCounts[array[i]]++;
        }

        for (var i = array.length; i < count; i++) {
            var leastUsedElement = null;
            var minCount = Infinity;
            for (var key in elementCounts) {
                if (elementCounts[key] < minCount) {
                    minCount = elementCounts[key];
                    leastUsedElement = key;
                }
            }
            result.push(leastUsedElement);
            elementCounts[leastUsedElement]++;
        }
        return result;
    }

    // 閾値に基づいて0または指定値をランダムに返す関数
    function getRandomBinary(threshold, value) {
        return (Math.random() > threshold) ? 0 : value;
    }

    // 小さい値が出やすいランダム関数
    function skewed(min, max, exponent) {
        exponent = exponent || 2;
        var r = 1 - Math.random();
        var skew = Math.pow(r, exponent);
        return min + skew * (max - min);
    }

    // 大きい値が出やすいランダム関数
    function skewedHigh(min, max, exponent) {
        exponent = exponent || 2;
        var r = Math.random();
        var skew = Math.pow(r, exponent);
        return min + skew * (max - min);
    }

    // 整数バージョン
    function skewedInt(min, max, exponent) {
        return Math.floor(skewed(min, max + 0.999, exponent));
    }

    // 大きい値が出やすい整数バージョン
    function skewedHighInt(min, max, exponent) {
        return Math.floor(skewedHigh(min, max + 0.999, exponent));
    }

    // 三角分布（より単純なランダム分布）
    function triangular(min, max) {
        var r1 = random(min, max);
        var r2 = random(min, max);
        return Math.min(r1, r2);
    }

    // 三角分布の整数バージョン
    function triangularInt(min, max) {
        return Math.floor(triangular(min, max + 0.999));
    }

    // Box-Muller変換を使用したガウス分布
    function randomGaussian(mean, stdDev) {
        mean = mean || 0;
        stdDev = stdDev || 1;

        var u1 = Math.random();
        var u2 = Math.random();
        var z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        return z0 * stdDev + mean;
    }

    // ガウス分布を使ったランダム関数
    function gaussian(min, max, skewFactor) {
        skewFactor = skewFactor || 0.3;
        var mean = min + (max - min) * skewFactor;
        var stdDev = (max - min) / 3;
        var val;
        var attempts = 0;
        do {
            val = randomGaussian(mean, stdDev);
            attempts++;
        } while ((val < min || val > max) && attempts < 100);

        // 100回試行しても範囲内に収まらない場合は、範囲内に制限
        return Math.max(min, Math.min(max, val));
    }

    // ガウス分布の整数バージョン
    function gaussianInt(min, max, skewFactor) {
        return Math.floor(gaussian(min, max + 0.999, skewFactor));
    }

    $.global.UtilKit = {
        // Random
        random: random,
        randomInt: randomInt,
        randomEvenInt: randomEvenInt,
        randomOddInt: randomOddInt,
        isRandomBelowThreshold: isRandomBelowThreshold,
        getRandomBinary: getRandomBinary,
        randomGaussian: randomGaussian,
        gaussian: gaussian,
        gaussianInt: gaussianInt,
        skewed: skewed,
        skewedHigh: skewedHigh,
        skewedInt: skewedInt,
        skewedHighInt: skewedHighInt,
        triangular: triangular,
        triangularInt: triangularInt,

        // Array helpers
        shuffleArray: shuffleArray,
        repeatArray: repeatArray,
        getRandomElementFromArray: getRandomElementFromArray,
        getArrayWithLimitedLength: getArrayWithLimitedLength,
        circularizeElements: circularizeElements,
        assignCycleElements: assignCycleElements,
        assignRandomElements: assignRandomElements,
        assignWeightedElements: assignWeightedElements,
        assignBalancedElements: assignBalancedElements,

        // Geometry / Math
        divisor: divisor,
        getRandomAngleInRadians: getRandomAngleInRadians,
        getRandomStepAngleInRadians: getRandomStepAngleInRadians,
        getAngleBetweenPoints: getAngleBetweenPoints
    };
})();