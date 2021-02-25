import { connect } from 'react-redux';
import SavedPage from './component';

const mapStateToProps = (state) => ({
  jobs: state.savedJobs,
});

export default connect(mapStateToProps, null)(SavedPage);
