import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './plugins/css'

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')