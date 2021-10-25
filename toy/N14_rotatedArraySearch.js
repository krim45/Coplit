const rotatedArraySearch = function (rotated, target) {
  let min = 0;
  let max = rotated.length - 1;
  let mid;

  while (min <= max) {
    mid = parseInt((min + max) / 2);
    
    if (rotated[mid] === target) {
      return mid
    }

    // mid ~ max는 정렬된 상태
    if (rotated[mid] < rotated[max]) {
      // mid ~ max에 target이 있으면 min ~ mid 버림
      if (rotated[mid] < target && target <= rotated[max] ) {
        min = mid + 1;
      }
      // 없으면 mid ~ max 버림
      else {
        max = mid - 1;
      }
    }
    // min ~ mid는 정렬된 상태
    else {
      // min ~ mid에 target이 있으면 mid ~ max 버림
      if (rotated[min] <= target && target < rotated[mid]) {
        max = mid - 1;
      }
      // 없으면 min ~ mid 버림
      else {
        min = mid + 1;
      }
    }
  }
  
  return -1
};
