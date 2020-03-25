import { connect } from 'react-redux';
import Balance from '../components/Balance';

const mapStateToProps = (state) => ({
  balance: state.balance,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
