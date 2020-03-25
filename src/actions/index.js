
// Login action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const SUBMIT_USER_LOGIN = 'SUBMIT_USER_LOGIN';

// new Amount line action types
export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';

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


// New Line Form input change

export const formInputChange = (payload) => ({
  type: FORM_INPUT_CHANGE,
  payload, // ce qui a été saisi
});
