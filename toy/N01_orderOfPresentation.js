function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1);
}

function orderOfPresentation (N, K) {
  let data = [...K].sort((a,b) => a - b);
  let order = 0;

  for (let i = 0; i < N; i++) {
    order += data.indexOf(K[i]) * factorial(data.length - 1);
    data.splice(data.indexOf(K[i]), 1);
  }

  return order
}
