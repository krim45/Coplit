// refactoring! max, min 나누지 않음
const inequalityNumber = function (signs) {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const arr = signs.split(' ');
  let isUsed = new Array(10).fill(false);

  const isVaild = (str) => {
    if (str.length === 1) return true;

    for (let i = 0; i < str.length - 1; i++) {
      if (arr[i] === '>' && Number(str[i]) <= Number(str[i + 1])) return false
      if (arr[i] === '<' && Number(str[i]) >= Number(str[i + 1])) return false
    }
    return true;
  }

  const dfs = (str, digits) => {
    if (str.length === arr.length + 1) return str;
    
    for (let i = 0; i < digits.length; i++) {
      const num = digits[i];
      if (isVaild(str + num) && !isUsed[num]) {
        isUsed[num] = true;
        const result = dfs(str + num, digits);
        if (result) return result
        isUsed[num] = false;
      }
    }
    return null
  }

  const max = dfs('', digits);
  isUsed = new Array(10).fill(false);
  const min = dfs('', digits.reverse());

  return max - min
};

// max, min을 나눠서 작성
const inequalityNumber = function (signs) {
  let isUsed = new Array(10).fill(false);
  let arr = signs.split(' ');
  let max;
  let min;

  const isVaild = (str) => {
    if (str.length === 1) return true;
    for (let i = 0; i < str.length - 1; i++) {
      if (arr[i] === '>') {
        const result = Number(str[i]) > Number(str[i + 1]);
        if (!result) return false
      }
      if (arr[i] === '<') {
        const result = Number(str[i]) < Number(str[i + 1]);
        if (!result) return false
      }
    }
    return true;
  }

  const dfsMax = (str) => {
    if (str.length === arr.length + 1) {
      return str;
    }

    for (let num = 9; num >= 0; num--) {
      if (isVaild(str + num) && !isUsed[num]) {
        isUsed[num] = true;
        const result = dfsMax(str + num);
        if (result) {
          return result
        }
        isUsed[num] = false;
      }
    }
    return null
  }

  const dfsMin = (str) => {
    if (str.length === arr.length + 1) {
      return str;
    }

    for (let num = 0; num <= 9; num++) {
      if (isVaild(str + num) && !isUsed[num]) {
        isUsed[num] = true;
        const result = dfsMin(str + num);
        if (result) {
          return result
        }
        isUsed[num] = false;
      }
    }
    return null
  }

  max = dfsMax('');
  isUsed = new Array(10).fill(false);
  min = dfsMin('');

  return max - min
};
