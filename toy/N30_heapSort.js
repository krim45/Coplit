// solution 1
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2)
}

function getLeftChildIdx(idx) {
  return idx * 2 + 1;
}

function getRightChildIdx(idx) {
  return idx * 2 + 2;
}

function insert(heap, item) {
  heap.push(item);
  let idx = heap.length - 1;
  let pIdx = getParentIdx(idx);

  while (pIdx >= 0 && heap[pIdx] > heap[idx]) {
    swap(idx, pIdx, heap);
    idx = pIdx;
    pIdx = getParentIdx(idx);
  }
  return heap
}

function removeRoot(heap) {
  swap(0, heap.length - 1, heap);
  heap.pop();
  
  let len = heap.length;
  let idx = 0;
  let leftIdx = getLeftChildIdx(idx);
  let rightIdx = getRightChildIdx(idx);
  let childIdx = leftIdx;

  while (childIdx < len) {
    if (rightIdx < len) childIdx = heap[leftIdx] > heap[rightIdx] ? rightIdx : leftIdx;
    if (heap[childIdx] < heap[idx]) {
      swap(idx, childIdx, heap);
      idx = childIdx;
      leftIdx = getLeftChildIdx(idx);
      rightIdx = getRightChildIdx(idx);
    } else {
      break
    }
  }
  return heap
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  const result = [];
  while (minHeap.length > 0) {
    result.push(minHeap[0])
    minHeap = removeRoot(minHeap);
  }
  return result;
};
