export const ACTIONS = {
  LOAD_JOBS: 'LOAD_JOBS',
  SAVE_JOB: 'SAVE_JOB',
  REMOVE_JOB: 'REMOVE_JOB',
};

export const loadJobs = (jobs) => ({
  type: ACTIONS.LOAD_JOBS,
  payload: { jobs },
});

export const saveJob = (job) => ({
  type: ACTIONS.SAVE_JOB,
  payload: { job },
});

export const removeJob = (jobId) => ({
  type: ACTIONS.REMOVE_JOB,
  payload: { jobId },
});
