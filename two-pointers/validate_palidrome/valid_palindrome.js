/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const rawString = s
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  if (rawString === "") return true;

  const arr = rawString.split("");

  var l = 0;
  var r = arr.length - 1;

  while (l < r) {
    if (arr[l] === arr[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
};

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplana c analpanama" is a palindrome.

console.log(isPalindrome("ab_a"));
