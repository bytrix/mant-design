<template>
  <div class="mant-col" :style="{
    flex,
    margin: `${gutter[0]}px ${gutter[1]}px`
  }">
    <slot></slot>
  </div>
</template>

<script>
import { gridEventBus } from './index'
export default {
    name: "MantCol",
    data() {
      return {
        gutter: []
      }
    },
    beforeCreate() {
      gridEventBus.$on('gutter-received', gutter => {
        this.gutter = gutter
      })
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