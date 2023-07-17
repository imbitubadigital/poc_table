import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLanguage from './locale/en.json';
import ptLanguage from './locale/pt.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enLanguage,
    },
    pt: {
      ...ptLanguage,
    },
  },
  lng: 'pt',
});
