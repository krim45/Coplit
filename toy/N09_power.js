// top => bottom
function power(base, exponent) {
  let result = 1;
  
  while (exponent) {
    if (exponent % 2) {
      result *= base % 94906249
      exponent--;
    }
    base *= base % 94906249;
    exponent /= 2;
  }
  
  return result % 94906249;
}

// bottom => top
function power(base, exponent) {
  let result = 1;
  let start = 0;
  
  while (exponent > start) {
    if (exponent / 2 >= start) {
      result *= result % 94906249
      start *= 2;
    }
    result *= base % 94906249;
    start++;
  }

  return result % 94906249;
}
