import { createStore } from 'vuex';

const store = createStore({
	state: {
		isZH: localStorage.getItem('locale') === 'zh', // Load from localStorage
		locale: localStorage.getItem('locale') || 'en' // Default to 'en' if not set
	},
	mutations: {
		SET_LANGUAGE(state, payload) {
			state.isZH = payload;
			state.locale = payload ? 'zh' : 'en';
			localStorage.setItem('locale', state.locale); // Save to localStorage
		},
		TOGGLE_LANGUAGE(state) {
			state.isZH = !state.isZH;
			state.locale = state.isZH ? 'zh' : 'en';
			localStorage.setItem('locale', state.locale); // Save to localStorage
		}
	},
	actions: {
		setLanguage({ commit }, isZH) {
			commit('SET_LANGUAGE', isZH);
		},
		toggleLanguage({ commit }) {
			commit('TOGGLE_LANGUAGE');
		}
	},
	getters: {
		isChinese(state) {
			return state.isZH;
		},
		currentLocale(state) {
			return state.locale;
		}
	}
});

export default store;
