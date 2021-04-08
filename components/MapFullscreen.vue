<template>
  <div class="map-fullscreen" :class="{'map-fullscreen_content_closed': !isInfoOpened}">
    <div class="map-fullscreen__map" id="map-fullscreen"></div>
    <div class="map-fullscreen__content">
      <div class="map-fullscreen__title">
        Как нас найти
      </div>
      <div class="map-fullscreen__address">
        Череповецкая ул. 1А, Волгоград
      </div>
      <div class="map-fullscreen__contacts">
        тел: <a class="link" href="tel:+78442550034">8 (8442) 55-00-34</a>
        <br>
        e-mail: <a class="link" href="mailto:ask@o2fit.ru">ask@o2fit.ru</a>
      </div>
      <div class="socials">
        <a href="https://wa.me/79616817007?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9A%D0%B0%D0%BA%20%D0%B4%D0%B5%D0%BB%D0%B0" target="_blank"><img :src="require('@/assets/img/whatsapp.svg')" alt=""></a>
<!--        <img :src="require('@/assets/img/telegram.svg')" alt="">-->
        <a href="https://vk.com/o2fitness" target="_blank"><img :src="require('@/assets/img/vk.svg')" alt=""></a>
        <a href="https://www.facebook.com/%D0%A4%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4-%D0%9E2-728729987509626" target="_blank"><img :src="require('@/assets/img/facebook.svg')" alt=""></a>
        <a href="https://www.instagram.com/o2fitness_vlg/?hl=ru" target="_blank"><img :src="require('@/assets/img/instagram.svg')" alt=""></a>
      </div>
      <div class="map-fullscreen__action" @click="toggleInfo"></div>
    </div>
    <div class="map-fullscreen__close" @click="toggleMap"></div>
  </div>
</template>

<script>
export default {
  name: "mapFullscreen",
  data: ()=>({
    isInfoOpened: true,
    map: null
  }),
  computed: {
    isMapOpened() {
      return this.$store.state.isMapOpened
    }
  },
  methods: {
    toggleMap() {
      this.$store.commit('main/toggleFullscreenMap')
    },
    toggleInfo() {
      this.isInfoOpened = !this.isInfoOpened
      this.$nextTick(() => {
        this.map.container.fitToViewport();
      });
    },
    mapInit() {
      this.map = new ymaps.Map("map-fullscreen", {
        center: [48.707019, 44.487976],
        zoom: 14,
        controls: []
      });
      this.map.geoObjects.add(
        new ymaps.Placemark([48.707019, 44.487976], {}, {
          preset: "islands#circleDotIcon",
          iconColor: '#ff0000'
        })
      );
    },
  },
  mounted() {
    ymaps.ready(this.mapInit);
  }
}
</script>
