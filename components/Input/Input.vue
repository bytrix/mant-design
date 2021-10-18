<template>
  <input class="mant-input" :class="[`mant-input--${size}`]" :placeholder="placeholder" />
</template>

<script>
export default {
    name: "MantInput",
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss">
.mant-input {
    background-color: transparent;
    border: 1px solid $border-color;
    height: 28px;
    border-radius: 14px;
    padding: 0px 16px;
    color: $text-color;
    outline: none;
    transition: $duration;
    margin: 0px 8px;
}
.mant-input--large {
    height: 40px;
    border-radius: 20px;
    font-size: $font-size-lg;
}
.mant-input:hover, .mant-input:focus {
    /* border-color: #bbe666; */
}
</style>