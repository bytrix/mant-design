<template>
    <div :class="['mant-spin', {'mask': loading}]" ref="spinRef">
        <div v-if="loading" class="mant-loading" :style="{
            top: `${loadingTop}px`,
            left: `${loadingLeft}px`
        }">
            <div class="ball"></div>
            <div class="ball"></div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "MantLoading",
    data() {
        return {
            loadingTop: 0,
            loadingLeft: 0
        }
    },
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        const spin = this.$refs.spinRef
        const { offsetWidth, offsetHeight } = spin
        this.loadingTop = offsetHeight / 2 - 15
        this.loadingLeft = offsetWidth / 2
    }
}
</script>

<style lang="scss">
.mant-spin {
    position: relative;
    user-select: none;
}
.mask::after {
    content: "";
    background-color: rgba(0,0,0,0.75);
    transition: $duration;
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
}
.mant-loading {
    z-index: 1;
    position: absolute;
    animation: loading-rotate 1.8s infinite cubic-bezier(0.77, 0, 0.19, 0.99);
    display: inline-block;
    .ball {
        background-color: $primary-color;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        display: inline-block;
    }
    .ball:first-child {
        animation: move-right 1.8s infinite cubic-bezier(0.77, 0, 0.19, 0.99);
    }
    .ball:last-child {
        animation: move-left 1.8s infinite cubic-bezier(0.77, 0, 0.19, 0.99);
    }
    @keyframes move-right {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(20px);
        }
        80% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    @keyframes move-left {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(-20px);
        }
        80% {
            transform: translateX(-10px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    @keyframes loading-rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>