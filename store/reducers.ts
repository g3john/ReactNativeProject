import { ACTIONS } from './actions';

const initialState = {
  isLoadingJobs: false,
  loadedJobs: [],
  filteredJobs: [],
  nonDisplayedJobs: [],
  amountToDisplay: 10,
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

const filterJobs = (loadedJobs, filters, amountToDisplay) => {
  try {
    const { category, jobType, location, sort } = filters;
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

    filteredJobs.sort((a, b) => {
      const newestFirst = sort === 'Newest first';
      const less = newestFirst ? 1 : -1;
      const more = newestFirst ? -1 : 1;
      return a.publicationDate < b.publicationDate ? less : more;
    });
    return {
      displayed: filteredJobs.slice(0, amountToDisplay),
      nonDisplayed: filteredJobs.slice(amountToDisplay),
    };
  } catch (e) {
    console.error(e);
    return {
      displayed: loadedJobs.slice(0, 10),
      nonDisplayed: loadedJobs.slice(amountToDisplay),
    };
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_LOADING_JOBS: {
      return {
        ...state,
        isLoadingJobs: action.payload.isLoading,
      };
    }
    case ACTIONS.LOAD_JOBS: {
      const { displayed, nonDisplayed } = filterJobs(
        action.payload.jobs,
        state.filters,
        10,
      );
      return {
        ...state,
        loadedJobs: action.payload.jobs,
        filteredJobs: displayed,
        nonDisplayedJobs: nonDisplayed,
      };
    }
    case ACTIONS.DISPLAY_MORE: {
      return {
        ...state,
        filteredJobs: state.filteredJobs.concat(
          state.nonDisplayedJobs.slice(0, 10),
        ),
        nonDisplayedJobs: state.nonDisplayedJobs.slice(10),
      };
    }
    case ACTIONS.SET_FILTERS: {
      const { displayed, nonDisplayed } = filterJobs(
        state.loadedJobs,
        action.payload.filters,
        10,
      );
      return {
        ...state,
        filters: action.payload.filters,
        filteredJobs: displayed,
        nonDisplayedJobs: nonDisplayed,
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
