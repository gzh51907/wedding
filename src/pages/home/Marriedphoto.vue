<template>
    <!-- 结婚美图 -->
    <div class="marriedphoto section">
        <div class="section-head">
            <h2 class="section-tit">结婚美图</h2>
            <a class="section-more" href="">更多</a>
        </div>

        <div class="section-body">
            <a href="" class="marriedphoto-list1">
                <div class="photo-img">
                    <img src="https://qnm.hunliji.com/o_1clb6afdfhg2bi3kut1419156fa.jpg" alt="">
                </div>

                <div class="photo-bg">
                    <div class="photo-content">
                        <p class="photo-tit">水下婚纱照</p>
                        <div class="photo-btn"></div>
                    </div>
                </div>
            </a>

            <div class="photo-list">
                <a href="" class="photo-item">
                    <div class="photo-img">
                        <img src="https://qnm.hunliji.com/o_1clb6afdf15fj12t5q6jl5b7msb.jpg" alt="">
                    </div>
                    <p class="photo-tit">小清新婚礼布置</p>
                </a>
                <a href="" class="photo-item">
                    <div class="photo-img">
                        <img src="https://qnm.hunliji.com/o_1clb6afdf856pbo3ncl5to5oc.jpg" alt="">
                    </div>
                    <p class="photo-tit">个性婚纱照</p>
                </a>
                <a href="" class="photo-item">
                    <div class="photo-img">
                        <img src="https://qnm.hunliji.com/o_1clb6afdfjbv3jvfe61eqem57d.jpg" alt="">
                    </div>
                    <p class="photo-tit">韩式婚纱照</p>
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
    .marriedphoto
        margin-top:36px

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
                font-size: 16px;
        
        .section-body
            height  300px

            .marriedphoto-list1
                display: block;
                position: relative;
                height: 170px
                margin: 0 16px

                .photo-img
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    overflow: hidden;
                    width: 220px
                    height: 150px
                    border-radius: 15px

                    img
                        width: 100%;
                        height: 100%;

                .photo-bg
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 323px
                    height: 150px
                    z-index: 1;
                    border-radius: 15px
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.08);
                
                    .photo-content
                        position: absolute;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        top: 0;
                        right: 0;
                        width: 123px
                        height: 100%;
                        padding-left: 12px

                        .photo-tit
                            color: #333;
                            font-size: 20px
                            line-height: 1;
                        

                        .photo-btn
                            width: 28px
                            height: 28px
                            margin-top: 23px
                            background-color: #fff;
                            background: url(https://qnm.hunliji.com/o_1ckekgklp1sqr1pimn4uocm1r37d.png) no-repeat 0/contain;
                            box-shadow: 0 2px 12px 0 rgba(248,50,68,.2);

            .photo-list
                display: flex;
                margin: 16px 10px 16px 14px;

                .photo-item
                    flex: 1;
                    flex-shrink: 1;
                    overflow: hidden;
                    border-radius: 15px
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.08);
                    margin-right: 10px

                    .photo-img
                        width: 100%;
                        height: 80px

                        img
                            width: 108px
                            height: 80px

                    .photo-tit
                        height: 40px
                        font-size: 12px
                        line-height: 40px
                        color: #333;
                        text-align: center;
</style>