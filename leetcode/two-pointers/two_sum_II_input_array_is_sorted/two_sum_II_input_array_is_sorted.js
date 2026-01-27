//167. Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (!numbers.length) return [];

  var i = 0;

  while (i < numbers.length - 1) {
    for (let j = i + 1; j < numbers.length; j++) {
      const numI = numbers[i];
      const numJ = numbers[j];

      if (numI + numJ === target) {
        return [i + 1, j + 1];
      }
    }

    i++;
  }

  return [];
};

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

console.log(twoSum([5, 25, 75], 100));
