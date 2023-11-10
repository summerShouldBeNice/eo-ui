<template>
  <div id="root-user-manage">


    <section>
      <div class="button-group">

        <el-input
            v-model="searchText"
            placeholder="搜索词"
            class="input-with-select"
            style="width: 380px"
        >
          <template #prepend>
            <el-select v-model="selectedOption" placeholder="选项" style="width: 120px">
              <el-option label="模糊匹配" value="1" />
              <el-option label="正则匹配" value="2" />
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="Top Left prompts info"
                  placement="top-start"
              >
                <el-option label="公式匹配" value="3" />
              </el-tooltip>

            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>

        <!-- 刷新按钮 -->
        <el-button @click="handleRefresh">刷新</el-button>

        <!--新增按钮-->
        <el-button @click="showAddDialog">新增</el-button>

      </div>

      {{testData}}

      <!--用户信息table-->
      <el-table :data="tableData" stripe style="width: 100%" >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="username" label="用户名" show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="nickName" label="昵称" show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="phonenumber" label="手机号" show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="sex" :formatter="sexFormat" label="性别" />
        <el-table-column prop="avatar" label="头像" show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="status" :formatter="stateFormat" label="状态" />
        <el-table-column prop="createBy" label="创建人"  show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="createTime" :formatter="dateFormat" label="创建时间" show-overflow-tooltip="true" min-width="130"/>
        <el-table-column prop="updateBy" label="修改人" show-overflow-tooltip="true" min-width="100"/>
        <el-table-column prop="updateTime" :formatter="dateFormat" label="修改时间" show-overflow-tooltip="true" min-width="130"/>
        <el-table-column prop="delFlag" label="删除标记" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="showDetails">详情</el-button
            >
            <el-button link type="warning" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <section class="pagination-section">
      <el-pagination
          v-model:current-page="searchFormData.pageNow"
          v-model:page-size="searchFormData.pageSize"
          :page-sizes="[15, 20, 25, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </section>

  </div>

  <!--用户详细信息dialog-->
  <el-dialog v-model="dialogFormVisible" title="详细信息">
    <el-form :model="detailsForm">
      <el-form-item label="编号" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.id" autocomplete="off" disabled />
      </el-form-item>
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="用户角色" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.roleName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.phonenumber" autocomplete="off" />
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.sex" autocomplete="off" />
      </el-form-item>
      <el-form-item label="头像" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.avatar" autocomplete="off" />
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.status" autocomplete="off" />
      </el-form-item>
      <el-form-item label="创建人" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.createBy" autocomplete="off" disabled/>
      </el-form-item>
      <el-form-item label="创建时间" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.createTime" autocomplete="off" disabled/>
      </el-form-item>
      <el-form-item label="修改人" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.updateBy" autocomplete="off" disabled/>
      </el-form-item>
      <el-form-item label="修改时间" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.updateTime" autocomplete="off" disabled/>
      </el-form-item>
      <el-form-item label="删除标记" :label-width="formLabelWidth">
        <el-input v-model="detailsForm.delFlag" autocomplete="off" disabled/>
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

  <!--新增用户dialog-->
  <el-dialog v-model="addDialogFormVisible" title="新增用户">
    <el-form :model="addUserForm">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="用户角色" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.roleName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.phonenumber" autocomplete="off" />
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.sex" autocomplete="off" />
      </el-form-item>
      <el-form-item label="头像" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.avatar" autocomplete="off" />
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-input v-model="addUserForm.status" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleAddUser">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import moment from "moment";
import {Search} from "@element-plus/icons";
import {doGet, appJsonPost, formPost} from "@/network/axios";

// 表格数据
let tableData = ref("")

let tableTotal = ref("")

// 搜索表单
let searchFormData = reactive({
  pageNow: 1,
  pageSize: 15,
  searchWord: ''
})

let testData = ref("")

// 搜索选项
let selectedOption = ref("")

// 搜索文本
let searchText = ref("")

// details dialog显示
let dialogFormVisible = ref(false)

// add dialog显示
let addDialogFormVisible = ref(false)

// details dialog里的form
let detailsForm = reactive({
  id: '',
  username: '',
  email: '',
  nickName: '',
  roleName: '',
  status: '',
  phonenumber: '',
  sex: '',
  avatar: '',
  createBy: '',
  createTime: '',
  updateBy: '',
  updateTime: '',
  delFlag: ''
})

// add dialog里的form
let addUserForm = reactive({
  username: '',
  password: '',
  email: '',
  nickName: '',
  roleName: '',
  status: '',
  phonenumber: '',
  sex: '',
  avatar: '',
  createBy: '',
  createTime: '',
  updateBy: '',
  updateTime: '',
  delFlag: ''
})

// dialog里的form的长度
let formLabelWidth = '140px'

// 格式化时间
const dateFormat = (row, column) => {
  const date = row[column.property]
  if (date === undefined || date == null || date == '') {
    return ''
  }
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}

// 格式化状态
const stateFormat = (row, column) => {
  const date = row[column.property]
  if (date === undefined) {
    return ''
  }
  return date === 1 ? '正常' : '禁用'
}

// 格式化性别
const sexFormat = (row, column) => {
  const date = row[column.property]
  if (date === undefined) {
    return ''
  }
  return date === 1 ? '男' : '女'
}

// 刷新按钮
const handleRefresh = () => {
  loadTable()
}

// 显示新增dialog
const showAddDialog = () => {
  addDialogFormVisible.value = !addDialogFormVisible.value
}

// 显示详情（显示dialog框）
const showDetails = () => {
  dialogFormVisible.value = !dialogFormVisible.value
}

const loadTable = (()=> {
  appJsonPost({
    url: "/manage/user/selectPage",
    data: searchFormData
  }).then(result => {
    console.log(result)
    tableData.value = result.data
    tableTotal.value = result.total
  })

  // doGet({
  //   url: "/manage/user/selectAll"
  // }).then(result => {
  //   console.log(result)
  //   testData.value = result
  // })
})

onMounted(() => {
  loadTable()
})

// 添加用户
const handleAddUser = () => {
  appJsonPost({
    url: "/manage/user/addUser",
    data: addUserForm
  }).then(result => {
    console.log("add1111")
    console.log(result)
  })
}

</script>

<style scoped>
#root-user-manage {
  background-color: #999;
  height: 100%;
  /*margin: 15px 30px;*/
}
.button-group {
  padding-left: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
}
.pagination-section {
  background-color: #fff;
}
</style>
