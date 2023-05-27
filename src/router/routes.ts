import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/main-layout.vue'),
        children: [
            { path: '', component: () => import('pages/index.vue') },
        ],
    },
    {
        path: '/exchange',
        component: () => import('layouts/exchange-layout.vue'),
        children: [
            { path: '', component: () => import('pages/exchange.vue') },
        ],
    },


    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
