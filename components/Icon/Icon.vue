<template>
  <font-awesome-icon :icon="icon"/>
</template>

<script>
// import FontAwesomeIcon from './index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fal, fab, fas)

// console.log('FontAwesomeIcon', FontAwesomeIcon)

export default {
    name: "MantIcon",
    props: {
        icon: {
            type: Array,
            default: () => []
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style lang="scss">
</style>