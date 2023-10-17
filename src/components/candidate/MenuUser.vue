<!-- <template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-1"></div>
      <div class="w-50">
        <h1>Info User</h1>


      </div>
      <div class="col col-lg-1"></div>
    </div>
  </div>
</template> -->
<template>
  <Header />

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-1"></div>
      <div class="w-50">
        <nav class="sidebar">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link :to="{ name: 'settinginfo' }" class="nav-link h4">
                Cài đặt thông tin cá nhân
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'changepass' }" class="nav-link h4">
                Đổi mật khẩu
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'followcompanies' }" class="nav-link h4">
                Công ty đã theo dõi
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'jobshire' }" class="nav-link h4">
                Việc làm đã ứng tuyển
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'creatcv' }" class="nav-link h4">
                Tạo CV
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'interviewcalendar' }" class="nav-link h4">
                Xem lịch phỏng vấn
              </router-link>
            </li>

            <li class="nav-item btn btn-danger h4">
              <!-- <router-link :to="{ name: 'settinginfo' }" class="nav-link">
          Đăng xuất
        </router-link> -->
              Đăng xuất
            </li>
          </ul>
        </nav>
      </div>
      <div class="col col-lg-1"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.sidebar .nav-link {
  font-weight: 500;
  color: var(--bs-dark);
}
.sidebar .nav-link:hover {
  background: var(--bs-light);
  color: var(--bs-primary);
}
</style>