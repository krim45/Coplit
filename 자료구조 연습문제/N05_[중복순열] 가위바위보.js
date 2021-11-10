// 중복 순열 dfs
function rockPaperScissors(rounds) {
  const board = ['rock', 'paper', 'scissors'];
  if (rounds === undefined) rounds = 3;
  const result = [];

  const dfs = (subset, rounds) => {
    if (subset.length === rounds) {
      result.push(subset);
      return
    }

    for (let i = 0; i < board.length; i++) {
      dfs([...subset, board[i]], rounds);
    }
  }
  
  dfs([], rounds)
  
  return result
};
