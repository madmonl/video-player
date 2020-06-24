/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */

import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { setFormsAsync } from './components/formsList/FormsListSlice';
import { login, logout } from './components/auth/authSlice';
import { firebase } from './components/firebase/firebase';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import store from './app/store';
import LoadingPage from './components/loadingPage/LoadingPage';
import './styles/styles.scss';

let hasRendered = false;
const App = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

function renderApp() {
  if (!hasRendered) {
    ReactDOM.render(App, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    store.dispatch(setFormsAsync());
  } else {
    store.dispatch(logout());
    renderApp();
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
