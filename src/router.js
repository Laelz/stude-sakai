import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'FormLayoutDemo',
        component: () => import('./components/FormLayoutDemo.vue'),

    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,

    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
