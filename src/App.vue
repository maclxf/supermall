<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
  import Home from 'components/contents/home/Home'
  export default {
    name: 'app',
    components: {
        Home
    }
  }
</script>

<style>
  /*css 引入方式*/
  @import "assets/css/base.css";
</style>
