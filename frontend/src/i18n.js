// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      "Welcome": "Welcome to AVANI SMART CHILDREN'S CLINIC",
      "Our Services": "Our Services",
      "Contact Us": "Contact Us",
      // Add more translations as needed
    }
  },
  ta: {
    translation: {
      "Welcome": "அவனி ஸ்மார்ட் சில்ரன்ஸ் க்ளினிக்",
      "Our Services": "எங்கள் சேவைகள்",
      "Contact Us": "தொடர்புக்கு",
      // Add Tamil translations as needed
    }
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
