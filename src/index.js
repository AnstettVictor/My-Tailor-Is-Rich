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
// 1. Le composant racine
const rootComponent = (
  <Provider store={store}>
    <MyTailor />
  </Provider>
);
// 2. La cible du DOM
const target = document.getElementById('root');
// Le rendu de React
render(rootComponent, target);
