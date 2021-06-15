<template>
  <div class="lp">
    <header-lp @scrollTo="scrollTo"></header-lp>
    <SlickTest ref="firstScreen" @scrollTo="scrollTo"></SlickTest>
    <about-us ref="about"></about-us>
    <BlockTransition></BlockTransition>
    <card-list ref="permissions"></card-list>
    <trainers ref="trainers"></trainers>
    <pricing ref="pricing"></pricing>
    <div class="wrapper">
      <iframe class="yt-video" src="https://www.youtube.com/embed/aJDDx6M_VSo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="center-btn">
        <button class="btn-3d" @click="openPopup" v-hide-cursor>
          <span class="btn-3d__text">Запишись на пробную тренировку</span>
        </button>
      </div>
    </div>
    <line-gallery></line-gallery>
    <three-steps></three-steps>
    <footer-map></footer-map>
  </div>
</template>

<script>
import HeaderLp from "~/components/HeaderLp";
import AboutUs from "~/components/AboutUs";
import Pricing from "~/components/Pricing";
import FooterMap from "~/components/FooterMap";
import BlockTransition from "~/components/BlockTransition";
import ThreeSteps from "~/components/ThreeSteps";
import SlickTest from "~/components/SlickTest";
import Trainers from "~/components/Trainers";
import CardList from "~/components/CardList";
import VideoPopup from "@/components/VideoPopup";
import LineGallery from "@/components/LineGallery";

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru',
      },
      title:
        'Фитнес клуб O2 fitness',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'o2fit.ru description',
        },
      ],
    }
  },
  components: {
    HeaderLp, AboutUs, Pricing, FooterMap, BlockTransition, Trainers, CardList, ThreeSteps, SlickTest, LineGallery
  },
  methods: {
    scrollTo(anc) {
      this.$gsap.to(window, {duration: 0.5, scrollTo: {y: this.scrollToAnchors[anc].$el, offsetY: 60}});
    },
    openPopup() {
      this.$modals.open({
        component: VideoPopup,
        center: true
      })
    }
  },
  mounted() {
    const ScrollToPlugin = this.$ScrollToPlugin
    this.$gsap.registerPlugin(ScrollToPlugin);
    this.scrollToAnchors = {
      firstScreen: this.$refs.firstScreen,
      about: this.$refs.about,
      permissions: this.$refs.permissions,
      pricing: this.$refs.pricing,
      trainers: this.$refs.trainers,
    }
  }
}
</script>
