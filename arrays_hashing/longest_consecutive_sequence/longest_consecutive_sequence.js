// @ts-nocheck
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var map = new Map();

  const unique = [...new Set(nums)];

  unique.sort((a, b) => a - b);

  var arr = [];
  var length = 0;

  for (let i = 0; i < unique.length; i++) {
    const currentValue = unique[i];
    const nextValue = unique[i + 1];

    if (nextValue - currentValue === 1) {
      arr.push(currentValue);
      length++;
    } else {
      arr.push(currentValue);
      length++;
      map.set(arr, length);

      //reset
      length = 0;
      arr = [];
    }
  }

  // get max length in map
  var maxLength = 0;
  for (let [key, value] of map.entries()) {
    if (value > maxLength) {
      maxLength = value;
    }
  }

  return maxLength;
};

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
