import Vue from 'vue'
import Dropdown from './Dropdown.vue'

export const triggerEventTuple = {
    'click': undefined,
    'mouseenter': 'mouseleave'
}

export const dropdownEventBus = new Vue()

export default Dropdown