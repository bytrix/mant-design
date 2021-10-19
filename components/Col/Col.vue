<template>
  <div class="mant-col" :style="{flex}">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "MantCol",
    props: {
        flex: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style>
.mant-col {
    /* background-color: blue; */
    /* flex: 1; */
}
</style>