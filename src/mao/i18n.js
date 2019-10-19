import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
        ns: ['mao'],
        defaultNS: 'mao',
        debug: false
    });

export default i18n;
