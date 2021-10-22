<template>
  <div class="mant-dropdown"
    v-on="triggerEvents()"
  >
    <Icon v-if="icon.length !== 0" :icon="icon" :class="{active: showMenu}" />
    <span :class="{text, active: showMenu}">{{text}}</span>
    <!-- <Icon v-if="$slots.default" class="chevron" size="xs" :icon="['fal', 'chevron-down']" /> -->
    <transition name="slide-fade">
      <div v-show="showMenu" class="mant-dropdown-menu">
        <slot></slot>
      </div>
    </transition>
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
.mant-dropdown {
    padding: 8px 18px;
    color: $text-color;
    cursor: pointer;
    transition: $duration;
    .text {
        margin: 0px 12px;
    }
    .chevron {
        transform: translateY(-2px);
    }
}
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
    z-index: 1;
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