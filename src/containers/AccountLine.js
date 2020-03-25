import { connect } from 'react-redux';
import AccountLine from '../components/Columns/AccountLine';

const mapStateToProps = (state) => ({
  connectedUser: state.user.name,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountLine);
