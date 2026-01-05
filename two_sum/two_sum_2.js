// @ts-nocheck
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];

    if (map.has(value)) {
      return [map.get(value), i];
    }
    map.set(nums[i], i)
  }

  return [];
};

console.log(twoSum([3, 2, 4], 6));