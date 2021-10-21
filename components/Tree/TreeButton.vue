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
        treeEventBus.$on('treeItemReceived', e => {
            _this.$emit('click', e)
        })
    },
    methods: {
        onClick() {
            treeEventBus.$emit('treeItemClick')
        }
    }
}
</script>

<style>

</style>