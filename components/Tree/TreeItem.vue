<template>
    <!-- TODO: 组件递归有问题，暂时先用二级菜单 -->
    <div>
        <div
            class="item"
            :id="index"
            :draggable="draggable"
            @click="onItemClick(item, true)"
            @dragover="onDragOver"
            @dragstart="onDragStart"
            @dragleave="onDragLeave"
            @drop="onDrop"
            :class="{
                selected: item[properties.id] === currentItem[properties.id]
            }"
        >
            <span v-for="i in indent" :key="i" class="indent"></span>
            <Icon v-if="item.children" :icon="['fal', 'chevron-right']" class="chevron-right" />
            <Icon v-else :icon="['fal', 'file-alt']" class="chevron-right" />
            <span class="text">{{item.title}}</span>
            <div :class="{'item-tools': true}" @click.prevent="onTreeItemClick(item)">
                <!-- 根节点 -->
                <!-- <div style="z-index: 2"> -->

                <slot :item="item"></slot>
                <!-- </div> -->
            </div>
        </div>

        <template v-if="collapsed">
            <div v-for="(subItem, deepIndex) in item.children" :key="subItem[properties.id]">
                <TreeItem
                    :item="subItem"
                    :indent="newIndent"
                    :draggable="draggable"
                    :index="`${index}-${deepIndex}`"
                    :deep-index="`${deepIndex}`"
                    @dragover="onDragOver"
                    @dragstart="onDragStart"
                    @dragleave="onDragLeave"
                    @drop="onDrop"
                    :properties="properties"
                >
                    <!-- 子节点 -->
                    <slot :item="subItem"></slot>
                </TreeItem>
            </div>
        </template>

    </div>
</template>

<script>
import Icon from '../Icon'
import { treeEventBus } from './index'
export default {
    name: "TreeItem",
    components: {
        Icon,
    },
    data() {
        return {
            newIndent: this.indent + 1,
            collapsed: false,
            overTargetId: "",
            currentItem: {}
        }
    },
    created() {
        treeEventBus.$on('tree-item-click', () => {
            treeEventBus.$emit('tree-item-received', this.item)
        })
        treeEventBus.$on('expand', item => {
            this.currentItem = item
        })
    },
    updated() {

    },
    methods: {
        onTreeItemClick() {
            // treeEventBus.$emit('tree-item-click', item)
        },
        onItemClick(item, expand) {
            if(item.children && expand) {
                this.collapsed = !this.collapsed
            }
            treeEventBus.$emit("expand", item)
        },
        onItemAdd(item) {
            if(item.children && !this.collapsed) {
                this.collapsed = true
            }
            treeEventBus.$emit("add", item)
        },
        onDragStart(e) {
            console.log('onDragStart', e.target, e.target.id)
            e.dataTransfer.setData('id', e.target.id)
        },
        onDragOver(e) {
            if(e.target.className.indexOf('item') !== -1) {
                e.target.className = 'item item-drag--active'
            }
            e.preventDefault()
        },
        onDragLeave(e) {
            if(e.target.className.indexOf('item') !== -1) {
                e.target.className = 'item'
            }
        },
        onDrop(e) {
            console.log("onDrop", e)
            const oldId = e.dataTransfer.getData('id')
            const newId = e.target.id
            treeEventBus.$emit("drop", oldId, newId)
            if(e.target.className.indexOf('item') !== -1) {
                e.target.className = 'item'
            }
        },
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        indent: {
            type: Number,
            default: 0
        },
        draggable: {
            type: Boolean,
            default: false
        },
        index: {
            type: String,
            default: ""
        },
        deepIndex: {
            type: String,
            default: ""
        },
        listeners: {
            type: Object,
            default: () => {}
        },
        properties: {
            type: Object,
            default: () => ({
                id: 'id',
                title: 'title',
                parent_id: 'parent_id'
            })
        },
    }
}
</script>

<style lang="scss">
    .item:hover {
        // .item-tools,
    }
    .item {
        background-color: $block-bg-color;
        padding: 6px;
        border-top: 2px solid transparent;
        cursor: pointer;
        display: flex;
        z-index: 999;
        .item-tools {
            // TODO: fix hover transition when DropdownItem opened
            // opacity: 0.5;
            z-index: 2;
        }
        // .item-tools.selected {
        //     // opacity: 1;
        //     background-color: red;
        // }
        .indent {
            width: 16px;
            height: 16px;
            display: inline-block;
        }
        .text {
            margin-left: 8px;
            flex: 1;
            white-space: nowrap;
        }
        .chevron-right {
            transform: translateY(4px);
        }
    }
    .item-drag--active {
        border-top-color: $primary-color;
    }
    .item:hover {
        color: $text-color-active;
    }
    .selected {
        color: $text-color-active;
    }
</style>