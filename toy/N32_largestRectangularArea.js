const largestRectangularArea = function (histogram) {
  let maxArea = 0;

  // 최소값 찾고 구간 나누기
  const findMaxArea = (left, right) => {
    if (0 <= left && left <= histogram.length - 1 && 0 <= right && right <= histogram.length - 1) {
      let minHeight = Number.MAX_SAFE_INTEGER;
      let minIdx;

      for (let i = left; i <= right; i++) {
        if (minHeight > histogram[i]) {
          minHeight = histogram[i];
          minIdx = i;
        }
      }

      let area = minHeight * (right - left + 1);
      if (maxArea < area) maxArea = area;

      findMaxArea(left, minIdx - 1);
      findMaxArea(minIdx + 1, right);

      return maxArea
    }
  }
  return findMaxArea(0, histogram.length - 1);
};
