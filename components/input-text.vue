<template>
  <div class="my-4">
    <ValidationProvider v-slot="v" tag="div" :rules="rules" :name="name" class="flex flex-col">
      <div class="flex flex-row">
        <label class="text-blue-600 text-left mb-2 font-bold" :for="name">{{ label }}</label>
        <span v-if="isRequire" class="text-red-500">&#42;</span>
      </div>
      <input
        :id="name"
        v-model="val"
        :name="name"
        class="border border-blue-400 rounded-md py-1 px-3"
        :type="type"
        :placeholder="placeholder"
        @input="onInput"
      >
      <span v-if="v.errors" class="text-red-500 font-medium text-sm text-left">{{ v.errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'InputText',
  components: { ValidationProvider },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: '',
      required: false
    },
    rules: {
      type: Object,
      required: false,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    isRequire: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value () {
      this.val = this.value
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.val)
    }
  }
}
</script>

<style>

</style>
