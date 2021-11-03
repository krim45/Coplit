function createMatrix(edges) {
  let maxIdx = 0;

  for (let edge of edges) {
    const [row, column] = edge;
    maxIdx = Math.max(maxIdx, row, column);
  }

  const matrix = new Array(maxIdx + 1).fill(0).map(() => new Array(maxIdx + 1).fill(0));

  for (let edge of edges) {
    const [row, column, isDirected] = edge;
    if (isDirected === 'directed') {
      matrix[row][column] = 1;
    } else if (isDirected === 'undirected') {
      matrix[row][column] = 1;
      matrix[column][row] = 1;
    }
  }

  return matrix
}
