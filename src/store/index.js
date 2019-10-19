import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
import cart from './cart'
import common from './common'
import goods from './goods'
import goodslist from './goodslist'
import RegLogin from './RegLogin'

// 创建store实例
const store = new Vuex.Store({      //这里的Store是大写开头
    // 只用模块化store后会影响state数据的获取
    // store.state.xxx -> store.state.cart.xxx
    modules: {
        home,
        cart,
        common,
        goods,
        goodslist,
        RegLogin
    }
})


export default store;