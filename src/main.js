import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as Icons from '@element-plus/icons'
import router from "@/router";
import {createPinia} from "pinia";

const app = createApp(App)

app.use(ElementPlus)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.use(router)

app.use(createPinia())


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

for(const name in Icons){
    app.component(name,(Icons)[name])
}

app.mount('#app')

