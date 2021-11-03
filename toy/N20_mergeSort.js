// 반복적 접근
const mergeSort = function (arr) {
  let newArr = arr.map(v => [v])
  
  while (newArr.length > 1) {
    let result = [];
    for (let i = 0; i < newArr.length; i += 2) {
      let left = 0;
      let right = 0;
      let list = [];
      
      if (newArr[i + 1] !== undefined) {
        while (left < newArr[i].length && right < newArr[i+1].length) {
          if (newArr[i][left] < newArr[i + 1][right]) {
            list.push(newArr[i][left++]);
          } else {
            list.push(newArr[i + 1][right++]);
          }
        }
        while (left < newArr[i].length) {
          list.push(newArr[i][left++]);
        }
        while (right < newArr[i + 1].length) {
          list.push(newArr[i + 1][right++]);
        }
      } else {
        list = newArr[i];
      }
      
      result.push(list);
    }
    newArr = result;
  }

  return newArr[0]
};

// 재귀적 접근
const merge = (arr1, arr2) => {
  const mergeArr = [];
  const size = arr1.length + arr2.length;
  let left = 0;
  let right = 0;

  for (let i = 0; i < size; i++) {
    if (left >= arr1.length) {
      mergeArr.push(arr2[right++]);
    }
    else if (right >= arr2.length) {
      mergeArr.push(arr1[left++]);
    }
    else {
      if (arr1[left] < arr2[right]) {
        mergeArr.push(arr1[left++]);
      }
      else {
        mergeArr.push(arr2[right++]);
      }
    }
  }
  return mergeArr
}

const mergeSort = function (arr) {
  if (arr.length < 2) return arr
  
  let mid = parseInt(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let result = merge(left, right);
  
  return result
};
