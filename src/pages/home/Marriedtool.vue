<template>
    <!-- 结婚工具 -->
    <div class="marriedtool">
        <div class="section-head">
            <h2 class="section-tit">结婚工具</h2>
        </div>
        <div class="section-body">
            <div class="tool-list">
                <a href="" class="tool-item" v-for="(item, index) in toolList" :key="index">
                    <h3 class="tool-item-tit">{{item.title}}</h3>
                    <p class="tool-item-desc">{{item.desc}}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            toolList: [
                { title: '电子请帖', desc: '免费制作' },
                { title: '结婚吉日', desc: '合婚择日' },
                { title: '婚姻登记处', desc: '领证必备' },
                { title: '结婚任务', desc: '搞怪有趣' },
                { title: '婚礼歌曲', desc: '温馨祝福' },
                { title: '婚礼流程', desc: '婚前必看' }
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
    .marriedtool
        margin-top: 36px

        .section-head
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            padding: 0 16px;
            line-height: 1;

            .section-tit
                flex: 1;
                color: #000;
                font-size: 20px;
                font-weight: bold;
            

            .section-more
                color: #999;
                font-size: 16px;

        .section-body
            width: 100%;

            .tool-list
                display: flex;
                overflow-x: auto;
                overflow-y: hidden;
                position: relative;
                height: 128px
                padding: 12px 0 0 16px;

                .tool-item
                    flex-shrink: 0;
                    position: relative;
                    width: 115px
                    height: 70px
                    margin-right: 10px
                    padding: 15px 13px
                    border-radius: 15px
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.08);

                    .tool-item-tit
                        color: #000;
                        font-size: 16px
                        line-height: 1;
                        font-weight: bold;
                    

                    .tool-item-desc
                        margin-top: 10px
                        color: #666;
                        font-size: 12px
                    

                .tool-item::after
                    position: absolute;
                    display: block;
                    content: "";
                    right: 12px
                    bottom: 8px
                    width: 22px
                    height: 22px
                    background-repeat: no-repeat;
                    background-size: contain;
                

                .tool-item:nth-child(1)::after
                    background-image: url(https://qnm.hunliji.com/o_1ckbqbva957jeko3in1sdeihqg.png);
                
                .tool-item:nth-child(2)::after
                    background-image: url(https://qnm.hunliji.com/o_1ckbqbva96fdf8eevboo91nbge.png);
                
                .tool-item:nth-child(3)::after
                    background-image: url(https://qnm.hunliji.com/o_1ckbqbva914oghis1vcr2tu17njc.png);
                
                .tool-item:nth-child(4)::after
                    background-image: url(https://qnm.hunliji.com/o_1ckbqbva9rc81ridup21s7i1roch.png);
                
                .tool-item:nth-child(5)::after
                    background-image: url(https://qnm.hunliji.com/o_1ckbqbva9h6k1jutslmbq31k7td.png);
                
                .tool-item:nth-child(6)::after
                    background-image: url(https://qnm.hunliji.com/o_1ckbqbva91oq3vlmov4rd6r6kf.png);
                
            

            .tool-list::after
                flex-shrink: 0; 
                display: block;
                content: "";
                width: 16px
                height: 70px
</style>