import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "./assets/layouts/index.scss"

createApp(App).use(router).mount('#app');
