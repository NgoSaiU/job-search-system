<template>

    <div class=" container page-wrapper bg-dark p-t-10 p-b-50">
      <div class="wrapper wrapper--w900">
        <div class="card card-6">
          <div class="card-heading">
            <h2 class="title">Đăng tin tuyển dụng</h2>
          </div>
          <div class="card-body">
            <form method="POST">
              <div class="form-row">
                <div class="name">Tiêu đề</div>
                <div class="value">
                  <input class="input--style-6" type="text" name="full_name" />
                </div>
              </div>

              <div class="form-row">
                <div class="name">Ngành nghề & Lĩnh vực</div>
                <div class="value">
                  <select class="form-select" aria-label="Default select example">
                      <option value="1">Bao bì/In ấn/Dán nhãn</option>
                      <option value="2">Bán lẽ/Bán sỉ</option>
                      <option value="3">Bảo hiểm</option>
                      <option value="4">Bất động sản/Cho thuê</option>
                      <option value="5">Chuỗi cung ứng</option>
                      <option value="6">Chính phủ</option>
                      <option value="7">Chứng khoán</option>
                      <option value="8">Cung cấp nhân lực</option>
                      <option value="9">Cơ khí/Máy móc/Thiết bị công nghiệp</option>
                      <option value="10">Dược phẩm</option>
                      <option value="11">Dệt may/May mặc/Giày dép</option>
                      <option value="12">Dịch vụ Y tế/Chăm sóc sức khỏe</option>
                      <option value="13">Dịch vụ kho bãi/</option>
                      <option value="14">Dịch vụ lưu trú/Nhà hàng/Khách sạn/Du lịch</option>
                      <option value="15">Dịch vụ môi trường/Chất thải</option>
                      <option value="16">Giáo dục/Đào Tạo</option>
                      <option value="17">Hóa chất/Hóa sinh</option>
                      <option value="18">Hàng tiêu dùng</option>
                      <option value="19">Hậu cần/Giao nhận</option>
                      <option value="20">Hệ thống CNTT & Thiết bị</option>
                      <option value="21">Khai khoáng/Dầu khí</option>
                      <option value="22">Khác</option>
                      <option value="23">Kiến trúc/Thiết kế nội thất</option>
                      <option value="24">Luật/Dịch vụ pháp lý</option>
                      <option value="25">Nghệ thuật/Giải trí</option>
                      <option value="26">Ngân hàng</option>
                      <option value="27">Nhập khẩu/Xuất khẩu</option>
                      <option value="28">Nông nghiệp</option>
                      <option value="29">Phần mềm CNTT/Dịch vụ Phần mềm</option>
                      <option value="30">Sản xuất</option>
                      <option value="31">Thú y</option>
                      <option value="32">Thương mại điện tử</option>
                      <option value="33">Tài chính</option>
                      <option value="35">Kế toán/Kiểm toán</option>
                      <option value="36">Kế toán/Kiểm toán</option>
                      <option selected></option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Số lượng cần tuyển</div>
                <div class="value">
                  <input
                    class="input--style-6"
                    type="number"
                    name="full_name"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="name">Loại công việc</div>
                <div class="value">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Ấn để chọn loại hình công việc</option>
                    <option value="">Toàn thời gian</option>
                    <option value="2">Bán thời gian</option>
                    <option value="3">Thực tập</option>
                    <option value="4">Việc làm online</option>
                    <option value="5">Nghề tự do</option>
                    <option value="6">Hợp đồng thời vụ</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Giới tính</div>
                <div class="value">
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Ấn để chọn giới tính cần tuyển</option>
                    <option value="">Nam và Nữ</option>
                    <option value="2">Nam</option>
                    <option value="3">Nữ</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Cấp bậc</div>
                <div class="value">
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Thực tập sinh/Sinh viên</option>
                        <option value="2">Mới tốt nghiệp</option>
                        <option value="3">Nhân viên</option>
                        <option value="4">Trưởng phòng</option>
                        <option value="5">Giám đốc và cấp cao hơn</option>
                        <option selected></option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Kinh nghiệm</div>
                <div class="value">
                   <select class="form-select" aria-label="Default select example">
                        <option value="1">Chưa có kinh nghiệm</option>
                        <option value="2">Dưới 1 năm</option>
                        <option value="3">1 năm</option>
                        <option value="3">2 năm</option>
                        <option value="3">3 năm</option>
                        <option value="3">4 năm</option>
                        <option value="4">5 năm</option>
                        <option value="5">Trên 5 năm</option>
                        <option selected></option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Mức lương</div>
                <div class="value">
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Dưới 10 triệu</option>
                        <option value="2">10 - 15 triệu</option>
                        <option value="3">15 - 20 triệu</option>
                        <option value="4">20 - 25 triệu</option>
                        <option value="4">25 triệu trở lên</option>
                        <option selected></option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Khu vực làm việc</div>
                <div class="value">
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Hà Nội</option>
                        <option value="2">Hồ Chí Minh</option>
                        <option value="3">Đà Nẵng</option>
                        <option selected></option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Địa chỉ cụ thể</div>
                <div class="value">
                  <input class="input--style-6" type="text" name="full_name" />
                </div>
              </div>

              <div class="form-row">
                <div class="name">Mô tả công việc</div>
                <div class="value">
                  <div class="input-group">
                    <textarea
                      class="textarea--style-6"
                      name="message"
                      placeholder="Message sent to the employer"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Yêu cầu</div>
                <div class="value">
                  <div class="input-group">
                    <textarea
                      class="textarea--style-6"
                      name="message"
                      placeholder="Message sent to the employer"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Quyền lợi</div>
                <div class="value">
                  <div class="input-group">
                    <textarea
                      class="textarea--style-6"
                      name="message"
                      placeholder="Message sent to the employer"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Hạn chót nhận CV</div>
                <div class="value">
                  <input class="input--style-6" type="date" name="full_name" />
                </div>
              </div>

              <!-- <div class="form-row">
                <div class="name">Email address</div>
                <div class="value">
                  <div class="input-group">
                    <input
                      class="input--style-6"
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </div> -->

              <!-- <div class="form-row">
                <div class="name">Upload CV</div>
                <div class="value">
                  <div class="input-group js-input-file">
                    <input
                      class="input-file"
                      type="file"
                      name="file_cv"
                      id="file"
                    />
                    <label class="label--file" for="file">Choose file</label>
                    <span class="input-file__info">No file chosen</span>
                  </div>
                  <div class="label--desc">
                    Upload your CV/Resume or any other relevant file. Max file
                    size 50 MB
                  </div>
                </div>
              </div> -->

            </form>
          </div>
          <div class="card-footer">
            <button class="btn btn--radius-2 btn--blue-2" type="submit">
              Đăng tin tuyển dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {

  
};
</script>

