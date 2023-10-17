<template>
  <Header/>
  <!-- <h2>jobslish</h2> -->
  <JobList />
  <Footer/>

</template>

<script>

import Header from "../../components/candidate/Header.vue";
import Footer from "../../components/candidate/Footer.vue";
import JobList from "../../components/candidate/JobList.vue";

export default {
  name: "homeView",
  components: {
    JobList,
    Header,
    Footer
    // Jobs,
  },
};  
</script>

<style>
</style>