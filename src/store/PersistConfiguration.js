// @flow
import storage from 'redux-persist/lib/storage';
import { createTransform } from 'redux-persist';

import * as settings from '../settings';


const persistWhitelist = [
  'auth',
];

const AuthTransform = createTransform(
  ({ token, decoded }, key) => {
    return { token, decoded };
  },
  _ => _,
  { whitelist: ['auth'] }
);


export default {
  key: 'root',
  storage,
  version: settings.CURRENT_APP_VERSION,
  whitelist: persistWhitelist,
  transforms: [AuthTransform],
};