<style >
/* ==========================================================================
   #FONT
   ========================================================================== */
.font-robo {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
}

.font-poppins {
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
}

.font-opensans {
  font-family: "Open Sans", "Arial", "Helvetica Neue", sans-serif;
}

/* ==========================================================================
   #GRID
   ========================================================================== */
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.row .col-2:last-child .input-group-desc {
  margin-bottom: 0;
}

.row-space {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.row-refine {
  margin: 0 -15px;
}

.row-refine .col-3 .input-group-desc,
.row-refine .col-9 .input-group-desc {
  margin-bottom: 0;
}

.col-2 {
  width: -webkit-calc((100% - 30px) / 2);
  width: -moz-calc((100% - 30px) / 2);
  width: calc((100% - 30px) / 2);
}

@media (max-width: 767px) {
  .col-2 {
    width: 100%;
  }
}

.form-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 24px 55px;
  border-bottom: 1px solid #e5e5e5;
}

.form-row .name {
  width: 188px;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  margin-top: 11px;
}

.form-row .value {
  width: -webkit-calc(100% - 188px);
  width: -moz-calc(100% - 188px);
  width: calc(100% - 188px);
}

@media (max-width: 767px) {
  .form-row {
    display: block;
    padding: 24px 30px;
  }
  .form-row .name,
  .form-row .value {
    display: block;
    width: 100%;
  }
  .form-row .name {
    margin-top: 0;
    margin-bottom: 12px;
  }
}

