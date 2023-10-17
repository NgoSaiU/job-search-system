<template>
  <Header />
  <div class="container">
    <h2>List companiess</h2>
    <div v-if="error">{{ error }}</div>
    <div class="companies">
      <div class="top">
        <p class="h1">Khám Phá Văn Hóa Công Ty</p>
        <p class="p">
          Tìm hiểu văn hóa công ty và chọn cho bạn nơi làm việc phù hợp nhất
        </p>
        <div class="frame-search">
          <div class="button-serch">
            <div class="rectangle-search">
              <div class="btn-search">Tìm kiếm</div>
            </div>
          </div>
          <div class="icon-magnifying-wrapper">
            <div class="icon-magnifying">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="div">
        <div class="jobs-list">
          <div class="overlap">
            <div class="frame">
              <div class="overlap-group">
                <div class="header">Danh Sách Công Ty</div>
              </div>
              <div class="rectangle"></div>
            </div>

            <div class="contain">
              <div v-if="companies">
                <div v-for="company in companies" :key="company.id">
                  <div class="item">
                    <div class="company">
                      <div class="frame-company"></div>
                      <div class="title">
                        <router-link
                          :to="{
                            name: 'companyDetail',
                            params: { id: company._id },
                          }"
                        >
                          {{ company.name }}
                        </router-link>
                      </div>
                      <div class="places">
                        Trụ sở chính: {{ company.address }}
                      </div>
                      <button class="button">
                        <div class="follow">
                          <div class="btn-follow">Theo dõi</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
// import getCompanies from "../../composables/getCompanies.js";
// import ListCompanies from "../../components/candidate/ListCompanies.vue";
import Header from "../../components/candidate/Header.vue";
import Footer from "../../components/candidate/Footer.vue";

import { onMounted } from "vue";
import axios from "axios";

export default {
  name: "companies",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      companies: [],
    };
  },

  mounted() {
    this.getCompanies();
    console.log("toi ở đây từ chiều");
  },
  methods: {
    getCompanies() {
      // try {

      axios
        .get("http://localhost:8080/api/companies/")
        .then((res) => {
          this.companies = res.data.data;
          console.log("danh sach cong ty");
          console.log(this.companies);

          // console.log(res);
        })
        .catch((err) => {
          console.error("Error fetching data:", error);
        });
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style >
.contain {
  display: flex;
  flex-direction: column;
  position: absolute;
  /* gap: 1em; */
}

.companies {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: center;
  width: 100%;
}

.companies .div {
  background-color: #ffffff;
  width: 1440px;
  min-height: 2100px;
  /* position: relative; */
  position: relative;
}

.companies .jobs-list {
  position: absolute;
  width: 992px;
  height: 1559px;
  top: 4px;
  left: 224px;
}

.companies .overlap {
  position: relative;
  height: 1559px;
}

.companies .frame {
  width: 991px;
  height: 2000px;
  top: 0;
  left: 0;
  border-radius: 12px;
  border: 1px solid;
  border-color: #000000;
  position: absolute;
  overflow: hidden;
}

.companies .overlap-group {
  position: absolute;
  width: 991px;
  height: 63px;
  top: 0;
  left: 0;
  background-color: #cee5f6;
  border-radius: 12px 12px 0px 0px;
}

.companies .header {
  position: absolute;
  width: 277px;
  top: 16px;
  left: 22px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: var(--ajdan-black);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 28.8px;
}

.companies .rectangle {
  position: absolute;
  width: 427px;
  height: 51px;
  top: 1915px;
  left: 282px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
}

.companies .item {
  /* position: absolute; */
  position: relative;
  width: 992px;
  height: 182px;
  top: 65px;
  left: 0;
  border-radius: 5px;
  /* overflow: hidden; */
  /* border: 1px dashed;
  border-color: #9747ff; */
}

.companies .company {
  top: 20px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.companies .frame-company {
  position: absolute;
  width: 127px;
  height: 136px;
  top: 15px;
  left: 21px;
  background-color: #d9d9d9;
  border-radius: 12px;
}

.companies .title {
  position: absolute;
  top: 38px;
  left: 183px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.companies .places {
  position: absolute;
  top: 95px;
  left: 183px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.companies .button {
  position: absolute;
  width: 93px;
  height: 29px;
  top: 36px;
  left: 767px;
  all: unset;
  box-sizing: border-box;
}

.companies .follow {
  position: relative;
  width: 91px;
  height: 29px;
  background-color: #ff9b1c;
  border-radius: 5px;
  margin-left: 800px;
  margin-top: 20px;
}

.companies .btn-follow {
  position: absolute;
  width: 91px;
  height: 29px;
  top: 0;
  left: 0;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
}

.companies .property {
  top: 206px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.companies .property-variant {
  top: 392px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.companies .top {
  position: relative;
  width: 660px;
  height: 180px;
  top: 0px;
  left: 225px;
}

.companies .frame-search {
  width: 653px;
  height: 35px;
  top: 120px;
  left: 3px;
  background-color: #d9d9d9;
  border-radius: 5px;
  position: absolute;
  overflow: hidden;
}

.companies .button-serch {
  position: absolute;
  width: 82px;
  height: 25px;
  top: 5px;
  left: 566px;
}

.companies .rectangle-search {
  position: relative;
  width: 80px;
  height: 25px;
  background-color: #ff9b1c;
  border-radius: 5px;
}

.companies .btn-search {
  position: absolute;
  width: 80px;
  height: 24px;
  top: 1px;
  left: 0;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16.8px;
}

.companies .icon-magnifying-wrapper {
  position: absolute;
  width: 358px;
  height: 25px;
  top: 5px;
  left: 10px;
  background-color: #ffffff;
}

.companies .icon-magnifying {
  position: absolute;
  width: 16px;
  height: 19px;
  top: 3px;
  left: 7px;
}

.companies .p {
  position: absolute;
  top: 58px;
  left: 0;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21.6px;
  white-space: nowrap;
}

.companies .h1 {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
}
</style>