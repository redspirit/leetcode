const { performance } = require('perf_hooks');

function getDigit(number, position) {
    return Math.floor(Math.abs(number) / 10 ** (position - 1)) % 10;
}

function digitsCount(number) {
    const n = Math.abs(number);
    if (n < 10) return 1;
    if (n < 100) return 2;
    if (n < 1000) return 3;
    if (n < 10000) return 4;
    if (n < 100000) return 5;
    if (n < 1000000) return 6;
    if (n < 10000000) return 7;
    if (n < 100000000) return 8;
    if (n < 1000000000) return 9;
    if (n < 10000000000) return 10;
    return Math.floor(Math.log10(n)) + 1;
}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    let digits = digitsCount(x);

    let isPal = true;
    for (let i = 1; i <= Math.floor(digits / 2); i++) {
        if (getDigit(x, i) != getDigit(x, digits - i + 1)) {
            isPal = false;
            break;
        }
    }

    return isPal;
};

var isPalindromeOld = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    let arr = x.toString().split('');
    let lastIndex = arr.length - 1;

    let isPal = true;
    for (let i = 0; i <= Math.ceil(lastIndex / 2); i++) {
        if (arr[i] != arr[lastIndex - i]) {
            isPal = false;
            break;
        }
    }

    return isPal;
};

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false

const testNumbers = [
    0, 5, 99, 123, 9999, 123456, 45038453, 999999999, 1234567890, 9999999999, 123456789012345,
];

const iterations = 10000000;

function runBenchmark() {
    console.log(`Тестирование на ${iterations.toLocaleString()} итераций\n`);

    const results = {};

    // Тестируем каждую функцию
    const functions = {
        Новая: isPalindrome,
        Старая: isPalindromeOld,
    };

    for (const [name, func] of Object.entries(functions)) {
        const start = performance.now();

        for (let i = 0; i < iterations; i++) {
            // Тестируем на разных числах для объективности
            const num = testNumbers[i % testNumbers.length];
            func(num);
        }

        const time = performance.now() - start;
        results[name] = time;
        console.log(`${name}: ${time.toFixed(2)}ms`);
    }

    // Находим самый быстрый
    const fastest = Object.entries(results).reduce((a, b) => (a[1] < b[1] ? a : b));
    console.log(`\n🥇 Самый быстрый: ${fastest[0]} (${fastest[1].toFixed(2)}ms)`);

    console.log(`\nОтносительная производительность:`);
    Object.entries(results).forEach(([name, time]) => {
        console.log(`${name}: ${(time / fastest[1]).toFixed(2)}x`);
    });
}

runBenchmark();
