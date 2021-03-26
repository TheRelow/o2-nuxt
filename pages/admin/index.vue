<template>
  <div>
    <h3>Admin page</h3>
    <a class="waves-effect waves-light btn" @click="updateMessages">update messages</a>
    <table class="striped responsive-table">
      <thead>
      <tr>
        <th>Имя</th>
        <th>Телефон</th>
        <th>Цель</th>
        <th>Время</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="mes in messages">
        <td>{{ mes.name }}</td>
        <td>{{ mes.phone }}</td>
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
    messages: [],
    quiz: []
  }),
  methods: {
    updateMessages() {
      this.$store.dispatch('main/fetchMessages')
        .then((res)=>{
          this.messages = res
          console.log(res)
        })
    },
    updateQuiz() {
      this.$store.dispatch('main/fetchQuiz')
        .then((res)=>{
          this.quiz = res
          console.log(res)
        })
    },
  },
  created() {
    this.updateMessages()
    this.updateQuiz()
  }
}
</script>
