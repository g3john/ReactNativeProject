import { ACTIONS } from './actions';

const initialState = {
  loadedJobs: [],
  filteredJobs: [],
  savedJobs: [],
  filters: {
    category: null,
    jobType: null,
    location: [],
    sort: 'Newest first',
  },
  filterOptions: {
    category: [],
    jobType: [],
    location: [],
  },
};

const filterJobs = (state, loadedJobs) => {
  const { category, jobType, location } = state.filters;
  console.log(category, jobType, location);
  const filteredJobs = loadedJobs.filter((job) => {
    if (
      (!category || category === job.category) &&
      (!jobType || jobType === job.jobType) &&
      (location.length === 0 ||
        location.contains(job.candidateRequiredLocation))
    ) {
      return true;
    }
    console.log(category, jobType, location);
    return false;
  });
  filteredJobs.sort((a, b) => {
    return a.publicationDate < b.publicationDate ? 1 : -1;
  });
  return filteredJobs.slice(0, 10);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_JOBS: {
      const filteredJobs = filterJobs(state, action.payload.jobs);
      return {
        ...state,
        loadedJobs: action.payload.jobs,
        filteredJobs,
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
