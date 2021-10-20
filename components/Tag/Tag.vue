<template>
  <span class="mant-tag">
      <slot></slot>
  </span>
</template>

<script>
export default {
    name: "MantTag"
}
</script>

<style lang="scss">
.mant-tag {
    background-color: #272f39;
    color: $text-color;
    height: 32px;
    display: inline-block;
    border-radius: 16px;
    padding: 0px 20px;
    line-height: 32px;
    margin-right: 12px;
}
</style>