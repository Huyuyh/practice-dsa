// Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      const removeE = stack.pop();
      const mapE = map[ch];
      if (removeE !== mapE) return false;
    }
  }
  return stack.length === 0;
}

// Input: s = "()[]{}";
// Output: true;

// console.log(isValid("()[]{}"));

console.log(isValid("([{}])"));

// console.log(isValid("({[}])"));
