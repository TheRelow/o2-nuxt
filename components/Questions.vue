<template>
  <div class="questions">
    <div class="questions__main">
      Вопрос {{ step + 1 }} из {{ totalSteps + 1 }}
      <div class="questions__current-question">
        <Question1 v-if="step == 0" @experience="experienceChoose"></Question1>
        <Question2 v-if="step == 1" v-model="age"></Question2>
        <Question3 v-if="step == 2" v-model="target"></Question3>
        <QuizPhone v-if="step == 3" v-model="phone" ref="quizPhone"></QuizPhone>
      </div>
      <div class="questions__controls">
        <div class="questions__back" @click="prevStep" v-if="step != 0"></div>
        <div class="btn-3d" @click="nextStep" v-if="step != totalSteps">
          Далее
        </div>
        <div class="btn-3d questions__btn" @click="sendData" v-if="step == totalSteps">
          Получить тренировочную программу
        </div>
      </div>
    </div>
    <div class="questions__side">

    </div>
  </div>
</template>

<script>
import Question1 from "@/components/Question1";
import Question2 from "@/components/Question2";
import Question3 from "@/components/Question3";
import QuizPhone from "@/components/QuizPhone";
import Bus from "@/popup/utils/bus";

export default {
  name: "questions",
  components: {
    Question1, Question2, Question3, QuizPhone
  },
  data: ()=>({
    experience: null,
    step: 0,
    totalSteps: 3,
    age: {
      value: null
    },
    target: {
      value: ''
    },
    phone: {
      sendTo: null,
      number: null
    }
  }),
  methods: {
    experienceChoose(e) {
      this.experience = e
      this.nextStep()
    },
    toStep(s) {
      if (this.totalSteps < s && s > -1) {
        this.step = s
      } else if (s < 0) {
        this.step = 0
      } else {
        this.step = this.totalSteps
      }
    },
    nextStep() {
      if (this.step < this.totalSteps) {
        this.step++
      }
    },
    prevStep() {
      if (this.step > 0) {
        this.step--
      }
    },
    sendData() {
      if (this.$refs.quizPhone.validate()) {
        this.$store.dispatch('main/setNewQuiz', {
          experience: this.experience,
          age: this.age.value,
          target: this.target.value,
          phone: {
            sendTo: this.phone.sendTo,
            number: this.phone.number,
          }
        })
        this.closePopup()
      }
    },
    closePopup() {
      Bus.$emit('close');
    },
  }
}
</script>
