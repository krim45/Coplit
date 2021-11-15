// solution 2
const LSCS = function (arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max
};

// solution 1
const LSCS = function (arr) {
  const dp = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + arr[i];
  }
  
  return Math.max(...dp)
};
