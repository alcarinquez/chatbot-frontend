import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';
import esTranslations from './locales/es/translation.json';
// Add more languages as needed

// Type definition for your translation resources
type TranslationResources = {
  [language: string]: {
    translation: typeof enTranslations;
  };
};

const resources: TranslationResources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  es: {
    translation: esTranslations,
  },
  // Add more languages here
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: process.env.NODE_ENV === 'development', // Only debug in development
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
    react: {
      useSuspense: false, // You can enable Suspense if using React 18+
    },
  });

export default i18n;