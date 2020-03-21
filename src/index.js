// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


// == Import : local
// Composants
import MyTailor from 'src/components/MyTailor';
// Store
import store from 'src/store';


// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <Provider store={store}>
    <MyTailor />
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);
