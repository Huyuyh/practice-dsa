/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = ["+", "-", "*", "/"];

  var stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (operators.includes(token)) {
      var result = 0;
      const fPop = stack.pop();
      const sPop = stack.pop();

      if (token === "+") {
        result = sPop + fPop;
      } else if (token === "-") {
        result = sPop - fPop;
      } else if (token === "*") {
        result = sPop * fPop;
      } else {
        result = Math.trunc(sPop / fPop);
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[stack.length - 1];
};

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// console.log(evalRPN(["4", "13", "5", "/", "+"]));

// console.log(
//   evalRPN([
//     "10",
//     "6",
//     "9",
//     "3",
//     "+",
//     "-11",
//     "*",
//     "/",
//     "*",
//     "17",
//     "+",
//     "5",
//     "+",
//   ]),
// );

console.log(evalRPN(["2", "1", "+", "3", "*"]));
