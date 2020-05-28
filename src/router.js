// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';

import * as selectors from './reducers';
import LoginView from './components/views/Login';
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

const routes = [
  {
    path: '/',
    exact: true,
    localize: false,
    component: LoginView,
  },
];

// <Route path="/forbidden" component={ ForbiddenView } />
// <Route path="/not-found" component={ NotFoundView } />
// <Route path="/" component={ LoginView } />
// <Route path="*" component={ NotFoundView } />

export default () => (
  <Router>
    <Switch>
      {
        routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))
      }
    </Switch>
  </Router>
);