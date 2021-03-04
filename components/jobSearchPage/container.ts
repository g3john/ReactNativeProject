import { connect } from 'react-redux';
import JobSearchPage from './component';
import { loadJobs } from '../../store/actions';

const mapStateToProps = (state) => ({
  jobs: state.filteredJobs,
});

const mapDispatchToProps = {
  loadJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchPage);
