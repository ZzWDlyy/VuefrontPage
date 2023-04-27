import { createRouter, createWebHistory } from "vue-router";
import Home from "../myweb/Home.vue"
import Login from "../myweb/Login.vue"
import Introduce from "../myweb/Introduce.vue"
import Realize from "../myweb/Realize.vue"
import Register from "../myweb/Register.vue"
import Homepage from '../views/Homepage.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/Home1",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/introduce",
      name: "Introduce",
      component: Introduce,
    },
    {
      path: "/Realize",
      name: "Realize",
      component: Realize,
    }, 
    {
      path: "/Register",
      name: "Register",
      component: Register,
    },
    {
      path: '/',
      redirect: '/home', // 重定向
      component: Main,
      children: [
        // 子路由
        { path: 'home', component: Homepage }, // 首页
        { path: 'user', component: User }, // 用户管理
        { path: 'mall', component: Mall},  // 商品管理
        { path: 'page1', component: PageOne},  // 页面1
        { path: 'page2', component: PageTwo}  // 页面2
      ]
    }
    
  ],
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});
export default router;
