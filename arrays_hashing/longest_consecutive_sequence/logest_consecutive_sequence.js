/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let maxSeq = 0;
  const mySet = new Set(nums);

  for (const num of mySet) {
    const check = !mySet.has(num - 1);
    if (check) {
      let temp = num;
      let tempSeq = 1;
      while (mySet.has(temp + 1)) {
        tempSeq++;
        temp++;
      }

      maxSeq = Math.max(maxSeq, tempSeq);
    }
  }

  return maxSeq;
};

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
