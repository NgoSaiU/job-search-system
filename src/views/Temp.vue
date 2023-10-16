<template>
  <div class="box">
    <div class="job-list">
      <div class="container">
        <div class="container-group">
          <div class="header-left">Việc Làm Tốt Nhất</div>
          <div class="header-right">Xem tất cả</div>
        </div>

        <div class="contain">
          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 1</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <!-- <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 2</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 3</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 4</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 5</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 6</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 7</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 8</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="jobIn4">
              <div class="frame"></div>
              <div class="job-title">Job title 9</div>
              <div class="company-name">Companyname</div>
              <div class="frame-location">
                <div class="location">Location</div>
              </div>
              <div class="frame-salary">
                <div class="salary">$salary</div>
              </div>
            </div>
          </div>


           -->
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8080/api/job-post/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
        });
        
        const content = await response.json();
        console.log("Danh sach cong viec");
        console.log(content);

      } catch (err) {
        console.error(err);
      }
    });
  },
};
</script>

<style scoped>
.contain {
  margin-top: 110px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  gap: 1em;
}
.box {
  width: 1256px;
  height: 509px;
  margin-left: 85px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.box .job-list {
  position: relative;
  width: 1260px;
  height: 509px;
  top: 0;
  left: 0;
}

.box .container {
  position: relative;
  width: 1256px;
  height: 509px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 3px solid;
  border-color: #cee5f6;
}

.box .container-group {
  position: absolute;
  width: 1256px;
  height: 84px;
  top: 0;
  left: 0;
  background-color: #cde4f5;
  border-radius: 12px 12px 0px 0px;
  border: 1px solid;
  border-color: #000000;
}

.box .header-left {
  position: absolute;
  width: 252px;
  height: 31px;
  top: 29px;
  left: 17px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 31.2px;
}

.box .header-right {
  position: absolute;
  width: 144px;
  height: 31px;
  top: 25px;
  left: 1108px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 31.2px;
}

.box .job {
  position: absolute;
  width: 325px;
  height: 100px;
  top: 111px;
  left: 916px;
}

.box .frame {
  position: absolute;
  width: 75px;
  height: 75px;
  top: 12px;
  left: 10px;
  background-color: #d9d9d9;
  border-radius: 10px;
}

.box .job-title {
  position: absolute;
  width: 80px;
  height: 21px;
  top: 13px;
  left: 112px;
  font-family: "Cabin-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 20.8px;
}

.box .company-name {
  position: absolute;
  width: 113px;
  height: 18px;
  top: 36px;
  left: 113px;
  font-family: "Cabin-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 18.2px;
}

.box .location {
  position: absolute;
  width: 86px;
  height: 17px;
  top: 2px;
  left: 1px;
  font-family: "Cabin-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16.9px;
}

.box .frame-salary {
  height: 20px;
  top: 67px;
  left: 112px;
  position: absolute;
  width: 87px;
}
/* 
.box .img {
  position: absolute;
  width: 87px;
  height: 19px;
  top: 1px;
  left: 0;
} */

.box .salary {
  position: absolute;
  width: 85px;
  height: 17px;
  top: 0;
  left: 1px;
  font-family: "Cabin-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16.9px;
}

.box .item {
  /* position: absolute; */
  width: 325px;
  height: 100px;
  top: 115px;
  left: 17px;
}

.box .jobIn4 {
  position: relative;
  width: 317px;
  height: 100px;
  background-size: 100% 100%;
  border: 2px solid;
  border-color: aqua;
  border-radius: 20px;
}

.box .frame-location {
  height: 19px;
  top: 68px;
  left: 227px;
  background-size: 100% 100%;
  position: absolute;
  width: 87px;
}
</style>