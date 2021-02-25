import { ACTIONS } from './actions';

const initialState = {
  loadedJobs: [],
  savedJobs: [],
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
    default: {
      return state;
    }
  }
}
