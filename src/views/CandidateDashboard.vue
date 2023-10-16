<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/candidate/Header.vue";
import Footer from "../components/candidate/Footer.vue";
export default {
  name: "CandidateDashboard",
  components: {
    Header,
    Footer,
  },
  // onmounted( ) {
  //   this.$router.push({name:'home'})
  // }
}
</script>

<style>
</style>