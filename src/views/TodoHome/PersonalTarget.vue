<template>
  <div id="personal-target">

    <!--功能按钮列表-->
    <div class="func-button-list">
      <el-button type="primary" plain @click="changeAddDialogVisible">添加目标</el-button>
      <el-button type="primary" plain @click="removeTarget">删除目标</el-button>
      <el-button type="primary" plain @click="accomplishTarget">完成目标</el-button>
      <el-button type="primary" plain @click="statisticsTarget">目标统计</el-button>
    </div>

    <div class="func-select-list">
      <el-select v-model="filterAccomplishStatus.accomplishStatus" placeholder="目标状态">
        <el-option
            v-for="item in targetStatusOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <el-select v-model="filterTargetLevel.targetLevel" placeholder="目标性质">
        <el-option
            v-for="item in targetLevelOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <el-button type="primary" plain @click="filterData">过滤数据</el-button>
    </div>

    <!--添加目标dialog-->
    <el-dialog v-model="dialogTableVisible" title="添加目标">
      <el-form :model="addTargetForm" label-width="120px">
        <el-form-item label="目标事件">
          <el-input v-model="addTargetForm.targetEvent" />
        </el-form-item>

        <el-form-item label="创建时间">
          <el-input v-model="addTargetForm.createTime" disabled />
        </el-form-item>

        <el-form-item label="目标等级">
          <el-radio-group v-model="addTargetForm.targetLevel" label="label position">
            <el-radio-button label="1">普通</el-radio-button>
            <el-radio-button label="2">重要</el-radio-button>
            <el-radio-button label="3">非常重要</el-radio-button>
          </el-radio-group>

        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="addTarget">添加</el-button>
          <el-button @click="changeAddDialogVisible">取消</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>


    <div class="target-wrapper">

    <!--  <el-table :data="targetTestData" stripe style="width: 100%">-->
    <!--    <el-table-column prop="id" label="事件编号" width="180" />-->
    <!--    <el-table-column prop="targetEvent" label="目标事件" width="180" />-->
    <!--    <el-table-column prop="createTime" label="创建时间" />-->
    <!--  </el-table>-->




      <div class="target-list" >

        <el-checkbox-group
            v-model="checkList"
            v-for="target in targetTestData"
            :key="target.id">
          <el-checkbox :label="target.id">
            <el-text class="event-text">{{target.targetEvent}}</el-text>
            <el-text class="event-create-time-text" type="info">{{target.createTime}}</el-text>
            <el-text class="event-create-time-text" type="info">{{target.targetLevel}}</el-text>
          </el-checkbox>
        </el-checkbox-group>

      </div>



    </div>



  </div>
</template>

<script setup>

import {ref} from "vue";

// 多选框
let checkList = ref([])


let filterAccomplishStatus = ref(
    {
      accomplishStatus: ''
    }
)

let filterTargetLevel = ref(
    {
      targetLevel: ''
    }
)

// 目标统计
let statisticsTarget = () => {

}

let filterData = () => {

}

let targetStatusOption = ref([
  {
    value: '0',
    label: '进行中'
  },
  {
    value: '1',
    label: '已完成'
  },
  {
    value: '3',
    label: '全部'
  }
])

let targetLevelOption = ref([
  {
    value: '1',
    label: '普通'
  },
  {
    value: '2',
    label: '重要'
  },
  {
    value: '3',
    label: '非常重要'
  }
])

// 获取当前时间
let currentTime = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1);
  let day = currentDate.getDate();
  let hour = currentDate.getHours().toString().padStart(2, '0');
  let minute = currentDate.getMinutes().toString().padStart(2, '0');
  return year + '/' + month + '/' + day + ' ' + hour + ':' + minute;
}



// 添加目标表单
let addTargetForm = ref({
  targetEvent: '',
  createTime: currentTime(),
  accomplishTime: '',
  targetLevel: '',
  accomplishStatus: ''
})

// 添加目标事件
let addTarget = () => {
  console.log("create event")
}





let dialogTableVisible = ref(false)

// 改变addDialog的Visible
let changeAddDialogVisible = () => {
  console.log(dialogTableVisible.value)
  dialogTableVisible.value = !dialogTableVisible.value
}

// 删除选中的目标
let removeTarget = () => {


}

// 完成选择的目标
let accomplishTarget = () => {

}


let targetTestData = ref([
  {
    id: '1',
    targetEvent: '学习java',
    createTime: '2023/9/9 00:56',
    accomplishTime: '',
    targetLevel: '1',
  },
  {
    id: '2',
    targetEvent: '22',
    createTime: '2023/9/9 00:57',
    accomplishTime: '',
    targetLevel: '2',
  },
  {
    id: '3',
    targetEvent: '222',
    createTime: '2023/9/9 00:16',
    accomplishTime: '',
    targetLevel: '2',
  },
  {
    id: '4',
    targetEvent: '3',
    createTime: '2023/9/9 00:36',
    accomplishTime: '',
    targetLevel: '3',
  },
])

</script>

<style scoped>
#personal-target {
  background-color: #fff;
  height: 100%;
  margin: 15px 30px;
}
.func-button-list {
  /*margin-top: 5px;*/
}
.func-button-list * {
  margin-top: 10px;
  margin-left: 15px;
}
.func-select-list * {
  margin-top: 10px;
  margin-left: 15px;
}
.el-button {
}
.add-input {
  display: inline-block;
  width: 200px;
}
.target-wrapper {
  margin-top: 10px;
  margin-left: 20px;
}
.target-level {
  height: 36px;
  font-size: 20px;
  line-height: 36px;
  background-color: #fafafa;
  padding-left: 5px;
}
.target-list {
  margin-top: 15px;
}
:deep(.el-checkbox__inner) {
  width:18px;
  height: 18px;
}
:deep(.el-checkbox__inner::after) {
  left: 6px;
  top: 3px;
  font-size: 16px;
}
.el-checkbox-group {
  margin-left: 10px;
}
.event-text {
  font-size: 16px;
}
.event-create-time-text {
  margin-left: 16px;
}
.el-select {
  width: 160px;
}
</style>
