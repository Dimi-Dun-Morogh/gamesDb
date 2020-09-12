import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
  },
  {
    path: '/detailed',
    name: 'Detailed',
    component: () => import('../views/DetailedGameView.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes,
});

export default router;
