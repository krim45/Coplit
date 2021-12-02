// 임시
// 마지막 일꾼의 경우는 이해가 가는데
// 첫번째 일꾼부터 재귀적 방법을 통해 구해가는 것이 이해가 안됨
// 최대 작업량이 최소가 되는 분배에서의 최대 작업량을 구하는 것

const jobAllocation = function (jobs, workersNum) {
  const memo = new Array(workersNum).fill(0).map(v => new Array(jobs.length).fill(-1))

  let job = 0;

  for (let i = workersNum -1; i < jobs.length; i++) {
    job += jobs[i];
    memo[workersNum - 1][i] = job;
  }
  return 
};
