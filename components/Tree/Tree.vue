<template>
  <div class="mant-tree">
        <div
            v-for="(item, index) in data"
            :key="item[properties.id]"
        >
            <TreeItem
                :item="item"
                :indent="0"
                @itemClick="onItemClick"
                :draggable="draggable"
                :index="`${index}`"
                :properties="properties"
            >
                <template slot-scope="{item}">
                    <slot :item="item"></slot>
                </template>
            </TreeItem>
      </div>
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
import { treeEventBus } from './index'
import { deepFind, deepSplice } from '../../src/utils'
export default {
    name: "MantTree",
    data() {
        return {
            dragLineActive: false,
            itemListeners: {},
        }
    },
    created() {
        treeEventBus.$on("expand", item => {
            this.$emit("expand", item)
        })
        treeEventBus.$on("add", item => {
            this.$emit("add", item)
        })
        treeEventBus.$on("drop", (oldId, newId) => {
            // this.$emit("drop", oldId, newId)
            this.onDrop(oldId, newId)
        })
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        draggable: {
            type: Boolean,
            default: false
        },
        properties: {
            type: Object,
            default: () => ({
                id: 'id',
                title: 'title',
                parent_id: 'parent_id'
            })
        },
    },
    components: {
        TreeItem
    },
    methods: {
        onItemClick(item) {
            this.$emit("expand", item)
        },

        onDrop(oldId, newId) {
            const oldIndexList = oldId.split('-')
            const newIndexList = newId.split('-')
            const oldObj = deepFind(this.data, oldIndexList)
            // 删除旧项
            deepSplice(this.data, oldIndexList, 1)
            // 添加新项
            deepSplice(this.data, newIndexList, 0, oldObj)
        },
        
    }
}
</script>

<style lang="scss">
.mant-tree {
    color: $text-color;
    text-align: left;
    padding: 12px;
    background-color: $block-bg-color;
    // .drag-line {
    //     height: 22px;
    //     display: block;
    //     background-color: red;
    //     z-index: -10;
    //     opacity: 0.4;
    //     width: 100%;
    // }
    // .active {
    //     background-color: $primary-color;
    // }
}
</style>