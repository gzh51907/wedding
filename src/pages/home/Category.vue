<template>
  <!-- 分类入口 -->
  <div class="category">
    <div class="category-row">
      <a href class="category-item" v-for="item in categoryList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <span>{{item.desc}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [
        {
          id: "0001",
          desc: "找商家",
          imgUrl: "http://qnm.hunliji.com/o_1clira24u6s8mn82b11onvsep9.png"
        },
        {
          id: "0002",
          desc: "订婚宴",
          imgUrl: "http://qnm.hunliji.com/o_1clireps21di911s33sv1nq41otl9.png"
        },
        {
          id: "0003",
          desc: "旅拍商城",
          imgUrl: "https://qnm.hunliji.com/o_1d5trlspp17ad1o0p1bsnh5n1gv39.png"
        },
        {
          id: "0004",
          desc: "淘婚品",
          imgUrl: "http://qnm.hunliji.com/o_1clirhv201sjugsspt9suc14uh9.png"
        },
        {
          id: "0005",
          desc: "跟妆",
          imgUrl: "http://qnm.hunliji.com/o_1clirnm9qh249021ct0q9imas9.png"
        },
        {
          id: "0006",
          desc: "婚礼策划",
          imgUrl: "http://qnm.hunliji.com/o_1clirr23h9ft1dvdl5k8k31r0k9.png"
        },
        {
          id: "0007",
          desc: "婚纱摄影",
          imgUrl: "http://qnm.hunliji.com/o_1clirskv72vm1pqd9k41ios1c1o9.png"
        },
        {
          id: "0008",
          desc: "婚纱礼服",
          imgUrl: "http://qnm.hunliji.com/o_1cliru819aherksurml2ma3t9.png"
        },
        {
          id: "0009",
          desc: "案例",
          imgUrl: "http://qnm.hunliji.com/o_1clirvq871ac610rm1sl71kqh14d29.png"
        },
        {
          id: "0010",
          desc: "司仪",
          imgUrl: "http://qnm.hunliji.com/o_1clis1jku20l1gc21j981ce363n9.png"
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.category {
  margin-top: 14px;
  padding: 10px;

  .category-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .category-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 70px;
      height: 70px;
      margin-bottom: 10px;

      img {
        width: 70px;
        height: 48px;
      }

      span {
        display: block;
        width: 100%;
        color: #333;
        font-size: 12px;
        text-align: center;
        line-height: 1;
      }
    }

    .category-item:hover {
      cursor: pointer;
    }
  }
}
</style>