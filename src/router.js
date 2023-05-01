import {createRouter ,createWebHashHistory} from 'vue-router';
import Home from "@/components/Home.component.vue";

const routes =[
    { path: '/', component: Home},
    { path: '/Levels', component: Levels},
    { path: '/Calender', component: Calender},
    { path: '/Plus', component: Plus},
    { path: '/Settings', component: Settings},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;