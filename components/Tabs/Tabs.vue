<template>
  <div>
      <Button
        type="link"
        v-for="(tab, index) in tabs"
        :key="index"
        :active="tabIndex === index"
        @click="onClick(index)">{{tab}}</Button>
  </div>
</template>

<script>
import Button from '../Button/index'
export default {
    name: "MantTabs",
    components: {
        Button
    },
    watch: {
        tabIndex(newVal) {
            this.$emit("input", newVal)
        }
    },
    data() {
        return {
            tabIndex: 0
        }
    },
    created() {
        this.tabIndex = this.model
    },
    methods: {
        onClick(tabIndex) {
            this.tabIndex = tabIndex
        }
    },
    props: {
        tabs: {
            type: Array,
            default() {
                return []
            }
        },
        model: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style>
</style>