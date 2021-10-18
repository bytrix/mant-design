import { shallowMount, mount } from "@vue/test-utils"
import { expect } from "chai"
import Button from '../../components/Button/index'

describe('Button.vue', () => {
    it('shows a button with text "hello"', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: () => 'Hello'
            }
        })
        expect(wrapper.text()).to.be.equal('Hello')
    })
    it('shows a button with icon on the left', () => {
        const wrapper = mount(Button, {
            props: {
                icon: 'plus'
            },
            slots: {
                default: () => 'Button'
            }
        })
        const svg = wrapper.find('button').find('svg')
        expect(svg.exists()).to.be.equal(true)
    })
})