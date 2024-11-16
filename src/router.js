import Home from './views/Home.vue'; // Import your components
import AdminPanelPage from './views/AdminPanelPage.vue';


import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/admin-panel', component: AdminPanelPage },
    // Add your other routes here
  ],
});

export default router;