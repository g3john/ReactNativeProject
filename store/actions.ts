export const ACTIONS = {
  LOAD_JOBS: 'LOAD_JOBS',
  SAVE_JOB: 'SAVE_JOB',
  REMOVE_JOB: 'REMOVE_JOB',
  DISPLAY_MORE: 'DISPLAY_MORE',
  SET_FILTERS: 'SET_FILTERS',
  SET_FILTER_OPTIONS: 'SET_FILTER_OPTIONS',
};

type Filters = {
  title: string;
  companyName: string;
  category: string;
  jobType: string;
  candidateRequiredLocation: string[];
  publicationDate: string;
};

type FilterOptions = {
  category: string[];
  jobType: string[];
  candidateRequiredLocation: string[];
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

export const displayMore = () => ({
  type: ACTIONS.DISPLAY_MORE,
});

export const setFilters = (filters: Filters) => ({
  type: ACTIONS.SET_FILTERS,
  payload: { filters },
});

export const setFilterOptions = (filterOptions: FilterOptions) => ({
  type: ACTIONS.SET_FILTER_OPTIONS,
  payload: { filterOptions },
});
