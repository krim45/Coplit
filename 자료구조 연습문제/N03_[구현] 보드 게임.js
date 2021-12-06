function boardGame(board, operation) {
  const order = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }
  const border = board.length;
  let [Y, X] = [0, 0];
  let score = 0;

  for (let oper of operation) {
    const [NY, NX] = order[oper]
    Y += NY;
    X += NX;

    if (Y < 0 || Y >= border || X < 0 || X >= border) return 'OUT'
    score += board[Y][X];
  }
  return score
};
