<template>
  <div class="box">
    <div class="header">
      <div class="overlap-group">
        <button class="button">
          <div class="text-wrapper">Đăng ký miễn phí</div>
        </button>

        <div class="group">
          <div class="frame">
            <button class="div-wrapper">
              Tìm kiếm
              <!-- <div class="div">Tìm kiếm</div> -->
            </button>
          </div>
          <div class="frame-2">
            <div class="text-wrapper-2">Tìm kiếm việc làm</div>
          </div>
          <div class="frame-3">
            <div class="text-wrapper-2">Địa điểm</div>
          </div>
          <div class="frame-4">
            <div class="text-wrapper-2">Loại hình</div>
          </div>
          <div class="frame-5">
            <div class="text-wrapper-2">Kinh nghiệm</div>
          </div>
          <button class="button-2">
            <div class="text-wrapper-3">Lọc nâng cao</div>
          </button>
        </div>

        <div class="tools">
          <div class="group-2">
            <img
              class="image-white"
              alt="Image white"
              src="..\..\assets\logo.png"
            />
            <div class="frame-6">
              <router-link :to="{ name: 'home' }">
                <div class="text-wrapper-4">Trang chủ</div></router-link
              >
              <router-link :to="{ name: 'jobs' }">
                <div class="text-wrapper-4">Việc làm</div>
              </router-link>
              <router-link :to="{ name: 'companies' }">
                <div class="text-wrapper-4">Công ty</div>
              </router-link>
              <router-link :to="{ name: '' }">
                <div class="text-wrapper-4">Lời khuyên ↓</div>
              </router-link>
            </div>
          </div>
          <div class="frame-7">
            <div class="text-wrapper-6">
              <router-link :to="{ name: '' }">Tạo CV</router-link>
            </div>

            <router-link :to="{ name: 'loginEm' }">
              <div class="text-wrapper-7">Tuyển dụng?</div>
            </router-link>

            <div class="group-3" v-if="showUsername==true">
              <router-link :to="{ name: 'login' }"
                ><div class="text-wrapper-5">Đăng nhập</div>
              </router-link>
            </div>

            <div class="group-3" v-else>
              <router-link :to="{name: 'menuuser'}">
                <div class="text-wrapper-5">{{ username }}</div>
              </router-link>

              <button class="text-wrapper-8" @click="logout">logout</button>

              <!-- <router-link :to="{ name: 'login' }"
                ><div class="text-wrapper-5"> {{ username }}</div>
              </router-link> -->
              <!-- <router-link :to="{ name: 'login' }"
                ><div class="text-wrapper-5">Chào bạn {{username}}</div>
              </router-link> -->

            </div>
          </div>
        </div>
        <p class="sologan">
          Hãy tham gia vào cuộc hành trình tìm kiếm việc làm và <br />
          nâng cao cơ hội thành công của bạn!
        </p>
        <p class="p">Tạo CV ngay để thu hút nhà tuyển dụng</p>
      </div>
    </div>
  </div>
</template>

<script >
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Box",

  setup() { 
    const username = ref("");
    const store = useStore();
    const showUsername = ref(store.state.authenticated);

    const logout = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth/logout/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
        });
        console.log("dang xuat thanh cong");

        await store.dispatch("setAuth", false);
        showUsername = store.state.authenticated;
      } catch (e) {
        console.log(e);
        console.log("loi đang xuất");
      }
    };

    onMounted(async () => {
      
      try {
        const response = await fetch("http://localhost:8080/api/candidates/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
        });
        console.log("Ket qua tra ve");
        console.log(response);

        const content = await response.json();

        console.log("noi dung");
        console.log("Last name " + content.last_name);
        console.log("First name " + content.first_name);

        username.value = `${content.last_name} ${content.first_name}`;

        // username1 = content.last_name + " " + content.first_name;

        console.log("Ten nguoi dung " + username);

        // await store.dispatch("setAuth", true); 

        // this.showUsername = store.state.authenticated;
        // showUsername = true;


        const setAu =  store.state.authenticated;

        console.log("setAu: " + setAu);
        console.log("showUserName " + showUsername.value);


      } catch (e) {
        console.log(e);
        console.log("loi roi ong ban");
        await store.dispatch("setAuth", false);
      }
    });

    return {
      username,
      showUsername,
      logout,
    };
  },
};
</script>

<style scoped>
.box {
  height: 683px;
  width: 1440px;
}
router-link {
  text-decoration: none;
}

/* .box .div {
  background-color: transparent;
  height: 100px;
  left: 0;
  position: fixed;
  top: 0;
  width: 1444px;
} */

.box .overlap-group {
  background-image: url("backGroundImage.png");
  background-size: 100% 100%;
  height: 683px;
  position: relative;
  width: 1440px;
}

