<template>
  <div
    class="mant-dropdown"
    :class="{triggered: showMenu && trigger.indexOf('click') !== -1}"
    v-on="triggerEvents()"
  >
    <Icon v-if="icon.length !== 0" :icon="icon" :class="{active: showMenu}" />
    <span :class="{text, active: showMenu && trigger.indexOf('click') !== -1}">{{text}}</span>
    <transition name="slide-fade">
      <div v-show="showMenu" class="mant-dropdown-menu">
        <slot></slot>
      </div>
    </transition>
    <!-- <div class="mask" v-if="showMenu">x</div> -->
  </div>
</template>

<script>
import Icon from '../Icon'
import { triggerEventTuple, dropdownEventBus } from './index'
export default {
  name: "MantDropdown",
  components: {
    Icon
  },
  data() {
      return {
          showMenu: false,
          id: null
      }
  },
  watch: {
    showMenu(val) {
      if(val) {
        document.body.style.overflow = 'hidden'
        const maskDom = document.createElement('div')
        // maskDom.className = 'mask'
        maskDom.id = 'mask'
        document.body.appendChild(maskDom)
      } else {
        document.body.style.overflow = ''
        const maskDom = document.getElementById('mask')
        document.body.removeChild(maskDom)
      }
    }
  },
  methods: {
    triggerEvents() {
      const _this = this
      const _triggerEvents = {}
      this.trigger.forEach(triggerName => {
        _triggerEvents[triggerName] = _this.onDropdownTrigger
        const untriggerName = triggerEventTuple[triggerName]
        if(untriggerName) {
          _triggerEvents[untriggerName] = () => {
            _this.showMenu = false
          }
        }
      })
      return _triggerEvents
    },
    onDropdownTrigger(e) {
      if(this.showMenu === false) {
        this.showMenu = true
        dropdownEventBus.$emit('open-id', this.id)
        e.stopPropagation()
      }
    }
  },
  created() {
    const _this = this
    this.id = Math.random()
    document.addEventListener('click', () => {
      this.showMenu = false
    })
    dropdownEventBus.$on('open-id', id => {
      _this.showMenu = _this.id === id
    })
  },
  props: {
    icon: {
        type: Array,
        default: () => []
    },
    text: {
        type: String,
        default: ""
    },
    trigger: {
      type: Array,
      default: () => ['mouseenter']
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  // width: 100%;
  // height: 100%;
  background-color: red;
  opacity: 0.5;
  position: fixed;
  cursor: default;
  user-select: none;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 1;
}
.mant-dropdown {
    padding: 8px 18px;
    color: $text-color;
    cursor: pointer;
    transition: $duration;
    user-select: none;
    .text {
        margin: 0px 12px;
    }
    // .active::after {
    //   content: "";
    //   background-color: red;
    //   cursor: default;
    //   position: fixed;
    //   width: 100%;
    //   height: 600px;
    //   left: 0px;
    //   top: 0px;
    //   pointer-events: none;
    //   z-index: 1;
    // }
    .chevron {
        transform: translateY(-2px);
    }
}
// .mant-dropdown.triggered::after {
//   content: "";
//   cursor: default;
//   background-color: red;
//   width: 200px;
//   height: 400px;
//   display: block;
//   position: fixed;
//   top: 0px;
//   left: 0px;
// }
.mant-dropdown:hover,
.mant-dropdown .active {
  color: lighten($color: $text-color, $amount: 10);
}
.mant-dropdown-menu {
    background-color: #1a1f28;
    box-shadow: 0 1px 16px 1px rgba(0,0,0,0.4);
    padding: 4px 0px;
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: translate(-18px, 8px);
    z-index: 2;
}

.slide-fade-enter-active {
  transition: all .18s ease;
}
.slide-fade-leave-active {
  transition: all .18s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(-18px, 2px);
  opacity: 0;
}

</style>