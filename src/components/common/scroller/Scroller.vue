<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroller",
        data() {
            return {
                scroller:{
                    type:Object,
                    default() {
                        return {}
                    }
                }
            }
        },
        mounted() {
            this.scroller = new BScroll(this.$refs.wrapper, {
                probeType:3,
            })
        }
    }
</script>

<style scoped>

</style>
