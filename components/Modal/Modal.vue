<template>
    <div class="mant-modal">
        <transition name="slide-fade">
            <Card v-show="sVisible" width="950px" class="modal" ref="modalCardRef" @change:visible="visible = false">
                <template slot="header">
                    <div v-if="title" class="title">{{title}}</div>
                    <slot name="header"></slot>
                </template>
                <template slot="header:right">
                    <Button @click="onClose" :icon="['fal', 'times']" circle></Button>
                </template>
                <slot></slot>
            </Card>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="sVisible"></div>
        </transition>
    </div>
</template>

<script>
import Card from '../Card'
import Button from '../Button'
export default {
    name: "MantModal",
    data() {
        return {
            sVisible: false
        }
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        visible(newVal) {
            this.sVisible = newVal
        }
    },
    methods: {
        onClose() {
            this.$emit("close")
        }
    },
    components: {
        Card,
        Button
    },
}
</script>

<style lang="scss" scoped>
.mant-modal {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 100%;
    .modal {
        margin: 0 auto;
        top: 100px;
        position: relative;
    }
    .mask {
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: -1;
    }
}

.slide-fade-enter-active {
  transition: all .18s ease;
}
.slide-fade-leave-active {
  transition: all .18s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(0px, -20px);
  opacity: 0;
}

</style>