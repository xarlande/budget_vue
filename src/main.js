import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(ElementUI)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
