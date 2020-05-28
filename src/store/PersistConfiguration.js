// @flow
import storage from 'redux-persist/lib/storage';
// import { createTransform } from 'redux-persist';

import * as settings from '../settings';


const persistWhitelist = [
  'auth',
];


export default {
  key: 'root',
  storage,
  version: settings.CURRENT_APP_VERSION,
  whitelist: persistWhitelist,
};
