// @flow
import type { Persistor } from 'redux-persist/src/types';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import reducer from '../reducers';
import mainSaga from '../sagas';
import PersistConfiguration from './PersistConfiguration';


type ConfigureStoreReturnType = {
  store: {
    dispatch: Function,
    getState: Function,
  },
  persistor: Persistor,
};

const persistedReducer = persistReducer(PersistConfiguration, reducer);
const sagaMiddleware = createSagaMiddleware();

const configureStore = (): ConfigureStoreReturnType => {
  // Middlewares
  const middlewares = [
    sagaMiddleware,
  ];

  // Prepare for redux dev tools
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  // Create store
  const store = composeEnhancers(
    applyMiddleware(...middlewares),
  )(createStore)(persistedReducer);

  // Run main saga
  sagaMiddleware.run(mainSaga);

  return {
    store,
    persistor: persistStore(store),
  };
};


export default configureStore;
