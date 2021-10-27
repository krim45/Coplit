const isPrime = (numArr) => {
  let num = parseInt(numArr.join(''));
  if (num < 1000) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

const primePassword = (curPwd, newPwd) => {
  if (curPwd === newPwd) return 0

  const visited = new Array(10000).fill(false);
  let curArr = curPwd.toString().split('').map(Number);
  
  const bfs = (arr) => {
    const queue = [];
    queue.push([arr, 0]);

    while (queue.length > 0) {
      let [head, count] = queue.shift();
      visited[parseInt(head.join(''))] = true;
      if (visited[newPwd] === true) {
        return count + 1;
      }

      for (let i = 3; i >= 0; i--) {
        let origin = head[i];
        for (let j = 0; j <= 9; j++) {
          head[i] = j;
          if (isPrime(head) && visited[parseInt(head.join(''))] === false) {
            const newHead = [...head];
            visited[parseInt(head.join(''))] = true;
            queue.push([newHead, count + 1]);
          }
          head[i] = origin;
        }
      }
    }
  }
  return bfs(curArr);
}
