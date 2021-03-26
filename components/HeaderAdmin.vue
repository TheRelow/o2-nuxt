<template>
  <nav>
    <div class="nav-wrapper wrapper">
      <router-link to="/" class="brand-logo center"><img :src="require('../assets/img/logo-horizontal-white.svg')" alt="logo o2 fitness"></router-link>
      <ul class="right hide-on-med-and-down">
        <li>
          <NuxtLink to="/admin" class="waves-effect waves-light">admin</NuxtLink>
          <a href="javascript:;" class="waves-effect waves-light" @click="logout">logout</a>
        </li>
      </ul>
      <ul class="left hide-on-med-and-down">
        <li>
          <NuxtLink to="/admin/quiz" class="waves-effect waves-light">Quiz</NuxtLink>
          <NuxtLink to="/admin/messages" class="waves-effect waves-light" @click="logout">Messages</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderAdmin",
  methods: {
    logout() {
      this.$router.push('/login')
      this.$store.dispatch('auth/logout')
    }
  },
}
</script>
