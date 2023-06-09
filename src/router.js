import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/components/Home.component.vue";
import Settings from "@/components/Settings.component.vue";
import Plus from "@/components/Plus.component.vue";
import Levels from "@/components/Levels.component.vue";
import Calender from "@/components/calendar-view.component.vue";
import Login from "@/components/Login.component.vue";

import Level1 from "@/components/exercise-content/level1.component.vue";
import Level2 from "@/components/exercise-content/level2.component.vue";

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'levels', component: Levels },
      { path: 'plus', component: Plus },
      { path: 'settings', component: Settings },
      { path: 'calender', component: Calender },
      { path: 'level1', component: Level1 },
      { path: 'level2', component: Level2 },
    ]
  },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;