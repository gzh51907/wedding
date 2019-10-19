<template>
    <!-- 摄影商家 -->
    <div class="photographer">
        <div class="section-head">
            <h2 class="section-tit">婚纱摄影商家</h2>
            <a class="section-more" href="">更多</a>
        </div>
        <div class="section-body">
            <div class="merchant-list">
                <a href="" class="merchant-item">
                    <div class="merchant-logo">
                        <img src="http://qnm.hunliji.com/0AB572F01743D6338C69C703F089E458?imageView2/1/w/120/h/120" alt="">
                    </div>
                    <h3 class="merchant-name">巴黎春天婚纱摄影</h3>
                    <div class="merchant-ratings">
                        <i class="merchant-star"></i>
                    </div>
                    <p class="merchant-evaluation">23条评价</p>
                </a>
                <a href="" class="merchant-item">
                    <div class="merchant-logo">
                        <img src="http://qnm.hunliji.com/67047B33B9029AD05CF318B07195A7E9?imageView2/1/w/120/h/120" alt="">
                    </div>
                    <h3 class="merchant-name">巴黎春天婚纱摄影</h3>
                    <div class="merchant-ratings">
                        <i class="merchant-star"></i>
                    </div>
                    <p class="merchant-evaluation">23条评价</p>
                </a>
                <a href="" class="merchant-item">
                    <div class="merchant-logo">
                        <img src="http://qnm.hunliji.com/o_1avo9jks8gcp1gmb16n01nfer02n.jpg?imageView2/1/w/120/h/120" alt="">
                    </div>
                    <h3 class="merchant-name">巴黎春天婚纱摄影</h3>
                    <div class="merchant-ratings">
                        <i class="merchant-star"></i>
                    </div>
                    <p class="merchant-evaluation">23条评价</p>
                </a>
                <a href="" class="merchant-item">
                    <div class="merchant-logo">
                        <img src="https://qnm.hunliji.com/5B5867A8F09D26664DAEA05C12E601C7.jpg?imageView2/1/w/120/h/120" alt="">
                    </div>
                    <h3 class="merchant-name">巴黎春天婚纱摄影</h3>
                    <div class="merchant-ratings">
                        <i class="merchant-star"></i>
                    </div>
                    <p class="merchant-evaluation">23条评价</p>
                </a>
                <a href="" class="merchant-item">
                    <div class="merchant-logo">
                        <img src="http://marry.qiniudn.com/A5AB100EF356F322A8E0166E256DDC92?imageView2/1/w/120/h/120" alt="">
                    </div>
                    <h3 class="merchant-name">巴黎春天婚纱摄影</h3>
                    <div class="merchant-ratings">
                        <i class="merchant-star"></i>
                    </div>
                    <p class="merchant-evaluation">23条评价</p>
                </a>
                <a href="" class="merchant-item">
                    <div class="merchant-logo">
                        <img src="http://qnm.hunliji.com/BFD1945AF5CE57DF8D0132C9A6DEF11E.jpg?imageView2/1/w/120/h/120" alt="">
                    </div>
                    <h3 class="merchant-name">巴黎春天婚纱摄影</h3>
                    <div class="merchant-ratings">
                        <i class="merchant-star"></i>
                    </div>
                    <p class="merchant-evaluation">23条评价</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            
        }
    }
}
</script>

<style lang='stylus' scoped>
    .photographer
        width: 100%
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

            .merchant-list
                overflow-x: auto;
                overflow-y: hidden;
                display: flex;
                height: 225px;
                padding: 12px 0 0 16px;

                .merchant-item
                    display: flex
                    flex-direction: column;
                    align-items: center;
                    width: 160px;
                    height: 198px;
                    margin-right: 10px;
                    padding: 20px 16px 0;
                    border-radius: 15px;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.08);
                    
                    .merchant-logo
                        overflow: hidden;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        border: 2px solid #e7e7e7;
                        background-color: #f6f6f7;

                        img
                            width: 58px;
                            height: 58px;

                    .merchant-name
                        overflow: hidden;
                        max-width: 100%;
                        margin-top: 14px;
                        color: #000;
                        font-size: 15px;
                        font-weight: bold;
                        line-height: 17px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    

                    .merchant-ratings
                        display: flex;
                        margin-top: 10px;

                        .merchant-star
                            width: 11px
                            height: 11px
                            background: url(https://qnm.hunliji.com/o_1clbdbft8s60nn0s51hjgi6bt.png) no-repeat 0/contain;

                    .merchant-evaluation
                        max-width: 100%;
                        margin-top: 8px;
                        font-size: 12px;
                        color: #666;
                        line-height: 1;

                .merchant-item:last-of-type
                    margin-right: 0;
                
            .merchant-list::after
                display: block;
                content: "";
                flex-shrink: 0;
                width: 16px;
                height: 178px;

</style>