import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locals/en.json";
import it from "./locals/it.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    it: {
      translation: it,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
