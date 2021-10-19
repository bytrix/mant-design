<template>
    <div>
        <div class="item" @click.stop="onItemClick(item)">
            <span v-for="i in indent" :key="i" class="indent"></span>
            <Icon v-if="item.children" :icon="['fal', 'chevron-right']" class="chevron-right" />
            <Icon v-else :icon="['fal', 'file-alt']" class="chevron-right" />
            <span class="text">{{item.title}}</span>
        </div>
        <template v-if="collapsed">
            <div v-for="subItem in item.children" :key="subItem._id">
                <TreeItem :item="subItem" :indent="newIndent"/>
            </div>
        </template>
    </div>
</template>

<script>
import Icon from '../Icon'
import { eventBus } from '../../src/index'
export default {
    name: "TreeItem",
    components: {
        Icon
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
            eventBus.$emit("itemClick", item)
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
    .item {
        background-color: $block-bg-color;
        padding: 6px;
        transition: $duration;
        cursor: pointer;
        .indent {
            width: 16px;
            height: 16px;
            display: inline-block;
        }
        .text {
            margin-left: 8px;
        }
        .chevron-right {
            transform: translateY(-1px);
        }
    }
    .item:hover {
        color: lighten($color: $text-color, $amount: 20);
    }
</style>