<template>
  <!-- 结婚用品 -->
  <div class="weddingsupplies section">
    <div class="section-head">
      <h2 class="section-tit">结婚用品</h2>
      <span class="section-more">更多</span>
    </div>
    <div class="section-body">
      <div class="supplies-content" @click="goto('/goodslist')">
        <div class="supplies-content-left">
          <span class="weddingsupplies-item-left">
            <img src="https://qnm.hunliji.com/o_1ckc6chiqe4s1rejj8c8311rsb17.png" alt />
          </span>
          <span class="weddingsupplies-item-left">
            <img src="https://qnm.hunliji.com/o_1ckc6chiq1rj105q7t83a41v0m19.png" alt />
          </span>
        </div>
        <div class="supplies-content-rig">
          <span class="weddingsupplies-item-rig">
            <img src="https://qnm.hunliji.com/o_1ckc6chiq17ejjir16lsinv1mpa18.png" alt />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      goto(path){
          this.$router.push(path)
      }
  },
};
</script>

<style lang='stylus' scoped>
.weddingsupplies {
  margin-top: 20px;

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 16px;
    line-height: 1;

    .section-tit {
      flex: 1;
      color: #000;
      font-size: 20px;
      font-weight: bold;
    }

    .section-more {
      color: #999;
      font-size: 16px;
    }
  }

  .section-body {
    width: 100%;

    .supplies-content {
      margin: 0 16px;
      display: flex;
      justify-content: center;
      height: 200px;
      border-radius: 15px;
      overflow: hidden;

      .supplies-content-left {
        flex: 1;
        display: flex;
        flex-direction: column;

        .weddingsupplies-item-left {
          display: block;
          width: 100%;
          height: 50%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .supplies-content-rig {
        flex: 1;
        height: 100%;

        .weddingsupplies-item-rig {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>