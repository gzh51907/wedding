<template>
    <div class="home">
        <home-header></home-header>
        <home-banner></home-banner>
        <home-category></home-category>
        <home-einvitation></home-einvitation>
        <home-photographer></home-photographer>
        <home-hotcities></home-hotcities>
        <home-marriedtool></home-marriedtool>
        <home-weddingsupplies></home-weddingsupplies>
        <home-marriedphoto></home-marriedphoto>
        <home-strategy></home-strategy>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './home/Header.vue'
import HomeBanner from './home/Banner.vue'
import HomeCategory from './home/Category.vue'
import HomeEinvitation from './home/Einvitation.vue'
import HomePhotographer from './home/Photographer.vue'
import HomeHotcities from './home/Hotcities.vue'
import HomeMarriedtool from './home/Marriedtool.vue'
import HomeWeddingsupplies from './home/Weddingsupplies.vue'
import HomeMarriedphoto from './home/Marriedphoto.vue'
import HomeStrategy from './home/Strategy.vue'
import HomeFooter from './home/Footer.vue'

// 引入外部css样式
import '../assets/css/border.css'
import '../assets/css/base.css'


export default {
    name: 'home',
    data(){
        return {
        }
    },
    components: {
        HomeHeader, // 头部
        HomeBanner, // 轮播图
        HomeCategory, // 分类入口
        HomeEinvitation, // 一些入口
        HomePhotographer, // 摄影商家
        HomeHotcities, // 城市选择
        HomeMarriedtool, // 结婚工具
        HomeWeddingsupplies, // 结婚用品
        HomeMarriedphoto, // 结婚美图
        HomeStrategy, // 攻略
        HomeFooter, // 底部
    },

}
</script>

<style scoped>

</style>