/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (i !== sortedNumbers[i]) {
      return i;
    }
  }

  return sortedNumbers.length;
}

// Input: numbers = [1, 3, 0];
// Output: 2;

console.log(findMissingNumberInSequence([1, 3, 0]));

// Best solution
// Don't use sort
/**
 * @param {number[]} numbers
 * @return {number}
 */
export function findMissingNumberInSequenceV2(numbers) {
  let expectedSum = 0;
  const n = numbers.length;

  // Calculate the expected sum of all numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    expectedSum += i;
  }

  // Calculate the actual sum of elements in the array
  let actualSum = 0;
  for (const num of numbers) {
    actualSum += num;
  }

  // Return the missing number (expected sum - actual sum)
  return expectedSum - actualSum;
}
