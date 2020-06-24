import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Video from '../components/video/Video';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';

export const history = createHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Video} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
