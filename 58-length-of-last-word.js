/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let count = 0;
    for (let n = s.length - 1; n >= 0; n--) {
        if (s[n] === ' ') {
            break;
        } else {
            count++
        }
    }
    return count;
};