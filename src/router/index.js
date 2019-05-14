import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: () => import('../pages/Home')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../pages/About')
        }
    ]
})