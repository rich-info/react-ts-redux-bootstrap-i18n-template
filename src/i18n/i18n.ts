import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEn from "./en/translation.json";
import translationDe from "./de/translation.json";

// the translations
const translationResources = {
    en: {
        translations: translationEn
    },
    de: {
        translations: translationDe
    }
};

i18n
    // load translation using xhr
    .use(XHR)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
        resources: translationResources,
        lng: "en",
        fallbackLng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations"
    });

export default i18n;