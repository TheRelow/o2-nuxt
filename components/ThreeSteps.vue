<template>
  <div class="three-steps">
    <div class="wrapper">
      <div class="title text_center three-steps__title">
        Три шага на пути к идеальной фигуре
      </div>
    </div>
    <div class="wrapper three-steps__wrapper" ref="ThreeSteps">
      <div class="three-steps__infographic">
        <div class="three-steps__circle infographic">
          <div class="infographic__list">
            <div class="infographic__list-item" ref="step1">
              <img class="infographic__list-item-img" :src="require('@/assets/img/step-food.svg')" alt="">
              <div class="infographic__list-item-text">
                <div class="infographic__list-item-title">Еда</div>
                План питания, подсчет калорий и  контроль КБЖУ
              </div>
            </div>
            <div class="infographic__list-item infographic__list-item_2" ref="step2">
              <img class="infographic__list-item-img" :src="require('@/assets/img/step-training.svg')" alt="">
              <div class="infographic__list-item-text">
                <div class="infographic__list-item-title">Программа</div>
                Сбалансированная программа тренировок
              </div>
            </div>
            <div class="infographic__list-item infographic__list-item_3" ref="step3">
              <img class="infographic__list-item-img" :src="require('@/assets/img/step-training2.svg')" alt="">
              <div class="infographic__list-item-text">
                <div class="infographic__list-item-title">Тренировки</div>
                Регулярные занятия фитнесом
              </div>
            </div>
          </div>
          <div class="infographic__lines">
            <div class="infographic__lines-line" ref="line1"></div>
            <div class="infographic__lines-line infographic__lines-line_second" ref="line2"></div>
            <div class="infographic__lines-line infographic__lines-line_third" ref="line3"></div>
          </div>
          <div class="infographic__dots">
            <div class="infographic__dots-dot" ref="dotStart"></div>
            <div class="infographic__dots-dot infographic__dots-dot_end" ref="dotEnd"></div>
            <div class="infographic__dots-dot infographic__dots-dot_point infographic__dots-dot_first" ref="dot1"></div>
            <div class="infographic__dots-dot infographic__dots-dot_point infographic__dots-dot_second" ref="dot2"></div>
            <div class="infographic__dots-dot infographic__dots-dot_point infographic__dots-dot_third" ref="dot3"></div>
          </div>
          <div class="infographic__outer-circle">
            <div class="infographic__outer-circle-circle"></div>
            <div class="infographic__outer-circle-half"></div>
            <div class="infographic__outer-circle-half" style="transform: rotate(180deg);" ref="circleProgress"></div>
          </div>
          <div class="infographic__main-circle">
            <div class="infographic__main-circle-bg" ref="circleBg"></div>
            <div class="infographic__img" ref="circleMain"></div>
          </div>
        </div>
      </div>
      <div class="three-steps__text" ref="content">
        <div class="three-steps__text-text">
          <b>Хотите стать здоровым, энергичным человеком с красивой и подтянутой фигурой?</b>
          <br><br>
          Мечта? Нет, реальность! Грамотный баланс физической нагрузки и правильного питания приведут вас быстро к фигуре мечты! Регулярные тренировки по выстроенному плану, контроль и корректировки пищевого поведения – залог вашей энергии и здоровья!
          <br><br>
          <b>Хотите узнать об этом больше?</b>
          <br><br>
          Пройдите опрос и получите фитнес-бестселлер Хайнриха Бергмюллера: «В форме за 100 дней. Тренировочная программа Хермана Майера для всех, от начинающих до профессионалов».
        </div>
        <div class="title three-steps__text-title">
          Ответьте на 4 вопроса и получите тренировочную программу БЕСПЛАТНО!
        </div>
        <div class="center-btn">
          <a href="javascript:;" class="btn-3d" @click="openPopup" v-hide-cursor>Получить тренировочную программу</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import Questions from "@/components/Questions";

export default {
  name: "ThreeSteps",
  methods: {
    openPopup() {
      this.$modals.open({
        component: Questions,
        center: true
      })
    }
  },
  mounted() {
    if (document.documentElement.clientWidth > 1250) {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.ThreeSteps,
          start: 'center bottom',
          // pin: true,
          // end: "+=500"
        },
      });
      tl.from(this.$refs.circleMain, { scale: 0 }, 0)
      tl.from(this.$refs.circleBg, { scale: 0, delay: 0.2 }, 0)
      tl.from(this.$refs.dotStart, { scale: 0 }, 1)
      tl.to(this.$refs.circleProgress, { rotate: '360deg', delay: 0.1 }, 1)
      tl.from(this.$refs.dot1, { scale: 0, delay: 0.55 }, 1)
      tl.from(this.$refs.line1, { width: 0, delay: 0.6 }, 1)
      tl.from(this.$refs.step1, { opacity: 0, delay: 0.7 }, 1)
      tl.from(this.$refs.dot2, { scale: 0, delay: 0.7 }, 1)
      tl.from(this.$refs.line2, { width: 0, delay: 0.75 }, 1)
      tl.from(this.$refs.step2, { opacity: 0, delay: 0.85 }, 1)
      tl.from(this.$refs.dot3, { scale: 0, delay: 0.85 }, 1)
      tl.from(this.$refs.line3, { width: 0, delay: 0.9 }, 1)
      tl.from(this.$refs.step3, { opacity: 0, delay: 1 }, 1)
      tl.from(this.$refs.dotEnd, { scale: 0, delay: 1.3 }, 1)
      tl.from(this.$refs.content, { opacity: 0, delay: 1.3 }, 1)
    }
  }
}
</script>
