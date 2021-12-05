// reference code
const jobAllocation = function (jobs, workersNum) {
  const len = jobs.length;
  const memo = new Array(workersNum).fill(0).map((_) => new Array(len).fill(-1))

  let workload = 0;
  for (let i = len - 1; i >= workersNum - 1; i--) {
    workload += jobs[i];
    memo[workersNum - 1][i] = workload;
  }

  const aux = (workerIdx, jobIdx, left) => {
    if (memo[workerIdx][jobIdx] !== -1) return memo[workerIdx][jobIdx];

    let workload = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = jobIdx; i < len - left; i++) {
      workload += jobs[i];

      const hardest = Math.max(workload, aux(workerIdx + 1, i + 1, left - 1));
      min = Math.min(min, hardest);
    }

    memo[workerIdx][jobIdx] = min;
    return min
  }

  return aux(0, 0, workersNum - 1);
};
