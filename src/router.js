import {createRouter ,createWebHashHistory} from 'vue-router';
import Home from "@/components/Home.component.vue";
import Settings from "@/components/Settings.component.vue";
import Plus from "@/components/Plus.component.vue";
import Levels from "@/components/Levels.component.vue";
import Calender from "@/components/calendar-view.component.vue";

import Level1 from "@/components/levels-content/level1.component.vue";
import Level2 from "@/components/levels-content/level2.component.vue";

const routes =[
    { path: '/Levels', component: Levels},
    { path: '/Plus', component: Plus},
    { path: '/Settings', component: Settings},
    { path: '/Calender', component: Calender},
    { path: '/level1', component: Level1},
    { path: '/level2', component: Level2},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;