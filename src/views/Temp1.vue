<template>
  <h1>JOB LIST</h1>
  <div class="frame">
    <div class="company">
      <div class="header-company">
        <div class="rectangle-company"></div>
        <div class="text-company">Top công ty</div>
      </div>

      <div class="contain_imgCompa">
        <div class="imgCompany">1</div>
        <div class="imgCompany">2</div>
        <div class="imgCompany">3</div>
        <div class="imgCompany">4</div>
        <div class="imgCompany">5</div>
      </div>
    </div>

    <div class="jobs-list">
      <div class="header-job">
        <div class="frame-job">
          <div class="rectangle-list-job">
            <div class="text-job">Danh Sách Việc Làm</div>
          </div>

          <div class="rectangle-job"></div>
        </div>

        <div class="contain_job" v-if="jobs">
          <div class="item_job" v-for="job in jobs" :key="job.id">
            <div class="frame_job"></div>
            <div class="job-title">{{ job.name }}</div>
            <!-- <div class="company-name">Công ty {{ job.company_id }}</div> -->
            <div class="company-name" v-if="companyNames[job.company_id]"> Công ty {{ companyNames[job.company_id] }}</div>
            <!-- <div class="company-name">Công ty {{ getNameCompany(job.company_id) }}</div> -->
            <div class="salary">{{ job.salary }}</div>
            <img class="logo-job" src="img/logo-job-5-4.svg" />
            <div class="location">Vị trí: {{ job.position }}</div>
            <div class="date">
              Ngày đăng tin: {{ formatDate(job.start_date) }}
            </div>
            <div class="heart"><i class="fa-regular fa-heart"></i></div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  
  data() {
    return {
      jobs: [],
      companyNames: {}, 
    };
  },

  async mounted() {
    await this.getJobs();
    console.log("toi ở đây từ chiều");
  },
  methods: {
    async getJobs() {
      try {
        const response = await axios.get("http://localhost:8080/api/job-post/");
        this.jobs = response.data.data;
        console.log("danh sach cong viec");
        console.log(this.jobs);

        // Tạo một mảng promises để gọi getNameCompany cho tất cả công việc
        const promises = this.jobs.map((job) => this.getNameCompany(job.company_id));

        //Sử lý bất đồng bộ
        // Sử dụng Promise.all để đợi cho tất cả promises hoàn thành
        const companyNames = await Promise.all(promises);

        // Gán tên công ty cho mỗi công việc
        this.jobs.forEach((job, index) => {
          if (companyNames[index]) {
            this.companyNames[job.company_id] = companyNames[index];
          } else {
            this.companyNames[job.company_id] = "Tên công ty không tồn tại"; 
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async getNameCompany(idCompany) {
      try {
        if (idCompany) {
          const response = await axios.get("http://localhost:8080/api/companies/" + idCompany);
          const companyName = response.data.name;
          console.log("Ten cong ty", companyName);
          return companyName;
        } else {
          return null;
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        return null;
      }
    },
     formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },


};
</script>

<style scoped>
.contain_imgCompa {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  gap: 1.5em;
}
.contain_job {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
  margin-left: 18px;
  gap: 1.1em;
}

.frame {
  position: relative;
  width: 1441px;
  height: 2126px;
}

.frame .company {
  position: absolute;
  width: 206px;
  height: 1051px;
  left: 1124px;
  border-radius: 12px;
  border: 1px solid;
  border-color: #000000;
}

.frame .imgCompany {
  width: 166px;
  height: 166px;
  top: 84px;
  left: 20px;
  position: relative;
  border-radius: 12px;
  border: 1px solid;
  border-color: #000000;
}

.frame .header-company {
  position: absolute;
  width: 204px;
  height: 63px;
  top: 2px;
  left: 2px;
}

.frame .rectangle-company {
  position: absolute;
  width: 202px;
  height: 63px;
  top: 0;
  left: 0;
  background-color: #cee5f6;
  border-radius: 12px 12px 0px 0px;
}

.frame .text-company {
  position: absolute;
  width: 181px;
  top: 16px;
  left: 23px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: var(--ajdan-black);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 28.8px;
}

.frame .jobs-list {
  position: absolute;
  width: 991px;
  height: 2098px;
  top: 0;
  left: 112px;
}

.frame .header-job {
  position: relative;
  height: 2098px;
  border-radius: 12px;
}

.item_job {
  margin-top: 10px;
  position: relative;
  width: 952px;
  height: 166px;
  /* top: 87px;
  left: 20px; */
  background-color: #cee5f6;
  border-radius: 12px;
}

.frame .frame_job {
  position: absolute;
  width: 127px;
  height: 136px;
  top: 15px;
  left: 21px;
  background-color: #d9d9d9;
  border-radius: 12px;
}

.frame .job-title {
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

.frame .company-name {
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

.frame .salary {
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

.frame .logo-job {
  position: absolute;
  width: 2px;
  height: 20px;
  top: 95px;
  left: 256px;
}

.frame .location {
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

.frame .date {
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

.frame .heart {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 14px;
  left: 893px;
  object-fit: cover;
}

.frame .frame-job {
  width: 991px;
  height: 2098px;
  top: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  border-radius: 12px;
  border: 1px solid;
  border-color: #000000;
}

.frame .rectangle-list-job {
  position: absolute;
  width: 991px;
  height: 63px;
  top: 0;
  left: 0;
  background-color: #cee5f6;
  border-radius: 12px 12px 0px 0px;
}

.frame .text-job {
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

.frame .rectangle-job {
  position: absolute;
  width: 427px;
  height: 51px;
  top: 2017px;
  left: 298px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
}
</style>