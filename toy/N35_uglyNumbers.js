// solution O(N)
const uglyNumbers = function (n) {
  let ugly = [1];
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;
  
  while (ugly.length <= n) {
    let mul2 = ugly[idx2] * 2;
    let mul3 = ugly[idx3] * 3;
    let mul5 = ugly[idx5] * 5
    let nextMinNum = Math.min(mul2, mul3, mul5);
    ugly[ugly.length] = nextMinNum;

    if (nextMinNum === mul2) idx2++
    if (nextMinNum === mul3) idx3++
    if (nextMinNum === mul5) idx5++
  }
  return ugly[n - 1]
};

// naive solution
const uglyNumbers = function (n) {
  let ugly = [1];
  let num = 2;

  while (ugly.length <= n) {
    let tmp = num;
    while (tmp % 2 === 0) {
      tmp /= 2;
    }
    while (tmp % 3 === 0) {
      tmp /= 3;
    }
    while (tmp % 5 === 0) {
      tmp /= 5;
    }
    if (tmp === 1) {
      ugly[ugly.length] = num;
    }
    num++
  }
  return ugly[n - 1]
};
