<template>
  <div class="flex flex-col">
    <input-text
      v-model="postcode"
      :name="'postcode'"
      :is-require="true"
      type="text"
      :rules="{required: true}"
      placeholder="우편번호"
      :label="'우편번호'"
    />
    <button class="w-44 bg-blue-300 rounded-md px-3 py-2 text-white font-bold" @click.prevent="execDaumPostcode">
      우편번호 찾기
    </button>
    <input-text
      id="address"
      v-model="address"
      :is-require="true"
      :name="'address'"
      type="text"
      :rules="{required: true}"
      placeholder="주소"
      :label="'주소'"
    />
    <input-text
      id="extraAddress"
      v-model="detail"
      :is-require="true"
      :name="'extraAddress'"
      type="text"
      :rules="{required: true}"
      placeholder="상세주소"
      :label="'상세주소'"
    />
  </div>
</template>
<script>
import inputText from './input-text.vue'
export default {
  components: { inputText },
  data () {
    return {
      postcode: '',
      address: '',
      detail: ''
    }
  },
  watch: {
    detail () {
      this.$emit('change', { postcode: this.postcode, address: this.address, detail: this.detail })
    }
  },
  methods: {
    execDaumPostcode () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.detail !== '') {
            this.detail = ''
          }
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.detail += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.detail +=
                this.detail !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.detail !== '') {
              this.detail = `(${this.detail})`
            }
          } else {
            this.detail = ''
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode
          this.$emit('change', { postcode: this.postcode, address: this.address, detail: this.detail })
        }
      }).open()
    }
  }
}
</script>
<style></style>
