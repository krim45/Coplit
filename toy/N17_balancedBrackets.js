// refactoring
const balancedBrackets = function (str) {
  const stack = [];
  const brackets = {
    '(': 'push',
    '{': 'push',
    '[': 'push',
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (let letter of str) {
    if (brackets[letter] === 'push') {
      stack.push(letter);
    }
    else if (letter in brackets) {
      const top = stack.pop();
      if (top !== brackets[letter]) return false;
    }
  }

  return stack.length === 0
};


// naive
const balancedBrackets = function (str) {
  const stack = [];

  for (let letter of str) {
    if (letter === '(' || letter === '{' || letter === '[') {
      stack.push(letter);
    }
    if (letter === ')') {
      if (stack[stack.length - 1] !== '(') return false;
      stack.pop();
    }
    else if (letter === '}') {
      if (stack[stack.length - 1] !== '{') return false;
      stack.pop();
    }
    else if (letter === ']') {
      if (stack[stack.length - 1] !== '[') return false;
      stack.pop();
    }
  }

  return stack.length === 0
};
