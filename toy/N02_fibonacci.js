const fibo = [0, 1];

function fibonacci(n) {
  if (n > 1) {
    fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
  }
  
  return fibo[n] !== undefined ? fibo[n] : fibonacci(n)
}
