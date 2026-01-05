/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

  // 1) answer[i] = product of all elements to the LEFT of i
  answer[0] = 1; // nothing on the left of index 0
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // 2) Multiply by product of elements to the RIGHT of i
  let suffix = 1; // running product of elements to the right
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * suffix;
    suffix *= nums[i]; // update suffix for next step to the left
  }

  return answer;
};
