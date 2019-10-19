<template>
  <div id="cart">
    <!--头部开始-->
    <div class="header">
      <h1>购物车</h1>
      <p class="back" @click="goto('back')">
        <span></span>
      </p>
    </div>
    <!--头部结束-->
    <div class="shopping">
      <div class="shop-group-item">
        <div class="shop-name">
          <h4>婚礼纪出品</h4>
          <div class="coupons">
            <span @click="del">删除选中</span>
          </div>
        </div>
        <ul>
          <li v-for="(item,idx) in cartData" :key="item.norms">
            <div class="shop-info">
              <input type="checkbox" class="check goods-check goodsCheck" v-model="item.selected" />
              <div class="shop-info-img" @click="goto(item.id)">
                <img :src="item.img" />
              </div>
              <div class="shop-info-text">
                <h4>{{item.title}}</h4>
                <div class="shop-brief">
                  <span>已选规格：{{item.norms}}</span>
                  <span>剩余：{{item.kucun}}件</span>
                </div>
                <div class="shop-price">
                  <div class="shop-pices">
                    ￥
                    <b class="price">{{item.price}}</b>
                  </div>
                  <div class="shop-arithmetic">
                    <span class="cut minus" @click="cut(idx)">-</span>
                    <span class="num">{{item.qty}}</span>
                    <span class="add plus" @click="add(idx)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="payment-bar">
      <div class="all-checkbox">
        <input type="checkbox" class="check goods-check" v-model="checkAll" />全选
      </div>
      <div class="shop-total">
        <strong>总价：{{totalPrice}}</strong>
      </div>
        <button>去结算</button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      cartData: []
    };
  },
  methods: {
    open() {
      this.$confirm("您确定要删除这些宝贝吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
        center: true
      })
        .then(() => {
          for (let i = this.cartData.length - 1; i >= 0; i--) {
            if (this.cartData[i].selected) {
              this.cartData.splice(i, 1);
            }
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    goto(id) {
      if (id === "back") {
        let oldID = this.$route.query.id;
        this.$router.push({ path: "/goods", query: { id: oldID } });
      } else {
        this.$router.push({ path: "/goods", query: { id: id } });
      }
    },
    add(idx) {
      this.cartData[idx].qty++;
      if (this.cartData[idx].qty >= this.cartData[idx].kucun) {
        this.cartData[idx].qty = this.cartData[idx].kucun;
      }
    },
    cut(idx) {
      this.cartData[idx].qty--;
      if (this.cartData[idx].qty <= 1) {
        this.cartData[idx].qty = 1;
      }
    },
    del() {
      this.open();
    }
  },
  computed: {
    checkAll: {
      get() {
        return this.cartData.every(item => item.selected);
      },
      set(val) {
        // 主动修改：checkAll的值影响所有数据的值
        this.cartData.forEach(item => (item.selected = val));
      }
    },
    totalPrice() {
      let total = 0;
      this.cartData.forEach(item => {
        if (item.selected) {
          total += item.qty * item.price;
        }
      });
      return total.toFixed(2);
    }
  },
  async created() {
    let username = localStorage.getItem("username");
    if (username) {
      let {
        data: { data }
      } = await this.$wedding.get(
        `datas/getCart?colName=cart&username=${username}`
      );

      //重复商品去重，商品数量叠加
      for (let i = 0; i < data.length; i++) {
        for (let k = i + 1; k < data.length; k++) {
          if (data[i].id == data[k].id && data[i].norms == data[k].norms) {
            data[i].qty += data[k].qty;
            data[k].qty = 0;
          }
        }
      }
      data.forEach((item, index) => {
        item.selected = false;
        if (item.qty == 0) {
          data.splice(index, 1);
        }
      });

      //提取公共id
      // console.log(data);
      let repeatArr = [];
      data.forEach(item => {
        repeatArr.push(item.id);
      });
      // console.log(repeatArr)
      let noRepeatArr = [...new Set(repeatArr)];
      // console.log(data);
      this.cartData = data;

      //动态创建集合
      // let endArr = [];
      // for (let i = 0; i < noRepeatArr.length; i++) {
      //   let i = [];
      //   endArr.push(i);
      // }
      // // console.log(endArr)

      // //最终将分类好的数据推送至对应集合
      // for (let i = 0; i < noRepeatArr.length; i++) {
      //   for (let k = 0; k < data.length; k++) {
      //     if (data[k].id == noRepeatArr[i]) {
      //       endArr[i].push(data[k]);
      //     }
      //   }
      // }
      // console.log(endArr);
      // this.cartData = endArr;
    } else {
      this.$router.push("goods");
    }
  }
};
</script>

<style lang="scss">
#cart {
  html,
  body,
  div,
  p,
  form,
  label,
  ul,
  li,
  dl,
  dt,
  dd,
  ol,
  img,
  b,
  em,
  strong,
  small,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    font-style: normal;
  }
  body {
    font-family: SimHei, "Helvetica Neue", Arial, "Droid Sans", sans-serif;
    font-size: 14px;
    color: #333;
    background: #f2f2f2;
  }
  a,
  a.link {
    color: #666;
    text-decoration: none;
    font-weight: 500;
  }
  a,
  a.link:hover {
    color: #666;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }
  /*头部开始*/
  .header {
    position: relative;
    width: 100%;
    height: 44px;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
  }
  .header h1 {
    font-size: 16px;
    color: #333;
    height: 44px;
    line-height: 44px;
    display: block;
    text-align: center;
  }
  .header p {
    position: absolute;
    top: 0;
    display: block;
    height: 44px;
    line-height: 44px;
  }
  .header p.back {
    left: 0px;
  }
  .header p.back span {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 10px 5px;
    background: url("../assets/cart/icon-back.png") no-repeat;
    background-size: 100%;
  }
  /* .header .home{} */
  /*头部结束*/

  input[type="checkbox"] {
    -webkit-appearance: none;
    outline: none;
  }
  input.check {
    background: url(../assets/cart/icon_radio3.png) no-repeat center left;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -18px;
    width: 20px;
    height: 35px;
  }
  input.check:checked {
    background: url(../assets/cart/icon_radio4.png) no-repeat center left;
    background-size: 20px 20px;
  }
  input.goodsCheck:checked {
    background: url(../assets/cart/icon_radio4.png) no-repeat center left;
    background-size: 20px 20px;
  }
  input.check:checked {
    background: url(../assets/cart/icon_radio4.png) no-repeat center left;
    background-size: 20px 20px;
  }
  .checked {
    background: url(../assets/cart/icon_radio4.png) no-repeat left center;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -18px;
    width: 20px;
    height: 35px;
  }

  /*尾部开始*/
  .footer .copyright {
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #848689;
    font-size: 12px;
  }
  /* CSS Document */
  /*购物车*/
  .shopping {
    clear: both;
    overflow: hidden;
    height: auto;
    padding-bottom: 60px;
  }
  .shop-group-item {
    margin-bottom: 5px;
  }
  .shop-group-item ul li {
    border-bottom: 1px solid #fff;
  }
  .shop-group-item ul li:last-child {
    border-bottom: none;
  }

  .shop-name {
    background: #fff;
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    position: relative;
  }
  .shop-name h4 {
    float: left;
    font-size: 14px;
    background: url(../assets/cart/icon-kin.png) no-repeat left center;
    background-size: 20px 20px;
    padding-left: 25px;
  }
  .shop-name .coupons {
    float: right;
  }
  .shop-name .coupons span {
    display: inline-block;
    padding: 0 5px;
  }
  .shop-name .coupons em {
    color: #e0e0e0;
  }

  .shop-info {
    background: #f5f5f5;
    height: 120px;
    padding: 0 15px;
    position: relative;
  }
  .shop-info .checkbox {
    background: url(../assets/cart/icon_radio3.png) no-repeat left center;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -60px;
    width: 20px;
    height: 120px;
  }
  .shop-info .checkbox1 {
    background: url(../assets/cart/icon_radio4.png) no-repeat left center;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -60px;
    width: 20px;
    height: 120px;
  }
  .shop-info .shop-info-img {
    position: absolute;
    top: 15px;
    left: 45px;
    width: 90px;
    height: 90px;
  }
  .shop-info .shop-info-img img {
    width: 100%;
    height: 100%;
  }
  .shop-info .shop-info-text {
    margin-left: 130px;
    padding: 15px 0;
  }
  .shop-info .shop-info-text h4 {
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .shop-info .shop-info-text .shop-brief {
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    color: #81838e;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
  }
  .shop-info .shop-info-text .shop-brief span {
    display: inline-block;
  }
  .shop-info .shop-info-text .shop-price {
    height: 24px;
    line-height: 24px;
    position: relative;
  }
  .shop-info .shop-info-text .shop-price .shop-pices {
    color: #f83244;
    font-size: 20px;
  }
  .shop-info .shop-info-text .shop-arithmetic {
    position: absolute;
    right: 0px;
    top: 0;
    box-sizing: border-box;
    white-space: nowrap;
    height: 100%;
    border: 1px solid #e0e0e0;
  }
  .shop-info .shop-info-text .shop-arithmetic .add {
    display: inline-block;
    width: 23px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    background: #fff;
    font-size: 16px;
  }
  .shop-info .shop-info-text .shop-arithmetic .cut {
    display: inline-block;
    width: 23px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    background: #fff;
    font-size: 16px;
  }
  .shop-info .shop-info-text .shop-arithmetic .minus {
    border-right: 1px solid #e0e0e0;
  }
  .shop-info .shop-info-text .shop-arithmetic .failed {
    color: #d1d1d1;
  }
  .shop-info .shop-info-text .shop-arithmetic .plus {
    border-left: 1px solid #e0e0e0;
  }
  .shop-info .shop-info-text .shop-arithmetic .num {
    width: 32px;
    text-align: center;
    border: none;
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    vertical-align: top;
    margin: 0 -6px;
  }
  .shopPrice {
    background: #fff;
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    text-align: right;
  }

  .payment-bar {
    clear: both;
    overflow: hidden;
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e0e0e0;
    background: #fff;
  }
  .payment-bar .all-checkbox {
    float: left;
    line-height: 49px;
    padding-left: 40px;
  }
  .payment-bar .shop-total {
    float: left;
    -webkit-box-flex: 1;
    box-flex: 1;
    margin: 0px 20px 0px 35px;
    height: 100%;
  }
  .payment-bar .shop-total strong {
    display: block;
    font-size: 16px;
    height: 100%;
    line-height: 49px;
  }
  .payment-bar .settlement {
    display: inline-block;
    float: right;
    width: 100px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background: #f83244;
  }
    button{
      width: 100px;
      height: 49px;
      float: right;
      color: #fff;
      background-color: #f83244;
    }
  /*尾部结束*/
}
</style>