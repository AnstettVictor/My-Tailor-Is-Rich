import { connect } from 'react-redux';
import Login from '../components/Login';

import { toggleSettings, settingsInputChange, submitUserLogin } from '../actions';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchProps = (dispatch) => ({
  toggleOpened: () => {
    console.log('Toggle');
    // Je dois changer le "isOpened" du state
    dispatch(toggleSettings());
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
    dispatch(settingsInputChange(changement));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(Login);
