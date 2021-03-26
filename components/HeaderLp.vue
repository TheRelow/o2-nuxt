<template>
  <header class="header-lp" :class="{'header-lp_minified': isMinified}">
    <div class="header-lp__logo" @click="scrollTo('firstScreen')"><img :src="require('../assets/img/logo-horizontal-white.svg')" alt="logo o2 fitness"></div>
    <div class="wrapper header-lp__wrapper" :class="{'header-lp__wrapper_menu-opened': isMenuOpened}">
      <div class="header-lp__menu-toggler" :class="{active: isMenuOpened}" @click="toggleMenu" @mouseenter="hoverLink" @mouseleave="leaveLink">
        <span></span>
      </div>
      <div class="header-lp__menu">
        <button @mouseenter="hoverLink" @mouseleave="leaveLink" class="header-lp__menu-link" @click="scrollTo('about')">О нас</button>
        <button @mouseenter="hoverLink" @mouseleave="leaveLink" class="header-lp__menu-link" @click="scrollTo('permissions')">Почему мы</button>
        <button @mouseenter="hoverLink" @mouseleave="leaveLink" class="header-lp__menu-link" @click="scrollTo('trainers')">Тренера</button>
        <button @mouseenter="hoverLink" @mouseleave="leaveLink" class="header-lp__menu-link" @click="scrollTo('pricing')">Цены</button>
      </div>
      <div class="header-lp__time">
        Пн-Пт 7:00 - 23:00
        <br>
        Сб-Вс 9:00 - 21:00
      </div>
    </div>
    <div class="header-lp__contacts">
      <a href="tel:+78442550034" class="header-lp__contacts-link header-lp__contacts-link_phone"><img :src="require('../assets/img/icon-phone-white.svg')" class="header-lp__contacts-link-icon" alt=""> 8 (844) 255-00-34</a>
      <a href="javascript:;" @click="toggleFullscreenMap" class="header-lp__contacts-link header-lp__contacts-link_address"><img :src="require('../assets/img/icon-map_point-white.svg')" class="header-lp__contacts-link-icon" alt=""> Череповецкая 1А</a>
    </div>
  </header>
</template>

<script>
import Bus from "@/utils/Bus";
export default {
  name: "HeaderLp",
  data: ()=>({
    isMenuOpened: false,
    isMinified: false
  }),
  methods: {
    updateIsMinified() {
      if (window.pageYOffset > 0) {
        this.isMinified = true
      } else {
        this.isMinified = false
      }
    },
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
    hoverLink() {
      Bus.$emit('hoverLink')
    },
    leaveLink() {
      Bus.$emit('leaveLink')
    },
    toggleFullscreenMap() {
      this.$store.commit('main/toggleFullscreenMap')
    },
    scrollTo(to) {
      this.$emit('scrollTo', to)
      this.isMenuOpened = false
    },
  },
  mounted() {
    this.updateIsMinified()
    window.addEventListener('scroll', ()=>{
      this.updateIsMinified()
    });
  }
}
</script>
