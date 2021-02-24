export const ACTIONS = {
  LOAD_JOBS: 'LOAD_JOBS',
  STAR_JOB: 'STAR_JOB',
  REMOVE_JOB: 'REMOVE_JOB',
};

export const loadJobs = (jobs) => ({
  type: ACTIONS.LOAD_JOBS,
  payload: { jobs },
});

export const starJob = (job) => ({
  type: ACTIONS.STAR_JOB,
  payload: { job },
});

export const removeJob = (jobId) => ({
  type: ACTIONS.REMOVE_JOB,
  payload: { jobId },
});
