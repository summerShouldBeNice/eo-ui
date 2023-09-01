<template>
  <div id="hello-container">

    <!--主内容区域-->
    <div class="hello-main-wrapper">

      <div class="fset-wrapper">
          <ul class="fset-content">
            <li v-for="fset in fsetList" :key="fsetList.id" class="fset-list">
              {{fset.title}}
            </li>
          </ul>
      </div>

    </div>

    <!--遮罩-->
    <div class="hello-shade" v-show="shadeVisible">

      <!--遮罩内的logo-->
      <div class="hello-logo" v-show="initHelloBoxVisible">

        <img src="../assets/logo.png" alt="logo">

      </div>

      <!--遮罩内的文字-->
      <div class="welcome-content-wrapper" v-show="initHelloBoxVisible">

        <p>
          Welcome to easy organize !
        </p>

        <p>
          Click the login to start exploring !
        </p>

      </div>

      <!--遮罩内的按钮-->
      <div class="button-wrapper" v-show="initHelloBoxVisible">
        <el-button plain @click="changeLoginVisible">Login</el-button>
      </div>

      <!--用户登录框-->
      <div class="login-wrapper" v-show="loginVisible">

        <p class="wrapper-title">Log in to start.</p>

        <el-form :model="loginFormData">

          <el-form-item>

            <input type="text"
                   class="form-input"
                   placeholder="username"
                   v-model="loginFormData.username">

          </el-form-item>

          <el-form-item>

            <input type="password"
                   class="form-input"
                   placeholder="password"
                   v-model="loginFormData.password">

          </el-form-item>

          <p class="register-content">not account? <span class="register-hint" @click="changeRegisterVisible">click here register.</span></p>

          <el-form-item>

            <el-row>
              <el-col :span="6" class="cancel-button">
                <div @click="changeLoginVisible">&lt;- cancel</div>
              </el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6" class="login-button">
                <div>login -&gt;</div>
              </el-col>
            </el-row>

          </el-form-item>

        </el-form>

      </div>

      <!--用户注册框-->
      <div class="register-wrapper" v-show="registerVisible">

        <p class="wrapper-title">register account.</p>

        <el-form :model="registerFormData">

          <el-form-item>

            <input type="text"
                   class="form-input"
                   placeholder="your username"
                   v-model="registerFormData.username">

          </el-form-item>

          <el-form-item>

            <input type="password"
                   class="form-input"
                   placeholder="your password"
                   v-model="registerFormData.password">

          </el-form-item>

          <el-form-item>

            <input type="text"
                   class="form-input"
                   placeholder="your email"
                   v-model="registerFormData.email">

          </el-form-item>

          <!--<el-form-item>-->

          <!--  <input type="password"-->
          <!--         class="form-input"-->
          <!--         placeholder="phone"-->
          <!--         v-model="registerFormData.phone">-->

          <!--</el-form-item>-->


          <!--<el-form-item>-->

          <!--  <input type="password"-->
          <!--         class="form-input"-->
          <!--         placeholder="visibleCode"-->
          <!--         v-model="registerFormData.visibleCode">-->

          <!--</el-form-item>-->

          <el-form-item>

            <el-row>
              <el-col :span="6" class="cancel-button">
                <div @click="changeRegisterVisible">&lt;- cancel</div>
              </el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6" class="login-button">
                <div>sign in -&gt;</div>
              </el-col>
            </el-row>

          </el-form-item>

        </el-form>
      </div>

    </div>

  </div>

</template>

<script setup>

  // eslint-disable-next-line no-unused-vars
  import {ref, onMounted} from "vue";

  // let flag = ref(true)

  let fsetList = ref([
    {
      id: 1,
      title: "用户中心",
      imgUrl: "/path"
    },
    {
      id: 2,
      title: "组件中心",
      imgUrl: "/path"
    }
  ])

  let shadeVisible =ref(false)

  let initHelloBoxVisible = ref(true)

  let loginVisible = ref(false)

  let registerVisible = ref(false)

  let loginFormData = ref({
    username: '',
    password: ''
  })

  let registerFormData = ref({
    username: '',
    password: '',
    // phone: '',
    // visibleCode: '',
    email: ''
  })

  // 获取当天最新的背景图片
  let getNowPicture = () => {

  }

  // 显示登录框
  let changeLoginVisible = () => {
    loginVisible.value = !loginVisible.value
    initHelloBoxVisible.value = !initHelloBoxVisible.value
  }

  let changeRegisterVisible = () => {
    loginVisible.value = !loginVisible.value
    registerVisible.value = !registerVisible.value
  }


  // eslint-disable-next-line no-undef
  onMounted(() => {
    getNowPicture()
  });

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#hello-container {
  /*使容器成为定位上下文*/
  position: relative;
  width: 100%;
  height: 100%;
  caret-color: rgba(0, 0, 0, 0);
}
.hello-main-wrapper {
  /*定位上下文*/
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../assets/2.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hello-shade {
  /* 使.hello-shade相对于容器进行定位 */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* 遮罩层颜色 */
  backdrop-filter: blur(50px); /* 模糊效果的强度 */
  /*border-radius: 10px;*/
  /*caret-color: rgba(0, 0, 0, 0);*/
  /* 设置z-index使.hello-shade位于.hello-main-wrapper的上方 */
  z-index: 1;
}
.welcome-content-wrapper {
  text-align: center;
}
.welcome-content-wrapper p {
  font-size: 24px;
  height: 30px;
}
.button-wrapper {
  margin-top: 15px;
}
.el-button {
  width: 120px;
  height: 35px;
  font-size: 24px;
  line-height: 42px;
}
.el-form {
  width: 500px;
  /*height: 400px;*/
  /*background-color: #999;*/
  caret-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form-input {
  color: #666;
  width: 300px;
  height: 36px;
  letter-spacing: 1px;
  border: 0px;
  border-bottom: 2px solid #999;
  caret-color: rgb(102,102,102);
  margin-top: 10px;
  background-color: transparent;
}
.form-input:focus {
  outline: none;
  color: #666;
}
.el-row {
  width: 304px;
  height: 36px;
  color: #666;
  margin-top: 10px;
}
.el-row div {
  font-size: 16px;
}
.cancel-button {
  border-bottom: 2px solid #999;
}
.login-button {
  text-align: right;
  border-bottom: 2px solid #999;
}
.register-content {
  font-size: 16px;
  color: #999999;
  width: 300px;
  text-align: right;
}
.register-hint:hover {
  color: #333;
}
.wrapper-title {
  font-size: 18px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: #333;
}
.register-hint {
  cursor: pointer;
  cursor: hand
}
.register-wrapper {
}
.fset-wrapper {

}
.fset-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.fset-list {
  width: 60px;
  height: 60px;
  list-style: none;
  background-color: #333;
  margin: 10px 15px;
}
</style>
