import { connect } from 'react-redux';
import Columns from '../components/Columns';

// J'ai besoin d'importer l'action creator qui gère le submit
import { formInputChange, inputSubmit } from '../actions';


const mapStateToProps = (state) => ({
  value: state.messageInput,
  appLoading: state.appLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jour
    // le state de l'input
    dispatch(formInputChange(textSaisi));
  },
  onFormSubmit: () => {
    console.log('Il y a eu un submit');
    // Je veux dispatcher une action
    // qui informe mon reducer du submit
    // mon reducer lors de cette info
    // va donc chercher à rajouter un message
    // dans la liste

    // Chaque message est représenté par un objet.
    // on met ce qu'on veut dans id et dans author,
    // mais par contre le content devra contenir
    // ce qui a été saisi par l'user

    // Le submit doit aussi vider l'input de saisi

    // J'ai besoin de dispatcher l'action que créé l'ction creator
    dispatch(inputSubmit());
  },
});




export default connect(mapStateToProps, mapDispatchToProps)(Columns);
