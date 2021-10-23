<template>
  <div @click.self="onClick">button
      <slot name="item"></slot>
  </div>
</template>

<script>
import { treeEventBus } from './index'
export default {
    mounted() {
        const _this = this
        treeEventBus.$on('tree-item-received', e => {
            _this.$emit('click', e)
        })
    },
    methods: {
        onClick() {
            treeEventBus.$emit('tree-item-click')
        }
    }
}
</script>

<style>

</style>