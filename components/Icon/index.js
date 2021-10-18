/* eslint-disable */ 
// import Icon from './Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faClock, faCoins, faArrowRight, faBookmark, faPlus)

// const Icon = {}
// FontAwesomeIcon.name = 'Icon'
// FontAwesomeIcon.install = (app: any) => {
//     app.component("fa-icon", FontAwesomeIcon)
// }

export default FontAwesomeIcon