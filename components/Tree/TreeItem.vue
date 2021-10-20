<template>
    <div>
        <div
            class="item"
            :id="index"
            :draggable="draggable"
            @click="onItemClick(item)"
            @dragover="onDragOver"
            @dragstart="onDragStart"
            @dragleave="onDragLeave"
            @drop="onDrop"
        >
            <span v-for="i in indent" :key="i" class="indent"></span>
            <!-- <div style="border-top: 2px solid red; display: block"> -->
                <Icon v-if="item.children" :icon="['fal', 'chevron-right']" class="chevron-right" />
                <Icon v-else :icon="['fal', 'file-alt']" class="chevron-right" />
                <span class="text">{{item.title}}</span>
            <!-- </div> -->
            <div class="add-alt" @click="onItemAdd(item)">
                <slot></slot>
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
                    <div @click.self="onItemAdd(subItem)">
                        <slot></slot>
                    </div>
                </TreeItem>
            </div>
        </template>
    </div>
</template>

<script>
import Icon from '../Icon'
// import { eventBus } from '../../src/index'
import { eventBus } from './index'
// import { deepSplice } from '../../src/utils'
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
    methods: {
        onItemClick(item) {
            if(item.children) {
                this.collapsed = !this.collapsed
            }
            eventBus.$emit("expand", item)
        },
        onItemAdd(item) {
            if(item.children && !this.collapsed) {
                this.collapsed = true
            }
            eventBus.$emit("add", item)
        },
        onDragStart(e) {
            console.log('onDragStart', e.target, e.target.id)
            e.dataTransfer.setData('id', e.target.id)
        },
        onDragOver(e) {
            console.log("onDragOver11", e.target.className)
            // this.overTargetId = e.target.id
            // const siblingEl = e.target.previousElementSibling
            // console.log('siblingEl', siblingEl)
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
            eventBus.$emit("drop", oldId, newId)
            // const indexList = id.split('-')
            // console.log('indexList', indexList)
            // deepSplice()
            // console.log('onDrop id>>>', id)
            if(e.target.className.indexOf('item') !== -1) {
                e.target.className = 'item'
            }
        },
        // allowDropr(e) {
        //     // e.target.className = 'item-drag--active'
        //     e.preventDefault()
        // },
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
        // transition: $duration;
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
        // border-top-color: $block-bg-color-secondary;
        // transition: 0.2s;
    }
    .item:hover {
        color: lighten($color: $text-color, $amount: 20);
    }
</style>