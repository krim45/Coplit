// 실제 LIS를 구하는 solution O(NlogN)
const LIS = function (arr) {
  let result = [arr[0]];
  let idx = [0];
  let answer = '';

  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    if (result[result.length - 1] < target) {
      idx.push(result.length);
      result.push(target);
    } else {
      let min = 0;
      let max = result.length - 1;
      
      while (min < max) {
        let mid = Math.floor((min + max) / 2);

        if (result[mid] >= target) {
          max = mid;
        } else if (result[mid] < target) {
          min = mid + 1;
        }
      }
      result[min] = target;
      idx.push(min);
    }
  };

  let len = result.length - 1;
  for (let i = idx.length - 1; i >= 0; i--) {
    if (idx[i] === len) {
      answer = ' ' + arr[i] + answer;
      len--;
    }
  }
  return answer.trim();
}

// solution2 O(NlogN)
const LIS = function (arr) {
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    if (result[result.length - 1] < target) {
      result.push(target);
    } else {
      let min = 0;
      let max = result.length - 1;

      while (min < max) {
        let mid = Math.floor((min + max) / 2);

        if (result[mid] >= target) {
          max = mid;
        } else if (result[mid] < target) {
          min = mid + 1;
        }
      }
      result[min] = target;
    }
  };
  return result.length;
}


// solution1 O(N^2)
const LIS = function (arr) {
  const dp = new Array(arr.length).fill(1);
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    for (let j = 0; j < i; j++) {
      if (arr[j] < curVal) {
        if (dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1
        }
      }
    }
    if (max < dp[i]) max = dp[i];
  }
  return max
};
