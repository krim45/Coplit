const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const dp = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(0));

  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[M][N]
};
