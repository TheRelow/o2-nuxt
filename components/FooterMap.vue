<template>
  <footer class="footer-map">
    <div class="footer-map__map" id="footer-map"></div>
    <div class="wrapper footer-map__wrapper">
      <div class="footer-map__content">
        <img class="footer-map__logo" :src="require('@/assets/img/logo-horizontal-black.svg')" alt="logo o2">
        <div class="footer-map__address">
          Череповецкая ул. 1А, Волгоград
        </div>
        <div class="footer-map__contacts">
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMap",
  data: ()=>({
    map: null
  }),
  methods: {
    mapInit() {
      this.map = new ymaps.Map("footer-map", {
        center: [48.707019, 44.487976],
        zoom: 12,
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
