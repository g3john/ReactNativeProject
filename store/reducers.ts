import { ACTIONS } from './actions';

const initialState = {
  loadedJobs: [],
  savedJobs: [],
  filters: [],
  filterOptions: {
    category: [],
    jobType: [],
    candidateRequiredLocation: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_JOBS: {
      return {
        ...state,
        loadedJobs: action.payload.jobs,
      };
    }
    case ACTIONS.SAVE_JOB: {
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.payload.job],
      };
    }
    case ACTIONS.REMOVE_JOB: {
      return {
        ...state,
        savedJobs: state.savedJobs.filter((job) => {
          job.id !== action.payload.jobId;
        }),
      };
    }
    case ACTIONS.SET_FILTERS: {
      return {
        ...state,
        filters: action.payload.filters,
      };
    }
    case ACTIONS.SET_FILTER_OPTIONS: {
      return {
        ...state,
        filterOptions: action.payload.filterOptions,
      };
    }
    default: {
      return state;
    }
  }
}
