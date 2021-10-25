<template>
  <div class="mant-tooltip-wrapper" @mouseenter="showTooltip" @mouseleave="show = false" ref="target">
      <transition v-if="visible" name="fade">
        <div v-show="show" class="mant-tooltip" :style="{
            top: top + 'px',
            left: left + 'px',
            transform: 'translate(-50%, -100%)'
        }">{{title}}</div>
      </transition>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        visible: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            top: 0,
            left: 0,
            show: false
        }
    },
    methods: {
        showTooltip() {
            const target = this.$refs.target
            this.top = target.offsetTop - 10
            this.left = target.offsetLeft + target.offsetWidth / 2
            this.show = true
        }
    },
    mounted() {
        // console.log(target.offsetWidth, target)
    }
}
</script>

<style lang="scss">
$tooltip-bg: darken($block-bg-color, 5);
.mant-tooltip-wrapper {
    // background-color: red;
    display: inline-block;
}
.mant-tooltip {
    background-color: $tooltip-bg;
    display: inline-block;
    padding: 4px 20px;
    position: absolute;
    box-shadow: 0px 3px 13px -5px rgba($color: darken($tooltip-bg, 5), $alpha: 0.9);
    border-radius: 15px;
}
.mant-tooltip::after {
    content: "";
    border: 5px solid transparent;
    border-top: 5px solid $tooltip-bg;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 100%);
    width: 0px;
    height: 0px;
    display: inline-block;
}
</style>