<template>
  <div class="header">
    <img class="header-logo" src="https://qnm.hunliji.com/o_1ckeud9s2nijmll41elubcju3l.png" alt />
    <div class="city">
      <span class="city-name" @click="check">{{btnValue}}</span>
      <!-- <span class="city-name" v-show="!isShow" @click="check">退出</span> -->
    </div>
    <div class="header-right">
      <div class="nav-logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnValue: "登录"
    };
  },
  methods: {
    check() {
        if(this.btnValue==='退出'){
            localStorage.removeItem("username");
            this.btnValue = "登录";
        }else if(this.btnValue==='登录'){
            this.$router.push('RegLogin')
        }
    }
  },
  created() {
    let username = localStorage.getItem("username");
    if (username) {
      this.btnValue = "退出";
    } else {
      this.btnValue = "登录";
    }
  }
};
</script>

<style lang='stylus' scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 16px;
  background: #ffffff;

  .header-logo {
    display: block;
    width: 93px;
    height: 32px;
  }

  .city {
    flex: 1;
    margin-left: 10px;

    .city-name {
      position: relative;
    }
  }

  .header-right {
    width: 40px;
    height: 40px;

    .nav-logo {
      width: 100%;
      height: 100%;
      background: url('https://qnm.hunliji.com/o_1ckeu2uusfl01sst1lg0gjs1aul3g.png') 100% no-repeat; // qnm.hunliji.com/o_1ckeu2uusfl01sst1lg0gjs1aul3g.png) 100% no-repeat
      background-size: 16px;
    }
  }
}
</style>