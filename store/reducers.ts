import { ACTIONS } from './actions';

const initialState = {
  loadedJobs: [],
  starredJobs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_JOBS: {
      return {
        ...state,
        loadedJobs: action.payload.jobs,
      };
    }
    case ACTIONS.STAR_JOB: {
      return {
        ...state,
        starredJobs: [...state.starredJobs, action.payload.job],
      };
    }
    case ACTIONS.REMOVE_JOB: {
      return {
        ...state,
        starredJobs: state.starredJobs.filter((job) => {
          job.id !== action.payload.jobId;
        }),
      };
    }
    default: {
      return state;
    }
  }
}
