import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import languageEs from './translations/es';
import languageEn from './translations/en';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    en: languageEn,
    es: languageEs
  }
});

export default i18n;
