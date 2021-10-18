<template>
    <div
        style="display: flex"
        ref="item"
        @mouseleave="showMenu = false"
        @mouseenter="onMouseEnter"
        class="mant-dropdown-item">
        <div style="display: flex; flex: 1">
            <div class="text">{{text}}</div>
            <Icon v-if="$slots.default" icon="chevron-right" class="chevron-right" size="xs" />
        </div>
        <div v-show="showMenu" class="mant-dropdown-item-menu" :style="{
            transform: `translateY(${menuTop}px) translateX(${menuLeft}px)`
        }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Icon from '../Icon'
export default {
    name: "DropdownItem",
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
        onMenuPopup() {
            console.log("onMenuPopup")
        }
    },
    props: {
        text: {
            type: String,
            default: ""
        },
    }
}
</script>

<style lang="scss" scoped>
.mant-dropdown-item {
    // background-color: #1a1f28;
    padding: 8px 18px 8px 18px;
    min-width: 160px;
    color: $text-color;
    cursor: pointer;
    transition: 0.2s;
    .text {
        margin: 0px 12px;
        // background-color: red;
        display: inline-block;
        flex: 1;
    }
    .chevron-right {
        transform: translateY(5px);
    }
}
.mant-dropdown-item-menu {
    // background-color: red;
    background-color: #1a1f28;
    box-shadow: 0 1px 16px 1px rgba(0,0,0,0.4);
    // float: right;
    position: absolute;
    // transform: translateX(300px);
    // transform: translateY(-100px);
    left: 0px;
    top: 0px;
}
.mant-dropdown-item:hover {
    // background-color: darken($color: #1a1f28, $amount: 3);
    color:lighten($color: $text-color, $amount: 20);
}


</style>