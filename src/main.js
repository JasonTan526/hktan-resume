
import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload';
import i18n from './i18n';

// Main CSS
import './assets/main.css'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Declare App
const app = createApp(App);

// Use App
app.use(i18n);

// Vue Lazy Load
app.use(VueLazyload, {
	preload: 1.3,
	attempt: 1,
});

// Mount App 
app.mount('#app')
