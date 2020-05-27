// @flow
import i18n from 'i18n-js';

import en from './languages/en';


export const i18nSetup = (locale: string) => {
  i18n.fallbacks = true;
  i18n.translations = { en };
  i18n.locale = locale;
};
