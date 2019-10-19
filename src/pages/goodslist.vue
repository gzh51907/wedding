<template>
  <div id="goodslist">
    <el-container>
      <el-header height="44px">
        <div class="head">
          <i class="el-icon-s-home goHome" @click="skip('/home')"></i>
          <el-input
            placeholder="搜索你想要的商品"
            size="mini"
            v-model="header.search"
            @focus="maskfocus"
            @blur="maskblur"
          >
            <i slot="prefix" class="el-input__icon el-icon-search" @click="searchData"></i>
            <template slot="append">
              <i class="el-icon-shopping-cart-2" @click="skip('/cart')"></i>
            </template>
          </el-input>
        </div>
      </el-header>
      <el-main>
        <div class="banner">
          <el-carousel trigger="click" height="200px" :interval="5000">
            <el-carousel-item v-for="item in banner.carouselImg" :key="item">
              <img :src="item" style="width:100%;height:100%" />
            </el-carousel-item>
          </el-carousel>
          <div class="category">
            <ul>
              <li v-for="item in banner.category" :key="item.categoryName">
                <img :src="item.categoryImg" />
                <h4>{{item.categoryName}}</h4>
              </li>
            </ul>
          </div>
        </div>
        <div class="main">
          <div class="listTitle">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部" name="allgoods">
                <ul class="listCon" ref="tabTitle">
                  <li v-for="item in main" :key="item.id" @click="skip('/goods',item.id)">
                    <img :src="item.cover_image" />
                    <div class="goodsCon">
                      <h3>{{item.title}}</h3>
                      <h4>
                        <img src="../assets/icon-bao.png" />
                      </h4>
                      <p>
                        <span>￥{{item.actual_price}}</span>
                        <span>收藏{{item.collectors_count}}</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="本周新品" name="newgoods">
                <ul class="listCon">
                  <li v-for="item in main" :key="item.id" @click="skip('/goods',item.id)">
                    <img :src="item.cover_image" />
                    <div class="goodsCon">
                      <h3>{{item.title}}</h3>
                      <h4>
                        <img src="../assets/icon-bao.png" />
                      </h4>
                      <p>
                        <span>￥{{item.actual_price}}</span>
                        <span>收藏{{item.collectors_count}}</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div id="mask" ref="mask"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "allgoods",
      header: {
        search: ""
      },
      banner: {
        carouselImg: [],
        category: []
      },
      main: []
    };
  },
  computed: {
    async changeTab() {
      if (this.activeName == "allgoods") {
        let { data: data3 } = await this.$wedding.get(
          "datas/getdata?colName=goodslist"
        );
        let goodsData = data3.data;
        this.main = goodsData;
      } else {
        let dataArr = [];
        this.main.forEach(item => {
          if (item.collectors_count < 300) {
            dataArr.push(item);
          }
        });
        this.main = dataArr;
      }
    }
  },
  methods: {
    skip(path, data) {
      this.$router.push({ path: path, query: { id: data } });
    },
    maskfocus() {
      this.$refs.mask.style.display = "block";
      this.$refs.mask.style.opacity = 0.45;
    },
    maskblur() {
      this.$refs.mask.style.display = "none";
      this.$refs.mask.style.opacity = 1;
    },
    handleClick(tab, event) {
      this.activeName = tab.name;
      this.changeTab;
    },
    handleScroll() {
      // console.log(window.scrollY)
      let targetEL = this.$refs.tabTitle.parentNode.parentNode.parentNode
        .firstElementChild;
      let iTop = targetEL.offsetTop;
      if (window.scrollY > iTop) {
        targetEL.classList.add("fixed");
      }
      if (window.scrollY < 466) {
        targetEL.classList.remove("fixed");
      }
    },
    async searchData() {
      let {
        data: { data: data }
      } = await this.$wedding.get(
        `datas/probablydata?colName=goodslist&probably=${this.header.search}`
      );
      // console.log(data);
      this.main = data;
      this.activeName = "allgoods";
    }
  },
  async created() {
    //请求轮播图数据
    let {
      data: { data }
    } = await this.$wedding.get(
      "datas/getdata?colName=carouselUrl"
    );
    // console.log(data)
    let newData = [];
    data.forEach(item => {
      newData.push(item.carouselUrl);
    });
    this.banner.carouselImg = newData;

    //请求分类栏数据
    let { data: data2 } = await this.$wedding.get(
      "datas/getdata?colName=category"
    );
    let categoryData = data2.data;
    let fixData = [];
    categoryData.forEach(item => {
      fixData.push(item);
    });
    // console.log(fixData)
    this.banner.category = fixData;

    //请求商品信息
    this.changeTab;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
#goodslist {
  .el-container {
    .el-header {
      width: 100%;
      position: fixed;
      top: 0;
      padding: 8px;
      background-color: #fff;
      z-index: 10;
      .head {
        display: flex;
        .goHome {
          font-size: 22px;
          line-height: 28px;
          color: #f83244;
          margin-right: 7px;
        }
        .el-input {
          .el-input__icon {
            font-size: 14px;
            color: #666;
          }
          .el-input__inner {
            background-color: #f2f3f6;
            border: none;
          }
          .el-input__inner::-webkit-input-placeholder {
            color: #888;
            font-size: 14px;
          }
          .el-input-group__append {
            background-color: #fff;
            .el-icon-shopping-cart-2 {
              font-size: 20px;
              color: #f83244;
              font-weight: bold;
            }
          }
          .el-input-group__append {
            padding: 0;
            width: 44px;
            text-align: center;
            border: none;
          }
        }
      }
    }
    .el-main {
      padding: 0;
      position: relative;
      margin-top: 44px;
      background-color: #f4f4f3;
      .banner {
        background-color: #fff;
        .el-carousel__indicators {
          .el-carousel__indicator {
            .el-carousel__button {
              width: 8px;
              height: 8px;
              border-radius: 50%;
            }
          }
        }
      }
      .category {
        background-color: #fff;
        padding: 5px 0;
        margin-bottom: 10px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 12px;
            img {
              width: 50px;
              height: 50px;
            }
            h4 {
              font-size: 12px;
              color: #666;
              margin-top: 8px;
              font-weight: normal;
              line-height: 100%;
            }
          }
        }
      }
      .main {
        background-color: #fff;
        padding: 0 8px;
        .fixed {
          width: 100%;
          position: fixed;
          z-index: 7;
          top: 44px;
          background-color: #fff;
          border-top: 1px solid #f4f4f3;
        }
        .listTitle {
          .el-tabs__item {
            padding-right: 0;
          }
          .is-active {
            color: #f83244;
          }
          .el-tabs__active-bar {
            background-color: #f83244;
          }
          .el-tabs__header {
            margin-bottom: 0;
          }
        }
        .listCon {
          display: flex;
          flex-wrap: wrap;
          li {
            box-sizing: border-box;
            padding: 10px 4px;
            width: 50%;
            > img {
              width: 100%;
              height: 180px;
            }
            .goodsCon {
              padding: 8px 8px 0 8px;
              h3 {
                font-size: 13px;
                font-weight: normal;
                color: #333;
              }
              h4 {
                img {
                  width: 14px;
                  height: 14px;
                }
              }
              p {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span:nth-child(1) {
                  font-size: 14px;
                  color: #f83244;
                  line-height: 100%;
                }
                span:nth-child(2) {
                  font-size: 12px;
                  color: #999;
                  line-height: 100%;
                }
              }
            }
          }
        }
      }
    }
    #mask {
      background-color: #000;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: none;
      z-index: 8;
    }
  }
}
</style>