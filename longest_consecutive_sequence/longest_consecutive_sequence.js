// @ts-nocheck
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var map = new Map();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {

  }

  return nums;
};

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));