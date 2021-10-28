const swap = (idx1, idx2, arr) => {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

const quickSort = function (arr, callback = (value) => value) {
  const quick = (left, right) => {
    if (left >= right) return;

    // 가장 작은 인덱스를 pivot으로 설정
    let low = left;
    let high = right;
    let pivot = callback(arr[low]);

    while (left < right) {
      // 왼쪽부터 pivot 보다 큰 요소를 찾는다.
      while (left < high && callback(arr[left]) <= pivot) {
        left++;
      }
      // 오른쪽부터 pivot 보다 작거나 같은 요소를 찾는다.
      while (low < right && pivot < callback(arr[right])) {
        right--;
      }
      // 왼쪽 큰 값 인덱스가 오른쪽 작은 값 인덱스보다 작으면 스왑
      if (left < right) {
        swap(left, right, arr);
      }
    }
    // pivot 인덱스보다 오른쪽 작은 값 인덱스가 크면 스왑
    if (low < right) {
      swap(low, right, arr)
    }
    // pivot 기준으로 양쪽을 다시 정렬
    quick(low, right - 1);
    quick(right + 1, high);

    return arr
  }

  return quick(0, arr.length - 1)
};
