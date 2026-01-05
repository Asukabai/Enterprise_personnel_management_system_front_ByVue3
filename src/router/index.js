import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue' // 示例组件

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    // 添加其他路由
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
