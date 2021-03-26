<template>
  <div>
    Занимались ли вы фитнесом ранее?
    <div class="questions__btns">
      <div class="btn-3d btn-3d_sm btn-3d_ok" @click="$emit('experience', true)">
        Да
      </div>
      <div class="btn-3d btn-3d_sm btn-3d_error" @click="$emit('experience', false)">
        Нет
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question1",
}
</script>
