<template>
  <div>
    <h3>Куда отправить что-то?</h3>
    <SelectComp @selected="selected" v-model="sendTo"></SelectComp>
    <base-input phone placeholder="Телефон" :value="value.number" @input="value.number = $event" :class="{'input_invalid': $v.value.number.$dirty && (!$v.value.number.required || !$v.value.number.minLength)}"></base-input>
  </div>
</template>

<script>
import IMask from 'imask'
import SelectComp from "@/components/SelectComp";
import {required, minLength} from "vuelidate/lib/validators";

export default {
  name: "QuizPhone",
  components: { SelectComp },
  props: ['value'],
  data: ()=>({
    sendTo: {
      options: [
        { name: 'Телефон' },
        { name: 'Telegram', selected: true },
        { name: 'WhatsApp' },
      ],
      selectedNames: []
    }
  }),
  validations: {
    value: {
      number: {
        required,
        minLength: minLength(11)
      }
    }
  },
  methods: {
    updatePhoneNumber() {
      setTimeout(()=>{
        this.value.number = this.mask.unmaskedValue
      }, 0)
    },
    selected(i) {
      this.value.sendTo = i[0]
    },
    validate() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return false
      }
      return true
    }
  }
}
</script>
