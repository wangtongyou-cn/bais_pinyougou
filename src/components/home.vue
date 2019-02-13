<template>
  <el-container class="container">
    <el-header>
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="图片加载失败">
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <a href="#" class="logout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.container {
  height: 100%;
  background-color: #b3c0d1;
}
.aside {
  background-color: yellow;
}

.main {
  background-color: green;
}
.middle {
  line-height: 60px;
  text-align: center;
  color: #ffffff;
}
.logout {
  line-height: 60px;
  text-decoration: none;
}
</style>
