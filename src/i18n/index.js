import { createI18n } from 'vue-i18n';
import zhMessage from './locales/zh.json';
import enMessage from './locales/en.json';

const messages = {
	en: enMessage,
	zh: zhMessage,
};

// Get stored locale from localStorage or default to 'en'
const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
	legacy: false,
	locale: savedLocale, // Use the stored locale instead of always 'en'
	messages
});

export default i18n;
