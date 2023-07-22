import RouterManager from "@/helpers/Router/RouterManager";
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
    },
    {
        path: '/cadastro/:id',
        name: 'cadastro',
        component: () => import('@/views/Register/RegisterPage.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/HomePage.vue'),
        meta: { requireAuth: true },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to: any, from: any, next: any) => {
    const routeService = new RouterManager(to, from, next)

    routeService.authRoute()
})

export default router;