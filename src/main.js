import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/lara-dark-blue/theme.css'

axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(PrimeVue)
app.mount('#app')
