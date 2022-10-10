<template>
  <div class="container justify-center mx-auto my-auto">
    <h1 class="font-extrabold text-3xl text-center text-blue-600 mb-8">
      로그인
    </h1>
    <ValidationObserver v-slot="{ handleSubmit }" tag="div">
      <form class="mx-auto justify-center text-center w-96 px-4 py-2 border border-blue-500 rounded-md bg-gray-100" @submit.prevent="handleSubmit(_login)">
        <input-text v-model="email" :placeholder="'이메일'" :is-require="true" :name="'이메일'" :type="'text'" />
        <input-text v-model="password" :placeholder="'비밀번호'" :is-require="true" :name="'비밀번호'" :type="'password'" />
        <button class="px-4 py-2 bg-blue-400 text-white font-bold rounded-md hover:bg-blue-500">
          Login
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import inputText from '~/components/input-text.vue'
export default {
  name: 'LoginPage',
  components: { inputText },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      login: 'user/login'
    }),
    _login () {
      this.login({ email: this.email, password: this.password })
    }
  }
}
</script>
