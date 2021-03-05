import { connect } from 'react-redux';
import JobSearchPage from './component';
import { setFilterOptions, loadJobs } from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    jobs: state.root.filteredJobs,
  };
};

const mapDispatchToProps = {
  setFilterOptions,
  loadJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchPage);
