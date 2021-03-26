<template>
  <div class="trainers">
    <div class="trainers__overlay"></div>
    <svg class="trainers__bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 200" fill="none">
      <path d="M1920 0L0 200V0H1920Z" fill="#fff"/>
    </svg>
    <div class="wrapper trainers__wrapper">
      <VueSlickCarousel class="trainers__slider" v-bind="sliderSettings">
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/onishuk.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Александ Онищук</div>
            <div class="trainers__text">Сертифицированный фитнес-инструктор групповых и персональных
              программ</div>
<!--            <a href="javascript:;" class="btn" @click="trainerDetail">Записаться</a>-->
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/savinova.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Полина Савинова</div>
            <div class="trainers__text">Сертифицированный фитнес-инструктор групповых и персональных
              программ</div>
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/bakumenko.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Андрей Бакуменко</div>
            <div class="trainers__text">Сертифицированный персональный тренер тренажерного зала</div>
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/erohina.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Софья Ерохина</div>
            <div class="trainers__text">Сертифицированный фитнес-инструктор групповых и персональных программ</div>
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/makarov2.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Юрий Макаров</div>
            <div class="trainers__text">Сертифицированный фитнес-инструктор групповых и персональных
              программ</div>
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/anna.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Анна Григорьева</div>
            <div class="trainers__text">Сертифицированный фитнес-инструктор групповых и персональных
              программ</div>
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/braiz.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Артем Брайз</div>
            <div class="trainers__text">инструктор тренажерного зала</div>
          </div>
        </div>
        <div class="trainers__item">
          <div class="trainers__img" :style="{'background-image': 'url(' + require('assets/img/humans/shablikov2.png') + ')'}"></div>
          <div class="trainers__content">
            <div class="title">Олег Шаблыков</div>
            <div class="trainers__text">Сертифицированный инструктор по йоге</div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import TrainerDetail from "@/components/TrainerDetail";

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: "Trainers",
  components: { VueSlickCarousel },
  data: ()=>({
    sliderSettings: {
      infinite: false,
      arrows: true,
      // draggable: false,
      // swipeToSlide: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ],
    },
  }),
  methods: {
    trainerDetail() {
      this.$modals.open({
        component: TrainerDetail,
        center: true
      })
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.trainers__item {
  padding: 0 10px;
}
.trainers__slider {
  margin: 0 -10px;
}
@media (max-width: 400px) {
  .trainers__slider {
    margin: 0;
  }
}
</style>
