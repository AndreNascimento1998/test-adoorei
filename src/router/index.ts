import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'login',
        component: () => import('@/views/login/LoginPage.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;