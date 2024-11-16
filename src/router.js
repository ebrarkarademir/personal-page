// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // For Vue 3
// For Vue 2, you would use `import VueRouter from 'vue-router';`

import Home from './views/Home.vue'; // Import your components
import AdminPanelPage from './views/AdminPanelPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: AdminPanelPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;