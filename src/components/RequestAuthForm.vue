<template>
  <div>
    <div>
      <div class="alert-message" v-if="statusMessage"> <!-- errorState가 있으면 표시한다 -->
        <p>{{ statusMessage }}</p>
      </div>
    </div>
    <form @submit.prevent="onSubmit" id="form">
        <input name="email" placeholder="Enter your email" v-model="email">
        <button type="submit">인증 코드 받기</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RequestAuthForm',
  data: () => ({
    email: ''
  }),
  methods: {
    ...mapActions(['requestAuthCode']),
    async onSubmit () {
      console.log(this.email)
      try {
        let result = await this.requestAuthCode({ email: this.email })
        console.log(result, 'result in Form comp')

        if (result) {
          alert(result.message)
          this.goToPages()
        }
      } catch (err) {
        console.log(err)
      }
    },
    goToPages () {
      this.$router.push({
        name: 'VerifyAuthCode'
      })
    }
  },
  computed: {
    ...mapGetters({
      statusMessage: 'getStatusMessage'
    })
  }
}
</script>

<style scoped>
.alert-message {
  color: red;
}
</style>
