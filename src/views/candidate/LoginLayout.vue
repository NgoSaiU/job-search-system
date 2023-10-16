<template>
    <h1>Login layout</h1>
    <router-view/>
    
  
</template>

<script>

import Login from "../../views/candidate/Login.vue";
export default {
    name: "LoginLayout",
    components: {
        Login,
    }

}
</script>

<style>

</style>