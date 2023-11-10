import { createRouter, createWebHashHistory } from 'vue-router';
import Main from "@/Main.vue";
import InitWelcome from "@/InitWelcome.vue";
import TodoHome from "@/views/TodoHome/TodoHome.vue";
import PersonalTarget from "@/views/TodoHome/PersonalTarget.vue";
import PersonalTodo from "@/views/TodoHome/PersonalTodo.vue";
import RootHome from "@/views/RootHome/RootHome.vue";
import RootUserManage from "@/views/RootHome/RootUserManage.vue";
import RootRoleManage from "@/views/RootHome/RootRoleManage.vue";
import PasswordHome from "@/views/PasswordHome/PasswordHome.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        redirect: '/index',
        children: [
            {
                path:'index',
                name:'InitWelcome',
                component: InitWelcome,
            },
            // TodoHome
            {
                path: 'todo',
                name: 'TodoHome',
                component: TodoHome,
                redirect: 'todo/target',
                children: [
                    {
                        path: 'target',
                        name: 'PersonalTarget',
                        component: PersonalTarget,
                        meta: {
                            title: '目标管理'
                        }
                    },
                    {
                        path: 'personal',
                        name: 'PersonalTodo',
                        component: PersonalTodo,
                        meta: {
                            title: '待办管理'
                        }
                    },
                ]
            },
            // RootHome
            {
                path: 'root',
                name: 'RootHome',
                component: RootHome,
                redirect: 'root/userManage',
                children: [
                    {
                        path: 'userManage',
                        name: 'RootUserManage',
                        component: RootUserManage,
                        meta: {
                            title: '用户管理'
                        }
                    },
                    {
                        path: 'roleManage',
                        name: 'RootRoleManage',
                        component: RootRoleManage,
                        meta: {
                            title: '角色管理'
                        }
                    },
                ]
            },
            // PasswordHome
            {
                path: 'password',
                name: 'PasswordHome',
                component: PasswordHome,
            },
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router

