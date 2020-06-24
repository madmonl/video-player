import * as serviceWorker from './src/serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { setVideoDetailsAsync } from './src/components/video/VideoSlice';
import { Provider } from 'react-redux';
import AppRouter from './src/router/AppRouter';
import store from './src/app/store';
import LoadingPage from './src/components/loadingPage/LoadingPage';

const App = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

export function renderApp() {
  ReactDOM.render(App, document.getElementById('root'));
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'));
store.dispatch(setVideoDetailsAsync());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
