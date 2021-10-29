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
