<template>
  <div class="mant-col" :style="{flex}">
    <slot name='h' slot-scope="p">
      <!-- <slot name="h"></slot> -->
      {{p}}kk
    </slot>
  </div>
</template>

<script>
export default {
    name: "MantCol",
    props: {
        flex: {
            type: Number,
            default: 1
        },
        gutter: {},
    }
}
</script>

<style>
.mant-col {
    /* background-color: blue; */
    /* flex: 1; */
}
</style>