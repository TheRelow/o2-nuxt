<template>
  <input class="option offer__input" type="text" v-model="input" ref="input">
</template>

<script>
import IMask from 'imask'

export default {
  props: ['value','phone'],
  data: ()=>({
    input: '',
    isPhone: false,
    IMask: false,
    mask: false,
  }),
  methods: {
    updatePhoneNumber() {
      setTimeout(()=>{
        this.$emit('input', this.mask.unmaskedValue)
      }, 0)
    },
    updateInput() {
      this.$emit('input', this.input)
    }
  },
  watch: {
    input() {
      if (this.isPhone) {
        this.updatePhoneNumber()
      } else {
        this.updateInput()
      }
    }
  },
  created() {
    if (typeof this.phone !== "undefined") {
      this.isPhone = true
    }
  },
  mounted() {
    if (this.isPhone) {
      this.mask = IMask(this.$refs.input, {
        mask: '+{7} 000 000-00-00',
        lazy: false
      });
    }
  },
}
</script>

<style lang="scss">
@import "~assets/styles/_mixins.scss";
@import "~assets/styles/_vars.scss";
.input_invalid {
  border-color: $err;
}
</style>
