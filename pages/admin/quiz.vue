<template>
  <div>
    <h3>Quiz</h3>
    <a class="waves-effect waves-light btn" @click="updateQuiz">update messages</a>
    <table class="striped responsive-table">
      <thead>
      <tr>
        <th>Телефон</th>
        <th>Есть ли опыт</th>
        <th>Возраст</th>
        <th>Цель</th>
        <th>Время</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="mes in quiz">
        <td>
          <span class="table-phone" v-if="mes.phone && mes.phone.number">
            <img :src="require('@/assets/img/whatsapp.svg')" alt="" v-if="mes.phone.sendTo == 'WhatsApp'">
            <img :src="require('@/assets/img/telegram.svg')" alt="" v-if="mes.phone.sendTo == 'Telegram'">
            <img :src="require('@/assets/img/telephone.svg')" alt="" v-if="mes.phone.sendTo == 'Телефон'">
            {{ mes.phone.number }}
          </span>
        </td>
        <td>{{ mes.experience }}</td>
        <td>{{ mes.age }}</td>
        <td>{{ mes.target }}</td>
        <td>
          <span v-if="mes.time">
          {{ new Date(mes.time).toString().substr(0, 24) }}
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data: ()=>({
    quiz: []
  }),
  methods: {
    updateQuiz() {
      this.$store.dispatch('main/fetchQuiz')
        .then((res)=>{
          this.quiz = res
          console.log(res)
        })
    },
  },
  created() {
    this.updateQuiz()
  }
}
</script>
