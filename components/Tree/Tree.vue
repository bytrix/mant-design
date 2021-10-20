<template>
  <div class="mant-tree">
        <div
            v-for="(item, index) in data"
            :key="item._id"
        >
            <TreeItem
                :item="item"
                :indent="0"
                @itemClick="onItemClick"
                :draggable="draggable"
                :index="`${index}`"
            >
                <slot name="add"></slot>
            </TreeItem>
      </div>
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
// import { eventBus } from '../../src/index'
import { eventBus } from './index'
// import _ from 'lodash'
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
        eventBus.$on("drop", (oldId, newId) => {
            this.$emit("drop", oldId, newId)
        })
    },
    mounted() {
        // console.log("TreeItem mounted", this.$slots.item[0])
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        draggable: {
            type: Boolean,
            default: false
        }
    },
    components: {
        TreeItem
    },
    methods: {
        onItemClick(item) {
            this.$emit("expand", item)
        },
        // onDragStart(e) {
        //     const id = e.target.id
        //     console.log("id", id)
        // },
        // allowDropOrder(e) {
        //     e.target.className = 'item-drag--active'
        //     e.preventDefault()
        // },
        // allowDropNest(e) {
        //     e.preventDefault()
        // },
        // onDragLeave(e) {
        //     e.target.className = ''
        // },
        // onDrop(e) {
        //     console.log("onDrop", e.target)
        //     // console.log("onDrop---", e.dataTransfer.getData("id"))
        //     // 要移动的目标对象
        //     const targetId = e.dataTransfer.getData("id")
        //     const target = this.data.find(item => item._id === targetId)
        //     // console.log(e.target)
        //     // 要插入在哪个id的前端
        //     const referId = e.target.id
        //     console.log('referId', referId)
        //     // const referIndex = this.data.find(item => item._id === referId)
        //     const referIndex = _.findIndex(this.data, item => item._id === referId)
        //     console.log("referIndex", referIndex, referIndex !== -1)
        //     const targetIndex = _.findIndex(this.data, item => item._id === targetId)
        //     console.log("targetIndex", targetIndex)
        //     if(referIndex !== -1 && targetIndex !== referIndex) {
        //         console.log('delete..', target)
        //         // this.data.splice(targetIndex, 1)
        //         // this.data.splice(referIndex, 0, target)
        //     }
        //     if(e.target.className.indexOf("drag-line") !== -1) {
        //         // e.target.className = 'drag-line'
        //     }
        //     // e.preventDefault()

        // }
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
        height: 22px;
        display: block;
        background-color: red;
        z-index: -10;
        opacity: 0.4;
        width: 100%;
        // margin: -5px 0px;
    }
    .active {
        background-color: $primary-color;
    }
}
</style>