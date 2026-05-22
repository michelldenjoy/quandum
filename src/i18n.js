import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Español
import esCommon from "./locales/es/common.json";
import esNavbar from "./locales/es/navbar.json";
import esFooter from "./locales/es/footer.json";
import esHome from "./locales/es/home.json";
import esAbout from "./locales/es/about.json";

// Inglés
import enCommon from "./locales/en/common.json";
import enNavbar from "./locales/en/navbar.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        common: esCommon,
        navbar: esNavbar,
        footer: esFooter,
        home: esHome,
        about: esAbout,
      },

      en: {
        common: enCommon,
        navbar: enNavbar,
        footer: enFooter,
        home: enHome,
        about: enAbout,
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;