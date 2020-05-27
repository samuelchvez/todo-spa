// @flow
export type ERROR_TYPE = {
  objectId?: ID_TYPE,
  status: number,
  message: string,
  extra?: Object,
  retryAction?: Object
}

export type MAYBE_ERROR_TYPE = {} | ERROR_TYPE;

export type COUNTRY_TYPE = {
  name: string,
  short2: string,
  short3: string
};

export type GENERIC_ACTION_TYPE = {
  type: string,
  payload?: Object
}

export type NAVIGATION_PROP_TYPES = {
  navigate: Function,
  state: {
    routes: Array<any>,
    params: Object
  },
  goBack: Function,
  dangerouslyGetParent: Function,
};

export type ID_TYPE = number | string;
