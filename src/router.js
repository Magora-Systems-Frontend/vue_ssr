import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('./pages/Home') },
  { path: '/about', component: () => import('./pages/About') },
  { path: '/user/:id', component: () => import('./pages/User') },
  { path: '*', component: () => import('./pages/NotFound') },
];

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes,
  });
}
