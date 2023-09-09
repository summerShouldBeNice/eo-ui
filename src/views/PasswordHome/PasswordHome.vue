<template>
  <div id="password-home">
    <div class="password-wrapper">

      <div class="password-list-wrapper">

        <ul class="password-list">
          <li class="list-button">
            <el-button type="primary" plain class="add-record-button">添加记录</el-button>
          </li>

          <li v-for="p in passwordTestList" :key="p.id" class="list">{{p.appName}}</li>
        </ul>

      </div>

      <div class="password-record-wrapper">

        <div class="password-func-list">
          <el-button type="primary" plain class="func-button">修改密码</el-button>
          <el-button type="primary" plain class="func-button">删除记录</el-button>
        </div>

        <div class="password-record">

          <div class="record-description">
            <el-text class="mx-1" size="large">记录备注: 11111111</el-text>
          </div>

          <div class="record-content">

            <el-timeline>
              <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>

          </div>

          <el-timeline>
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>

        </div>


      </div>

    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
// import {ElMessageBox} from "element-plus";
// import { onMounted } from "vue";

// let alertMessage = "由于密码如果泄露是十分危险的，所以此密码管理的文件存放于电脑里"

// onMounted(() => {
//   ElMessageBox.alert(alertMessage, '提示')
// })

const activities = [
  {
    content: '创建记录',
    timestamp: '2018-04-15',
  },
  {
    content: '修改密码',
    timestamp: '2018-04-13',
  },
  {
    content: '修改密码',
    timestamp: '2018-04-11',
  },
]

let passwordTestList = ref([
  {
    id: 1,
    appName: 'test1',
  },
  {
    id: 2,
    appName: 'test2'
  },
  {
    id: 3,
    appName: 'test2'
  }
])




</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#password-home {
  height: 100%;
  background-color: #f4f6f9;
}
.password-wrapper {
  display: flex;
}
.password-list-wrapper {
  margin-top: 10px;
  margin-left: 25px;
  width: 240px;
  border-radius: 8px;
  background-color: #fff;
}
/*应用列表*/
.list{
  width: 200px;
  height: 34px;
  font-size: 20px;
  line-height: 34px;
  margin: 10px auto;
  border-radius: 7px;
  background-color: #F8FAFB;
  padding-left: 10px;
  letter-spacing: 1px;
}
.list:hover{
  background-color: #F5F5F5;
}
.list-button {
  width: 206px;
  height: 36px;
  font-size: 20px;
  line-height: 34px;
  margin: 2px auto;
  background-color: #F8FAFB;
}
.add-record-button {
  width: 100%;
  height: 32px;
  font-size: 17px;
}
.password-record-wrapper {
  width: 80%;
  margin: 10px 25px 0px 25px;
  border-radius: 8px;
  /*background-color: #999;*/
}
.password-func-list {
  width: 100%;
  border-radius: 7px;
  background-color: #fff;
  height: 46px;
  display: flex;
  align-items: center;
}
.func-button {
  padding: 0 15px;
  margin-left: 5px;
}
.password-record {
  width: 100%;
  margin-top: 20px;
  border-radius: 7px;
  background-color: #fff;
  height: 700px;
  display: flex;
}
.record-description {
  margin: 10px 10px;
  background-color: #999;
}
.record-content {
  margin-top: 10px;
}
</style>

