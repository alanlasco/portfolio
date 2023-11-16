import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: "es",
        // Indica a i18next dónde cargar las traducciones
        resources: {
            es: {
                // Asegúrate de ajustar la ruta según la estructura de tu proyecto
                welcome: require('../locales/es/welcome.json'),
            },
            // Puedes agregar más idiomas según sea necesario
            // en: { welcome: require('./locales/en/welcome.json') }
        },
    });

export default i18n;
