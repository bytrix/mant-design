/* eslint-disable */
import MantButton from '../components/Button'
import MantText from '../components/Text/index'
import MantCard from '../components/Card/index'
import MantTag from '../components/Tag/index'
import MantCheckbox from '../components/Checkbox/index'
import MantTabs from '../components/Tabs/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus)

const components = [
    MantButton,
    MantText,
    MantCard,
    MantTag,
    MantCheckbox,
    MantTabs
]

const install = (app) => {
    components.forEach((item) => app.component(item.name, item))
    app.component("Icon", FontAwesomeIcon)
    // app.component("Button", MantButton)
}

export default {
    install
}
