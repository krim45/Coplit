// better way
const quickSort = function (arr, callback = (value) => value) {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (callback(arr[i]) < callback(pivot)) left.push(arr[i])
    else right.push(arr[i])
  }
  
  left = quickSort(left, callback);
  right = quickSort(right, callback);

  return [...left, pivot, ...right];
};


// naive
const swap = (idx1, idx2, arr) => {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

const quickSort = function (arr, callback = (value) => value, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  let low = left;
  let high = right;
  let pivot = arr[low];  // 가장 작은 인덱스를 pivot으로 설정

  while (left < right) {
    // 왼쪽부터 pivot 보다 큰 요소를 찾는다.
    while (left < high && callback(arr[left]) <= callback(pivot)) {
      left++;
    }
    // 오른쪽부터 pivot 보다 작은 요소를 찾는다.
    while (low < right && callback(pivot) <= callback(arr[right])) {
      right--;
    }
    // 왼쪽 큰 값 인덱스가 오른쪽 작은 값 인덱스보다 작으면 스왑
    if (left < right) {
      swap(left, right, arr);
    }
  }
  // pivot의 위치 정렬
  swap(low, right, arr)

  // pivot 기준으로 양쪽을 다시 정렬
  quickSort(arr, callback, low, right - 1);
  quickSort(arr, callback, right + 1, high);

  return arr
};
