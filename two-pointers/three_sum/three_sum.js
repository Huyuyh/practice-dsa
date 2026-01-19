// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums.length) return [];

  const target = 0;
  var sortedNums = nums.sort((a, b) => a - b);

  var i = 0;
  var j = i + 1;
  var k = sortedNums.length - 1;

  const map = new Map();

  while (i < k) {
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];

      if (sum === target) {
        const item = [sortedNums[i], sortedNums[j], sortedNums[k]];

        const key = item.join(",");
        if (!map.has(key)) {
          map.set(key, item);
        }

        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
    i++;
    j = i + 1;
    k = sortedNums.length - 1;
  }

  return [...map.values()];
};

// Input: nums = [-1, 0, 1, 2, -1, -4];
// Output: [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];

console.log(threeSum([0, 0, 0, 0]));
