<template>
  <div class="">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
export default {
  name: 'DefaultPage',
  components: { Header, Footer }
}
</script>

<style>

</style>
