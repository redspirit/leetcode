/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const uniqueValues = new Set(nums);
    let i = 0;

    for (const value of uniqueValues) {
        nums[i] = value;
        i++;
    }

    return i;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));