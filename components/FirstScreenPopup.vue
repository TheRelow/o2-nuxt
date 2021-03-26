<template>
  <div>
    <div class="offer">
      <input v-model="name" type="text" class="option offer__input" :class="{'offer__input_invalid': $v.name.$dirty && !$v.name.required}" placeholder="Имя">
      <input v-model="phone" type="text" class="option offer__input" :class="{'offer__input_invalid': $v.phone.$dirty && !$v.phone.required}" placeholder="Телефон">
      <button class="offer__btn btn" @click="sendMsg">Записаться</button>
    </div>
  </div>
</template>

<script>
import Bus from "@/popup/utils/bus";
import { required } from 'vuelidate/lib/validators'
export default {
  name: "FirstScreenPopup",
  data: ()=>({
    name: null,
    phone: null
  }),
  validations: {
    name: {
      required
    },
    phone: {
      required
    },
  },
  methods: {
    closePopup() {
      Bus.$emit('close');
    },
    sendMsg() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return false
      }
      this.$store.dispatch('main/setNewMessage', {
        name: this.name,
        phone: this.phone,
        target: 'Записаться на тренировку'
      })
      this.closePopup()
    }
  }
}
</script>
