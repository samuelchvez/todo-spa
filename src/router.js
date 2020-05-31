// @flow
import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginView from './components/views/Login';
import CreateAccountView from './components/views/CreateAccount';
import DashboardView from './components/views/Dashboard';
import RoutineView from './components/views/Routine';


// const UserIsAuthenticated = connectedReduxRedirect({
//   redirectPath: '/',
//   authenticatedSelector: selectors.isAuthenticated,
//   // authenticatingSelector: selectors.isLoginLoading,
//   // AuthenticatingComponent: Loading,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated',
// });


export const history = createBrowserHistory();


export default () => (
  <Router history={history} forceRefresh>
    <Switch>
      <Route path="/" component={LoginView} exact />
      <Route path="/create-account" component={CreateAccountView} exact />
      <Route path="/dashboard" component={DashboardView} exact />
      <Route path="/dashboard/:routineId" component={RoutineView} exact />
      {/* <Route path="/forbidden" component={ ForbiddenView } /> */}
      {/* <Route path="/not-found" component={ NotFoundView } /> */}
      {/* <Route path="/" component={ LoginView } /> */}
      {/* <Route path="*" component={ NotFoundView } /> */}
    </Switch>
  </Router>
);
