<template>
    <!-- 热门城市 -->
    <div class="hotcities">
        <div class="section-head">
            <h2 class="section-tit">热门城市</h2>
        </div>
        <div class="section-body">
            <div class="city">
                <div class="city-bg"></div>
                <div class="city-list">    
                    <a class="city-item" href="###" v-for="(city, index) in cities" :key="index">{{city}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            cities: ['上海', '济南', '武汉', '厦门', '大连', '长沙', '重庆', '合肥', '三亚', '丽江', '北京', '全部']
        }
    }
}
</script>

<style lang='stylus' scoped>
    .hotcities
        margin-top: 30px;

        .section-head
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 0 16px;
            line-height: 1;

            .section-tit
                flex: 1;
                color: #000;
                font-size: 20px;
                font-weight: bold;
            

            .section-more
                color: #999;
                font-size: 16px
        
        
        .section-body
            width: 100%;
            
            .city
                position: relative;
                margin: 0 16px;
                padding: 20px 20px 0;

                .city-bg
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 0;
                    padding-top: 31.1953%;
                    background: url(https://qnm.hunliji.com/o_1ckcalj6313oe19g51gbl104cbre1k.png) no-repeat 0;
                    background-size: 100% 100%;
                    border-radius: 15px;
                    overflow: hidden;
                

                .city-list
                    display: flex;
                    position: relative; 
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: 14px 16px;
                    border-radius: .4rem;
                    background-color: #fff;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.08);

                    .city-item
                        display: block;
                        padding: 10px 0;
                        width: 25%;
                        color: #333;
                        font-size: 15px;
                        text-align: center;
                        line-height: 1;
</style>