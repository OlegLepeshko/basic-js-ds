const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  elements = []
  push(el) {
    this.elements.push(el)
  }

  pop() {
    return this.elements.pop()
  }

  peek() {
    let lastEl = this.elements[this.elements.length - 1]
    return lastEl
  }
}

module.exports = {
  Stack
};
