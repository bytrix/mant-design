<template>
  <div class="mant-tree">
      <div
        v-for="item in data"
        :key="item.id"
        >
        <div
            draggable="false"
            :id="item._id"
            @dragstart="onDragStart"
            @drop="onDrop"
            @dragover="allowDropNest"
        >
            <TreeItem :item="item" :indent="0" @itemClick="onItemClick">
                <slot name="add"></slot>
            </TreeItem>
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
        eventBus.$on("expand", item => {
            this.$emit("expand", item)
        })
        eventBus.$on("add", item => {
            this.$emit("add", item)
        })
    },
    mounted() {
        // console.log("TreeItem mounted", this.$slots.item[0])
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
            this.$emit("expand", item)
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