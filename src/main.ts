import { createApp } from 'vue'
import App from './App.vue'
import axiosInstall from './axios'
import router from './router'
import store from './store'

 createApp(App).use(store).use(router).use(axiosInstall).mount('#app')
//createApp(App).use(router).use(axiosInstall).mount('#app')