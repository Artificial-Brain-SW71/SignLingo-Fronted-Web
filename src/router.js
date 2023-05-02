import {createRouter ,createWebHashHistory} from 'vue-router';
import Home from "@/components/Home.component.vue";
import Settings from "@/components/Settings.component.vue";

const routes =[
    //{ path: '/Levels', component: Levels}, //Uncomment once you implement the Levels component
    //{ path: '/Calender', component: Calender}, //Uncomment once you implement the Calender component
    //{ path: '/Plus', component: Plus}, //Uncomment once you implement the Plus component
    { path: '/Settings', component: Settings},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;