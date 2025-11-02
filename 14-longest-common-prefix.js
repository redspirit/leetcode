/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let firstStr = strs[0];
    if (strs.length === 1) return firstStr;
    let maxLen = 0;
    let isBreaked = false;

    for (let k = 0; k < firstStr.length; k++) {
        let isSame = true;
        let char = firstStr[k];
        for (let i = 1; i < strs.length; i++) {
            if (char !== strs[i][k]) {
                isSame = false;
                break;
            }
        }

        if (!isSame) {
            maxLen = k;
            isBreaked = true;
            break;
        }
    }

    return firstStr.slice(0, isBreaked ? maxLen : firstStr.length);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower'])); // ""
