import { connect } from 'react-redux';
import JobPage from './component';
import { saveJob, removeJob } from '../../store/actions';

const mapStateToProps = (state) => ({
  savedJobs: state.savedJobs,
});

const mapDispatchToProps = {
  saveJob,
  removeJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);
