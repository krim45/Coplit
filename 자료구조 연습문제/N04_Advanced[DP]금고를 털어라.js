function ocean(target, type) {
  const DP = new Array(target + 1).fill(0);
  for (let i = 0; i < type.length; i++) {
    DP[type[i]] += 1;
    for (let j = type[i] + 1; j <= target; j++) {
      DP[j] += DP[j - type[i]];
    }
  }
  return DP[target];
}
