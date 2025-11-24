/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* one-pass hash table
   time complexity: O(n)
   space complexity: O(n)
*/
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return []
};

/* two-pass complexity
   time complexity: O(n)
   space complexity: O(n)
   
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)]
        }
    }
    return []
};
*/

/* brute force
   time complexity: O(n^2)
   space complecity: O(1)

var twoSum = function (nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (target - nums[x] == nums[y])
                return [x, y]
        }
    }
    return []
};
*/