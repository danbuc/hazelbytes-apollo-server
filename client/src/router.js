import Vue from 'vue'
import Router from 'vue-router'
import About from './pages/About/About.vue'
import Profile from './pages/Auth/Profile.vue'
import Signin from './pages/Auth/Signin.vue'
import Signup from './pages/Auth/Signup.vue'
import AddPost from './pages/Blog/AddPost.vue'
import Posts from './pages/Blog/Posts.vue'
import Collections from './pages/Collection/Collections.vue'
import Home from './pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/blog/addpost',
            name: 'AddPost',
            component: AddPost
        },
        {
            path: '/blog',
            name: 'Posts',
            component: Posts
        },
        {
            path: '/collection',
            name: 'Collections',
            component: Collections
        }
    ]

})