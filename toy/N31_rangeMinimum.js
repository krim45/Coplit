const rangeMinimum = function (arr, ranges) {
  const segment = [];

  const buildSegment = (left, right, node) => {
    if (left === right) {
      segment[node] = arr[left];
      return segment[node]
    }

    let mid = Math.floor((right + left) / 2)
    let leftVal = buildSegment(left, mid, node * 2 + 1);
    let rightVal = buildSegment(mid + 1, right, node * 2 + 2);
    segment[node] = Math.min(leftVal, rightVal);

    return segment[node]
  }
  buildSegment(0, arr.length - 1, 0);

  const search = (left, right, nodeLeft, nodeRight, node) => {
    if (left > nodeRight || right < nodeLeft) {
      return Number.MAX_SAFE_INTEGER
    }

    if (left <= nodeLeft && nodeRight <= right) {
      return segment[node]
    }

    let mid = Math.floor((nodeLeft + nodeRight) / 2);
    let leftVal = search(left, right, nodeLeft, mid, node * 2 + 1);
    let rightVal = search(left, right, mid + 1, nodeRight, node * 2 + 2);

    return Math.min(leftVal, rightVal);
  }

  return ranges.map(range => {
    const [left, right] = range;
    return search(left, right, 0, arr.length - 1, 0)
  })
};
