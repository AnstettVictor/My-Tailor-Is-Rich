
// Login action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const SUBMIT_USER_LOGIN = 'SUBMIT_USER_LOGIN';

// Form submit typs
export const NEW_FIXED_EXPANSE = 'NEW_FIXED_EXPANSE,';
export const NEW_EXTRA_EXPANSE = '  NEW_EXTRA_EXPANSE,';
export const NEW_INCOME = '  NEW_INCOME,';

// new Amount line action types | To be improved with useRef for multi-form inputs maybe...
export const INCOME_TEXT_INPUT_CHANGE = 'INCOME_TEXT_INPUT_CHANGE,';
export const INCOME_AMOUNT_INPUT_CHANGE = '  INCOME_AMOUNT_INPUT_CHANGE,';
export const EXPANSE_TEXT_INPUT_CHANGE = '  EXPANSE_TEXT_INPUT_CHANGE,';
export const EXPANSE_AMOUNT_INPUT_CHANGE = '  EXPANSE_AMOUNT_INPUT_CHANGE,';
export const EXTRA_TEXT_INPUT_CHANGE = '  EXTRA_TEXT_INPUT_CHANGE,';
export const EXTRA_AMOUNT_INPUT_CHANGE = '  EXTRA_AMOUNT_INPUT_CHANGE,';
export const INCOME_SUBMIT = 'INCOME_SUBMIT';
export const EXPANSE_SUBMIT = 'EXPANSE_SUBMIT';
export const EXTRA_SUBMIT = 'EXTRA_SUBMIT';


// App Loading action types
export const TOGGLE_LOADING = 'TOGGLE_LOADING';


// Login Action Creators
export const toggleSettings = () => ({
  type: TOGGLE_LOGIN,
});

export const loadingInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const submitUserLogin = () => ({
  type: SUBMIT_USER_LOGIN,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

// Loading Action Creator

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});


// New Line Form input changes

export const incomeTextInputChange = (payload) => ({
  type: INCOME_TEXT_INPUT_CHANGE,
  payload, // ce qui a été saisi
});

export const incomeAmountInputChange = (payload) => ({
  type: INCOME_AMOUNT_INPUT_CHANGE,
  payload, // ce qui a été saisi
});

export const expanseTextInputChange = (payload) => ({
  type: EXPANSE_TEXT_INPUT_CHANGE,
  payload, // ce qui a été saisi
});

export const expanseAmountInputChange = (payload) => ({
  type: EXPANSE_AMOUNT_INPUT_CHANGE,
  payload, // ce qui a été saisi
});


export const extraTextInputChange = (payload) => ({
  type: EXTRA_TEXT_INPUT_CHANGE,
  payload, // ce qui a été saisi
});

export const extraAmountInputChange = (payload) => ({
  type: EXTRA_AMOUNT_INPUT_CHANGE,
  payload, // ce qui a été saisi
});


// Form Submit Action Creators

export const incomeSubmit = () => ({
  type: INCOME_SUBMIT,
});

export const expanseSubmit = () => ({
  type: EXPANSE_SUBMIT,
});

export const extraSubmit = () => ({
  type: EXTRA_SUBMIT,
});


// TODO: Action Creators and Types for Login and Sign up forms
