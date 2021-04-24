import Home from './components/Home.vue'
import About from './components/About.vue'
 
const routes = [
    {
        name: '/',
        path: '/',
        component: Home
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    }
];
 
export default routes