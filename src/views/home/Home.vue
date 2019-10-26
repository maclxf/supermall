<template>
  <div id="home">

    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :cbanners="banners"/>

    <home-recommend :cproducts="products"/>

  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommend from "./childComps/HomeRecommend";

    import {getHomeMultiData} from "network/home";

    export default {
        name: "Home",
        components:{
            NavBar,HomeSwiper,HomeRecommend
        },
        data() {
          return {
            banners: [],
            products: [],
          }
        },
        created() {
            getHomeMultiData().then(res => {
               this.banners = res.data.banners
               this.products = res.data.products
            })
        }
    }
</script>

<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff
  }

</style>
