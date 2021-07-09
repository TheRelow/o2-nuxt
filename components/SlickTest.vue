<template>
  <div class="fullscreen-slider first-screen" :style="{ 'background-image': `url(${slidBg})` }">
    <VueSlickCarousel @afterChange="slideChanged" class="fullscreen-slider__slick" v-bind="sliderSettings">
<!--      <div class="wrapper first-screen__main first-screen__main_narrow">-->
<!--        <div class="first-screen__content">-->
<!--          <div class="first-screen__title">-->
<!--            Проведи это лето с нами!-->
<!--            <div class="first-screen__subtitle">-->
<!--              <span class="text_salad">3 месяца</span> фитнеса всего за <span class="text_salad">4200 рублей!</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div>-->
<!--            <button class="btn-3d" @click="openPopup2" v-hide-cursor>Забронировать</button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="first-screen__img-container">-->
<!--          <img class="first-screen__img" :src="require('../assets/img/first-screen-new-man.webp')" alt="">-->
<!--        </div>-->
<!--      </div>-->
      <div class="wrapper first-screen__main">
        <div class="first-screen__content">
          <div class="first-screen__title text_blue">
            Летние скидки до -30%
            <br>
            Количество карт ограничено
          </div>
          <div>
            <button class="btn-3d" @click="openPopup2" v-hide-cursor>Узнать цену</button>
          </div>
        </div>
        <div class="first-screen__img-container">
          <img class="first-screen__img" :src="require('../assets/img/new-banner.webp')" alt="">
        </div>
      </div>
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
            <button class="btn-3d" @click="openPopup" v-hide-cursor>Записаться</button>
          </div>
        </div>
        <div class="first-screen__img-container">
          <img class="first-screen__img" :src="require('../assets/img/humans/erohina.webp')" alt="">
        </div>
      </div>
    </VueSlickCarousel>
    <div class="first-screen__scroll-bottom" v-hide-cursor @click="$emit('scrollTo', 'about')"></div>
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
import FirstScreenPopup2 from "@/components/FirstScreenPopup2";

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
      autoplay: true,
      autoplaySpeed: 10000
    },
    name: null,
    phone: null,
    currentSlide: null
  }),
  computed: {
    slidBg() {
      if (this.currentSlide == null || this.currentSlide == 0) {
        // return require('assets/img/first-screen-bg-2.jpg')
        return 'none'
      } else {
        return require('assets/img/first-screen-bg.jpg')
      }
    },
    overlayStyle() {
      if (this.currentSlide == null || this.currentSlide == 0) {
        //#FFE06B
        //#FEB63D
        return {
          'background': 'linear-gradient(142deg, rgba(255,224,107,1) 0%, rgba(254,182,61,1) 100%)',
          'opacity': 1
        }
      } else {
        return { 'background-color': '#1C449C', 'opacity': 0.3 }
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
    openPopup2() {
      this.$modals.open({
        component: FirstScreenPopup2,
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
