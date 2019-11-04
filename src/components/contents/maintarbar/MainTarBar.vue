<template>
  <tar-bar>
    <tar-bar-item path="/home" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
      <div slot="item-text">品类</div>
    </tar-bar-item>
    <tar-bar-item path="/cart">
      <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tar-bar-item>
    <tar-bar-item path="/me">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
    import TarBar from 'components/common/tarbar/TarBar'
    import TarBarItem from 'components/common/tarbar/TarBarItem'

    export default {
        name: "MainTarBar",
        components: {
            TarBar,TarBarItem
        }
    }
</script>

<style scoped>

</style>
