<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-1"></div>
      <div class="w-50">
        <form class="bg-light w-3 h-3" @submit.prevent="submit">
          <h1 class="h3 mb-3 mt-2 fw-normal">Vui Lòng Đăng Nhập</h1>

          <!-- Email input -->
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

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  Remember me
                </label>
              </div>
            </div>

            <div class="col">
              <!-- Simple link -->
              <a href="#!">Quên mật khẩu?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Đăng nhập
          </button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>
              Bạn chưa đăng ký ?
              <router-link :to="{ name: 'register' }">Đăng ký</router-link>
            </p>
            <p>Hoặc đăng nhập bằng:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fa-brands fa-facebook" style="color: #000000"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <!-- <i class="fab fa-google"></i> -->
              <i class="fa-brands fa-google" style="color: #000000"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fa-brands fa-github" style="color: #000000"></i>
            </button>
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
import { useStore } from "vuex";

// import Login from "../../services/Login";

export default {
  name: "Login",
  setup() {
    const data = reactive({
      username: "",
      password: "",
    });

    const router = useRouter();
    const store = useStore();

    const submit = async () => {
      // goood
      try {
        const res = await fetch("http://localhost:8080/auth/login_c", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
        });

         await store.dispatch("setAuth", true); 
        
        // showUsername = store.state.authenticated;
        // showUsername = true;
        // console.log("showUserName " + showUsername);

        const content = await res.json();

        console.log(content);
        console.log("trang thai da bat hay chua: "+ store.state.authenticated);

        // await router.push("/candidate");
        // this.$router.go(-1)
        await router.push("/");
  

      } catch (error) {
        console.log("lỗi login");
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