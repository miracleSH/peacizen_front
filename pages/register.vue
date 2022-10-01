<template>
  <div class="container justify-center mx-auto my-auto">
    <h1 class="font-extrabold text-3xl text-center text-blue-600 mb-8">
      회원가입
    </h1>
    <ValidationObserver v-slot="{ handleSubmit }" tag="div">
      <form
        class="mx-auto justify-center text-center w-96 px-4 py-2 border border-blue-500 rounded-md bg-gray-100"
        @submit.prevent="handleSubmit(submit)"
        @keypress.enter.prevent
      >
        <InputText
          v-model="name"
          :is-require="true"
          :name="'이름'"
          :placeholder="'이름'"
          :rules="{ required: true }"
        >
          <template #icon>
            <div
              class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
            >
              <svg
                id="Layer_1"
                enable-background="new 0 0 32 32"
                height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                class="h-6 w-6"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <polyline
                    fill="none"
                    points="   649,137.999 675,137.999 675,155.999 661,155.999  "
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                  <polyline
                    fill="none"
                    points="   653,155.999 649,155.999 649,141.999  "
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                  <polyline
                    fill="none"
                    points="   661,156 653,162 653,156  "
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </g>
                <path
                  d="M21.947,16.332C23.219,14.915,24,13.049,24,11c0-4.411-3.589-8-8-8s-8,3.589-8,8s3.589,8,8,8  c1.555,0,3.003-0.453,4.233-1.224c4.35,1.639,7.345,5.62,7.726,10.224H4.042c0.259-3.099,1.713-5.989,4.078-8.051  c0.417-0.363,0.46-0.994,0.097-1.411c-0.362-0.416-0.994-0.46-1.411-0.097C3.751,21.103,2,24.951,2,29c0,0.553,0.448,1,1,1h26  c0.553,0,1-0.447,1-1C30,23.514,26.82,18.615,21.947,16.332z M10,11c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S10,14.309,10,11z  "
                />
              </svg>
            </div>
          </template>
        </InputText>
        <InputText
          v-model="email"
          :is-require="true"
          :name="'이메일'"
          :placeholder="'이메일'"
          :rules="{ required: true, email: 'email' }"
        >
          <template #icon>
            <div
              class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
            >
              <svg
                id="Livello_1"
                data-name="Livello 1"
                viewBox="0 0 128 128"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path
                  d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z"
                />
                <path
                  d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z"
                />
              </svg>
            </div>
          </template>
        </InputText>
        <InputText
          v-model="password"
          :is-require="true"
          :name="'비밀번호'"
          :type="'password'"
          :placeholder="'비밀번호'"
          :rules="{
            required: true,
            password: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/],
          }"
        >
          <template #icon>
            <div
              class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <title />
                <path
                  d="M16,9.5V6A4,4,0,0,0,8,6V9.5A2.5,2.5,0,0,0,5.5,12v7A2.5,2.5,0,0,0,8,21.5h8A2.5,2.5,0,0,0,18.5,19V12A2.5,2.5,0,0,0,16,9.5Zm-3,7.22V17a1,1,0,0,1-2,0v-.28A2,2,0,0,1,10,15a2,2,0,0,1,4,0A2,2,0,0,1,13,16.72ZM14,9.5H10V6a2,2,0,0,1,4,0Z"
                  fill="#464646"
                />
              </svg>
            </div>
          </template>
        </InputText>
        <InputText
          v-model="passwordConfirm"
          :is-require="true"
          :name="'비밀번호 확인'"
          :placeholder="'비밀번호 확인'"
          :type="'password'"
          :rules="{ required: true, confirmed: '비밀번호 확인' }"
        >
          <template #icon>
            <div
              class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <title />
                <path
                  d="M16,9.5V6A4,4,0,0,0,8,6V9.5A2.5,2.5,0,0,0,5.5,12v7A2.5,2.5,0,0,0,8,21.5h8A2.5,2.5,0,0,0,18.5,19V12A2.5,2.5,0,0,0,16,9.5Zm-3,7.22V17a1,1,0,0,1-2,0v-.28A2,2,0,0,1,10,15a2,2,0,0,1,4,0A2,2,0,0,1,13,16.72ZM14,9.5H10V6a2,2,0,0,1,4,0Z"
                  fill="#464646"
                />
              </svg>
            </div>
          </template>
        </InputText>
        <InputText
          v-model="phone"
          :is-require="true"
          :name="'휴대폰 번호'"
          :placeholder="'휴대폰 번호'"
          :type="'phone'"
          :rules="{
            required: true,
            phone: [/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/],
          }"
        >
          <template #icon>
            <div
              class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
            >
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <path
                  d="M31 2h-16c-2.76 0-5 2.24-5 5v34c0 2.76 2.24 5 5 5h16c2.76 0 5-2.24 5-5v-34c0-2.76-2.24-5-5-5zm-8 42c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-8h-18v-28h18v28z"
                />
                <path d="M0 0h48v48h-48z" fill="none" />
              </svg>
            </div>
          </template>
        </InputText>
        <AdressSearch @change="setAddress" />
        <div class="mt-5">
          <button class="px-4 py-2 bg-blue-400 text-white font-bold rounded-md hover:bg-blue-500">
            회원가입
          </button>
        </div>
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
      this.address = value
    },
    submit () {
      this.$axios.post('/api/user/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address,
        phone: this.phone
      }).then((_res) => {
        console.log(_res)
      }).catch((_err) => {
        console.log(_err)
      })
    }
  }
}
</script>
