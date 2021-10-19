const binarySearch = function (arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    // target이 중간값 보다 왼쪽에 위치
    else if (arr[mid] > target) {
      max = mid - 1;
    }
    // target이 중간값 보다 오른쪽에 위치
    else {
      min = mid + 1;
    }
  }

  return -1
};
