/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function findDuplicates(numbers) {
  const distinctArr = [...new Set(numbers)];

  return distinctArr.length !== numbers.length;
}

console.log(findDuplicates([10, 7, 0, 0, 9]));
