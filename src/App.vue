<template >
  <!-- <Temp /> -->
  <!-- <Temp1 /> -->
  <!-- <CandidateDashboard v-if = "whoUser == false"/> -->
  
    <router-view/>
  <!-- </CandidateDashboard> -->

  <!-- <SlidebarEmployer v-else /> -->
  
  <!-- <SlidebarEmployer/> -->

</template>

<script>
//v-if và v-else của template 

import Header from "./components/candidate/Header.vue";
import Footer from "./components/candidate/Footer.vue";
import CandidateDashboard from "./views/CandidateDashboard.vue";
import EmployerDashboard from "./views/EmployerDashboard";
import Temp from "./views/Temp.vue";
import Temp1 from "./views/Temp1.vue";

import SlidebarEmployer from "./views/employer/SlidebarEmployer.vue";
import Login from "./views/candidate/Login.vue";

import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    CandidateDashboard,
    SlidebarEmployer,
    EmployerDashboard,
    Temp,
    Temp1,
    Login
  },


  
  // let whoUser = ref(false),

  data() {
    return{
      whoUser : true,
    }
  }, 


  
  mounted() {
    const store = useStore();
    this.whoUser = store.state.whoUser;
  }


};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.screan {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
