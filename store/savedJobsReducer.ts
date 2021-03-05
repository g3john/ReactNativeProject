import { ACTIONS } from './actions';

const initialState = {
  savedJobs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
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
