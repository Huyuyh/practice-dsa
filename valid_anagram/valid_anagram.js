// @ts-nocheck
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var sSorted = s.split('').sort().join('');
  var tSorted = t.split('').sort().join('');

  return sSorted == tSorted;
};

var s = "anagram";
var t = "nagaram";

console.log(isAnagram(s, t));
