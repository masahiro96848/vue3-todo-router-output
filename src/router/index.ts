import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Top from '@/views/pages/Top.vue'
import CreateTodo from '@/views/pages/CreateTodo.vue'

const routeSettings: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Top',
        component: Top,
    },
    {
        path: '/create',
        name: 'CreateTodo',
        component: CreateTodo,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routeSettings,
})

export default router
