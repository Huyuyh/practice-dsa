// @ts-nocheck
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Input: nums = [1,1,1,2,2,3], k = 2
//Output: [1, 2]
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const d of nums) {
    map.set(d, (map.get(d) ?? 0) + 1);
  }

  const entries = [...map.entries()];

  entries.sort((a, b) => b[1] - a[1]);

  const topValues = entries.map(entry => entry[0]).slice(0, k);

  return topValues;
};

console.log(topKFrequent([3, 0, 1, 0], 1));