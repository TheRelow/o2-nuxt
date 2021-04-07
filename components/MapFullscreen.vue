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
        <img :src="require('@/assets/img/whatsapp.svg')" alt="">
        <img :src="require('@/assets/img/telegram.svg')" alt="">
        <img :src="require('@/assets/img/viber.svg')" alt="">
        <img :src="require('@/assets/img/vk.svg')" alt="">
        <img :src="require('@/assets/img/facebook.svg')" alt="">
        <img :src="require('@/assets/img/instagram.svg')" alt="">
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
