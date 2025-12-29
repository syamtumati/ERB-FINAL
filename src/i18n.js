// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      nav: {
        home: "Startseite",
        belief: "Glaube",
        about: "Über uns",
        sermons: "Predigten",
        donate: "Spenden",
        contact: "Kontakt",
      },

      partners: {
        title: "UNSERE PARTNER",
      },

      related: {
        title: "VERBUNDENE GEMEINDEN",
      },

      footer: {
        impressum: "Impressum",
      },

      church: {
        name: "Evangelisch-Reformierte Baptistengemeinde",
      },
    },
  },

  en: {
    translation: {
      nav: {
        home: "Home",
        belief: "Belief",
        about: "About Us",
        sermons: "Sermons",
        donate: "Donate",
        contact: "Contact",
      },

      partners: {
        title: "OUR PARTNERS",
      },

      related: {
        title: "AFFILIATED CHURCHES",
      },

      footer: {
        impressum: "Legal Notice",
      },

      church: {
        name: "Evangelical Reformed Baptist Church",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

