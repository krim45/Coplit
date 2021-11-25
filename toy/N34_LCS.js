const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  let head = 0;
  let max = 0;

  for (let i = 0; i < M; i++) {
    for (let j = head; j < N; j++) {
      if (str1[i] === str2[j]) {
        head = j + 1;
        max += 1;
        i++;
      }
    }
  }
  return max
};
