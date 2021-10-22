<template>
  <div class="mant-row">
      <slot></slot>
  </div>
</template>

<script>
import { gridEventBus } from './index'
export default {
    name: "MantRow",
    mounted() {
        gridEventBus.$emit('gutter-received', this.gutter)
    },
    props: {
        gutter: {
            type: Array,
            default: () => [8,8]
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