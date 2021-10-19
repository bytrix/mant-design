/* eslint-disable */
import Vue from 'vue'
import MantButton from '../components/Button'
import MantText from '../components/Text'
import MantCard from '../components/Card'
import MantTag from '../components/Tag'
import MantCheckbox from '../components/Checkbox'
import MantTabs from '../components/Tabs'
import MantDropdown from '../components/Dropdown'
// import MantDropdownItem from '../components/Dropdown/Item'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// library.add(faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus, faMapMarkerAlt)

const components = [
    MantButton,
    MantText,
    MantCard,
    MantTag,
    MantCheckbox,
    MantTabs,
    MantDropdown,
    // MantDropdownItem
]

const install = (app) => {
    components.forEach((item) => app.component(item.name, item))
    // app.component("Icon", FontAwesomeIcon)
    // app.component("Button", MantButton)
}

export const eventBus = new Vue()

export default {
    install
}
