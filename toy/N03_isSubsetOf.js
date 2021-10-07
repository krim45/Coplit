// 이분 탐색
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  for (let i = 0; i < sample.length; i++) {
    let min = 0;
    let max = base.length - 1;
    let mid;
    let check = false;

    while (min <= max) {
      const target = sample[i]
      mid = Math.floor((min + max) / 2);

      if (base[mid] === target) {
        check = true;
        break;
      }
      else if (base[mid] < target) {
        min = mid + 1;
      }
      else if (base[mid] > target) {
        max = mid - 1;
      }
    }

    if (check === false) {
      return false
    }
  }

  return true
};

// 인덱스 이용
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let baseIndex = 0;
  let sampleIndex = 0;
  for (let i = 0; i < sample.length; i++) {
    while(baseIndex < base.length && sampleIndex < sample.length) {
      if (sampleIndex === sample.length-1) return true;
      // if (baseIndex === base.length-1) return false;
      // if (base[baseIndex] > sample[sampleIndex]) return false;

      if (base[baseIndex] === sample[sampleIndex]) {
        baseIndex++;
        sampleIndex++;
      }
      if (base[baseIndex] < sample[sampleIndex]) {
        baseIndex++;
      }
    }
  }
  return false;
};
