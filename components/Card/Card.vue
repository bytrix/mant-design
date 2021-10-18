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
$radius: 18px;
.mant-card {
    background-color: #1a1f28;
    border: 1px solid #24282d;
    border-radius: $radius;
    text-align: left;
    margin-bottom: 32px;
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
        color: #fbfdfd;
        font-weight: bolder;
        font-size: 20px;
        margin-bottom: 8px;
    }
    .footer {
        background-color: #222c34;
        padding: 16px 24px;
        border-radius: 0px 0px $radius $radius;
        display: flex;
        flex-direction: row;
        div:first-child {
            flex: 1;
        }
    }
}
</style>