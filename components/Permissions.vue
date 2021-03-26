<template>
  <div class="permissions">
    <div class="wrapper wrapper_mini permissions__wrapper">
      <div class="permission" ref="perm1">
        <div class="permission__text">Широкий выбор групповых занятий для всех уровней подготовки! Более 40 занятий в неделю</div>
        <div class="permission__badge">
          <img class="permission__badge-img" :src="require('@/assets/img/yoga-pose.svg')" alt="">
          Групповые занятия
        </div>
      </div>
      <div class="permission" ref="perm2">
        <div class="permission__text">
          Зал оборудован самыми современными тренажёрами премиум-класса Life fitness и Hammer Strength.
          <br><br>
          В “O2” нет очередей к тренажерам. Ждать не придется.
        </div>
        <div class="permission__badge">
          <img class="permission__badge-img" :src="require('@/assets/img/turn-black.png')" alt="">
          Профессиональное оборудование
        </div>
      </div>
      <div class="permission" ref="perm3">
        <div class="permission__text">
          В клубе всегда комфортная температура, свежий, чистый воздух и дышится легко, благодаря мощной вентиляционной системе и максимальному вниманию к соблюдению всех санитарно-гигиенических норм
        </div>
        <div class="permission__badge">
          <img class="permission__badge-img" :src="require('@/assets/img/cooler.svg')" alt="">
          Кондиционирование  воздуха
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Permissions",
  mounted() {
    gsap.from(this.$refs.perm1, {
      scrollTrigger: {
        trigger: this.$refs.perm1,
        start: 'center bottom'
      },
      opacity: 0
    });
    gsap.from(this.$refs.perm2, {
      scrollTrigger: {
        trigger: this.$refs.perm2,
        start: 'center bottom'
      },
      opacity: 0
    });
    gsap.from(this.$refs.perm3, {
      scrollTrigger: {
        trigger: this.$refs.perm3,
        start: 'center bottom'
      },
      opacity: 0
    });
  }
}
</script>