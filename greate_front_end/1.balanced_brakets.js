/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  const array = str.split("");
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  var stack = [];

  for (var i = 0; i < array.length; i++) {
    const item = array[i];

    if (item === "(" || item === "{" || item === "[") {
      stack.push(item);
    } else {
      const mapItem = map[item];
      const topItem = stack[stack.length - 1];

      if (topItem === mapItem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
