let longestPalindrome = function (str) {
  const len = str.length
  // const reversed = str.split('').reverse().join('');
  let result = '';
  let left;
  let right;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (str[i] === str[len - 1 - j]) {
        let tmp = '';
        left = i;
        right = j;
        while (str[left] === str[len - 1 - right] && left < len && right < len) {
          tmp += str[left];
          left++;
          right++;
        }
        // while 문 좀더 효율적이게 만들어야함
        if (result.length < tmp.length) {
          result = tmp;
          i = left - 1;
          j = right - 1;
        } 
      }
    }
  }

  return result.length
};
