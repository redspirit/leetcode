/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length < 2) return false;
    let stack = [];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (brackets[ch]) {
            stack.push(ch);
        } else {
            let last = stack.pop();
            if (ch !== brackets[last]) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('((')); // false
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([])')); // true
console.log(isValid('([)]')); // false
