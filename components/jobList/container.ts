import { connect } from 'react-redux';
import { displayMore } from '../../store/actions';
import JobList from './component';

const mapStateToProps = (state) => ({
  jobs: state.root.filteredJobs,
  nonDisplayedJobs: state.root.nonDisplayedJobs,
  savedJobs: state.saved.savedJobs,
});

const mapDispatchToProps = {
  displayMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
