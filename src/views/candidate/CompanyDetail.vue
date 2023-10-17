<template>
  <Header/>
  <h2>company details</h2>
  <div class="company-details">
    <div class="top">
      <div class="overlap">
        <div class="image-br-comp"></div>
        <div class="rectangle"></div>
        <div class="text-wrapper">{{ data.numEmployer }}</div>
        <div class="logocompany"></div>
        <div class="div">{{ data.name }}</div>
        <div class="button">
          <div class="overlap-group"><p class="p">+ Theo dõi công ty</p></div>
        </div>
        <i class="fa-solid fa-globe element"></i>
        <div class="text-wrapper-2">{{ data.website }}</div>
        <i class="fa-solid fa-house img"></i>
      </div>
    </div>
    <div class="frame">
      <div class="div-wrapper">
        <div class="text-wrapper-3">Giới thiệu công ty</div>
      </div>
      <p class="gi-i-thi-u-njns">
        Giới thiệu:<br /><br />Công ty cung cấp giải pháp ....<br /><br />Được
        thành lập: {{ formatDate(data.establishment_date) }}
      </p>
    </div>

    <div class="jobs-list">
      <div class="overlap-2" v-for="job in listJobs" :key="job.id">
        <div class="image-white">
          <div class="rectangle-2"></div>
          <div class="text-wrapper-4">{{ job.name }}</div>
          <div class="text-wrapper-6">{{ job.salary }}</div>
          <img class="line" src="img/line-5.svg" alt="img" />
          <div class="text-wrapper-7">{{ job.location[0] }}</div>
          <div class="text-wrapper-8">Ngày đăng tin: {{ formatDate(job.start_date) }}</div>
          <img class="element-2" src="img/151910-1-4.png" alt="img" />
        </div>

        <div class="frame-2">
          <div class="overlap-group-2">
            <div class="text-wrapper-9">Việc Làm Đang Tuyển Dụng</div>
          </div>
          <div class="rectangle-3"></div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import { onMounted, ref } from "vue";

import Header from "../../components/candidate/Header.vue";
import Footer from "../../components/candidate/Footer.vue";

export default {
  props: ["id"],
  components: {
    Header,
    Footer,
  },

  // data() {
  //   return {
  //     // jobs: [],
  //     // companyNames: {},

  //     companyNames: {},
  //     jobs: [],
  //   };
  // },

  // async mounted() {
  //   await this.getIn4Company(props.id);
  //   // await this.getJobsCompany(props.id);

  //   console.log("toi ở đây từ chiều");
  // },
  // methods: {
  //   async getIn4Company(idCompany) {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/api/companies/" + idCompany,
  //         {
  //           method: "GET",
  //           headers: { "Content-Type": "application/json" },
  //           // credentials: "include",
  //         }
  //       );

  //       this.companyNames = await response.json();
  //       console.log("Chi tiết công ty");
  //       console.log(this.companyNames);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   },

  //   // async getJobsCompany(idCompany) {
  //   //   try {

  //   //   } catch (err) {
  //   //     console.error("Error fetching data:", err);
  //   //     return null;
  //   //   }
  //   // },

  //   formatDate(date) {
  //     return new Date(date).toLocaleDateString();
  //   },
  // },

  setup(props) {
    console.log(props.id);
    let data = ref("");
    let listJobs = ref("");

    onMounted(async () => {
      //infoCompany
      try {
        const response = await fetch(
          "http://localhost:8080/api/companies/" + props.id,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            // credentials: "include",
          }
        );

        data.value = await response.json();
        // console.log(data.value);
      } catch (err) {
        console.error("loi lay thong tin company");
        console.error(err);
      }

      //list Jobs of company
      try {
        const res = await fetch(
          "http://localhost:8080/api/companies/" + props.id + "/job-post/",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            // credentials: "include",
          }
        );
         listJobs.value = await res.json();

        // const response = await axios.get(
        //   "http://localhost:8080/api/companies/" + props.id + "/job-post/"
        // );

        //  listJobs.value = response.data;
        console.log( "Danh sach vong viec cua cong ty");
        console.log(listJobs.value);
        // console.log(res);

        console.log("ID cua job " + props.id);
      } catch (errr) {
        console.log("loi lay danh sach cong viec cua cong ty");
      }
    });

    // getJobsCompany();

    return {
      data,
      listJobs,
    };
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },

    //chua xong
    // async getJobsCompany(idCompany) {
    //   try {
    //     if (idCompany) {
    //       const response = await axios.get(
    //         "http://localhost:8080/api/companies/" + idCompany
    //       );
    //       const companyName = response.data.name;
    //       console.log("Ten cong ty", companyName);
    //       return companyName;
    //     } else {
    //       return null;
    //     }
    //   } catch (err) {
    //     console.error("Error fetching data:", err);
    //     return null;
    //   }
    // },
  },
};
</script>

