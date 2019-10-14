import VueRouter from 'vue-router'

// 引入页面
import cart from "@/views/cart.vue";
import home from "@/views/home.vue";
import my from "@/views/my.vue";

// 定义路由
const routes = [
    { path: '/cart', component: cart },
    { path: '/home', component: home },
    { path: '/my', component: my }
  ]


export default new VueRouter({
    routes
})  