import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useOnMsg } from './composables/useOnMsg'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

window.addEventListener('message', (ev) => useOnMsg(ev.data.type, ev.data.payload))
