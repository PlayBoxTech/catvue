import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Axios } from 'axios'
//import catimages from './components/catimage.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.component('cat-images', catimages);

app.mount('#app')
