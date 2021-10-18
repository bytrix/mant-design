<template>
  <label class="mant-checkbox">
      <input class="checkbox-input" type="checkbox" @change="onChange" />
      <span class="checkbox-inner" :class="{'checkbox--checked': checked}"></span>
      <span>
          <slot></slot>
      </span>
  </label>
</template>

<script>
export default {
    name: "MantCheckbox",
    data() {
        return {
            checked: false
        }
    },
    methods: {
        onChange(e) {
            this.checked = e.target.checked
        }
    }
}
</script>

<style>
.checkbox-inner+span {
    margin-left: 8px;
}
.checkbox-input {
    opacity: 0;
}
.mant-checkbox {
    cursor: pointer;
}
.checkbox-inner {
    border: 1px solid #909598;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    top: .2em;
}
.checkbox-inner::after {
    content: "";
    border: 2px solid transparent;
}
.checkbox--checked {
    background-color: #bbe666;
    border-color: #bbe666;
}
.checkbox--checked::after {
    content: "";
    width: 6px;
    height: 3px;
    border: 2px solid #344912;
    border-top: none;
    border-right: none;
    display: inline-block;
    transform: rotate(-45deg) translate(90%, -30%);
}
</style>