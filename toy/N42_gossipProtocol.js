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


// reference
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const getAgents = (village) => {
  const agents = [];
  for (let row = 0; row < village.length; row++) {
    for (let col = 0; col < village.length; col++) {
      if (village[row][col] === '2') agents.push([row, col]);
    }
  }
  return agents;
};

const gossipProtocol2 = function (village, num) {
  // bfs 구현을 위해 큐를 선언한다.
  const N = village.length;
  const MOVES = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];
  const MAX_SIZE = N * N;
  const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;
  let front, rear;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    // 실행 중에 큐가 가득차지는 않기 때문에 별도의 조건문을 작성할 필요가 없다.
    queue[rear++] = pos;
  };
  const deQueue = (queue) => {
    const pos = queue[front++];
    return pos;
  };

  // num개의 시작점이 주어졌을 때, bfs 탐색을 하는 함수
  const bfs = (sources) => {
    const matrix = createMatrix(village);
    const queue = Array(MAX_SIZE);
    front = 0;
    rear = 0;

    sources.forEach((src) => {
      const [row, col] = src;
      matrix[row][col] = 0;
      enQueue(queue, src);
    });

    let cnt = 0;
    while (isEmpty(queue) === false) {
      const [row, col] = deQueue(queue);
      cnt = matrix[row][col];

      MOVES.forEach((move) => {
        const [rDiff, cDiff] = move;
        const nextRow = row + rDiff;
        const nextCol = col + cDiff;
        if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') {
          enQueue(queue, [nextRow, nextCol]);
          matrix[nextRow][nextCol] = matrix[row][col] + 1;
        }
      });
    }

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix.length; col++) {
        // 정보가 다 전달되지 않을 수 있다.
        if (matrix[row][col] === '1') return Number.MAX_SAFE_INTEGER;
      }
    }
    return cnt;
  };

  // 정보를 알고 있는 주민들을 따로 저장한다.
  const agents = getAgents(village);
  // 최대 num명의 요원을 선정하고, 각각에 대해서 bfs를 수행한다.
  // 가장 작은 값을 리턴한다.

  // size개 중에서 num개를 선택하는 모든 조합을 리턴하는 함수
  // 인덱스를 리턴한다.
  const getCombinations = (idx, size, num, result) => {
    // base case1: 선택해야 개수가 남아있는 개수 이상일 경우
    // => 남아있는 모든 걸 선택한다.
    if (size - idx <= num) {
      for (let i = idx; i < size; i++) result.push(i);
      return [result];
    }

    // base case2: 선택이 완료되었을 경우
    if (num === 0) {
      return [result];
    }

    // 현재 idx부터 num개를 뽑는 방법은
    // 1) 현재 요소를 선택하고 num-1개를 뽑는 방법
    const picked = getCombinations(idx + 1, size, num - 1, result.concat(idx));
    // 2) 현재 요소를 선택하지 않고 num개를 뽑는 방법
    const notPicked = getCombinations(idx + 1, size, num, result);
    return picked.concat(notPicked);
  };

  const combs = getCombinations(0, agents.length, num, []);
  let min = Number.MAX_SAFE_INTEGER;
  combs.forEach((c) => {
    const sources = c.map((idx) => agents[idx]);
    const result = bfs(sources);
    min = Math.min(min, result);
  });
  return min;
};
