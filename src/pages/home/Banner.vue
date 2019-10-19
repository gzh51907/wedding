<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
            <swiper-slide v-for="item in imgList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: true,
                effect: 'coverflow',
                autoplay: {
                    autoplay: true,
                    delay: 1500,//1秒切换一次
                }
            },
            imgList: [
                {
                    "id": "0001",
                    "imgUrl": "https://qnm.hunliji.com/o_1d9mg5bkc4v7a5616js1t5a12829.jpg?imageView2/1/w/686/h/276"
                },
                {
                    "id": "0002",
                    "imgUrl": "https://qnm.hunliji.com/o_1d2236gc31fes1g34mq1980q9.jpg?imageView2/1/w/686/h/276"
                },
                {
                    "id": "0003",
                    "imgUrl": "http://qnm.hunliji.com/o_1cliaojfo1vdpm1f1oli1tf6efue.jpg?imageView2/1/w/686/h/276"
                },
                {
                    "id": "0004",
                    "imgUrl": "https://qnm.hunliji.com/o_1d1diprgh1nms19mc1kkn40k1r2h9.jpg?imageView2/1/w/686/h/276"
                },
                {
                    "id": "0005",
                    "imgUrl": "https://qnm.hunliji.com/o_1d1dilnb31ipo1i0k1upb16vj4r29.jpg?imageView2/1/w/686/h/276"
                },
                {
                    "id": "0006",
                    "imgUrl": "http://qnm.hunliji.com/o_1cldkvljg17o736catf14fukn09.jpg?imageView2/1/w/686/h/276"
                }
            ]
        }
    },
    computed: {
        isShow(){
            return this.imgList.length > 0
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner 
        position relative
        height 154px 
        padding 0 16px

    .banner >>> .swiper-container
        height 100%
        border-radius: 18px 18px 0 0;

    .swiper-container >>> .swiper-slide
        height 100%
        img
            width 100%
            height 100%
            border-radius: 18px 18px 0 0;

    .swiper-container:after
        content: ""
        display: block
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        height: 28px            
        background: url(https://qnm.hunliji.com/o_1ckf03u85b722kpu6j12f55ui3q.png) no-repeat 0
        background-size: 100% 100%
        z-index: 2

    .swiper-container >>> .swiper-pagination
        bottom 4px

    .swiper-pagination >>> .swiper-pagination-bullet
        width 6px 
        height 6px
        margin 0 2px
    .swiper-pagination >>> .swiper-pagination-bullet-active
        background-color #ffffff
    
</style>