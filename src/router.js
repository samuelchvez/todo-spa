// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';

// import * as selectors from './reducers';
import LoginView from './components/views/Login';
import CreateAccountView from './components/views/CreateAccount';
// import DashboardView from './components/views/Dashboard';
// import CalendarView from './components/views/Calendar';
// import ReportsView from './components/views/Reports';
// import ExternalView from './components/views/External';


// const UserIsAuthenticated = connectedReduxRedirect({
//   redirectPath: '/',
//   authenticatedSelector: selectors.isAuthenticated,
//   // authenticatingSelector: selectors.isLoginLoading,
//   // AuthenticatingComponent: Loading,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated',
// });


// <Route path="/forbidden" component={ ForbiddenView } />
// <Route path="/not-found" component={ NotFoundView } />
// <Route path="/" component={ LoginView } />
// <Route path="*" component={ NotFoundView } />

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={LoginView} exact />
      <Route path="/create-account" component={CreateAccountView} exact />
    </Switch>
  </Router>
);
