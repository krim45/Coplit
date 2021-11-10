// 조합 refactoring
function boringBlackjack(cards) {
  const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true;
  }

  let count = 0;

  const combinate = (idx, num, choiceNum) => {
    if (choiceNum === 3) {
      if (isPrime(num)) count++
      return;
    }

    for (let i = idx; i < cards.length; i++) {
      combinate(i + 1, num + cards[i], choiceNum + 1);
    }
  }
  combinate(0, 0, 0)

  return count
}

// 조합
function boringBlackjack(cards) {
  const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true;
  }

  const combinate = (cards, choiceNum) => {
    if (choiceNum === 1) return cards.map(v => [v]);
    const result = [];

    cards.forEach((card, idx, arr) => {
      const fixed = card;
      const arrSlice = arr.slice(idx + 1);
      const newCombi = combinate(arrSlice, choiceNum - 1);
      const combine = newCombi.map(combi => [fixed, ...combi]);
      result.push(...combine);
    })
    return result
  }

  const board = combinate(cards, 3).map(arr => arr.reduce((acc, cur) => acc + cur, 0));
  let count = 0;

  board.forEach(num => {
    if (isPrime(num)) count++
  })
  return count
}