/* ==========================================================================
   #BOX-SIZING
   ========================================================================== */
/**
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 */
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

/* ==========================================================================
   #RESET
   ========================================================================== */
/**
 * A very simple reset that sits on top of Normalize.css.
 */
body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
dd,
ol,
ul,
figure,
hr,
fieldset,
legend {
  margin: 0;
  padding: 0;
}

/**
 * Remove trailing margins from nested lists.
 */
li > ol,
li > ul {
  margin-bottom: 0;
}

/**
 * Remove default table spacing.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**
 * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`
 *    on fieldsets.
 */
fieldset {
  min-width: 0;
  /* [1] */
  border: 0;
}

button {
  outline: none;
  background: none;
  border: none;
}

/* ==========================================================================
   #PAGE WRAPPER
   ========================================================================== */
.page-wrapper {
  min-height: 100vh;
}

body {
  font-family: "Open Sans", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 15px;
}

h6 {
  font-size: 13px;
}

/* ==========================================================================
   #BACKGROUND
   ========================================================================== */
.bg-blue {
  background: #2c6ed5;
}

.bg-red {
  background: #fa4251;
}

.bg-dark {
  background: #1a1a1a;
}

.bg-gra-01 {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#fbc2eb),
    to(#a18cd1)
  );
  background: -webkit-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);
  background: -moz-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);
  background: -o-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);
  background: linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%);
}

