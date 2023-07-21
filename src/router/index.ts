import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'login',
        component: () => import('@/views/login/LoginPage.vue'),
    },
    {
        path: '/planos',
        name: 'plano',
        component: () => import('@/views/ListPlan/ListPlanPage.vue')
    },{
        path: '/cadastro/:id',
        name: 'cadastro',
        component: () => import('@/views/Register/RegisterPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;