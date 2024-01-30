import './assets/main.css'
import 'animate.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPeristedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()pinia.use(piniaPluginPeristedstate)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
