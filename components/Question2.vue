<template>
  <div>
    Укажите ваш возраст
    <SelectComp @selected="selected" v-model="age"></SelectComp>
<!--    <input type="text" v-model="value.value" class="offer__input">-->
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
export default {
  name: "Question2",
  components: { SelectComp },
  props: ['value'],
  data: ()=>({
    age: {
      options: [
        { name: 'До 18' },
        { name: '18-25' },
        { name: '26-40' },
        { name: '40+' },
      ],
      selectedNames: []
    }
  }),
  methods: {
    selected(i) {
      this.value.value = i[0]
    }
  }
}
</script>
