/* eslint-disable */ 
// import Icon from './Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus, faArrowDown, faChevronDown, faChevronRight, faMapMarkerAlt, faMinus, faFileAlt } from '@fortawesome/pro-light-svg-icons'
// library.add(faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus, faArrowDown, faChevronDown, faChevronRight, faMapMarkerAlt, faMinus, faFileAlt)

import { fal } from '@fortawesome/pro-light-svg-icons'
library.add(fal)

// const Icon = {}
FontAwesomeIcon.name = 'MantIcon'
// FontAwesomeIcon.install = (app: any) => {
//     app.component("fa-icon", FontAwesomeIcon)
// }

export default FontAwesomeIcon