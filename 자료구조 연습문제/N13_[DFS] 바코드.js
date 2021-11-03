function barcode(len) {
  const isVaild = (str) => {
    for (let i = 1; i <= str.length / 2; i++) {
      const first = str.split('').reverse().join('').slice(0, i);
      const second = str.split('').reverse().join('').slice(i, i * 2);
      // 인접한 두개의 부분수열이 동일하면 false
      if (first === second) return false
    }
    return true;
  }

  const dfs = (str) => {
    if (str.length === len) return str;

    for (let num = 1; num <= 3; num++) {
      if (isVaild(str + String(num))) {
        const result = dfs(str + String(num))
        if (result) return result
      }
    }
    return null;
  }
 
  return dfs('')
}
