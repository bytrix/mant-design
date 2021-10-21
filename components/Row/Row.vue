<template>
  <div class="mant-row">
      {{hello}}1
      <slot name="h" :hello="hello"></slot>
  </div>
</template>

<script>
export default {
    name: "MantRow",
    props: {
        gutter: {
            type: Array,
            default: () => [8,8]
        },
        hello: {}
    }
}
</script>

<style lang="scss">
.mant-row {
    display: flex;
    /* background-color: red; */
    .mant-col {
        margin: 0px 12px;
    }
}
</style>