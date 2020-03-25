import { connect } from 'react-redux';
import Columns from '../components/Columns';

// J'ai besoin d'importer l'action creator qui gère le submit
import {
  incomeTextInputChange,
  incomeAmountInputChange,
  expanseTextInputChange,
  expanseAmountInputChange,
  extraTextInputChange,
  extraAmountInputChange,
  incomeSubmit,
  expanseSubmit,
  extraSubmit,
} from '../actions';


const mapStateToProps = (state) => ({
  incomeTextValue: state.incomeTextValue,
  incomeAmountValue: state.incomeAmountValue,
  expanseTextValue: state.expanseTextValue,
  expanseAmountValue: state.expanseAmountValue,
  extraTextValue: state.extraTextValue,
  extraAmountValue: state.extraAmountValue,
  appLoading: state.appLoading,
  incomeList: state.incomeList,
  fixedExpanseList: state.fixedExpanseList,
  extraExpanseList: state.extraExpanseList,
});

const mapDispatchToProps = (dispatch) => ({
  onIncomeTextInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jou
    // le state de l'input
    dispatch(incomeTextInputChange(textSaisi));
  },
  onIncomeAmountInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jour
    // le state de l'input
    dispatch(incomeAmountInputChange(textSaisi));
  },
  onExpanseTextInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jou
    // le state de l'input
    dispatch(expanseTextInputChange(textSaisi));
  },
  onExpanseAmountInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jour
    // le state de l'input
    dispatch(expanseAmountInputChange(textSaisi));
  },
  onExtraTextInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jou
    // le state de l'input
    dispatch(extraTextInputChange(textSaisi));
  },
  onExtraAmountInputChange: (textSaisi) => {
    // Je veux dispatcher une action
    // Qui contiendra le texte saisi
    // pour que le reducer puisse mettre à jour
    // le state de l'input
    dispatch(extraAmountInputChange(textSaisi));
  },
  onIncomeFormSubmit: () => {
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
    dispatch(incomeSubmit());
  },
  onExpanseFormSubmit: () => {
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
    dispatch(expanseSubmit());
  },
  onExtraFormSubmit: () => {
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
    dispatch(extraSubmit());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Columns);
