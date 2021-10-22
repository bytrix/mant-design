<template>
  <button
    class="mant-btn"
    @click="onClick"
    :class="[
        `mant-btn--${type}`,
        `mant-btn--${size}`,
        {
            'mant-btn--circle': circle,
            'mant-btn--plain': plain,
            'mant-btn-text--primary': active
        },
    ]">
      <Icon
        v-if="icon.length !== 0 && iconPosition=='left'"
        :class="{icon: $slots.default !== undefined}"
        :icon="icon" />
      <slot></slot>
      <Icon
        v-if="icon.length !== 0 && iconPosition=='right'"
        :class="{
            mgl8: true,
            icon: $slots.default !== undefined
        }"
        :icon="icon" />
  </button>
</template>

<script>
import { wrapHref } from '../../src/utils'
import Icon from '../Icon'
export default {
    name: "MantButton",
    components: {
        Icon
    },
    methods: {
        onClick(e) {
            if(this.type === 'link' && this.href) {
                window.location.href = wrapHref(this.href)
            } else {
                this.$emit("click", e)
            }
        }
    },
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: ""
        },
        icon: {
            type: Array,
            default: () => []
        },
        circle: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        'icon-position': {
            type: String,
            default: "left"
        },
        href: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss">
.mant-btn {
    background-color: #fff;
    border: none;
    padding: 8px 18px;
    margin: 0px 8px;
    cursor: pointer;
    height: 32px;
    border-radius: 16px;
    font-weight: bolder;
    user-select: none;
    .icon {
        margin-right: 8px;
    }
}
.mant-btn[disabled] {
    opacity: 0.5;
    cursor: default;
}
.mant-btn--circle {
    width: 32px;
    padding: 0px;
}
.mant-btn--plain {
    background-color: transparent !important;
    border: 1px solid $border-color;
}
.mant-btn--default {
    background-color: lighten($color: $block-bg-color, $amount: 6);
    color: $text-color;
}
.mant-btn--link {
    background-color: transparent;
    color: $text-color;
}
.mant-btn-text--primary {
    color: $primary-color;
}
.mant-btn--primary {
    background-color: $primary-color;
    color: $text-color-dark;
}
.mant-btn--large {
    border-radius: 22px;
    height: 44px;
    padding: 8px 28px;
    font-size: $font-size-lg;
}
.mant-btn--small {
    border-radius: 16px;
    height: 20px;
    padding: 0px;
    font-size: $font-size-sm;
}
</style>