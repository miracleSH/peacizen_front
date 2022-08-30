import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, digits, numeric, email, confirmed, regex } from 'vee-validate/dist/rules' // 기본룰을 들록

// limit라는 validation을 만들어주었다.
extend('limit', (value, params) => {
  const [min, max] = params
  if ((value && value.length < min) || value.length > max) {
    return `{_field_} 은(는) ${min}자 ~ ${max}자로 입력해 주세요`
  }
  return true
})

extend('password', (value, params) => {
  const regex = params[0]
  if (!regex.test(value)) {
    return '{_field_}는 최소 8자, 최소 하나의 문자 및 숫자가 포함되어야 합니다.'
  }
  return true
})

extend('max', (value, args) => {
  if (value.length > Number(args[0])) {
    return `{_field_} 은(는) ${args}자 이하로 입력해 주세요.`
  }
  return true
})
// 기존에 존재하던 required는 message만 변경
extend('required', {
  ...required,
  message: '{_field_} 은(는) 반드시 입력해야 합니다'
})

extend('required-select', {
  ...required,
  message: '{_field_} 은(는) 반드시 선택해야 합니다'
})

extend('numeric', {
  ...numeric,
  message: '{_field_} 은(는) 숫자로만 구성되어야 합니다'
})
extend('digits', {
  ...digits,
  message: '{_field_} 은(는) 11자리 여야 합니다'
})

extend('email', {
  ...email,
  message: '잘못 입력된 이메일 주소 입니다'
})

// provider 에 :rules="{ confirmed: 'provider name 명을 적어주면 된다'}"
extend('confirmed', {
  ...confirmed,
  message: '비밀번호가 일치하지 않습니다'
})

extend('regex', {
  ...regex
})

extend('phone', (value, params) => {
  const regex = params[0]
  if (!regex.test(value)) {
    return '휴대폰 번호를 정확히 입력해주세요.'
  }
  return true
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
