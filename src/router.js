import Vue from 'vue'
import Router from 'vue-router'


import Home from './components/Home'
import UserList from './components/UserList'
import ViewUser from './components/ViewUser'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/users-list',
            name: 'users-list',
            component: UserList
        },
        {
            path: '/user/:id',
            name: 'view-user',
            component: ViewUser
        },
    ]
})


  
export default router