.box .button {
  all: unset;
  align-items: center;
  border: 1px solid;
  border-color: #2d2f30;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  height: 62px;
  justify-content: center;
  left: 112px;
  padding: 13px 48px;
  position: absolute;
  top: 321px;
  width: 178px;
}

.box .text-wrapper {
  color: #2d2f30;
  font-family: "Inter-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 23.4px;
  margin-left: -52px;
  margin-right: -52px;
  position: relative;
  text-align: center;
  width: 186px;
}

.box .group {
  height: 147px;
  left: 112px;
  position: absolute;
  top: 400px;
  width: 1216px;
  margin-top: 20px;
}

.box .frame {
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 75px;
  justify-content: center;
  left: 1012px;
  padding: 16px 40px;
  position: absolute;
  top: 0;
  width: 170px;
}

.box .div-wrapper {
  all: unset;
  align-items: center;

  box-sizing: border-box;
  display: flex;
  gap: 10px;
  height: 62px;
  justify-content: center;
  margin-bottom: -11.9px;
  margin-top: -11.9px;
  padding: 13px 48px;
  position: relative;
  width: 220px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  font-size: 24px;
}

.box .div {
  color: #2d2f30;
  font-family: "Inter-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 2px;
  margin-left: -25.5px;
  margin-right: -25.5px;
  position: absolute;
  white-space: nowrap;
  width: fit-content;
}

.box .frame-2 {
  align-items: flex-start;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 70px;
  justify-content: center;
  left: 0;
  padding: 20px 24px;
  position: absolute;
  top: 0;
  width: 280px;
}

.box .text-wrapper-2 {
  color: #2d2f30;
  font-family: "Inter-Bold", Helvetica;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28.6px;
  margin-top: -0.4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.box .frame-3 {
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 70px;
  justify-content: center;
  left: 337px;
  padding: 20px 24px;
  position: absolute;
  top: 0;
  width: 170px;
}

.box .frame-4 {
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex; 
  flex-direction: column;
  gap: 6px;
  height: 70px;
  justify-content: center;
  left: 561px;
  padding: 20px 24px;
  position: absolute;
  top: 0;
  width: 170px;
}

.box .frame-5 {
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 70px;
  justify-content: center;
  left: 786px;
  padding: 20px 24px;
  position: absolute;
  top: 0;
  width: 170px;
}

.box .button-2 {
  all: unset;
  align-items: center;
  border: 1px solid;
  border-color: #2d2f30;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  height: 36px;
  justify-content: center;
  left: 0;
  padding: 10px 32px 12px;
  position: absolute;
  top: 130px;
  width: 227px;
}

.box .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 26px;
  margin-bottom: -5.07px;
  margin-top: -7.07px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.box .tools {
  height: 88px;
  left: 112px;
  position: absolute;
  top: 35px;
  width: 1216px;
}

.box .group-2 {
  height: 88px;
  left: 0;
  position: absolute;
  top: 0;
  width: 674px;
}

.box .image-white {
  height: 88px;
  left: 0;
  position: absolute;
  top: 0;
  width: 122px;
}

.box .frame-6 {
  align-items: center;
  display: flex;
  gap: 44px;
  height: 38px;
  justify-content: center;
  left: 205px;
  position: absolute;
  top: 25px;
  width: 469px;
}

.box .text-wrapper-4 {
  color: #2d2f30;
  font-family: "Inter-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 20.8px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.box .frame-7 {
  align-items: flex-start;
  display: flex;
  gap: 30px;
  left: 899px;
  position: absolute;
  top: 39px;
  width: 317px;
}

.box .group-3 {
  height: 21px;
  position: relative;
  width: 93px;
}

.box .text-wrapper-5 {
  color: #2d2f30;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 0;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 0;
  width: 91px;
}
.box .text-wrapper-8 {
  color: #2d2f30;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 0;
  margin-left: 80px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 0;
  width: 91px;
}

.box .text-wrapper-6 {
  color: #2d2f30;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20.8px;
  margin-top: -1px;
  position: relative;
  width: 60px;
}

.box .text-wrapper-7 {
  color: #2d2f30;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20.8px;
  margin-top: -1px;
  position: relative;
  width: 106px;
}

.box .sologan {
  color: #000000;
  text-align: left;
  font-family: "Tienne-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 112px;
  letter-spacing: 0;
  line-height: 44.8px;
  position: absolute;
  top: 156px;
  width: 1216px;
}

.box .p {
  color: #000000;
  font-family: "Tienne-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 112px;
  letter-spacing: 0;
  line-height: 25.2px;
  position: absolute;
  top: 279px;
  white-space: nowrap;
}
</style>
