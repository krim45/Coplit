const LIS = function (arr) {
  const dp = new Array(arr.length).fill(1);
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    for (let j = 0; j < i; j++) {
      if (arr[j] < curVal) {
        if (dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1
        }
      }
    }
    if (max < dp[i]) max = dp[i];
  }
  return max
};
