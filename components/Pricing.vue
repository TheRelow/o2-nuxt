<template>
  <div class="pricing">
    <div class="wrapper wrapper__pricing">
      <div class="pricing__side">
        <div class="title">
          Цены
        </div>
        <div class="pricing__tab-list">
          <div v-hide-cursor class="pricing__tab-list-item" :class="{'active': currentTab == 0}" @click="openTab(0)">Карты</div>
          <div v-hide-cursor class="pricing__tab-list-item" :class="{'active': currentTab == 1}" @click="openTab(1)">Персональные тренировки</div>
          <div v-hide-cursor class="pricing__tab-list-item" :class="{'active': currentTab == 2}" @click="openTab(2)">Разовое посещение</div>
        </div>
      </div>
      <div class="pricing__main" v-if="currentTab == 0">
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">1325 ₽</span>
            </div>
            <div class="price-block__price-text">
              в месяц
            </div>
            <div class="price-block__price-info">
              15 900 ₽ / год
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Годовая карта
          </div>
          <ul class="price-block__description">
            <li>посещение фитнес клуба без ограничений</li>
            <li>заморозка 45 дней</li>
          </ul>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">1650 ₽</span>
            </div>
            <div class="price-block__price-text">
              в месяц
            </div>
            <div class="price-block__price-info">
              9 900 ₽ / 6 месяцев
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Полугодовая карта
          </div>
          <ul class="price-block__description">
            <li>посещение фитнес клуба без ограничений</li>
            <li>заморозка 30 дней</li>
          </ul>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">1750 ₽</span>
            </div>
            <div class="price-block__price-text">
              в месяц
            </div>
            <div class="price-block__price-info">
              3 500 ₽ / 2 месяца
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Карта "легкий старт"
          </div>
          <ul class="price-block__description">
            <li>специальное короткое предложение для новых членов клуба</li>
            <li>посещение фитнес клуба без ограничений</li>
            <li>заморозки нет</li>
          </ul>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
      </div>
      <div class="pricing__main" v-if="currentTab == 1">
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">590 ₽</span>
            </div>
            <div class="price-block__price-text">
              за тренировку
            </div>
            <div class="price-block__price-info">
              5 900 ₽ / 10 тренировок
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Блок персональных тренировок
          </div>
          <ul class="price-block__description">
            <li>10 тренировок с персональным тренером</li>
          </ul>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">3 500 ₽</span>
            </div>
            <div class="price-block__price-text">
              за программу
            </div>
            <div class="price-block__price-info">
              программа питания
              <br>
              програма тренировок на 1 месяц
              <br>
              3 персональные тренировки
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Персональная программа тренировок и питания
          </div>
          <ul class="price-block__description">
            <li>3 (три) тренировки с персональным тренером, индивидуальная программа питания и программа тренировок.</li>
          </ul>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">900 ₽</span>
            </div>
            <div class="price-block__price-text">
              Разовое посещение + персональная тренировка
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Разовое посещение с тренером
          </div>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
      </div>
      <div class="pricing__main" v-if="currentTab == 2">
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">900 ₽</span>
            </div>
            <div class="price-block__price-text">
              Разовое посещение + персональная тренировка
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Разовое посещение с тренером
          </div>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">500 ₽</span>
            </div>
            <div class="price-block__price-text">
              за вход
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Разовое посещение
          </div>
          <button class="btn price-block__btn" @click="openPopup" v-hide-cursor>
            Купить
          </button>
        </div>
        <div class="pricing__main-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PricePopup from "@/components/PricePopup";

export default {
  name: "Pricing",
  data: ()=>({
    currentTab: 0,
  }),
  methods: {
    openTab(tab) {
      if (typeof tab == 'number') {
        this.currentTab = tab
      }
    },
    openPopup() {
      this.$modals.open({
        component: PricePopup,
        center: true
      })
    }
  }
}
</script>
