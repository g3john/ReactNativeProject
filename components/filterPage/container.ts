import { connect } from 'react-redux';
import FilterPage from './component';
import { setFilters } from '../../store/actions';

const mapStateToProps = (state) => ({
  filters: state.filters,
  filterOptions: state.filterOptions,
});

const mapDispatchToProps = {
  setFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);
