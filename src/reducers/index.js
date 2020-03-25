
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  TOGGLE_LOGIN,
  SUBMIT_USER_LOGIN,
  LOGIN_INPUT_CHANGE,
  INCOME_TEXT_INPUT_CHANGE,
  INCOME_AMOUNT_INPUT_CHANGE,
  EXPANSE_TEXT_INPUT_CHANGE,
  EXPANSE_AMOUNT_INPUT_CHANGE,
  EXTRA_TEXT_INPUT_CHANGE,
  EXTRA_AMOUNT_INPUT_CHANGE,
  NEW_FIXED_EXPANSE,
  NEW_EXTRA_EXPANSE,
  NEW_INCOME,
  TOGGLE_LOADING,
} from '../actions';
// Je veux réagir au type d'action "submit"

const initialState = {
  user: {
    name: 'Compote23',
    avatar: 'https://react.semantic-ui.com/images/avatar/small/zoe.jpg',
    password: 'Hello123',
  },
  balance: 0,
  incomeTextValue: '',
  incomeAmountValue: '',
  expanseTextValue: '',
  expanseAmountValue: '',
  extraTextValue: '',
  extraAmountValue: '',
  incomeList: [],
  fixedExpanseList: [],
  extraExpanseList: [],
  isLoginOpened: true,
  appLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_INCOME:
      return {
        ...state,
        incomeList: [...state.incomeList, action.payload],
        newLineInput: '',
        newLineAmount: '',
      };
    case NEW_FIXED_EXPANSE:
      return {
        ...state,
        incomeList: [...state.fixedExpanseList, action.payload],
        newLineInput: '',
        newLineAmount: '',
      };
    case NEW_EXTRA_EXPANSE:
      return {
        ...state,
        incomeList: [...state.extraExpanseList, action.payload],
        newLineInput: '',
        newLineAmount: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
        appLoading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        appLoading: false,
        user: {
          name: 'anonyme',
          avatar: 'https://icon-library.net/images/anonymous-icon/anonymous-icon-10.jpg',
        },
      };
    case LOGIN_INPUT_CHANGE:

      return {
        ...state,
        user: {
          ...state.user, // email et password que je met dans l'objet
          ...action.payload, // J'écrase soit email soit password avec ce que j'ai dans le payload
        },
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        appLoading: !state.appLoading,
        isLoginOpened: false,

      };
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLoginOpened: !state.isLoginOpened,
      };
    case INCOME_TEXT_INPUT_CHANGE:
      return {
        ...state,
        incomeTextValue: action.payload,
      };
    case INCOME_AMOUNT_INPUT_CHANGE:
      return {
        ...state,
        incomeAmountValue: action.payload,
      };
    case EXPANSE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        expanseTextValue: action.payload,
      };
    case EXPANSE_AMOUNT_INPUT_CHANGE:
      return {
        ...state,
        expanseAmountValue: action.payload,
      };
    case EXTRA_TEXT_INPUT_CHANGE:
      return {
        ...state,
        extraTextValue: action.payload,
      };
    case EXTRA_AMOUNT_INPUT_CHANGE:
      return {
        ...state,
        extraAmountValue: action.payload,
      };
    default:
      return state;
  }
};
