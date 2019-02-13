<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="success">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 登录请求
    async handleLogin() {
      // 前提:api-server-> node app.js
      // 请求没发送?
      // 1. url写错?
      // 2. axios导入失败?
      // console.log(this.$http);
      // 3. ?客户端一点问题没有 -> 服务端cmd卡死->重启->回车

      // 目前代码: 异步操作的结果必须出现.then方法的里面-> 嵌套
      // 希望: 不想在函数嵌套里面处理res
      // 需要使用ES7的新特性: async await
      // const res = this.$http.post();
      // console.log(res);

      const res = await this.$http.post(`login`, this.formdata);
      console.log(res);
      const {
        data: {
          data: { token },
          meta: { msg, status }
        }
      } = res;

      if (status === 200) {
        // 把正确的用户的token保存起来
        // 存值
        localStorage.setItem("token", token);
        // 取值
        // const aa = localStorage.getItem("token");
        // console.log(aa);

        // 渲染home.vue <- 改标识 <- js改标识
        this.$router.push({
          name: "home"
        });
      } else {
        // 提示框 -> UI
        this.$message.error(msg);
      }

      /*
      // 处理异步操作的结果res
       .then(res => {
          console.log(res);
          const {
            data: {
              data,
              meta: { msg, status }
            }
          } = res;
          if (status === 200) {
            // 渲染home.vue <- 改标识 <- js改标识
            this.$router.push({
              name: "home"
            });
          } else {
            // 提示框 -> UI
            this.$message.error(msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
      */
    }
  }
};
</script>

<style>
.login-wrap {
  /* 注意: 百分比布局 父元素height:100% */
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  background-color: #ffffff;
  border-radius: 5px;
  /* 开发 */
  width: 400px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
</style>

