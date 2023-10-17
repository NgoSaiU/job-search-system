<template>
  <div>
    <!-- <Header /> -->
        <router-link :to="{ name: 'jobs' }">sdf</router-link>
    <!-- <router-view /> -->
    <h2>đây là trang candidatedasgh bỏa</h2>
    <!-- <Footer /> -->
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