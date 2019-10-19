import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入组件
import home from '../pages/home.vue';
import RegLogin from '../pages/RegLogin';
import goodslist from '../pages/goodslist';
import goods from '../pages/goods';
import cart from '../pages/cart';
import NotFound from '../pages/NotFound';



let router = new VueRouter({
    mode:'history',     //开启history模式，需要在服务器的根目录内创建'server.js'文件配置相应参数，否则每次刷新页面就会404
    routes: [
        {
            path: '/',  
            redirect: '/home'
        },
        {
            name: 'home',         //主页
            path: '/home',
            component: home,
        },
        {
            name: 'RegLogin',    //注册登录页      
            path: '/RegLogin',
            component: RegLogin,
        },
        {
            name: 'goodslist',    //列表页    
            path: '/goodslist',
            component: goodslist,
        },
        {
            name: 'goods',        //详情页 
            path: '/goods',
            component: goods,
        },
        {
            name: 'cart',    //购物车页    
            path: '/cart',
            component: cart,
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]

})

export default router;