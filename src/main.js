import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'
import store from './store'
import router from './router' 

createApp(App).use(router).use(store).use(VueApexCharts).mount('#app')
