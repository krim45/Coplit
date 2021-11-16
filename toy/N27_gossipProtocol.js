// refactoring
const gossipProtocol = function (village, row, col) {
  const matrix = village.map(el => el.split(''));
  const M = matrix.length;
  const N = matrix[0].length;
  const moveX = [-1, 1, 0, 0];
  const moveY = [0, 0, -1, 1];
  let idx = 0;
  let day = 0;

  const queue = [[row, col, day]];

  while (queue.length > idx) {
    let  [startY, startX, count] = queue[idx++];
    day = count;

    for (let i = 0; i < 4; i++) {
      const X = startX + moveX[i];
      const Y = startY + moveY[i];
      
      if (0 <= Y && Y < M && 0 <= X && X < N && matrix[Y][X] === '1') {
        matrix[Y][X] = 'x';
        queue.push([Y, X, day + 1])
      }
    }
  }
  return day
};

// solution 1
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  const matrix = createMatrix(village);
  const M = matrix.length;
  const N = matrix[0].length;
  const mX = [-1, 1, 0, 0];
  const mY = [0, 0, -1, 1];
  let idx = 0;
  let day = 0;

  const queue = [[row, col, day]];

  while (queue.length > idx) {
    let  [startY, startX] = queue[idx];
    day = queue[idx++][2];

    for (let i = 0; i < 4; i++) {
      const X = startX + mX[i];
      const Y = startY + mY[i];
      
      if (0 <= Y && Y < M && 0 <= X && X < N && matrix[Y][X] === '1') {
        matrix[Y][X] = 'x';
        queue.push([Y, X, day + 1])
      }
    }
  }
  return day
};
