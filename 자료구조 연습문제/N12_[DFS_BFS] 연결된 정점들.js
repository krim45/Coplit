// dfs
function connectedVertices(edges) {
  let count = 0;
  let maxIdx = 0;

  for (let edge of edges) {
    const [row, column] = edge;
    maxIdx = Math.max(maxIdx, row, column);
  }

  const matrix = new Array(maxIdx + 1).fill(0).map(() => new Array(maxIdx + 1).fill(0));
  const visited = new Array(maxIdx + 1).fill(false);

  for (let edge of edges) {
    const [row, column] = edge;
    matrix[row][column] = 1;
    matrix[column][row] = 1;
  }

  const dfs = (from) => {
    visited[from] = true;

    for (let next = 0; next < matrix[from].length; next++) {
      if (matrix[from][next] === 1 && !visited[next]) {
        visited[next] = true;
        dfs(next);
      }
    }
  }

  for (let idx = 0; idx < matrix.length; idx++) {
    if (!visited[idx]) {
      count++;
      dfs(idx);
    }
  }

  return count;
}

// bfs
function connectedVertices(edges) {
  let count = 0;
  let maxIdx = 0;

  for (let edge of edges) {
    const [row, column] = edge;
    maxIdx = Math.max(maxIdx, row, column);
  }

  const matrix = new Array(maxIdx + 1).fill(0).map(() => new Array(maxIdx + 1).fill(0));
  const visited = new Array(maxIdx + 1).fill(false);
  const queue = [];

  for (let edge of edges) {
    const [row, column] = edge;
    matrix[row][column] = 1;
    matrix[column][row] = 1;
  }

  const bfs = (from) => {
    queue.push(from);
    visited[from] = true;

    while (queue.length > 0) {
      const now = queue.shift();

      for (let next = 0; next < matrix[now].length; next++) {
        if (matrix[now][next] === 1 && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }

  for (let idx = 0; idx < matrix.length; idx++) {
    if (!visited[idx]) {
      count++;
      bfs(idx);
    }
  }

  return count;
}
