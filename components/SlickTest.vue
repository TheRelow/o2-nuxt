<template>
  <div class="fullscreen-slider first-screen" :style="{ 'background-image': `url(${slidBg})` }">
    <VueSlickCarousel @afterChange="slideChanged" class="fullscreen-slider__slick" v-bind="sliderSettings">
      <div class="wrapper first-screen__main">
        <div class="first-screen__content">
          <div class="first-screen__title">
            Не был в O2?
            <br>
            Приходи в гости!
            <br>
            <br>
            Три первых тренировки - В ПОДАРОК!
          </div>
          <div>
            <button class="btn-3d" @click="openPopup">Записаться</button>
          </div>
        </div>
        <div class="first-screen__img-container">
          <img class="first-screen__img" :src="require('../assets/img/humans/erohina.webp')" alt="">
        </div>
      </div>
      <div class="wrapper first-screen__main">
        <div class="first-screen__content">
          <div class="first-screen__title">
            Самое время заняться собой!
            <div class="first-screen__subtitle">
              <span class="text_salad">4 месяца</span> безлимитного фитнеса
              <br>
              всего за <span class="text_salad">5900 руб</span>.
            </div>
            <div class="first-screen__subtitle">
              Бонусы в карте :
              <br>
              1 персональная тренировка
              <br>
              20 дней заморозки
            </div>
          </div>
          <div>
            <button class="btn-3d" @click="openPopup">Забронировать</button>
          </div>
        </div>
        <div class="first-screen__img-container">
          <img class="first-screen__img" :src="require('../assets/img/first-screen-man.webp')" alt="">
        </div>
      </div>
    </VueSlickCarousel>
    <div class="first-screen__scroll-bottom" @click="$emit('scrollTo', 'about')"></div>
    <div class="first-screen__wave"></div>
    <div class="first-screen__particles" id="particles-js"></div>
    <div class="first-screen__overlay" :style="overlayStyle"></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import 'particles.js'
import particleOption from "@/assets/particles.json";
import FirstScreenPopup from "@/components/FirstScreenPopup";

export default {
  name: 'SlickTest',
  components: { VueSlickCarousel },
  data: ()=>({
    particlesConfig: require('../assets/particles.json'),
    sliderSettings: {
      arrows: false,
      dots: true,
      fade: false,
      swipe: false,
      draggable: false,
      focusOnSelect: true,
      pauseOnFocus: true,
      pauseOnHover: false,
      swipeToSlide: false,
      // autoplay: true,
      // autoplaySpeed: 10000
    },
    name: null,
    phone: null,
    currentSlide: null
  }),
  computed: {
    slidBg() {
      if (this.currentSlide == null || this.currentSlide == 0) {
        return require('assets/img/first-screen-bg.jpg')
      } else {
        return require('assets/img/first-screen-bg-2.jpg')
      }
    },
    overlayStyle() {
      if (this.currentSlide == null || this.currentSlide == 0) {
        return { 'background-color': '#1C449C', 'opacity': 0.3 }
      } else {
        return { 'background-color': '#3B3B3C', 'opacity': 0.6 }
      }
    }
  },
  mounted() {
    require('particles.js')
    particlesJS('particles-js', particleOption);
  },
  methods: {
    openPopup() {
      this.$modals.open({
        component: FirstScreenPopup,
        center: true
      })
    },
    slideChanged(e) {
      this.currentSlide = e
    },
    sendMsg() {
      this.$store.dispatch('main/setNewMessage', {
        name: this.name,
        phone: this.phone,
      })
    }
  }
}
</script>
