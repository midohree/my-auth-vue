<template>
  <div class="home">
    <HelloWorld msg="Reset Your Password"/>
    <Login msg="hello"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login
  }
}
</script>
