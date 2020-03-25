import { connect } from 'react-redux';
import Columns from '../components/Columns';

const mapStateToProps = (state) => ({
  incomeList: state.incomeList,
  fixedExpanseList: state.fixedExpanseList,
  extraExpanseList: state.extraExpanseList,
});

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(Columns);
