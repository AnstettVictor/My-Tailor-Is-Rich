import axios from 'axios';

import {
  SUBMIT_USER_LOGIN, toggleLoading, loginSuccess, loginError,
} from '../actions';

export default (store) => (next) => (action) => {
  // Par défaut je vais chercher à laisser passer toutes les
  // actions, pour ne bloquer éventuellement que celles qui me
  // concernent.
  switch (action.type) {
    case SUBMIT_USER_LOGIN:
      // Je préviens mon app de se mettre en loading
      store.dispatch(toggleLoading());
      // Je sais que l'action que j'ai reçu nécessite
      // un appel ajax vers un serveur (pour logger un user)
      axios.post('http://localhost:3001/login', store.getState().settingsFormState)
        .then((response) => {
          // Créer 2 nouveaux actions types 'LOGIN_SUCCESS' et 'LOGIN_ERROR'
          // Créer 2 actions creators un pour success
          // (qui devra mettre le username dans payload)
          // un pour error qui n'a pas besoin de payload
          // Côté reducer, importer les 2 types d'action (success et error)
          // Pour modifier le state comme demandé

          console.log(response.data);
          // dispatcher une action qui dit 'LOGIN_SUCSESS' et qui aura comme payload
          // le nom de l'user pôur que mon reducer puisse:
          // * arrêter le loading
          // * Mettre le bon nom d'user dans le state
          store.dispatch(loginSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
          // Dispatcher une action pour dire "LOGIN_ERROR"
          // Mon reducer peut changer dans le state:
          // * loading false
          // * user -> anonyme
          store.dispatch(loginError());
        });
      // j'ai besoin pour ça de récupérer le mail et mot de passe
      // qui sont dans mon state, pour les envoyer au serveur

      // Si ma requête se passe bien, je veux dispatcher une action
      // pour dire au reducer qu'on est bien connecté

      // Si ma requête se passe mal
      // Je veux dispatcher une action pour dire qu'il y a eu un problème
      return;
    default:
      // Le return n'est pas utile pour laisser passer
      // l'action, mais il permet d'arrêter là
      // l'exécution de mon middleware
      next(action);
  }
};
