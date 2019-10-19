<template>
  <div class="box">
    <h1>404</h1>
    <div class="back" @click="back"><span>返回首页</span></div>
  </div>
</template>
<script>
export default {
  methods:{
      back(){
          this.$router.push('/home');
      }
  }
};
</script>
<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
  .box {
    width: 100%;
    height: 660px;
    background: url("../assets/404.png") center center no-repeat;
    background-size: contain;
    position: relative;
    h1 {
      color: red;
      font-size: 110px;
      text-align: center;
      line-height: 330px;
    }
    .back{
        font-size: 12px;
        color: #000;
        text-align: center;
        position:absolute;
        top: 402px;
        left:182px;
    }
  }
}
</style>