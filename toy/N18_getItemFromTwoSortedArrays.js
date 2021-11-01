const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  if (k === 0) return arr1[0] < arr2[0] ? arr1[0] : arr2[0];
  if (k === 1) return arr1[0] > arr2[0] ? arr1[0] : arr2[0];

  let min1 = 0;
  let min2 = 0;
  let max1 = arr1.length - 1;
  let max2 = arr2.length - 1;
  let mid1, mid2;

  while (min1 < max1 && min2 < max2) {
    mid1 = parseInt((min1 + max1) / 2);
    mid2 = parseInt((min2 + max2) / 2);

    // 두 배열의 중간값의 위치의 합이 k보다 작을 때
    if (mid1 + mid2 + 2 < k) {
      // 더 작은 중간값을 가지고 있는 배열의 가운데 기준 왼쪽을 버린다.
      if (arr1[mid1] < arr2[mid2]) {
        min1 = mid1 + 1;
      } else {
        min2 = mid2 + 1;
      }
    }
    // 두 배열의 중간값의 위치의 합이 k보다 크거나 같을 때
    else {
      // 더 큰 중간 값을 가지고 있는 배열의 가운데 기준 오른쪽을 버린다.
      if (arr1[mid1] < arr2[mid2]) {
        max2 = mid2;
      } else {
        max1 = mid1;
      }
    }
  }
  // while 문이 끝나면 어느한쪽 배열은 완전히 정리 됐다는 뜻
  // k번째 후보 2가지 중 더 작은 것이 k번째 값
  if (min1 < max1) return arr2[min2] < arr1[k - min2 - 1] ? arr2[min2] : arr1[k - min2 - 1];
  if (min2 < max2) return arr1[min1] < arr2[k - min1 - 1] ? arr1[min1] : arr2[k - min1 - 1];
  
  return -1;
  // 값 확인용 return [min1, max1, min2, max2, arr1[min1], arr2[k - min1 - 1], arr2[min2], arr1[k - min2 - 1],]
};
