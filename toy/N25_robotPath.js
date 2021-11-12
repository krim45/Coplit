const robotPath = function (room, src, dst) {
  const M = room.length;
  const N = room[0].length;
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  const visited = new Array(M).fill(0).map(() => new Array(M).fill(false));
  
  const bfs = (src) => {
    const queue = [[...src, 0]];
    visited[src[0]][src[1]] = true;

    while (queue.length > 0) {
      let [y, x, count] = queue.shift();
      if (y === dst[0] && x === dst[1]) return count

      for (let i = 0; i < move.length; i++) {
        let [movedY, movedX] = [y + move[i][0], x + move[i][1]];
        if (0<= movedY && movedY < M && 0 <= movedX && movedX < N && room[movedY][movedX] === 0 && !visited[movedY][movedX]) {
          visited[movedY][movedX] = true;
          queue.push([movedY, movedX, count + 1]);
        }
      }
    }
    
    return false;
  }

  return bfs(src);
};
