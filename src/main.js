import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-green/theme.css"
import 'primeicons/primeicons.css';

import router from "@/router";
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import ScrollPanel from 'primevue/scrollpanel';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const app = createApp(App);

app.component("pv-button",Button)
app.component("pv-sidebar",Sidebar)
app.component("pv-scrollpanel",ScrollPanel)
app.component("pv-image",Image)
app.component("pv-inputtext",InputText)
app.component("pv-card",Card)
app.component("pv-cascadeselect",CascadeSelect)
app.use(VuePlyr)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