.bg-gra-02 {
  background: -webkit-gradient(
    linear,
    left bottom,
    right top,
    from(#fc2c77),
    to(#6c4079)
  );
  background: -webkit-linear-gradient(bottom left, #fc2c77 0%, #6c4079 100%);
  background: -moz-linear-gradient(bottom left, #fc2c77 0%, #6c4079 100%);
  background: -o-linear-gradient(bottom left, #fc2c77 0%, #6c4079 100%);
  background: linear-gradient(to top right, #fc2c77 0%, #6c4079 100%);
}

.bg-gra-03 {
  background: -webkit-gradient(
    linear,
    left bottom,
    right top,
    from(#08aeea),
    to(#b721ff)
  );
  background: -webkit-linear-gradient(bottom left, #08aeea 0%, #b721ff 100%);
  background: -moz-linear-gradient(bottom left, #08aeea 0%, #b721ff 100%);
  background: -o-linear-gradient(bottom left, #08aeea 0%, #b721ff 100%);
  background: linear-gradient(to top right, #08aeea 0%, #b721ff 100%);
}

/* ==========================================================================
   #SPACING
   ========================================================================== */
.p-t-100 {
  padding-top: 100px;
}

.p-t-130 {
  padding-top: 130px;
}

.p-t-180 {
  padding-top: 180px;
}

.p-t-45 {
  padding-top: 45px;
}

.p-t-20 {
  padding-top: 20px;
}

.p-t-15 {
  padding-top: 15px;
}

.p-t-10 {
  padding-top: 10px;
}

.p-t-30 {
  padding-top: 30px;
}

.p-b-100 {
  padding-bottom: 100px;
}

.p-b-50 {
  padding-bottom: 50px;
}

.m-r-45 {
  margin-right: 45px;
}

.m-r-55 {
  margin-right: 55px;
}

.m-b-55 {
  margin-bottom: 55px;
}

/* ==========================================================================
   #WRAPPER
   ========================================================================== */
.wrapper {
  margin: 0 auto;
}

.wrapper--w960 {
  max-width: 960px;
}

.wrapper--w900 {
  max-width: 900px;
}

.wrapper--w790 {
  max-width: 790px;
}

.wrapper--w780 {
  max-width: 780px;
}

.wrapper--w680 {
  max-width: 680px;
}

/* ==========================================================================
   #BUTTON
   ========================================================================== */
.btn {
  display: inline-block;
  line-height: 50px;
  padding: 0 30px;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 700;
  color: #fff;
  font-family: inherit;
}

.btn--radius {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn--radius-2 {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.btn--pill {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.btn--green {
  background: #57b846;
}

.btn--green:hover {
  background: #4dae3c;
}

.btn--blue {
  background: #4272d7;
}

.btn--blue:hover {
  background: #3868cd;
}

.btn--blue-2 {
  background: #2c6ed5;
}

.btn--blue-2:hover {
  background: #185ac1;
}

.btn--red {
  background: #ff4b5a;
}

.btn--red:hover {
  background: #eb3746;
}

/* ==========================================================================
   #DATE PICKER
   ========================================================================== */
td.active {
  background-color: #2c6ed5;
}

input[type="date" i] {
  padding: 14px;
}

.table-condensed td,
.table-condensed th {
  font-size: 14px;
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.daterangepicker td {
  width: 40px;
  height: 30px;
}

.daterangepicker {
  border: none;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  display: none;
  border: 1px solid #e0e0e0;
  margin-top: 5px;
}

.daterangepicker::after,
.daterangepicker::before {
  display: none;
}

.daterangepicker thead tr th {
  padding: 10px 0;
}

.daterangepicker .table-condensed th select {
  border: 1px solid #ccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  outline: none;
}

/* ==========================================================================
   #FORM
   ========================================================================== */
input,
textarea {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
}

textarea {
  resize: none;
}

.input-group {
  position: relative;
  margin: 0;
}

.input--style-6,
.textarea--style-6 {
  background: transparent;
  line-height: 38px;
  border: 1px solid #cccccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #666;
  font-size: 15px;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  padding: 0 20px;
}

.input--style-6::-webkit-input-placeholder,
.textarea--style-6::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #999;
}

.input--style-6:-moz-placeholder,
.textarea--style-6:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999;
  opacity: 1;
}

.input--style-6::-moz-placeholder,
.textarea--style-6::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999;
  opacity: 1;
}

.input--style-6:-ms-input-placeholder,
.textarea--style-6:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #999;
}

.input--style-6:-ms-input-placeholder,
.textarea--style-6:-ms-input-placeholder {
  /* Microsoft Edge */
  color: #999;
}

.input--style-6:focus,
.textarea--style-6:focus {
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  -webkit-transform: translateY(-3px);
  -moz-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  -o-transform: translateY(-3px);
  transform: translateY(-3px);
}

.textarea--style-6 {
  line-height: 1.2;
  min-height: 120px;
  padding: 10px 20px;
}

.label--desc {
  font-size: 13px;
  color: #999;
  margin-top: 10px;
}

@media (max-width: 767px) {
  .label--desc {
    margin-top: 14px;
  }
}

.input-file {
  display: none;
}

.input-file + label {
  font-size: 15px;
  color: #fff;
  color: white;
  line-height: 40px;
  background-color: #666666;
  padding: 0 20px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  display: inline-block;
  margin-right: 15px;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  cursor: pointer;
}

.input-file:focus + label,
.input-file + label:hover {
  background: #1b1b1b;
}

.input-file__info {
  font-size: 15px;
  color: #666;
}

@media (max-width: 767px) {
  .input-file__info {
    display: block;
    margin-top: 6px;
  }
}

/* ==========================================================================
   #TITLE
   ========================================================================== */
.title {
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  color: #fff;
  margin-bottom: 24px;
}

@media (max-width: 767px) {
  .title {
    padding: 0 15px;
  }
}

/* ==========================================================================
   #CARD
   ========================================================================== */
.card {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}

.card-6 {
  background: transparent;
}

.card-6 .card-heading {
  background: transparent;
}

.card-6 .card-body {
  background: #fff;
  position: relative;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  padding: 30px 0;
  padding-bottom: 0;
  -webkit-border-top-left-radius: 3px;
  -moz-border-radius-topleft: 3px;
  border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topright: 3px;
  border-top-right-radius: 3px;
}

.card-6 .card-body:before {
  bottom: 100%;
  left: 75px;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255, 255, 255, 0);
  border-bottom-color: #fff;
  border-width: 10px;
}

.card-6 .card-footer {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: none;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-bottom-left-radius: 3px;
  -webkit-border-bottom-right-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  border-bottom-right-radius: 3px;
  padding: 50px 55px;
}

@media (max-width: 767px) {
  .card-6 .card-footer {
    padding: 50px 30px;
  }
}
</style>