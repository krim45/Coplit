// solution 1
const robotPath2 = function (room, src, sDir, dst, dDir) {
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (room[i][j] === 1) room[i][j] = 'x';
    }
  }

  const M = room.length;
  const N = room[0].length;
  const queue = [[src[0], src[1], sDir, 0]];
  let direction;
  let idx = 0;

  while (queue.length > idx) {
    const [row, col, nowDir, count] = queue[idx++];
    if (row === dst[0] && col === dst[1]) direction = nowDir;
    
    for (let dir = 1; dir <= 4; dir++) {
      const addAction = Math.abs(nowDir - dir) === 3 ? 1 : Math.abs(nowDir - dir);
      if (dir === 1) {
        for (let from = row; from >= 0; from--) {
          if (room[from][col] === 'x') break;
          if (room[from][col] === 0) {
            room[from][col] = count + addAction + 1;
            queue.push([from, col, dir, room[from][col]])
          }
        }
      }
      if (dir === 2) {
        for (let from = col; from < N; from++) {
          if (room[row][from] === 'x') break;
          if (room[row][from] === 0) {
            room[row][from] = count + addAction + 1;
            queue.push([row, from, dir, room[row][from]]);
          }
        }
      }
      if (dir === 3) {
        for (let from = row; from < M; from++) {
          if (room[from][col] === 'x') break;
          if (room[from][col] === 0) {
            room[from][col] = count + addAction + 1;
            queue.push([from, col, dir, room[from][col]]);
          }
        }
      }
      if (dir === 4) {
        for (let from = col; from >= 0; from--) {
          if (room[row][from] === 'x') break;
          if (room[row][from] === 0) {
            room[row][from] = count + addAction + 1;
            queue.push([row, from, dir, room[row][from]]);
          }
        }
      }
    }
  }

  return room[dst[0]][dst[1]] + (Math.abs(direction - dDir) === 3 ? 1 : Math.abs(direction - dDir));
};
