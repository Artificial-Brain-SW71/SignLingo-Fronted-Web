import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/components/Home.component.vue";
import Settings from "@/components/Settings.component.vue";
import Plus from "@/components/Plus.component.vue";
import Levels from "@/components/Levels.component.vue";
import Calender from "@/components/calendar-view.component.vue";
import Login from "@/components/Login.component.vue";
import Exercise from "@/components/exercises.component.vue";
import Captcha from "@/components/captcha.component.vue";
import Pruebas from "@/components/Pruebas.component.vue";

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'levels', component: Levels },
      { path: 'plus', component: Plus },
      { path: 'settings', component: Settings },
      { path: 'calender', component: Calender },
      { path: 'exercise', component: Exercise },
    ]
  },
  { path: '/login', component: Login },
  { path: '/', component: Captcha }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;