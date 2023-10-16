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
  <nav class="sidebar">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link :to="{ name: 'settinginfo' }" class="nav-link">
          Cài đặt thông tin cá nhân
        </router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'changepass' }" class="nav-link">
          Đổi mật khẩu
        </router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'followcompanies' }" class="nav-link">
          Công ty đã theo dõi
        </router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'jobshire' }" class="nav-link">
          Việc làm đã ứng tuyển
        </router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'creatcv' }" class="nav-link">
          Tạo CV
        </router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'interviewcalendar' }" class="nav-link">
          Xem lịch phỏng vấn
        </router-link>
      </li>

      <li class="nav-item btn btn-danger" >
        <!-- <router-link :to="{ name: 'settinginfo' }" class="nav-link">
          Đăng xuất
        </router-link> -->
        Đăng xuất 


      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
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