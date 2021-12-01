const decompression = function (image) {
  let answer = '';

  const aux = (y1, y2, x1, x2) => {
    for (let i = y1; i < y2; i++) {
      for (let j = x1; j < x2; j++) {
        if (image[y1][x1] !== image[i][j]) {
          let halfX = (x2 + x1) / 2;
          let halfY = (y2 + y1) / 2;
          answer += 'X';

          aux(y1, halfY, x1, halfX);
          aux(y1, halfY, halfX, x2);
          aux(halfY, y2, x1, halfX);
          aux(halfY, y2, halfX, x2);
          return
        }
      }
    }
    answer += image[y1][x1];
    return
  }
  aux(0, image.length, 0, image.length);

  return answer
};
