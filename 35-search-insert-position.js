/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0;
    let p1 = 0;
    let p2 = nums.length - 1;
    let res = 0;
    let i = 0;

    do {
        let mid = Math.round((p1 + p2) / 2);
        let val = nums[mid];
        if (val === target) {
            res = mid;
            break;
        }
        if (p2 - p1 <= 1) {
            res = mid;
            console.log('p1=',p1, 'p2=',p2);
            break;
        }
        if (target > val) {
            p1 = mid;
            console.log('>', {val, mid, p1, p2});
        } else {
            p2 = mid;
            console.log('<', {val, mid, p1, p2});
        }
        i++;
        if (i > 5) break;
    } while (true)

    return res;
};

//console.log(searchInsert([1,3,5,6], 5)); // 2
//console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4