<style>
.company-details {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 84px;
  padding: 86px 224px;
  position: relative;
  background-color: #ffffff;
}

.company-details .top {
  position: relative;
  width: 996px;
  height: 283px;
  margin-right: -6px;
}

.company-details .overlap {
  position: relative;
  width: 990px;
  height: 283px;
}

.company-details .image-br-comp {
  position: absolute;
  width: 990px;
  height: 184px;
  top: 0;
  left: 0;
  background-color: #65e9da;
  border-radius: 12px 12px 0px 0px;
}

.company-details .rectangle {
  position: absolute;
  width: 990px;
  height: 99px;
  top: 184px;
  left: 0;
  background-color: #d9d9d9;
  border-radius: 0px 0px 12px 12px;
}

.company-details .text-wrapper {
  position: absolute;
  height: 17px;
  top: 255px;
  left: 254px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
}

.company-details .logocompany {
  position: absolute;
  width: 121px;
  height: 121px;
  top: 123px;
  left: 47px;
  background-color: #ffffff;
  border-radius: 60.5px;
}

.company-details .div {
  position: absolute;
  height: 24px;
  top: 193px;
  left: 224px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.company-details .button {
  position: absolute;
  width: 150px;
  height: 31px;
  top: 210px;
  left: 786px;
}

.company-details .overlap-group {
  position: relative;
  width: 148px;
  height: 31px;
  background-color: #ffffff;
}

.company-details .p {
  position: absolute;
  width: 148px;
  height: 31px;
  top: 0;
  left: 0;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
}

.company-details .element {
  position: absolute;
  width: 18px;
  height: 18px;
  top: 222px;
  left: 224px;
  object-fit: cover;
}

.company-details .text-wrapper-2 {
  position: absolute;
  height: 17px;
  top: 223px;
  left: 254px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
}

.company-details .img {
  position: absolute;
  width: 25px;
  height: 18px;
  top: 253px;
  left: 220px;
}

.company-details .frame {
  position: relative;
  width: 990px;
  height: 388px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: #000000;
}

.company-details .div-wrapper {
  position: absolute;
  width: 990px;
  height: 62px;
  top: 0;
  left: 0;
  background-color: #65e9da;
  border-radius: 12px 12px 0px 0px;
}

.company-details .text-wrapper-3 {
  position: absolute;
  height: 24px;
  top: 18px;
  left: 33px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.company-details .gi-i-thi-u-njns {
  position: absolute;
  top: 71px;
  left: 116px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
}

.company-details .jobs-list {
  position: relative;
  width: 991px;
  height: 1559px;
}

.company-details .overlap-2 {
  position: relative;
  height: 1559px;
  border-radius: 12px;
}

.company-details .image-white {
  position: absolute;
  width: 952px;
  height: 166px;
  top: 87px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .rectangle-2 {
  position: absolute;
  width: 127px;
  height: 136px;
  top: 15px;
  left: 21px;
  background-color: #d9d9d9;
  border-radius: 12px;
}

.company-details .text-wrapper-4 {
  position: absolute;
  top: 14px;
  left: 171px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #ef0015;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.company-details .text-wrapper-5 {
  position: absolute;
  top: 56px;
  left: 170px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.company-details .text-wrapper-6 {
  position: absolute;
  top: 97px;
  left: 170px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #ff0000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
}

.company-details .line {
  position: absolute;
  width: 2px;
  height: 20px;
  top: 95px;
  left: 256px;
}

.company-details .text-wrapper-7 {
  position: absolute;
  top: 97px;
  left: 288px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
}

.company-details .text-wrapper-8 {
  position: absolute;
  top: 133px;
  left: 171px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
}

.company-details .element-2 {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 14px;
  left: 893px;
  object-fit: cover;
}

.company-details .image-white-2 {
  top: 859px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .image-white-3 {
  top: 473px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .image-white-4 {
  top: 1245px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .image-white-5 {
  top: 280px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .image-white-6 {
  top: 1052px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .image-white-7 {
  top: 666px;
  position: absolute;
  width: 952px;
  height: 166px;
  left: 20px;
  background-color: #cee5f6;
  border-radius: 12px;
}

.company-details .frame-2 {
  position: absolute;
  width: 991px;
  height: 1559px;
  top: 0;
  left: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: #000000;
}

.company-details .overlap-group-2 {
  position: absolute;
  width: 991px;
  height: 63px;
  top: 0;
  left: 0;
  background-color: #cee5f6;
  border-radius: 12px 12px 0px 0px;
}

.company-details .text-wrapper-9 {
  position: absolute;
  width: 400 px;
  top: 16px;
  left: 22px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: var(--ajdan-black);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 28.8px;
}

.company-details .rectangle-3 {
  position: absolute;
  width: 427px;
  height: 51px;
  top: 1456px;
  left: 282px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
}
</style>