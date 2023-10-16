<template>
  <div class="frame">
    <div class="rectangle" />
    <img class="img" alt="Frame"  />
    <div class="text-wrapper">Giới thiệu</div>
    <div class="div">Liên hệ</div>
    <div class="text-wrapper-2">Chính sách bảo mật</div>
    <div class="text-wrapper-3">Điều khoản dịch vụ</div>
    <div class="text-wrapper-4">Đăng tin tuyển dụng</div>
    <div class="text-wrapper-5">Tìm kiếm hồ sơ</div>
    <div class="text-wrapper-6">HCM</div>
    <div class="text-wrapper-7">Hà Nội</div>
    <div class="text-wrapper-8">Cần Thơ</div>
    <div class="text-wrapper-9">Về chúng tôi</div>
    <p class="p">Dành cho nhà tuyển dụng</p>
    <p class="text-wrapper-10">Việc làm theo khu vực</p>
    <p class="text-wrapper-11">© 2023 | Ngô Sài Ủ - Nguyễn Tấn Trụ</p>
    <img class="logo" alt="Logo" src="..\..\assets\logo.png" />
  </div>
</template>

<script>
export default {
  name: "Frame",
};
</script>

<style >
.frame {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 1440px;
}

.frame .rectangle {
  background-color: #f3f3f3;
  height: 439px;
  position: relative;
  width: 1440px;
}

.frame .img {
  height: 36px;
  left: 1125px;
  position: absolute;
  top: 238px;
  width: 144px;
}

.frame .text-wrapper {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 115px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 140px;
  white-space: nowrap;
}

.frame .div {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 115px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 173px;
  white-space: nowrap;
}

.frame .text-wrapper-2 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 115px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 206px;
  white-space: nowrap;
}

.frame .text-wrapper-3 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 115px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 239px;
  white-space: nowrap;
}

.frame .text-wrapper-4 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 452px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 140px;
  white-space: nowrap;
}

.frame .text-wrapper-5 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 452px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 173px;
  white-space: nowrap;
}

.frame .text-wrapper-6 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 786px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 140px;
  white-space: nowrap;
}

.frame .text-wrapper-7 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 786px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 173px;
  white-space: nowrap;
}

.frame .text-wrapper-8 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 786px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 208px;
  white-space: nowrap;
}

.frame .text-wrapper-9 {
  color: var(--ajdan-black);
  font-family: "Inter-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  left: 115px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 96px;
  white-space: nowrap;
}

.frame .p {
  color: var(--ajdan-black);
  font-family: "Inter-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  left: 452px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 96px;
  white-space: nowrap;
}

.frame .text-wrapper-10 {
  color: var(--ajdan-black);
  font-family: "Inter-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  left: 786px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 94px;
  white-space: nowrap;
}

.frame .text-wrapper-11 {
  color: var(--ajdan-black);
  font-family: "Inter-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 652px;
  letter-spacing: 0;
  line-height: 18.2px;
  position: absolute;
  top: 354px;
  white-space: nowrap;
}

.frame .logo {
  height: 134px;
  left: 1083px;
  position: absolute;
  top: 95px;
  width: 228px;
}
</style>
