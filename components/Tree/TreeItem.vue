<template>
    <div
        draggable="true">
        <div class="item" @click.stop="onItemClick(item)">
            <span v-for="i in indent" :key="i" class="indent"></span>
            <Icon v-if="item.children" :icon="['fal', 'chevron-right']" class="chevron-right" />
            <Icon v-else :icon="['fal', 'file-alt']" class="chevron-right" />
            <span class="text">{{item.title}}</span>
            <div class="add-alt" @click.stop="onItemAdd(item)">
                <slot></slot>
            </div>
        </div>
        <template v-if="collapsed">
            <div v-for="subItem in item.children" :key="subItem._id">
                <TreeItem :item="subItem" :indent="newIndent">
                    <!-- <slot name="add"></slot> -->
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
import { eventBus } from '../../src/index'
// import Button from '../Button/Button.vue'
export default {
    name: "TreeItem",
    components: {
        Icon,
        // Button
    },
    data() {
        return {
            newIndent: this.indent + 1,
            collapsed: false
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
            // console.log("onItemAdd", item)
            eventBus.$emit("add", item)
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        indent: {
            type: Number,
            default: 0
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
        transition: $duration;
        cursor: pointer;
        display: flex;
        .add-alt {
            opacity: 0;
            // transition: $duration;
        }
        .indent {
            width: 16px;
            height: 16px;
            display: inline-block;
        }
        .text {
            margin-left: 8px;
            flex: 1;
        }
        .chevron-right {
            transform: translateY(4px);
        }
    }
    .item:hover {
        color: lighten($color: $text-color, $amount: 20);
    }
</style>