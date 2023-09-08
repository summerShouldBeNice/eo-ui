<template>
  <div id="personal-todo">

    <div class="func-button-list">
      <el-button type="primary" plain @click="showAddInput">添加目标</el-button>
      <el-input v-model="input" placeholder="add todo event" class="add-input" v-show="addInputVisible"/>
      <el-button type="primary" plain @click="removeTodo">删除目标</el-button>
      <el-button type="primary" plain @click="accomplishTodo">完成目标</el-button>
      <el-button type="primary" plain @click="accomplishTodo">目标统计</el-button>

    </div>

    <div class="todo-wrapper">

      <div class="todo-list" v-for="evenData in evenDataList" :key="evenData.date">

        <div class="time">
          {{evenData.date}}
        </div>


        <el-checkbox-group
            v-model="checkList"
            v-for="event in evenData.todoEvent"
            :key="event.id">
          <el-checkbox :label="event.id">
            <el-text class="event-text">{{event.todo}}</el-text>
            <el-text class="event-create-time-text" type="info">{{event.createTime}}</el-text>
          </el-checkbox>
        </el-checkbox-group>

        <!--{{checkList}}-->
      </div>



    </div>



  </div>
</template>

<script setup>

import {ref} from "vue";

let checkList = ref([])


let showAddInput = () => {
  addInputVisible.value = !addInputVisible.value
}

// 删除选中的事件
let removeTodo = () => {

  if (addInputVisible.value) {
    showAddInput()
  }
}

//完成选择的事件
let accomplishTodo = () => {

}

let addInputVisible = ref(false)

let evenDataList = ref([
  {
    date: '2023/9/9',
    todoEvent: [
      {
        id: 1,
        todo: '吃饭',
        createTime: '16:35',
        status: 1,
      },
      {
        id: 2,
        todo: '吃饭',
        createTime: '16:35',
        status: 1,
      },
      {
        id: 3,
        todo: '吃饭',
        createTime: '16:35',
        status: 1,
      }

    ]
  },
  {
    date: '2023/9/9',
    todoEvent: [
      {
        id: 5,
        todo: '11111',
        createTime: '16:35',
        status: 1,
      },
      {
        id: 6,
        todo: '吃饭',
        createTime: '16:35',
        status: 1,
      }
    ]
  }
])

</script>

<style scoped>
#personal-todo {
  background-color: #fff;
  height: 100%;
  margin: 15px 30px;
}
.func-button-list {
  /*margin-top: 5px;*/
}
.func-button-list *{
  margin-top: 10px;
  margin-left: 15px;
}
.el-button {
}
.add-input {
  display: inline-block;
  width: 200px !important;
}
.todo-wrapper {
  margin-top: 10px;
  margin-left: 20px;
}
.time {
  height: 36px;
  font-size: 20px;
  line-height: 36px;
  background-color: #fafafa;
  padding-left: 5px;
}
.todo-list {
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
</style>
