<template>
  <div class="mant-card" :style="{width}">
      <div class="non-footer">
        <div class="title">{{title}}</div>
        <div class="header-wrapper">
            <slot name="header"></slot>
            <slot name="header:right"></slot>
        </div>
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="footer">
        <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "MantCard",
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss">
.mant-card {
    background-color: $block-bg-color;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    text-align: left;
    margin-bottom: 32px;
    color: $text-color;
    .non-footer {
        padding: 24px;
        .header-wrapper {
            display: flex;
        }
        .header-wrapper>div:first-child {
            flex: 1;
        }
    }
    .title {
        color: $heading-color;
        font-weight: bolder;
        font-size: 20px;
        margin-bottom: 8px;
    }
    .footer {
        background-color: $block-bg-color-secondary;
        padding: 16px 24px;
        border-radius: 0px 0px $border-radius $border-radius;
        display: flex;
        flex-direction: row;
        div:first-child {
            flex: 1;
        }
    }
}
</style>