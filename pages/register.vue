<template>
  <div class="container justify-center mx-auto my-auto">
    <h1 class="font-extrabold text-3xl text-center text-blue-600 mb-8">
      회원가입
    </h1>
    <ValidationObserver v-slot="{ handleSubmit }" tag="div">
      <form class="mx-auto justify-center text-center w-96 px-4 py-2 border border-blue-500 rounded-md bg-gray-100" @submit.prevent="handleSubmit(submit)" @keypress.enter.prevent>
        <InputText v-model="name" :is-require="true" :name="'name'" :label="'이름'" :rules="{required: true}" />
        <InputText v-model="email" :is-require="true" :name="'email'" :label="'이메일'" :rules="{ required: true, email: 'email' }" />
        <InputText
          v-model="password"
          :is-require="true"
          :name="'password'"
          :label="'비밀번호'"
          :type="'password'"
          :rules="{ required: true, password: [ /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ] }"
        />
        <InputText
          v-model="passwordConfirm"
          :is-require="true"
          :name="'password confirmed'"
          :label="'비밀번호 확인'"
          :type="'password'"
          :rules="{ required: true, confirmed: 'password'}"
        />
        <AdressSearch @change="setAddress" />
        <InputText
          v-model="phone"
          :is-require="true"
          :name="'phone'"
          :label="'휴대전화 번호'"
          :type="'phone'"
          :rules="{required: true, phone: [/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/]}"
        />
        <button class="px-4 py-2 bg-blue-500 text-white font-bold rounded-md">
          회원가입
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import InputText from '~/components/input-text.vue'
import AdressSearch from '~/components/adressSearch.vue'
export default {
  name: 'RegisterPage',
  components: { InputText, AdressSearch },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      address: {
        postcode: '',
        address: '',
        detail: ''
      },
      phone: ''
    }
  },
  methods: {
    setAddress (value) {
      console.log(value)
      this.address = value
    },
    submit () {
      this.$axios.post('/api/user/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address,
        phone: this.phone
      })
    }
  }
}
</script>
