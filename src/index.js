// @flow
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import * as serviceWorker from './serviceWorker';

import './entry';
import configureStore from './store/configureStore';
import Router from './router';
import App from './components/App';


const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
