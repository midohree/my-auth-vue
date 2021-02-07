<template>
  <div class="reset-password">
    <HelloWorld msg="인증코드를 전송해주세요."/>
    <RequestAuthForm />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import RequestAuthForm from '@/components/RequestAuthForm.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    RequestAuthForm
  }
}
</script>
