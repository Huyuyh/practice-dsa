// @ts-nocheck
/**
 * @param {string[]} strs
 * @return {string[][]}
 * @description 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const s of strs) {
    const sortedString = s.split("").sort().join("");
    if (map.has(sortedString)) {
      map.get(sortedString).push(s);
    } else {
      map.set(sortedString, [s])
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))