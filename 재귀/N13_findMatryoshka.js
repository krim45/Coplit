function findMatryoshka(matryoshka, size) {
  if (!matryoshka) return false
  if (matryoshka.size === size) return true;

  return findMatryoshka(matryoshka.matryoshka, size);
}

// ref
function findMatryoshka(matryoshka, size) {
  // recursive case
  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }

  // base case
  return false;
}
