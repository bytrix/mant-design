<template>
  <div class="mant-row">
      <slot></slot>
  </div>
</template>

<script>
import { gridEventBus } from './index'
export default {
    name: "MantRow",
    created() {
        if(this.gutter) {
            gridEventBus.$emit('gutter-received', this.gutter)
        }
    },
    props: {
        gutter: {
            type: Array,
            default: undefined
        },
    }
}
</script>

<style lang="scss">
.mant-row {
    display: flex;
    // background-color: red;
    .mant-col {
        // flex: 1;
    }
}
</style>