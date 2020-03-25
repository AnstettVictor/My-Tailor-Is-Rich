import { v4 as uuidv4 } from 'uuid';
import {
  MESSAGE_INPUT_CHANGE,
  TOGGLE_SETTINGS,
  TOGGLE_LOADING,
  SETTINGS_INPUT_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  NEW_MESSAGE_RECEIVED,
} from '../actions';
// Je veux réagir au type d'action "submit"

const initialState = {
  messages: [],
  messageInput: '',
  user: {
    name: 'anonyme',
  },
  isSettingsOpened: true,
  settingsFormState: { email: 'test@machin.com', password: 't' },
  appLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        messageInput: '',
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
        },
      };
    case SETTINGS_INPUT_CHANGE:

      return {
        ...state,
        settingsFormState: {
          ...state.settingsFormState, // email et password que je met dans l'objet
          ...action.payload, // J'écrase soit email soit password avec ce que j'ai dans le payload
        },
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        appLoading: !state.appLoading,
        isSettingsOpened: false,

      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettingsOpened: !state.isSettingsOpened,
      };
    case MESSAGE_INPUT_CHANGE:
      return {
        ...state,
        messageInput: action.payload,
      };
    default:
      return state;
  }
};
