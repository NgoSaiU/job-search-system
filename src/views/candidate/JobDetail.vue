<template>
  <div class="box">
    <div class="job-detail">
      <div class="job-header">
        <div class="rectangle"></div>
        <div class="text-wrapper">{{data.name}}</div>
        <div class="m-c-l-ng">Mức lương<br />{{data.salary}}</div>
        <div class="a-i-m">Địa điểm<br />{{data.salary}}</div>
        <div class="kinh-nghi-m">Kinh nghiệm<br />{{data.experience}}</div>

        <p class="div">Hạn nộp hồ sơ: {{ formatDate(data.start_date)}} </p>

        <div class="overlap-group">
          <div class="rectangle-2"></div>
          <div class="text-wrapper-2">Ứng tuyển ngay</div>
        </div>
      </div>
      <div class="JD">
        <div class="overlap">

  

          <div class="yeu-cau-cong-viec">
            <p class="p">Yêu cầu 1<br />Yêu cầu 2</p>
            <div class="text-wrapper-3">Yêu cầu công việc</div>
          </div>
          <div class="mo-ta-cong-viec">
            <p class="p">{{data.description}}</p>
            <div class="text-wrapper-3">Mô tả công việc</div>
          </div>
          <div class="quyen-loi">
            <p class="p">{{data.benefit}}</p>
            <div class="text-wrapper-3">Quyền lợi</div>
          </div>
          <div class="dia-diem">
            <div class="text-wrapper-4">{{data.location}}</div>
            <div class="text-wrapper-3">Địa điểm</div>
          </div>
          <div class="overlap-2">
            <div class="rectangle-2"></div>
            <div class="text-wrapper-2">Ứng tuyển ngay</div>
          </div>
          <div class="overlap-group-2">
            <div class="rectangle-3"></div>
            <div class="text-wrapper-5">Lưu tin</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
export default {

  props:['id'],

  // data() {
  //   return {
  //     db:[],
  //   };
  // },
  
   formatDate(date) {
      return new Date(date).toLocaleDateString();
    },

  setup(props) {
    console.log(props.id);

    let data = ref('');

    //   const formatDate(date) =  {
    //   return new Date(date).toLocaleDateString()
    // },

    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8080/api/job-post/" + props.id, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
        });

        data.value = await response.json();
        

        console.log(data.value);

        // data = await response.json();
        // console.log(data);
        // content.value = data;
        // console.log('sdfsdfs ' + content.value);

        // console.log('Ten cong viec ' + content.value.name);

      } catch (err) {
        console.error('loi');
        console.error(err);
      }
    });
    return{
      data,
      
    }
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  }


};
</script>

<style scoped>
.box {
    position: relative;
    width: 1440px;
    height: 1571px;
}

.box .job-detail {
    position: absolute;
    width: 1440px;
    height: 1571px;
    top: 0;
    left: 0;
}

.box .job-header {
    position: absolute;
    width: 1440px;
    height: 360px;
    top: 0;
    left: 0;
}

.box .rectangle {
    position: absolute;
    width: 203px;
    height: 203px;
    top: 73px;
    left: 226px;
    background-color: #d9d9d9;
}

.box .text-wrapper {
    position: absolute;
    top: 72px;
    left: 454px;
    font-family: "Inter-Bold", Helvetica;
    font-weight: 700;
    color: #000000;
    font-size: 27px;
    letter-spacing: 0;
    line-height: 32.4px;
    white-space: nowrap;
}

.box .m-c-l-ng {
    position: absolute;
    top: 126px;
    left: 454px;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
}

.box .a-i-m {
    position: absolute;
    top: 126px;
    left: 601px;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
}

.box .kinh-nghi-m {
    position: absolute;
    top: 121px;
    left: 758px;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
}

.box .div {
    position: absolute;
    top: 196px;
    left: 454px;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
}

.box .overlap-group {
    position: absolute;
    width: 205px;
    height: 40px;
    top: 236px;
    left: 449px;
}

.box .rectangle-2 {
    position: absolute;
    width: 205px;
    height: 39px;
    top: 1px;
    left: 0;
    background-color: #ff9b1c;
    border: 1px solid;
    border-color: #000000;
}

.box .text-wrapper-2 {
    position: absolute;
    width: 205px;
    height: 39px;
    top: 0;
    left: 0;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0;
    line-height: 24px;
}

.box .JD {
    position: absolute;
    width: 1440px;
    height: 1211px;
    top: 360px;
    left: 0;
    background-color: #f3f3f3;
}

.box .overlap {
    position: relative;
    width: 988px;
    height: 1037px;
    top: 87px;
    left: 227px;
    background-color: #ffffff;
}

.box .phc-li {
    position: absolute;
    width: 343px;
    height: 87px;
    top: 62px;
    left: 110px;
}

.box .p {
    position: absolute;
    top: 49px;
    left: 0;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 19.2px;
}

.box .text-wrapper-3 {
    position: absolute;
    height: 32px;
    top: 0;
    left: 0;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 27px;
    letter-spacing: 0;
    line-height: 32.4px;
    white-space: nowrap;
}

.box .yeu-cau-cong-viec {
    position: absolute;
    width: 236px;
    height: 87px;
    top: 356px;
    left: 108px;
}

.box .mo-ta-cong-viec {
    position: absolute;
    width: 208px;
    height: 87px;
    top: 209px;
    left: 110px;
}

.box .quyen-loi {
    position: absolute;
    width: 123px;
    height: 87px;
    top: 503px;
    left: 108px;
}

.box .dia-diem {
    position: absolute;
    width: 116px;
    height: 68px;
    top: 650px;
    left: 108px;
}

.box .text-wrapper-4 {
    top: 49px;
    font-size: 16px;
    line-height: 19.2px;
    position: absolute;
    left: 0;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    letter-spacing: 0;
    white-space: nowrap;
}

.box .overlap-2 {
    position: absolute;
    width: 205px;
    height: 40px;
    top: 931px;
    left: 179px;
}

.box .overlap-group-2 {
    position: absolute;
    width: 93px;
    height: 40px;
    top: 930px;
    left: 475px;
}

.box .rectangle-3 {
    position: absolute;
    width: 93px;
    height: 39px;
    top: 1px;
    left: 0;
    background-color: #ff9b1c;
    border: 1px solid;
    border-color: #000000;
}

.box .text-wrapper-5 {
    position: absolute;
    width: 93px;
    height: 39px;
    top: 0;
    left: 0;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0;
    line-height: 24px;
}

</style>