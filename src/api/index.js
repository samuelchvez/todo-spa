// @flow
import { API_BASE_URL, IS_API_IN_DEV_MODE } from '../settings';
import { RESTfulAPI, Resource } from '../lib/common-http-js';


export const api = new RESTfulAPI(
  API_BASE_URL,
  'api/v1',
  IS_API_IN_DEV_MODE, // process.env.NODE_ENV !== 'production');
);

export const TokenAuthentication = new Resource({
  name: 'token-auth',
  api,
});

export const Account = new Resource({
  name: 'users',
  api,
});

export const Routine = new Resource({
  name: 'todo-lists',
  api,
});
