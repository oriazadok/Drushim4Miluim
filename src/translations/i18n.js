import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from './en.json';
import translationHE from './he.json';

// the translations
const resources = {
//   en: {
//     translation: translationEN,
//   },
  he: {
    translation: translationHE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
