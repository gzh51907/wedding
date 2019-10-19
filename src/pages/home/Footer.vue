<template>
    <div class="footer">
        <div class="btn-wrap">
            <div class="download btn">下载APP</div>
            <div class="problem btn">常见问题</div>
        </div>
        <div class="copy">
            <div class="copyright">
                粤ICP备13004478号 © 麻麻 我想吃山药团队
            </div>
            <div class="concat">
                客服热线：10086
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
    .footer
        padding 30px 0
        background #f2f3f6

        .btn-wrap
            display flex
            justify-content center

            .btn
                width 100px
                height 30px
                border-radius 15px
                font-size 14px
                line-height 30px
                text-align center
                color: #fff;
                box-shadow: 0 2px 12px 0 rgba(248,50,68,.2);
            
            .download            
                margin: 0 10px
                background: #f83244;

            .problem
                margin-left 20px 
                color: #f83244;
                background: #fff;

    .copy
        font-size: 12px;
        color: #999;
        line-height: 1;
        text-align: center;
        
        .copyright
            margin-top 20px

        .concat 
            margin-top 10px

</style>