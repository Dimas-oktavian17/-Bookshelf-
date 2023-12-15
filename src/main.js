import './assets/output.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import mainComponent from './components/mainComponent.vue'
import footerComponent from './components/footerComponent.vue'
import buttonComponent from './components/button.vue'
import labelComponent from './components/label.vue'
import inputComponent from './components/input.vue'
import filterRadios from './components/filterRadios.vue'
import darkMode from './components/darkmode.vue'
const app = createApp(App)
app.component('IconVue', Icon)
    .component('footerComponent', footerComponent)
    .component('mainComponent', mainComponent)
    .component('buttonComponent', buttonComponent)
    .component('labelComponent', labelComponent)
    .component('inputComponent', inputComponent)
    .component('darkMode', darkMode)
    .component('FilterRadios', filterRadios).use(autoAnimatePlugin).mount('body')


