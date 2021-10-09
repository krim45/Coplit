// direction graph 방향 그래프
// unweighted 비가중치
// adjacency matrix 인접 행렬

class GraphWithAdjacencyMatrix {
  constructor() {
    this.matrix = [];
  }

  addVertex() {
    const curLength = this.matrix.length;
    for (let i = 0; i < curLength; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(curLength + 1).fill(0));
  }

  contains(vertex) {
    return !!this.matrix[vertex];
  }

  addEdge(from, to) {
    const maxIndex = this.matrix.length - 1;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    if (typeof from !== 'number' || typeof to !== 'number') {
      console.log('number type 인자만 가능합니다.');
      return;
    }
    if (from < 0 || to < 0 || from > maxIndex || to > maxIndex) {
      console.log('범위가 매트릭스 밖에 있습니다.');
      return;
    }

    this.matrix[from][to] = 1;
  }

  hasEdge(from, to) {
    return this.matrix[from][to] === 1;
  }

  removeEdge(from, to) {
    const maxIndex = this.matrix.length - 1;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    if (typeof from !== 'number' || typeof to !== 'number') {
      console.log('number type 인자만 가능합니다.');
      return;
    }
    if (from < 0 || to < 0 || from > maxIndex || to > maxIndex) {
      console.log('범위가 매트릭스 밖에 있습니다.');
      return;
    }

    this.matrix[from][to] = 0;
  }
}
