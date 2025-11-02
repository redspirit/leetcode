/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;
    let lastChar;

    // IV=4 and IX=9
    // XL=40 and XC=90
    // CD=400 and CM=900

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if ((char === 'V' || char === 'X') && lastChar === 'I') sum -= 2;
        if ((char === 'L' || char === 'C') && lastChar === 'X') sum -= 20;
        if ((char === 'D' || char === 'M') && lastChar === 'C') sum -= 200;
        sum += map[char];
        lastChar = char;
    }

    return sum;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('CCCD')); // 58
console.log(romanToInt('MCMXCIV')); // 1994