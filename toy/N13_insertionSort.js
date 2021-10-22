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
