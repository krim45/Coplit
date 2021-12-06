// reference
function newChickenRecipe(stuffArr, choiceNum) {
  const filtered = stuffArr.filter(stuff => {
    let str = stuff.toString()
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') count++;
      if (count >= 3) return false;
    }
    return true
  })

  if (filtered.length < choiceNum) return []

  filtered.sort((a, b) => a - b);
  const result = [];

  const permutation = (arr, bucket, rest) => {
    if (rest === 0) {
      result.push(bucket);
      return
    }

    for (let i = 0; i < arr.length; i++) {
      const fix = arr[i];
      const sliceArr = arr.slice();
      sliceArr.splice(i, 1);
      permutation(sliceArr, bucket.concat(fix), rest - 1);
    }
  }
  permutation(filtered, [], choiceNum);

  return result
}

// 순열 refactoring
function newChickenRecipe(stuffArr, choiceNum) {
  const newStuff = stuffArr.filter(stuff => !/0{3}/.test(stuff))
  if (newStuff.length < choiceNum || newStuff.length === 0) return []
  const result = [];

  const permutate = (newStuff, bucket ,choiceNum) => {
    if (choiceNum === 0) {
      result.push(bucket);
      return
    }
    
    newStuff.forEach((stuff, idx, arr) => {
      const fixed = stuff;
      const arrSlice = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      permutate(arrSlice, [...bucket, fixed], choiceNum - 1);
    })
  }
  permutate(newStuff, [], choiceNum)
  
  return result
}

// 순열
function newChickenRecipe(stuffArr, choiceNum) {
  const newStuff = stuffArr.filter(stuff => !/0{3}/.test(stuff))
  if (newStuff.length < choiceNum || newStuff.length === 0) return []

  const permutate = (newStuff, choiceNum) => {
    if (choiceNum === 1) {
      return newStuff.map(v => [v]);
    }
    const result = [];

    newStuff.forEach((stuff, idx, arr) => {
      const fixed = stuff;
      const arrSlice = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const newPermu = permutate(arrSlice, choiceNum - 1);
      const combine = newPermu.map(permu => [fixed, ...permu]);
      result.push(...combine);
    })

    return result
  }
  
  return  permutate(newStuff, choiceNum)
}
