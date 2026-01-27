var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    const currentMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(val, currentMin));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Input[("MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin")][
//   ([], [-2], [0], [-3], [], [], [], [])
// ];

// Output[(null, null, null, null, -3, null, 0, -2)];

var obj = new MinStack();
