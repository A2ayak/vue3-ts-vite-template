import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.css'
import 'ant-design-vue/dist/antd.less'
import 'virtual:svg-icons-register' // svg

import { setAntdvCompConfig } from './plugins/antdvCompConfig'

const app = createApp(App)
app.use(store)
app.use(router)

// antdv全局配置
setAntdvCompConfig(app)
document.title = import.meta.env.VITE_APP_NAME

app.mount('#app')
