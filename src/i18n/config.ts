import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ro from "./locales/ro.json";
import ru from "./locales/ru.json";

const STORAGE_KEY = "prd_lang";

// Always start with "ro" so server and first client render match.
// I18nProvider switches to the saved language after mount.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro },
    ru: { translation: ru },
  },
  lng: "ro",
  fallbackLng: "ro",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;
