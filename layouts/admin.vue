<template>
  <div id="app" class="admin-layout">
    <HeaderAdmin></HeaderAdmin>
    <div class="wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "~/components/HeaderAdmin";
export default {
  components: {
    HeaderAdmin
  },
  mounted() {
    require('materialize-css/dist/js/materialize.min.js')
  }
}
</script>

<style lang="scss">
  .admin-layout {
    @import '~materialize-css/sass/materialize.scss';
    nav .brand-logo {
      display: flex;
      align-items: center;
      height: 64px;
      img {
        height: 50px;
      }
    }
  }
</style>
