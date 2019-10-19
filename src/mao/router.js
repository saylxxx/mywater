import Vue from 'vue';
import Router from 'vue-router';

// Layouts
import Layout from './components/Layout/Layout';

Vue.use(Router)

const Main = () => import('./views/Main.vue')

const r = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Layout,
            children: [{
                path: '',
                component: Main,
            }, ]
        },
        // Not found route
        {
            name: 'undefined',
            path: '*',
            redirect: '/'
        }
    ]
});

export default r;