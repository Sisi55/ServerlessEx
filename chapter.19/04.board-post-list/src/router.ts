// import PostList from './views/board/list/List';
import Home from '@/views/Home.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register/Register'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login'),
    },
    {
      path: '/board/:categoryId',
      name: 'boardList',
      component: () => import('./views/board/list/List'),
      props: true,
    },
    //   path: '/board/view/:id',
    //   name: 'boardView',
    //   component: () => import('./views/board/view/View'),
    //   props: true,
    // },
    // {
    //   path: '/board/write',
    //   name: 'boardWrite',
    //   component: () => import('./views/board/write/Write'),
    // },
    // {
  ],
});
