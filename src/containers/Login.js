import { connect } from 'react-redux';
import Login from '../components/Login';

import { isUserLoggedIn, loginInputChange, submitUserLogin } from '../actions';


// TODO: Create actions for the Log-in form

const mapStateToProps = (state) => ({
  user: state.user,
  isUserLoggedIn: state.isUserLoggedIn,
});

const mapDispatchProps = (dispatch) => ({
  toggleOpened: () => {
    console.log('Toggle');
    // Je dois changer le "isOpened" du state
    dispatch(isUserLoggedIn());
  },
  onFormSubmit: () => {
    console.log('Submit');
    // Je veux mettre un propriété loading à true
    dispatch(submitUserLogin());
  },
  onInputChange: (changement) => {
    console.log('Change', changement);
    // Je veux changer dans mon state la valeur
    // de l'input qui a changé
    dispatch(loginInputChange(changement));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(Login);
