import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import JobExplorer from '../views/JobExplorer.vue'
import Application from '../views/Application.vue'
import Todo from '../views/Todo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/jobs',
        name: 'JobExplorer',
        component: JobExplorer,
        children: [
            {
                path: '',
                name: 'JobOverview',
                component: () => import('../components/JobOverview.vue')
            },
            {
                path: ':id',
                name: 'JobDetail',
                component: () => import('../components/JobDetail.vue')
            }
        ]
    },
    {
        path: '/application',
        name: 'Application',
        component: Application
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router