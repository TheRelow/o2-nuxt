<template>
  <div class="pricing">
    <div class="wrapper wrapper__pricing">
      <div class="pricing__side">
        <div class="title">
          Цены
        </div>
        <div class="pricing__tab-list">
          <div class="pricing__tab-list-item" :class="{'active': currentTab == 0}" @click="openTab(0)">Карты</div>
          <div class="pricing__tab-list-item" :class="{'active': currentTab == 1}" @click="openTab(1)">Персональные тренировки</div>
          <div class="pricing__tab-list-item" :class="{'active': currentTab == 2}" @click="openTab(2)">Разовое посещение</div>
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
            <!--            <div class="price-block__price-info">-->
            <!--              9 990 ₽ / 6 мес.-->
            <!--            </div>-->
            <!--            <div class="price-block__price-info">-->
            <!--              3 500 ₽ / 2 мес.(для новых клиентов)-->
            <!--            </div>-->
            <!--            <div class="price-block__price-info">-->
            <!--              3 900 ₽ / 2 мес.-->
            <!--            </div>-->
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Годовая карта
          </div>
          <div class="price-block__description">
            посещение фитнес клуба без ограничений
          </div>
          <div class="price-block__description">
            групповые занятия
          </div>
          <div class="price-block__description">
            Заморозка 45 дней.
          </div>
          <button class="btn price-block__btn" @click="openPopup">
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
          <div class="price-block__description">
            посещение фитнес клуба без ограничений
          </div>
          <div class="price-block__description">
            групповые занятия
          </div>
          <div class="price-block__description">
            Заморозка 30 дней.
          </div>
          <button class="btn price-block__btn" @click="openPopup">
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
          <div class="price-block__description">
            Специальное короткое предложение для новых членов клуба
            <br><br>
            посещение фитнес клуба без ограничений
          </div>
          <div class="price-block__description">
            групповые занятия
          </div>
          <div class="price-block__description">
            Заморозки нет.
          </div>
          <button class="btn price-block__btn" @click="openPopup">
            Купить
          </button>
        </div>
<!--        <div class="pricing__main-item price-block">-->
<!--          <div class="price-block__price">-->
<!--            <div class="price-block__price-count">-->
<!--              <span class="text_acc">1600 ₽ </span>-->
<!--            </div>-->
<!--            <div class="price-block__price-text">-->
<!--              в месяц-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="price-block__divider"></div>-->
<!--          <div class="title price-block__title">-->
<!--            Студенческая карта-->
<!--          </div>-->
<!--          <div class="price-block__description">-->
<!--            неограниченное количество посещений любых тренировок клуба в течение 1 месяца c 7.00 до 17.00.-->
<!--          </div>-->
<!--          <div class="price-block__description">-->
<!--            Заморозки нет.-->
<!--          </div>-->
<!--          <div class="price-block__description">-->
<!--            Только при наличии студенческого билета-->
<!--          </div>-->
<!--          <button class="btn price-block__btn">-->
<!--            Купить-->
<!--          </button>-->
<!--        </div>-->
<!--        <div class="pricing__main-item price-block">-->
<!--          <div class="price-block__price">-->
<!--            <div class="price-block__price-count">-->
<!--              <span class="text_acc">2300 ₽</span>-->
<!--            </div>-->
<!--            <div class="price-block__price-text">-->
<!--              в месяц-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="price-block__divider"></div>-->
<!--          <div class="title price-block__title">-->
<!--            Дневная карта-->
<!--          </div>-->
<!--          <div class="price-block__description">-->
<!--            неограниченное количество посещений любых тренировок клуба в течение 1 месяца c 7.00 до 17.00.-->
<!--          </div>-->
<!--          <div class="price-block__description">-->
<!--            Заморозки нет.-->
<!--          </div>-->
<!--          <button class="btn price-block__btn">-->
<!--            Купить-->
<!--          </button>-->
<!--        </div>-->
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
          <div class="price-block__description">
            10 тренировок с персональным тренером. Срок действия услуги 2 мес. не зависимо от фактического посещения
          </div>
          <div class="price-block__description">
            Заморозки нет.
          </div>
          <button class="btn price-block__btn" @click="openPopup">
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
              програма тренировок на 1 мес
              <br>
              3 персональные тренировки
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Персональная программа тренировок и питания
          </div>
          <div class="price-block__description">
            3 (три) тренировки с персональным тренером, индивидуальная программа питания и программа тренировок. Срок действия услуги 1 мес
          </div>
          <div class="price-block__description">
            Заморозки нет.
          </div>
          <button class="btn price-block__btn" @click="openPopup">
            Купить
          </button>
        </div>
        <div class="pricing__main-item price-block">
          <div class="price-block__price">
            <div class="price-block__price-count">
              <span class="text_acc">900 ₽</span>
            </div>
            <div class="price-block__price-text">
              за тренировку
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Разовое посещение с тренером
          </div>
          <div class="price-block__description">

          </div>
          <button class="btn price-block__btn" @click="openPopup">
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
              за тренировку
            </div>
          </div>
          <div class="price-block__divider"></div>
          <div class="title price-block__title">
            Разовое посещение с персональной тренировкой
          </div>
          <div class="price-block__description">

          </div>
          <button class="btn price-block__btn" @click="openPopup">
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
          <div class="price-block__description">

          </div>
          <button class="btn price-block__btn" @click="openPopup">
            Купить
          </button>
        </div>
        <div class="pricing__main-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TrainerDetail from "@/components/TrainerDetail";

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
        component: TrainerDetail,
        center: true
      })
    }
  }
}
</script>
