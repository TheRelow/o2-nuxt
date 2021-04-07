<template>
  <div class="about" ref="about">
    <div class="wrapper about__wrapper" ref="aboutWrapper">
      <div class="about__main">
        <div class="about__text" ref="text">
          <div class="title">О нас</div>
          <p>
            О2 fitness – это атмосферный, современный фитнес клуб, объединяющий людей, для которых спорт – дыхание, образ жизни.
            <br><br>
            Светлый, комфортный клуб в стиле эко дизайна с панорамным остеклением, оборудованный мощнейшей вентиляционной системой и высокачественным спортивным оборудованием! Всё продумано для того, чтобы члены клуба достигали своих целей, получали красивое и здоровое тело, бодрость, силу духа и хорошее настроение
          </p>
        </div>
        <div class="about__slider" ref="slider">
          <slider :slides="slides"></slider>
        </div>
        <div class="about__logo" ref="logo"></div>
      </div>
<!--      <div class="about__permissions" ref="permissions">-->
<!--        <div class="about__permissions-item">-->
<!--          <div class="about__permissions-text">Сертифицированный профессиональный тренерский состав</div>-->
<!--        </div>-->
<!--        <div class="about__permissions-item">-->
<!--          <img :src="require('~/assets/img/fan.svg')" alt="">-->
<!--          <div class="about__permissions-text">Идеальная чистота</div>-->
<!--        </div>-->
<!--        <div class="about__permissions-item">-->
<!--          <img :src="require('~/assets/img/turn.svg')" alt="">-->
<!--          <div class="about__permissions-text">Нет очередей на тренажеры</div>-->
<!--        </div>-->
<!--        <div class="about__permissions-item">-->
<!--          <img :src="require('~/assets/img/window.svg')" alt="">-->
<!--          <div class="about__permissions-text">Панорамное остекление</div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="about__bgi" ref="bgi1"></div>
    <div class="about__bgi about__bgi_2" ref="bgi2"></div>
    <div class="about__bgi about__bgi_3" ref="bgi3"></div>
    <div class="about__bgi about__bgi_4" ref="bgi4"></div>
    <div class="about__bgi about__bgi_5" ref="bgi5"></div>
  </div>
</template>

<script>
import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
import Slider from "~/components/Slider"
// gsap.registerPlugin(ScrollTrigger)
export default {
  name: "AboutUs",
  data: ()=>({
    slides: [
      {
        img: require('~/assets/img/slide1.jpg'),
        active: true
      },
      {
        img: require('~/assets/img/slide2.jpg'),
        active: false
      },
      {
        img: require('~/assets/img/slide3.jpg'),
        active: false
      },
      {
        img: require('~/assets/img/slide4.jpg'),
        active: false
      },
      {
        img: require('~/assets/img/slide5.jpg'),
        active: false
      },
      {
        img: require('~/assets/img/slide6.jpg'),
        active: false
      },
      {
        img: require('~/assets/img/slide7.jpg'),
        active: false
      },
    ]
  }),
  components: {
    Slider
  },
  mounted() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.about,
        start: 'center bottom'
      },
    });
    tl.from(this.$refs.aboutWrapper, { scaleX: 0 }, 0)
    tl.from(this.$refs.bgi1, { scale: 0, delay: 0.15 }, 0)
    tl.from(this.$refs.logo, { scale: 0, delay: 0.3 }, 0)
    tl.from(this.$refs.text, { opacity: 0, delay: 0.4 }, 0)
    tl.from(this.$refs.slider, { opacity: 0, delay: 0.4 }, 0)
    tl.from(this.$refs.permissions, { opacity: 0, delay: 0.6 }, 0)
  }
}
</script>
