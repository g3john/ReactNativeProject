import { connect } from 'react-redux';
import FilterPage from './component';
import { setFilters } from '../../store/actions';

const mapStateToProps = (state) => ({
  filters: state.root.filters,
  filterOptions: state.root.filterOptions,
});

const mapDispatchToProps = {
  setFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);
