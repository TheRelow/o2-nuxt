<template>
  <div>
    С какой целью хотели бы посещать фитнес клуб?
    <SelectComp @selected="selected" v-model="target"></SelectComp>
<!--    <input type="text" v-model="value.value" class="offer__input">-->
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
export default {
  name: "Question3",
  components: { SelectComp },
  props: ['value'],
  data: ()=>({
    target: {
      options: [
        { name: 'Похудеть' },
        { name: 'Набрать мышечную массу' },
        { name: 'Другое' },
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
