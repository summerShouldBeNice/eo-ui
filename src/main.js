import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "@/router";

const app = createApp(App)

app.use(ElementPlus)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.use(router)

app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


