/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var defaultLength = nums.length;

  let setNums = new Set(nums);

  let distinctNums = [...setNums];

  return distinctNums.length === defaultLength ? false : true;
};