import { connect } from 'react-redux';
import JobSearchPage from './component';
import { setFilterOptions, loadJobs } from '../../store/actions';

const mapDispatchToProps = {
  setFilterOptions,
  loadJobs,
};

export default connect(null, mapDispatchToProps)(JobSearchPage);
