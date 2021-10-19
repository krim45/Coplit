// dfs
const powerSet = function (str) {
  // 중복 원소 없으니 모든 경우의 수는 2^(letter.length) => 해당 문자를 포함 or 미포함이므로 각 문자 마다 2가지 경우의 수
  // 중복 제거 및 순서 정렬
  const letter = str.split('').filter((v, i , a) => v !== a[i - 1]).sort();
  const subSets = [];

  const dfs = (idx, subset) => {
    if (idx === letter.length) {
      subSets.push(subset);
      return;
    }

    // 해당 문자 포함하지 않을 때
    dfs(idx + 1, subset);

    // 해당 문자 포함할 때
    dfs(idx + 1, subset + letter[idx]);
  }

  dfs(0, '');

  return subSets.sort();
};


// 순열 알고리즘
const powerSet = function (str) {
  // 중복 제거, 순서 정렬된 문자를 담은 배열
  const letter = str.split('').sort().filter((v, i, a) => v !== a[i - 1]);
  const arr = [''];

  const getPermutation = (arr, len) => {
    if (len === 1) return arr.map(v => [v]);
    const result = [];

    arr.forEach((fixed, idx, arr) => {
      const sliceArr = arr.slice(idx + 1);
      const newPermu = getPermutation(sliceArr, len - 1);
      const permuatations = newPermu.map(permu => [fixed, ...permu]);
      result.push(...permuatations);
    })

    return result
  }

  for (let i = 1; i <= str.length; i++) {
    arr.push(...getPermutation(letter, i).map(arr => arr.join('')))
  }

  return arr.sort();
};
