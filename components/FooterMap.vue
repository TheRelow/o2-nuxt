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
          <a href="https://wa.me/79616817007" target="_blank"><img :src="require('@/assets/img/whatsapp.svg')" alt=""></a>
<!--          <img :src="require('@/assets/img/telegram.svg')" alt="">-->
          <a href="https://vk.com/o2fitness" target="_blank"><img :src="require('@/assets/img/vk.svg')" alt=""></a>
          <a href="https://www.facebook.com/%D0%A4%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4-%D0%9E2-728729987509626" target="_blank"><img :src="require('@/assets/img/facebook.svg')" alt=""></a>
          <a href="https://www.instagram.com/o2fitness_vlg/?hl=ru" target="_blank"><img :src="require('@/assets/img/instagram.svg')" alt=""></a>
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
