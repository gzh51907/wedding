<template>
    <div class="einvitation">
        <div class="einvitation-wrap" @click="productList">
            <a href="###" class="einvitation-left-wrap">
                <img src="http://qnm.hunliji.com/o_1cliarnre1kk49dc1sa3kiqe4g9.png" alt="">
            </a>
            <div class="einvitation-rig-wrap">
                <a href="###" class="einvitation-rig-tbox">
                    <img src="http://qnm.hunliji.com/o_1cliau3cmq3ca6q1kvf16hvdvc9.png" alt="">
                </a>
                <a href="###" class="einvitation-rig-bbox">
                    <img src="https://qnm.hunliji.com/o_1d21g6g94cug1q4a1lr3ne19q19.jpg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        productList(){
            this.$router.push('/prodlist')
        }
    }
}
</script>

<style lang='stylus' scoped>
    .einvitation
        overflow: hidden;
        width: 100%;
        padding: 0 16px;

        .einvitation-wrap
            display: flex;
            justify-content: space-between;

            width: 100%;
            margin-top: 19px;

            .einvitation-left-wrap
                overflow: hidden;
                width: 186px;
                height: 183px;
                border-radius: 15px;

                img
                    width: 100%;
                    height: 100%;

            .einvitation-rig-wrap
                width: 188px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .einvitation-rig-tbox
                    overflow: hidden;
                    height: 89px;
                    border-radius: 15px;

                    img
                        width: 100%;
                        height: 100%

                .einvitation-rig-bbox
                    overflow: hidden;
                    height: 86px;
                    border-radius: 15px;
                    img
                        width: 100%;
                        height: 100%;
</style>