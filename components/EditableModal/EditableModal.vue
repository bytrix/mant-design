<template>
    <Modal :visible.sync="showModal" @close="onClose">
        <template slot="header">
            <input type="text" ref="titleInputRef" class="title" placeholder="Untitled" :value="title" />
        </template>
        <textarea class="content-input" placeholder="Write something here..." v-model="content"/>
    </Modal>
</template>

<script>
import Modal from '../Modal'
export default {
    name: "MantEditableModal",
    watch: {
        visible(val) {
            if(val) {
                console.log('opened', this.$refs.titleInputRef)
                this.$nextTick(() => {
                    this.$refs.titleInputRef.focus()
                })
            }
            this.showModal = val
        }
    },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        onClose() {
            this.$emit("close")
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: ""
        }
    },
    components: {
        Modal
    }
}
</script>

<style lang="scss">
input.title, .content-input {
    background-color: transparent;
    color: $text-color;
    border: none;
    outline: none;
    width: 100%;
}
.content-input {
    box-sizing: border-box;
    font-size: $font-size-base;
    height: 350px;
    resize: none;
}
</style>