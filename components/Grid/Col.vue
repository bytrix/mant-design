<template>
  <div class="mant-col" :style="{
    flex,
    margin: `${gutter[0]}px ${gutter[1]}px`
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "MantCol",
    computed: {
      gutter() {
        return this.$parent.gutter || []
      }
    },
    props: {
        flex: {
            type: [Number, String],
            default() {
              return 0
            }
        }
    }
}
</script>

<style>
.mant-col {
    /* background-color: blue; */
    flex: 1;
    margin: 0px 12px;
}
</style>