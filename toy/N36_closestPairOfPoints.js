// solution O(N^2)
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
  let distance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const tmp = calculateDistance(points[i], points[j]);
        if (distance > tmp) distance = tmp;
      }
    }
  }
  return Math.round(distance * 100)
};
