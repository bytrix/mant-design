<template>
    <Modal
        :visible.sync="showModal"
        @close="onClose"
        :maskClosable="maskClosable">
        <template slot="header">
            <input type="text" ref="titleInputRef" class="title" placeholder="Untitled" :value="value.title" @change="onTitleChange" />
        </template>
        <textarea class="content-input" placeholder="Write something here..." :value="value.content" @change="onContentChange"/>
        <template slot="footer">
            <slot name="footer"></slot>
        </template>
    </Modal>
</template>

<script>
import Modal from '../Modal'
export default {
    name: "MantEditableModal",
    watch: {
        visible(val) {
            if(val) {
                this.$nextTick(() => {
                    this.$refs.titleInputRef.focus()
                })
                this.value = {
                    title: this.title,
                    content: this.content
                }
            }
            this.showModal = val
        }
    },
    data() {
        return {
            showModal: false,
            value: {}
        }
    },
    methods: {
        onClose() {
            this.$emit("close")
        },
        onTitleChange(e) {
            this.value.title = e.target.value || this.title
            this.$emit("change", this.value)
        },
        onContentChange(e) {
            this.value.content = e.target.value || this.content
            this.$emit('change', this.value)
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
        },
        maskClosable: {
            type: Boolean,
            default: true
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