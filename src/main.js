import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from "@/router";
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.component("pv-button",Button)

app.use(router)
app.use(PrimeVue);

app.mount('#app')
