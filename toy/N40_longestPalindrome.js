const longestPalindrome = function (str) {
  const reversed = str.split('').reverse().join('');
  const len = str.length
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
