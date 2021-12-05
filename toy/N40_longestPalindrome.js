// refactoring solution O(N*N)
const longestPalindrome = function (str) {
  const reversed = str.split('').reverse().join('');
  const len = str.length
  let result = '';

  for (let left = 0; left < len; left++) {
    let leftIdx = left;
    let tmp = '';

    for (let right = 0; right < len; right++) {
      if (str[leftIdx] === reversed[right] && leftIdx < len) {
        tmp += str[leftIdx];
        leftIdx++;

        if (result.length < tmp.length) {
          result = tmp;
        }
      } else {
        leftIdx = left
        tmp = ''
      }
    }
  }

  return result.length
};

// naive solution O(N*N)
const longestPalindrome = function (str) {
  const reversed = str.split('').reverse().join('');
  const len = str.length;
  let result = '';

  for (let left = 0; left < len; left++) {
    for (let right = 0; right < len; right++) {
      if (str[left] === reversed[right]) {
        let leftIdx = left;
        let tmp = '';

        while (str[leftIdx] === reversed[right] && right < len) {
          tmp += str[leftIdx];
          leftIdx++;
          right++;
        }

        if (result.length < tmp.length) {
          result = tmp;
        }
      }
    }
  }

  return result.length
};
