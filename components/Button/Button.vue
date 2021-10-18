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
        v-if="icon && iconPosition=='left'"
        :class="{icon: $slots.default !== undefined}"
        :icon="icon" />
      <slot></slot>
      <Icon
        v-if="icon && iconPosition=='right'"
        :class="{
            mgl8: true,
            icon: $slots.default !== undefined
        }"
        :icon="icon" />
  </button>
</template>

<script>
import Icon from '../Icon'
// import { defineComponent } from 'vue'
export default {
    name: "MantButton",
    components: {
        Icon
    },
    methods: {
        onClick(e) {
            this.$emit("click", e)
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
            type: String,
            default: ""
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
    border-radius: 4px;
    cursor: pointer;
    height: 32px;
    border-radius: 16px;
    font-weight: bolder;
    .icon {
        margin-right: 8px;
    }
}
.mant-btn--circle {
    width: 32px;
    padding: 0px;
}
.mant-btn--plain {
    background-color: transparent !important;
    border: 1px solid #30353e;
}
.mant-btn--default {
    background-color: #272f39;
    color: #757a87;
}
.mant-btn--link {
    background-color: transparent;
    color: #757a87;
}
.mant-btn-text--primary {
    color: #bbe666;
}
.mant-btn--primary {
    background-color: #bbe666;
    color: #253615;
}
.mant-btn--large {
    border-radius: 22px;
    height: 44px;
    padding: 8px 28px;
    font-size: 16px;
}
</style>