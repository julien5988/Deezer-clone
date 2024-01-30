import './assets/main.css';
import 'animate.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'; // Correction de la variable ici

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
