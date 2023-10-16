<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-1"></div>
      <div class="w-50">
        <form class="bg-light w-3 h-3" @submit.prevent="submit">
          <h1 class="h3 mb-3 mt-2 fw-normal">Đăng ký tài khoản</h1>

          <!-- Username input -->
          <div class="form-outline mb-4">
            <input
              v-model="data.username"
              type="text"
              id="form2Example1"
              class="form-control ml-2 mr-2"
              placeholder="Username"
            />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              v-model="data.password"
              type="password"
              id="form2Example2"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <!-- Comfirm Password input -->
          <!-- <div class="form-outline mb-4">
            <input
              v-model="data.confirmPassword"
              type="password"
              id="form2Example3"
              class="form-control"
              placeholder="Comfirm Password"
            />
          </div> -->
          <!-- first name -->
          <div class="form-outline mb-4">
            <input
              v-model="data.first_name"
              type="text"
              id="form2Example4"
              class="form-control"
              placeholder="First name"
            />
          </div>
          <!-- last name -->
          <div class="form-outline mb-4">
            <input
              v-model="data.last_name"
              type="text"
              id="form2Example5"
              class="form-control"
              placeholder="Last name"
            />
          </div>
          <!-- emmail -->
          <div class="form-outline mb-4">
            <input
              v-model="data.email"
              type="email"
              id="form2Example6"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <!-- date of birth -->
          <div class="form-outline mb-4">
            <input
              v-model="data.day_of_birth"
              type="date"
              id="form2Example7"
              class="form-control"
              placeholder="Date of birth"
            />
          </div>
          <!-- number phone -->
          <div class="form-outline mb-4">
            <input
              v-model="data.phone"
              type="text"
              id="form2Example8"
              class="form-control"
              placeholder="Number phone"
            />
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Đăng ký
          </button>

          <div class="text-center">
            <p>
              Bạn đã có tài khoản ?
              <router-link :to="{ name: 'login' }">Đăng nhập</router-link>
            </p>
          </div>
        </form>
      </div>
      <div class="col col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

// import Login from "../../services/Login";

export default {
  name: "Login",
  setup() {
    const data = reactive({
      username: "",
      password: "",
      // confirmPassword: "",
      first_name: "",
      last_name: "",
      email: "",
      day_of_birth: "",
      phone: "",
    });

    const router = useRouter();

    //chưa xong
    const submit = async () => {
      try {
        // const res = await fetch("http://localhost:8080/api/candidates/", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   // credentials: "include",
        //   body: JSON.stringify(data),

        const res =  await fetch("http://localhost:8080/api/candidates", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        //   await axios.post('http://localhost:8080/api/candidates/',
        //   JSON.stringify({
        //       data
        //   })
        //   ).then(response => {
        //       console.log(response.data)
        // }).catch(err => console.log(err))


        console.log(res)

        await router.push("/login");
      } catch (error) {
        console.log("loixo khacs");
        console.log(error);
      }
    };

    return {
      data,

      submit,
    };
  },
};
</script>

<style scoped>
</style>