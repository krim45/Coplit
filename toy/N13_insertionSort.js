// refactoring
// 조금 더 삽입 정렬의 원리와 맞게 코드를 수정
const insertionSort = function (arr, callback = (value) => value) {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (callback(arr[j]) > callback(target)) {
        arr[j + 1] = arr[j];
        arr[j] = target;
      } else {
        break;
      }
    }
  }
  return arr
};

// first solution
const insertionSort = function (arr, callback = (value) => value) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (callback(arr[j - 1]) > callback(arr[j])) {
        let tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      } else {
        break;
      }
    }
  }

  return arr
};
