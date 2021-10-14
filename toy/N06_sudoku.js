const sudoku = function (board) {
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];
  
  const getBoxNum = (row, col) => boxes[row][col];
  // 가로 확인
  const rowVisited = new Array(9).fill(false).map(() => new Array(10).fill(false));
  // 세로 확인
  const colVisited = new Array(9).fill(false).map(() => new Array(10).fill(false));
  // 3 x 3 확인
  const boxVisited = new Array(9).fill(false).map(() => new Array(10).fill(false));
  const blanks = [];

  // 빈칸 좌표 넣고 가로 세로 박스 방문 확인
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      } else {
        const num = board[row][col];
        const box = getBoxNum(row, col);
        rowVisited[row][num] = true;
        colVisited[col][num] = true;
        boxVisited[box][num] = true;
      }
    }
  }

  // dfs
  const dfs = (idx, board) => {
    if (blanks.length === idx) return true;
    const [row, col] = blanks[idx];

    for (let num = 1; num <= 9; num++) {
      const box = getBoxNum(row, col);
      if (!rowVisited[row][num] && !colVisited[col][num] && !boxVisited[box][num]) {
        board[row][col] = num;
        rowVisited[row][num] = true;
        colVisited[col][num] = true;
        boxVisited[box][num] = true;
        if (dfs(idx + 1, board)) {
          return true;
        }
        rowVisited[row][num] = false;
        colVisited[col][num] = false;
        boxVisited[box][num] = false;
      }
    }

    return false
  }

  dfs(0, board);
  return board
};
