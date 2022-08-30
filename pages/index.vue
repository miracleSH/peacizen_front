<template>
  <div>
    <h1>
      메인페이지
    </h1>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  methods: {
    test () {
      this.$axios.get('/api')
    }
  }
}
</script>
