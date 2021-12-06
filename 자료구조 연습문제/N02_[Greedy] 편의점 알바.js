function partTimeJob(k) {
  const coins = [500, 100, 50, 10, 5, 1];
  let count = 0;

  for (let coin of coins) {
    if (k > 0) {
      const cnt = Math.floor(k / coin);
      k -= coin * cnt
      count += cnt;
    }
  }
  return count
}

// naive
function partTimeJob(k) {
  let coins = 0;

  while (k > 0) {
    if (k >= 500) {
      const count = Math.floor(k / 500);
      k -= count * 500;
      coins += count;
    }
    if (k >= 100) {
      const count = Math.floor(k / 100);
      k -= count * 100;
      coins += count;
    }
    if (k >= 50) {
      const count = Math.floor(k / 50);
      k -= count * 50;
      coins += count;
    }
    if (k >= 10) {
      const count = Math.floor(k / 10);
      k -= count * 10;
      coins += count;
    }
    if (k >= 5) {
      const count = Math.floor(k / 5);
      k -= count * 5;
      coins += count;
    }
    if (k >= 1) {
      const count = Math.floor(k / 1);
      k -= count * 1;
      coins += count;
    }
  }
  return coins
}
