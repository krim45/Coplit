// 조합을 이용한 풀이
const largestProductOfThree = function (arr) {
  // 조합 arr.length_C_3로 가질 수 있는 배열을 전부 구한 후 이 배열의 각 요소를 곱한 값을 비교해 최대값 구한다.
  const getCombination = (arr, combiLength) => {
    let result = [];
    if (combiLength === 1) return arr.map(v => [v])

    arr.forEach((fixedNum, idx, arr) => {
      const sliceArr = arr.slice(idx + 1);
      const restCombi = getCombination(sliceArr, combiLength - 1);
      const combination = restCombi.map((combi) => [fixedNum, ...combi]);
      result.push(...combination);
    });

    return result
  }

  const board = getCombination(arr, 3);
  const multiArr = board.map((arr) => arr.reduce((acc, cur) => acc * cur, 1));

  return Math.max(...multiArr);
};

// 수학적 풀이
const largestProductOfThree = function (arr) {
  const sortedArr = arr.sort((a, b) => a- b);
  const len = arr.length;
  // 최대값 3개 곱하는 경우
  const max1 = sortedArr[len - 1] * sortedArr[len - 2] * sortedArr[len - 3];
  // 음수 최대값 2개와 양수 최대값 1개를 곱하는 경우
  const max2 = sortedArr[len - 1] * sortedArr[0] * sortedArr[1];

  return Math.max(max1, max2);
};
