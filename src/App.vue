<template>
  <router-view />
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menus: [
        {
          name: "home",
          path: "/home",
        },
        {
          name: "RegLogin",
          path: "/RegLogin",
        },
        {
          name: "goodslist",
          path: "/goodslist",
        },
        {
          name: "goods",
          path: "/goods",
        },
        {
          name: "cart",
          path: "/cart",
        },
      ]
    };
  },
  components: {}
};
</script>

<style>
</style>
