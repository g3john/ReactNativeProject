import { connect } from 'react-redux';
import JobSearchPage from './component';
import {
  setLoadingJobs,
  setFilterOptions,
  loadJobs,
} from '../../store/actions';

const mapStateToProps = (state) => ({
  isLoading: state.root.isLoadingJobs,
});

const mapDispatchToProps = {
  setLoadingJobs,
  setFilterOptions,
  loadJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchPage);
