import { ACTIONS } from './actions';

const initialState = {
  loadedJobs: [],
  filteredJobs: [],
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

const filterJobs = (state, loadedJobs, filters) => {
  try {
    const { category, jobType, location, sort } = filters;
    console.log('location', location);
    const filteredJobs = loadedJobs.filter((job) => {
      if (
        (!category || category === job.category) &&
        (!jobType || jobType === job.jobType) &&
        (location.length === 0 ||
          location.includes(job.candidateRequiredLocation))
      ) {
        return true;
      }
      return false;
    });
    console.log('FILTERED', filteredJobs.length);

    filteredJobs.sort((a, b) => {
      const newestFirst = sort === 'Newest first';
      const less = newestFirst ? 1 : -1;
      const more = newestFirst ? -1 : 1;
      return a.publicationDate < b.publicationDate ? less : more;
    });

    return filteredJobs.slice(0, 10);
  } catch (e) {
    console.error(e);
    return loadedJobs.slice(0, 10);
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_JOBS: {
      const filteredJobs = filterJobs(
        state,
        action.payload.jobs,
        state.filters,
      );
      return {
        ...state,
        loadedJobs: action.payload.jobs,
        filteredJobs,
      };
    }
    case ACTIONS.SET_FILTERS: {
      const filteredJobs = filterJobs(
        state,
        state.loadedJobs,
        action.payload.filters,
      );
      return {
        ...state,
        filters: action.payload.filters,
        filteredJobs,
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
