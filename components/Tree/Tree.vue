<template>
  <div class="mant-tree">
      <div
        v-for="item in data"
        :key="item.id"
        >
        <div
            draggable="true"
            :id="item._id"
            @dragstart="onDragStart"
            @drop="onDrop"
            @dragover="allowDropNest"
        >
            <TreeItem :item="item" :indent="0" @itemClick="onItemClick" />
        </div>
        <div
            class="drag-line"
            @drop="onDrop"
            @dragover="allowDropOrder"
            @dragleave="onDragLeave" />
      </div>
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
import { eventBus } from '../../src/index'
export default {
    name: "MantTree",
    data() {
        return {
            dragLineActive: false
        }
    },
    created() {
        eventBus.$on("itemClick", item => {
            this.$emit("itemClick", item)
        })
    },
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    components: {
        TreeItem
    },
    methods: {
        onItemClick(item) {
            this.$emit("itemClick", item)
        },
        onDragStart(e) {
            const id = e.target.id
            console.log("id", id)
        },
        allowDropOrder(e) {
            e.target.className = 'drag-line active'
            e.preventDefault()
        },
        allowDropNest(e) {
            e.preventDefault()
        },
        onDragLeave(e) {
            e.target.className = 'drag-line'
        },
        onDrop(e) {
            console.log("onDrop", e)
        }
    }
}
</script>

<style lang="scss">
.mant-tree {
    color: $text-color;
    text-align: left;
    padding: 12px;
    background-color: $block-bg-color;
    .drag-line {
        height: 2px;
        display: block;
        width: 100%;
    }
    .active {
        background-color: $primary-color;
    }
}
</style>