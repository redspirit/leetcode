/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) {
        return target > nums[0] ? 1 : 0;
    }
    let p1 = 0;
    let p2 = nums.length - 1;
    let res = 0;

    do {
        let mid = Math.floor((p1 + p2) / 2);
        let val = nums[mid];

        if (val === target) {
            res = mid;
            break;
        }

        if (target > val) {
            p1 = mid;
        } else {
            p2 = mid;
        }

        if (p2 - p1 <= 1) {
            if (target > nums[p2]) {
                res = p2 + 1;
            } else if (target > nums[p1]) {
                res = p2;
            } else {
                res = p1;
            }
            break;
        }
    } while (true)

    return res;
};

console.log(searchInsert([1,3], 0)); // 0
console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,2,5,6], 7)); // 4
console.log(searchInsert([2,4], 3)); // 1
