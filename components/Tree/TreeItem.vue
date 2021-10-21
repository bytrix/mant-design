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
        >
            <span v-for="i in indent" :key="i" class="indent"></span>
            <Icon v-if="item.children" :icon="['fal', 'chevron-right']" class="chevron-right" />
            <Icon v-else :icon="['fal', 'file-alt']" class="chevron-right" />
            <span class="text">{{item.title}}</span>
            <div class="add-alt" @click.stop="onTreeItemClick(item)">
                <!-- 根节点 -->
                <slot :item="item"></slot>
            </div>
        </div>

        <template v-if="collapsed">
            <div v-for="(subItem, deepIndex) in item.children" :key="subItem._id">
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
            overTargetId: ""
        }
    },
    created() {
        treeEventBus.$on('treeItemClick', () => {
            // console.log('TreeItem.vue  treeItemClick >>> 777', this.item)
            treeEventBus.$emit('treeItemReceived', this.item)
        })
    },
    updated() {

    },
    methods: {
        onTreeItemClick() {
            // treeEventBus.$emit('treeItemClick', item)
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
        }
    }
}
</script>

<style lang="scss">
    .item:hover {
        .add-alt {
            opacity: 1;
        }
    }
    .item {
        background-color: $block-bg-color;
        padding: 6px;
        border-top: 2px solid transparent;
        cursor: pointer;
        display: flex;
        z-index: 999;
        .add-alt {
            opacity: 0;
        }
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
        color: lighten($color: $text-color, $amount: 20);
    }
</style>