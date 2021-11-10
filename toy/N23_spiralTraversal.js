const spiralTraversal = function (matrix) {
  const M = matrix.length;
  const N = matrix[0] && matrix[0].length;
  const vaild = new Array(M).fill(0).map(() => new Array(N).fill(0));
  const len = M * N;

  const travel = (start, m, n, spiral) => {
    if (spiral.length === len) return spiral;
    for (let i = start; i < n; i++) {
      if (!vaild[start][i]) {
        spiral += matrix[start][i];
        vaild[start][i] = 1;
      }
    }
    for (let i = start + 1; i < m; i++) {
      if (!vaild[i][n - 1]) {
        spiral += matrix[i][n - 1];
        vaild[i][n - 1] = 1;
      }
    }
    for (let i = n - 2; i >= start; i--) {
      if (!vaild[m - 1][i]) {
        spiral += matrix[m - 1][i];
        vaild[m - 1][i] = 1;
      }
    }
    for (let i = m - 2; i > start; i--) {
      if (!vaild[i][start]) {
        spiral += matrix[i][start];
        vaild[i][start] = 1;
      }
    }
    return travel(start + 1, m - 1, n - 1, spiral);
  }

  return travel(0, M, N, '')
};
