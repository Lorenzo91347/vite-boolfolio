import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/NotFound.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            //Here :slug can be any name,as long as it is reciprocated in the axios call
            path: '/project/:slug',
            name: 'single-project',
            component: ProjectDetail
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },

        //This Line(catch-all) serves as a failsafe should the page not be found,instead of giving a nasty error(it is written last for convention)

        {
            path: '/pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]


});

export { router };
