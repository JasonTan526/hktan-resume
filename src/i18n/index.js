import { createI18n } from 'vue-i18n';
import zhMessage from './locales/zh.json';
import enMessage from './locales/en.json';

const messages = {
	en: enMessage, // Map 'en' to enMessage
	zh: zhMessage, // Map 'zh' to zhMessage
};

const i18n = createI18n({
	legacy: false,
	locale: 'en', // Set the default locale to 'en'
	messages
});

export default i18n;
