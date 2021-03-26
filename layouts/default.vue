<template>
  <div id="app" class="default-layout">
    <Nuxt />
    <mouse-follower></mouse-follower>
    <transition name="from-left">
      <MapFullscreen v-show="isMapOpened"></MapFullscreen>
    </transition>
    <vu-modal-wrapper></vu-modal-wrapper>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import '@/assets/styles/main.scss'

import MapFullscreen from "@/components/MapFullscreen";
import MouseFollower from "@/components/MouseFollower";
import VuModalWrapper from "@/popup/modal-wrapper";

export default {
  components: {
    MouseFollower, MapFullscreen, VuModalWrapper
  },
  computed: {
    isMapOpened() {
      return this.$store.state.main.isMapOpened
    }
  },
}
</script>

<style lang="scss">
.from-left-enter-active, .from-left-active, .from-left-leave, .from-left-leave-active {
  transition: transform 0.4s ease-in;
}
.from-left-enter, .from-left-leave-to {
  transform: translateX(100%);
}
.from-left-enter-to, .from-left-leave {
  transform: translateX(0);
}
</style>
