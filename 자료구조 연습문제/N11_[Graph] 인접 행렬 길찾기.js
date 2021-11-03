// dfs
function getDirections(matrix, from, to) {
  const visited = new Array(matrix.length).fill(false);

  const dfs = (start) => {
    for (let next = 0; next < matrix.length; next++) {
      if (matrix[start][next] === 1 && !visited[next]) {
        visited[next] = true;
        if (next === to) return true
        if (dfs(next)) return true;
      }
    }
    return false
  }
  
  return dfs(from);
}

// bfs
function getDirections(matrix, from, to) {
  const visited = new Array(matrix.length).fill(false);
  const queue = [];

  function bfs(from) {
    queue.push(from);
    visited[from] = true;

    while (queue.length > 0) {
      let start = queue.shift();
      if (start === to) return true;

      for (let next = 0; next < matrix[start].length; next++) {
        if (matrix[start][next] === 1 && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
    return false
  }

  return bfs(from);
}
