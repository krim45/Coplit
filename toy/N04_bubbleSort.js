// naive solution
const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

// 버블 정렬 advanced
const bubbleSort = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let isSorted = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSorted = false;
      }
    }

    if (isSorted === true) return arr
  }
  return arr
};

// 삽입 정렬
const InsertSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (target < arr[j]) {
        arr[j+1] = arr[j];
        arr[j] = target;
      }else{
        break;
      }
    }
  }
  return arr;
};
