const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol2 = function (village, num) {
  const matrix = createMatrix(village);
  const M = matrix.length;
  const N = matrix[0].length;
  const y1 = [-1, 1, 0, 0];
  const x1 = [0, 0, -1, 1];
  let list = [];
  let time = 0;
  let total = 0;
  let people = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === '1' || matrix[i][j] === '2') total++;
    }
  }

  let queue = [];
  let idx = 0;

  const bfs = () => {
    while(queue.length > idx) {
      const [row, col, hours] = queue[idx++];
      time = hours

      for (let i = 0; i < 4; i++) {
        const Y = row + y1[i];
        const X = col + x1[i];

        if(0 <= Y && Y < M && 0 <= X && X < N && (matrix[Y][X] === '1' || matrix[Y][X] === '2')) {
          queue.push([Y, X, time + 1]);
          matrix[Y][X] = '3';
        }
      }
    }
    return time;
  }

  for(let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === '2') {
        people++;
        list.push([i, j]);
      }
    }
  }

  if (total === people) return time;

  // 리스트에서 num 만큼 뽑아서 bfs 돌린 것 중에 가장 시간이 작으면서 정보를 아는 주민의 수와 모든 주민의 수가 같으면 리턴
  for (let i = 0; i < list.length; i++) {
    
  }

  bfs();

  return time
};
