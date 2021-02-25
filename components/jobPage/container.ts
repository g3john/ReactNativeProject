import { connect } from 'react-redux';
import JobPage from './component';
import { saveJob, removeJob } from '../../store/actions';

const mapDispatchToProps = {
  saveJob,
  removeJob,
};

export default connect(null, mapDispatchToProps)(JobPage);
