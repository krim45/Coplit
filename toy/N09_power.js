// top down
function power(base, exponent) {
  let result = 1;
  
  while (exponent) {
    if (exponent % 2) {
      result = result * base % 94906249
      exponent--;
    }
    base = base * base % 94906249;
    exponent /= 2;
  }
  
  return result;
}
