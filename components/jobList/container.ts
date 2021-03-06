import { connect } from 'react-redux';
import { displayMore } from '../../store/actions';
import JobList from './component';

const mapStateToProps = (state) => ({
  jobs: state.root.filteredJobs,
});

const mapDispatchToProps = {
  displayMore,
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(JobList);
