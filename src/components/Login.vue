<template>
  <div class="login">
    Login
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
</style>
