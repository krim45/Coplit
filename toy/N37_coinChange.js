const coinChange = function (total, coins) {
  const dp = new Array(total + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = coin; j <= total; j++) {
      dp[j] += dp[j - coin];
    }
  }
  return dp[total]
};
