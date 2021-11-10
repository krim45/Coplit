function missHouseMeal(sideDishes) {
  const sorted = sideDishes.slice().sort();
  const result = [];

  const dfs = (idx, subset) => {
    if (idx === sorted.length) {
      result.push(subset);
      return;
    }
    
    dfs(idx + 1, subset)
    dfs(idx + 1, [...subset, sorted[idx]])
  }

  dfs(0, []);

  return result.sort()
}
