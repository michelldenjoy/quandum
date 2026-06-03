import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Español
import esCommon from "./locales/es/common.json";
import esNavbar from "./locales/es/navbar.json";
import esFooter from "./locales/es/footer.json";
import esHome from "./locales/es/home.json";
import esAbout from "./locales/es/about.json";
import esEtico from "./locales/es/etico.json";
import esCertifications from "./locales/es/certifications.json";
import esSustainability from "./locales/es/sustainability.json";
import esCareers from "./locales/es/careers.json";
import esContact from "./locales/es/contacto.json";
import esProducts from "./locales/es/products.json";  

// Inglés
import enCommon from "./locales/en/common.json";
import enNavbar from "./locales/en/navbar.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enEtico from "./locales/en/etico.json";
import enCertifications from "./locales/en/certifications.json";
import enSustainability from "./locales/en/sustainability.json";
import enCareers from "./locales/en/careers.json";
import enContact from "./locales/en/contacto.json";
import enProducts from "./locales/en/products.json";  

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
        etico: esEtico,
        certifications: esCertifications,
        sustainability: esSustainability,
        careers: esCareers,
        contacto: esContact,
        products: esProducts,

      },

      en: {
        common: enCommon,
        navbar: enNavbar,
        footer: enFooter,
        home: enHome,
        about: enAbout,
        etico: enEtico,
        certifications: enCertifications,
        sustainability: enSustainability,
        careers: enCareers,
        contacto: enContact,
        products: enProducts,
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;