import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'login',
        component: () => import('@/views/login/LoginPage.vue'),
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: () => import('@/views/register/RegisterPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;