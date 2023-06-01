import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";

import router from "@/router";
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.component("pv-button",Button)
app.component("pv-sidebar",Sidebar)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
