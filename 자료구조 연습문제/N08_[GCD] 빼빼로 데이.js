function divideChocolateStick(M, N) {
  const gcd = (a, b) => {
    if (a % b === 0) {
      return b
    }
    return gcd(b, a % b)
  }

  const GCD = gcd(M, N);
  const result = [];

  for (let i = 1; i <= Math.sqrt(GCD); i++) {
    if (GCD % i === 0) {
      result.push([i, M / i, N / i]);
      
      if (i * i < GCD) {
        const num = GCD / i
        result.push([num, M / num, N / num]);
      }
    }
  }

  return result.sort((a, b) => a[0] - b[0])
}
