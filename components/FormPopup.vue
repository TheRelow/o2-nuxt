<template>
  <div>
    <div class="offer">
      <input v-model="name" type="text" class="option offer__input" :class="{'input_invalid': $v.name.$dirty && !$v.name.required}" placeholder="Имя">
      <base-input phone placeholder="Телефон" :value="phone" @input="phone = $event" :class="{'input_invalid': $v.phone.$dirty && (!$v.phone.required || !$v.phone.minLength)}"></base-input>
      <button class="offer__btn btn" @click="sendMsg">Записаться</button>
    </div>
  </div>
</template>

<script>
import Bus from "@/popup/utils/bus";
import {minLength, required} from 'vuelidate/lib/validators'
export default {
  name: "FirstScreenPopup",
  data: ()=>({
    name: null,
    phone: null
  }),
  props: {
    where: {
      default: 'Не указано'
    }
  },
  validations: {
    name: {
      required
    },
    phone: {
      required,
      minLength: minLength(11)
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
        target: 'Записаться на тренировку',
        where: this.where
      })
      this.closePopup()
    }
  }
}
</script>
