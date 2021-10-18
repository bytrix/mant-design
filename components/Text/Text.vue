<template>
  <span class="mant-text" :class="[`mant-text--${type}`]">
      <Icon v-if="icon && iconPosition==='left'" class="icon mgl8" :icon="icon" />
      <slot></slot>
      <Icon v-if="icon && iconPosition==='right'" class="icon mgl8" :icon="icon" />
  </span>
</template>

<script>
import Icon from '../Icon'
export default {
  name: "MantText",
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    'icon-position': {
      type: String,
      default: "left"
    }
  }
}
</script>

<style lang="scss">
.mant-text {
  font-weight: bolder;
  display: inline-block;
  margin-right: 12px;
  .icon {
    transform: translateY(1px);
  }
}
.mant-text--primary {
  color: #bbe666;
}
</style>