(function() {

    function random(min, max) {
        if (typeof max === 'undefined') {
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

    function shuffleArray(array) {
        var arr = array.slice();
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

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

    function getRandomElementFromArray(array) {
        if (!array || array.length === 0) {
            return null;
        }
        var randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function randomEvenInt(minNum, maxNum) {
        if (minNum % 2 !== 0) minNum++;
        if (maxNum % 2 !== 0) maxNum--;
        if (minNum > maxNum) return null;
        var randomEven = minNum + 2 * Math.floor(Math.random() * ((maxNum - minNum) / 2 + 1));
        return randomEven;
    }

    function randomOddInt(minNum, maxNum) {
        if (minNum % 2 === 0) minNum++;
        if (maxNum % 2 === 0) maxNum--;
        if (minNum > maxNum) return null;
        var randomOdd = minNum + 2 * Math.floor(Math.random() * ((maxNum - minNum) / 2 + 1));
        return randomOdd;
    }

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

    function isRandomBelowThreshold(threshold) {
        threshold = threshold || 0.1;
        return Math.random() < threshold;
    }

    function getArrayWithLimitedLength(array, limit) {
        var maxLength = (typeof limit === 'undefined') ? array.length : Math.min(array.length, limit);
        return array.slice(0, maxLength);
    }

    function getRandomAngleInRadians(maxAngle) {
        maxAngle = maxAngle || (Math.PI * 2);
        return Math.random() * maxAngle;
    }

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

    function getAngleBetweenPoints(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    }

    function circularizeElements(array, element) {
        var circularArray = array.slice();
        circularArray.push(element);
        return circularArray;
    }

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

    function getRandomBinary(threshold, value) {
        return (Math.random() > threshold) ? 0 : value;
    }

    function skewed(min, max, exponent) {
        exponent = exponent || 2;
        var r = 1 - Math.random();
        var skew = Math.pow(r, exponent);
        return min + skew * (max - min);
    }

    function skewedHigh(min, max, exponent) {
        exponent = exponent || 2;
        var r = Math.random();
        var skew = Math.pow(r, exponent);
        return min + skew * (max - min);
    }

    function skewedInt(min, max, exponent) {
        return Math.floor(skewed(min, max + 0.999, exponent));
    }

    function skewedHighInt(min, max, exponent) {
        return Math.floor(skewedHigh(min, max + 0.999, exponent));
    }

    function triangular(min, max) {
        var r1 = random(min, max);
        var r2 = random(min, max);
        return Math.min(r1, r2);
    }

    function triangularInt(min, max) {
        return Math.floor(triangular(min, max + 0.999));
    }

    function randomGaussian(mean, stdDev) {
        mean = mean || 0;
        stdDev = stdDev || 1;

        var u1 = Math.random();
        var u2 = Math.random();
        var z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        return z0 * stdDev + mean;
    }

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

        return Math.max(min, Math.min(max, val));
    }

    function gaussianInt(min, max, skewFactor) {
        return Math.floor(gaussian(min, max + 0.999, skewFactor));
    }

    $.global.UtilKit = {
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

        shuffleArray: shuffleArray,
        repeatArray: repeatArray,
        getRandomElementFromArray: getRandomElementFromArray,
        getArrayWithLimitedLength: getArrayWithLimitedLength,
        circularizeElements: circularizeElements,
        assignCycleElements: assignCycleElements,
        assignRandomElements: assignRandomElements,
        assignWeightedElements: assignWeightedElements,
        assignBalancedElements: assignBalancedElements,

        divisor: divisor,
        getRandomAngleInRadians: getRandomAngleInRadians,
        getRandomStepAngleInRadians: getRandomStepAngleInRadians,
        getAngleBetweenPoints: getAngleBetweenPoints
    };
})();