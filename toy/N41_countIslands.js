// refactoring
const countIslands = function (grid) {
  const R = grid.length;
  const M = grid[0]?.length;
  const y1 = [0, 0, -1, 1];
  const x1 = [-1, 1, 0, 0];
  const queue = [];
  let idx = 0;
  let count = 0;

  const bfs = (y, x) => {
    queue.push([y, x]);

    while(queue.length > idx) {
      const [row, col] = queue[idx++];
      grid[row][col] = '0';

      for (let i = 0; i < 4; i++) {
        const Y = row + y1[i];
        const X = col + x1[i];

        if (0 <= Y && Y < R && 0 <= X && X < M && grid[Y][X] === '1') {
          queue.push([Y, X]);
        }
      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === '1') {
        bfs(i, j);
        count++;
      }
    }
  }

  return count
};


// naive
const countIslands = function (grid) {
  const R = grid.length;
  const M = grid[0]?.length; 
  const visited = new Array(R).fill(0).map((_) => new Array(M).fill(false));
  const y1 = [0, 0, -1, 1];
  const x1 = [-1, 1, 0, 0];
  const queue = [];
  let idx = 0;
  let count = 0;

  const bfs = (y, x) => {
    queue.push([y, x]);

    while(queue.length > idx) {
      const [row, col] = queue[idx++];

      for (let i = 0; i < 4; i++) {
        const Y = row + y1[i];
        const X = col + x1[i];

        if (0 <= Y && Y < R && 0 <= X && X < M && !visited[Y][X] && grid[Y][X] === '1') {
          visited[Y][X] = true;
          queue.push([Y, X]);
        }
      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        visited[i][j] = true;
        bfs(i, j);
        count++;
      }
    }
  }

  return count
};

