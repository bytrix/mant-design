/* eslint-disable */
import Vue from 'vue'
import MantButton from '../components/Button'
import MantCard from '../components/Card'
import MantCheckbox from '../components/Checkbox'
import MantCol from '../components/Col'
import MantDropdown from '../components/Dropdown'
import MantDropdownItem from '../components/Dropdown/Item'
import MantEditableModal from '../components/EditableModal'
import MantIcon from '../components/Icon'
import MantInput from '../components/Input'
import MantModal from '../components/Modal'
import MantRow from '../components/Row'
import MantSpin from '../components/Spin'
import MantTabs from '../components/Tabs'
import MantTag from '../components/Tag'
import MantText from '../components/Text'
import MantTree from '../components/Tree'
import MantTreeButton from '../components/TreeButton'

const components = [
    MantButton,
    MantCard,
    MantCheckbox,
    MantCol,
    MantDropdown,
    MantDropdownItem,
    MantEditableModal,
    MantIcon,
    MantInput,
    MantModal,
    MantRow,
    MantSpin,
    MantTabs,
    MantTag,
    MantText,
    MantTree,
    MantTreeButton
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
