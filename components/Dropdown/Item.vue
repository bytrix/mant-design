<template>
    <div
        style="display: flex"
        ref="item"
        @mouseleave="showMenu = false"
        @mouseenter="onMouseEnter"
        @click.stop="onClick"
        class="mant-dropdown-item">
        <Icon v-if="icon && icon.length !== 0" :icon="icon" style="transform: translateY(3px)" />
        <div style="display: flex; flex: 1">
            <div class="text">{{text}}</div>
            <Icon v-if="$slots.default" :icon="['fal', 'chevron-right']" class="chevron-right" size="xs" />
        </div>
        <div v-show="showMenu" class="mant-dropdown-item-menu" :style="{
            transform: `translateY(${menuTop}px) translateX(${menuLeft}px)`
        }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { dropdownEventBus } from '.'
import Icon from '../Icon'
export default {
    name: "MantDropdownItem",
    components: {
        Icon
    },
    data() {
        return {
            menuLeft: 100,
            menuTop: 100,
            showMenu: false
        }
    },
    methods: {
        onMouseEnter() {
            const itemRef = this.$refs.item
            this.showMenu = true
            this.menuLeft = itemRef.offsetWidth
            this.menuTop = itemRef.offsetTop
        },
        onClick() {
            this.$emit("click")
            dropdownEventBus.$emit('open-id', null)
        },
        onMenuPopup() {
            console.log("onMenuPopup")
        }
    },
    props: {
        text: {
            type: String,
            default: ""
        },
        icon: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.mant-dropdown-item {
    padding: 8px 18px 8px 18px;
    min-width: 160px;
    color: $text-color;
    cursor: pointer;
    transition: 0.2s;
    .text {
        margin: 0px 12px;
        display: inline-block;
        flex: 1;
        white-space: nowrap;
    }
    .chevron-right {
        transform: translateY(5px);
    }
}
.mant-dropdown-item-menu {
    background-color: #1a1f28;
    box-shadow: 0 1px 16px 1px rgba(0,0,0,0.4);
    position: absolute;
    left: 0px;
    top: 0px;
}
.mant-dropdown-item:hover {
    color:lighten($color: $text-color, $amount: 20);
}
</style>