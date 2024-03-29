import { createPinia } from 'pinia'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import mainComponent from './components/mainComponent.vue'
import buttonComponent from './components/button.vue'
import labelComponent from './components/label.vue'
import inputComponent from './components/input.vue'
import filterRadios from './components/filterRadios.vue'
import darkMode from './components/darkmode.vue'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.component('IconVue', Icon)
    .component('mainComponent', mainComponent)
    .component('buttonComponent', buttonComponent)
    .component('labelComponent', labelComponent)
    .component('inputComponent', inputComponent)
    .component('darkMode', darkMode)
    .component('FilterRadios', filterRadios)
    .use(autoAnimatePlugin)
    .use(pinia)
    .mount('body')

