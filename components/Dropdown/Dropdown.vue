<template>
  <div class="mant-dropdown"
    @mouseenter="showMenu = true"
    @mouseleave="showMenu = false">
    <Icon v-if="icon" :icon="icon" />
    <span class="text">{{text}}</span>
    <Icon v-if="$slots.default" class="chevron" size="xs" icon="chevron-down" />
    <transition name="slide-fade">
      <div v-show="showMenu" class="mant-dropdown-menu">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
  name: "MantDropdown",
  components: {
    Icon
  },
  data() {
      return {
          showMenu: false
      }
  },
  props: {
    icon: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    }
  }
}
</script>

<style lang="scss">
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
.mant-dropdown:hover {
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