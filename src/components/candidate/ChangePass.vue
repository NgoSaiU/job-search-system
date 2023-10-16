<template>
  <h1>Đổi mật khẩu</h1>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-1"></div>
      <div class="w-50">
        <!-- <form class="bg-light w-3 h-3" @submit.prevent="submit"> -->
        <form class="row g-4 center" @submit.prevent="updateInfo">

          <div class="col-md-2"></div>
          <div class="col-md-8">
            <label for="inputPassword4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputPassword4" v-model="userInfo.email"/>
          </div>
          <div class="col-md-2"></div>

          <div class="col-md-2"></div>
          <div class="col-md-8">
            <label for="inputEmail4" class="form-label">Mật khẩu hệ thống</label>
            <input type="text" class="form-control" id="inputEmail4" v-model="userInfo.first_name" />
          </div>
          <div class="col-md-2"></div>

          <div class="col-md-2"></div>
          <div class="col-md-8">
            <label for="inputPassword4" class="form-label">Nhập mật khẩu mới</label>
            <input type="text" class="form-control" id="inputPassword4" v-model="userInfo.last_name"/>
          </div>
          <div class="col-md-2"></div>

          <div class="col-md-2"></div>
          <div class="col-md-8">
            <label for="inputEmail4" class="form-label">Xác thực mật khẩu</label>
            <input type="text" class="form-control" id="inputEmail4" v-model="userInfo.phone"/>
          </div>
          <div class="col-md-2"></div>

          

          <!-- <div class="col-6">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div> -->

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
        <!-- </form> -->
      </div>
      <div class="col col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {

      userInfo: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
      },

      idUser: '',
    }


  },
  mounted() {
     this.getInfo();


  },
  methods: {
    async getInfo() {
       try {
        const response = await axios.get("http://localhost:8080/api/candidates/");
        this.userInfo.first_name = response.data.first_name;
        this.userInfo.last_name = response.data.last_name;
        this.userInfo.phone = response.data.phone;
        this.userInfo.email = response.data.email;
        this.idUser = response.data._id;

        console.log("Thông tin người dùng")
        console.log(this.userInfo);
        console.log("ID người dùng")
        console.log(this.idUser);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async updateInfo() {
       try {
        const response = await axios.put("http://localhost:8080/api/candidates/" + this.idUser, 
        JSON.stringify({
            // userInfo,
            userInfo: this.userInfo,
        }));
        console.log("cap nhat user thanh cong");

      } catch (error) {
        console.error("Loi cap nhat user:", error);
        
      }

    }
  }


};
</script>

<style >
</style>