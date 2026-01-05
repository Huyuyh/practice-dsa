// @ts-nocheck
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var twoSum = nums[i] + nums[j];
      if (twoSum == target) return [i, j];
    }
  }

  return [];
};

twoSum([3, 2, 4], 6);