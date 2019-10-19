<template >
  <div id="goods">
    <div class="goods_head">
      <div class="download">
        <img src="http://qnm.hunliji.com/o_1br8q9o0l1mlv7l47fraf718fr7.png" @click="goto('/home')" />
        <p class="download_app">App内打开</p>
      </div>
    </div>

    <div class="goods_main">
      <el-carousel height="375px" arrow="naver">
        <el-carousel-item v-for="item in goodsInf.ablist" :key="item.img">
          <img :src="item.img" style="width:100%" />
        </el-carousel-item>
      </el-carousel>

      <div class="goodsinf">
        <h2 class="goods_title">{{goodsInf.title}}</h2>

        <div class="goods_price">
          <span class="head_price-tag">null</span>
          <span class="head_sale-price">￥{{goodsInf.sale_price}}</span>
          <span class="head_market-price">
            <del>￥{{goodsInf.market_price}}</del>
          </span>
        </div>

        <p class="goods_security">
          <span class="head_security_item">七天无理由</span>
          <span class="head_security_item">48小时内发货</span>
        </p>
      </div>

      <div class="address">
        <p class="address_item">
          <span>配送</span>
          <span>{{goodsInf.merchant.city}} 至</span>
        </p>
        <p class="address_item">
          <span>运费</span>
          <span>6元</span>
        </p>
      </div>

      <div class="goods_shop">
        <img :src="goodsInf.merchant.logo_path" class="goods_shop_logo" />
        <div class="goods_shop_center">
          <p class="shop_title">
            <span class="shop_name">{{goodsInf.merchant.name}}</span>
            <i class="icon_bao"></i>
          </p>
          <p class="shopinf">
            <span class="shopinf_item">商品 {{goodsInf.merchant.works_count}}</span>
            <span class="shopinf_item">关注 {{goodsInf.merchant.fans_count}}</span>
          </p>
        </div>
        <p class="goods_btn">进店逛逛</p>
      </div>

      <div class="goods_detail demo-image_lazy">
        <img v-for="item in goodsInf.detail_photos" :key="item.img" :src="item.img" lazy />
      </div>
    </div>

    <div class="goods_footer">
      <el-button-group class="el_footer">
        <el-button icon="el-icon-shopping-cart-full" class="el_btn" @click="goto('/cart')">我的购物车</el-button>
        <el-button type="warning" class="el_btn" @click="Show('add')">加入购物车</el-button>
        <el-button type="danger" class="el_btn" @click="Show('now')">立即购买</el-button>
      </el-button-group>
    </div>

    <div class="goods_buy" v-show="show">
      <dl class="buy_top">
        <dt class="buy_img">
          <img :src="goodsInf.cover_image.img" alt />
        </dt>

        <dd class="buy_name">
          <p class="buy_title">{{goodsInf.title}}</p>
          <p class="buy_price">{{morenPrice}}</p>
          <p class="buy_txt">已选“{{goodsName}}”</p>
        </dd>
        <i class="buy_close" @click="Show('close')"></i>
      </dl>

      <div class="buy_center">
        <p class="buy_center_title">规格：</p>
        <div class="buy_center_good">
          <div class="buy_center_goods">
            <p
              :class="{active:idx===currentID}"
              v-for="(item,idx) in goodsInf.skus"
              :key="item.id"
              class="buy_center_item"
              @click="getclass(idx)"
            >{{item.name}}</p>
          </div>
        </div>
      </div>
      <div class="buy_center">
        <p class="buy_center_title">数量：</p>
        <el-input-number
          size="mini"
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="morenKucun"
          class="buy_center_num"
        ></el-input-number>
        <span class="buy_kucun">库存{{morenKucun}}件</span>
      </div>
      <div class="buy_button">
        <input type="button" value="确定" class="buy_btn" @click="maskShow" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: null,
      currentID: 0,
      num: 1,
      goodsInf: {
        cover_image: {},
        merchant: {}
      },
      show: false,
      morenPrice: null,
      morenKucun: null,
      moren: null,
      goodsName: null,
      gowhere: null
    };
  },

  async created() {
    this.username = localStorage.getItem("username");
    let { id } = this.$route.query;
    // console.log(id);
    let {
      data: { data }
    } = await this.$wedding.get(
      `datas/${id}?colName=goods`
    );
    this.goodsInf = {
      ablist: data[0].header_photos,
      detail_photos: data[0].detail_photos,
      title: data[0].title,
      market_price: data[0].market_price,
      sale_price: data[0].sale_price,
      skus: data[0].skus,
      merchant: data[0].merchant,
      cover_image: data[0].cover_image,
      id: data[0].id
    };
    this.morenPrice = this.goodsInf.skus[0].actual_price;
    this.morenKucun = this.goodsInf.skus[0].show_num - 0;
    this.goodsName = this.goodsInf.skus[0].name;
  },

  methods: {
    open() {
      this.$confirm("您还未登录", "提示", {
        confirmButtonText: "去登录",
        cancelButtonText: "取消",
        type: "info",
        center: true
      })
        .then(() => {
          this.goto("/RegLogin");
          this.$message({
            type: "success",
            message: "为您跳转至登录页面!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消登录"
          });
        });
    },
    Show(path) {
      this.show = !this.show;
      if (path === "add") {
        this.gowhere = "add";
      } else if (path === "now") {
        this.gowhere = "now";
      }
    },

    maskShow() {
      if (this.username) {
        let gowhere = this.gowhere;
        if (gowhere === "add") {
          this.addcart();
          this.show = !this.show;
        } else if (gowhere === "now") {
          this.addcart();
          this.goto("/cart");
          this.show = !this.show;
        }
      } else {
        this.open();
      }
    },

    handleChange(value) {},

    getclass(idx) {
      this.currentID = idx;
      this.morenPrice = this.goodsInf.skus[idx].actual_price;
      this.morenKucun = this.goodsInf.skus[idx].show_num - 0;
      this.goodsName = this.goodsInf.skus[idx].name;
    },

    async addcart() {
      // let goods = {
      //   id: this.goodsInf.id,
      //   img: this.goodsInf.cover_image.img,
      //   title: this.goodsInf.title,
      //   norms: this.goodsName,
      //   price: this.morenPrice,
      //   qty: this.num
      // };

      let data = await this.$wedding.post(
        "datas/addCart",
        {
          colName: "cart",
          username: this.username,
          id: this.goodsInf.id,
          img: this.goodsInf.cover_image.img,
          title: this.goodsInf.title,
          norms: this.goodsName,
          price: this.morenPrice,
          qty: this.num,
          kucun: this.morenKucun
        }
      );
      // console.log(data);
    },

    goto(path) {
      if (path === "/cart") {
        this.$router.push({ path: path, query: { id: this.goodsInf.id } });
      } else {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style lang="scss">
#goods {
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  width: 100%;
  background-color: #f2f3f6;
  display: flex;
  flex-direction: column;

  .active {
    color: #f83244 !important;
    border: 1px solid #f83244;
  }

  .goods_head {
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    .download {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      padding: 0 16px;
      background-color: #fff;
      position: relative;

      img {
        width: 87px;
        height: 30px;
      }

      .download_app {
        width: 84px;
        height: 26px;
        border: 1px solid #f83244;
        border-radius: 3px;
        font-size: 13px;
        line-height: 24px;
        text-align: center;
        color: #f83244;
      }
    }
  }

  .goods_main {
    padding-top: 44px;
    padding-bottom: 50px;
    width: 100%;
    .el-carousel {
      .el-carousel__indicators {
        width: 100%;
        display: flex;
        justify-content: center;
        .el-carousel__indicator {
          .el-carousel__button {
            width: 13px;
            height: 13px;
            border-radius: 50%;
            margin: 0 5px 16px 5px;
          }
        }
      }
    }

    .goodsinf {
      padding: 12px 16px 0;
      background: #fff;
      margin-bottom: 10px;
      width: 100%;
      height: auto;

      .goods_title {
        font-size: 16px;
        line-height: 22px;
        color: rgb(116, 111, 111);
      }

      .goods_price {
        height: 42px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .head_price-tag {
          display: inline-block;
          vertical-align: top;
          margin-right: 13px;
          padding-left: 4px;
          height: 15px;
          font-size: 11px;
          line-height: 15px;
          color: #fff;
          border-radius: 2px 0 0 2px;
          background: #f83244;
          position: relative;

          &:after {
            display: block;
            content: "\20";
            position: absolute;
            width: 8px;
            height: 15px;
            background: url(http://qnm.hunliji.com/o_1bek283luubr2j41jkd1aa2dq8.png)
              0 0 no-repeat;
            background-size: 100% 100%;
            right: -8px;
            top: 0;
          }
        }

        .head_sale-price {
          font-size: 20px;
          line-height: 100%;
          color: #f83244;
          margin-right: 12px;
        }

        .head_market-price {
          font-size: 12px;
          line-height: 100%;
          color: #aaa;
        }
      }

      .goods_time {
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        color: #999;
        padding-bottom: 10px;
      }

      .goods_security {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        height: 30px;
        position: relative;

        .head_security_item {
          padding-left: 18px;
          height: 14px;
          font-size: 12px;
          line-height: 14px;
          color: #666;
          margin-right: 30px;
          background: url(http://qnm.hunliji.com/o_1bbvkju8p1tmu7iqretdbn17dq1f.png)
            0 no-repeat;
          background-size: 14px 14px;
        }
      }
    }

    .address {
      margin: 10px 0;
      background: #fff;
      font-size: 14px;
      padding: 0 16px;

      .address_item {
        height: 42px;
        display: flex;
        align-items: center;

        span {
          margin-right: 20px;
          font-size: 14px;
          color: #333;
        }
      }
    }

    .goods_shop {
      display: flex;
      align-items: center;
      padding: 16px;
      background: #fff;
      margin-bottom: 10px;

      .goods_shop_logo {
        width: 44px;
        height: 44px;
      }

      .goods_shop_center {
        flex: 1;
        padding: 0 10px;

        .shop_title {
          display: flex;
          height: 16px;
          line-height: 16px;

          .shop_name {
            display: inline-block;
            font-size: 14px;
            line-height: 16px;
            margin-right: 5px;
            color: #333;
          }
          .icon_bao {
            width: 16px;
            height: 16px;
            background: url(http://qnm.hunliji.com/o_1bbvkju8pbn21dmeg8h1mcmmif1d.png)
              0 0 no-repeat;
            background-size: 100% 100%;
          }
        }

        .shopinf {
          margin-top: 8px;
          .shopinf_item {
            display: inline-block;
            height: 12px;
            font-size: 12px;
            line-height: 12px;
            color: #999;
            margin-right: 16px;
          }
        }
      }

      .goods_btn {
        width: 68px;
        height: 24px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 24px;
        text-align: center;
        color: #fff;
        background: #ffaf24;
      }
    }

    .goods_detail {
      padding-top: 12px;
      background: #fff;
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }
    }
  }

  .goods_footer {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .el_footer {
      display: flex;
      height: 50px;
      width: 100%;

      .el_btn {
        flex: 1;
        height: 100%;
      }
    }
  }

  .goods_buy {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 70;
    width: 100%;
    background: #fff;

    .buy_top {
      display: flex;
      padding: 12px 16px;

      .buy_img {
        width: 56px;
        height: 56px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .buy_name {
        flex: 1;
        overflow: hidden;
        padding: 0 12px 0 8px;

        .buy_title {
          font-size: 13px;
          line-height: 20px;
          color: #666;
          overflow: hidden;
        }
        .buy_price {
          margin-top: 4px;
          font-size: 13px;
          line-height: 100%;
          color: #f83244;
        }

        .buy_txt {
          margin-top: 5px;
          font-size: 12px;
          line-height: 100%;
          color: #999;
        }
      }

      .buy_close {
        position: absolute;
        right: 0;
        top: 0;
        width: 44px;
        height: 44px;
        background: url(http://qnm.hunliji.com/o_1bbv48271tepdgo1e2qtq9199t7.png)
          50% no-repeat;
        background-size: 12px 12px;
      }
    }

    .buy_center {
      padding: 16px;
      background: #f7f7f7;

      .buy_center_title {
        font-size: 12px;
        line-height: 100%;
        margin-bottom: 10px;
      }

      .buy_center_good {
        overflow: auto;
        max-height: 99px;
        .buy_center_goods {
          display: flex;
          flex-wrap: wrap;

          .buy_center_item {
            display: inline-block;
            margin: 0 10px 5px 0;
            padding: 0 10px;
            min-width: 60px;
            height: 28px;
            border-radius: 14px;
            font-size: 14px;
            line-height: 28px;
            text-align: center;
            color: #333;
            background: #fff;
          }
        }
      }

      .buy_center_num {
        background: #fff;
        width: 100px;
        height: 28px;
        border-radius: 11px;
        margin-top: 5px;
      }

      .buy_kucun {
        display: inline-block;
        margin: 5px 0 0 5px;
        font-size: 13px;
        line-height: 28px;
        color: #666;
      }
    }

    .buy_button {
      height: 50px;
      padding: 10px 0;

      .buy_btn {
        display: block;
        width: 140px;
        height: 30px;
        border-radius: 15px;
        margin: 0 auto;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background: #f83244;
      }
    }
  }
}
</style> 