function movingStuff(stuff, limit) {
  stuff.sort((a, b) => a - b);
  let right = stuff.length - 1;
  let left = 0;
  let count = 0;

  while (left <= right) {
    if (stuff[left] + stuff[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }

  return count
}
