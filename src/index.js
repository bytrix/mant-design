/* eslint-disable */
import Vue from 'vue'
import MantButton from '../components/Button'
import MantCard from '../components/Card'
import MantCheckbox from '../components/Checkbox'
import MantDropdown from '../components/Dropdown'
import MantDropdownItem from '../components/Dropdown/Item'
import MantEditableModal from '../components/EditableModal'
import MantIcon from '../components/Icon'
import MantInput from '../components/Input'
import MantModal from '../components/Modal'
import MantSpin from '../components/Spin'
import MantTabs from '../components/Tabs'
import MantTag from '../components/Tag'
import MantText from '../components/Text'
import MantTree from '../components/Tree'
import MantRow from '../components/Grid/Row'
import MantCol from '../components/Grid/Col'

const components = [
    MantButton,
    MantCard,
    MantCheckbox,
    MantDropdown,
    MantDropdownItem,
    MantEditableModal,
    MantIcon,
    MantInput,
    MantModal,
    MantSpin,
    MantTabs,
    MantTag,
    MantText,
    MantTree,
    MantRow,
    MantCol
]

const install = (app) => {
    components.forEach((item) => app.component(item.name, item))
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export const eventBus = new Vue()

export default {
    install
}
