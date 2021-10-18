<template>
  <input class="mant-input" :placeholder="placeholder" />
</template>

<script>
export default {
    name: "MantInput",
    props: {
        placeholder: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>
.mant-input {
    background-color: transparent;
    border: 1px solid rgb(43, 47, 56);
    height: 28px;
    border-radius: 14px;
    padding: 0px 16px;
    color: #909598;
    outline: none;
    transition: 0.3s;
}
.mant-input:hover, .mant-input:focus {
    /* border-color: #bbe666; */
}
</style>