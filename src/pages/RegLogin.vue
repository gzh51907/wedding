<template>
  <div id="RegLogin">
    <h1>
      <img src="../assets/webbing.png" alt @click="goto('/home')"/>
    </h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username" label-width="90px">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="90px">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="请输入6到12位有效密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" label-width="90px">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button type="primary" @click="LoginForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//上面的数据在下面要导出
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        //验证两次不一致
        callback(new Error("两次输入密码不一致!"));
      } else {
        //验证两次一致
        callback();
      }
    };

    // const checkUsername = async (rule, value, callback) => {
    //   let { data } = await this.$axios.get("http://localhost:1907/user/check", {
    //     params: {
    //       username: this.ruleForm.username
    //     }
    //   });
    //   if (data.code === 0) {
    //     callback(new Error("该用户名已被占用，换一个"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        username: "",
        password: "",
        ckeckPass: ""
      },
      rules: {
        password: [
          { required: true, message: "你没输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        checkPass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请确认密码", trigger: "blur" }
        ],
        username: [
          { required: true, message: "你没输入用户名", trigger: "blur" }
          // { validator: checkUsername, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    goto(path){
      this.$router.push(path)
    },
    submitForm() {
      this.$refs.ruleForm.validate(async valid => {
        let { data } = await this.$wedding.get(
          "datas/checkUSN",
          {
            params: {
              colName: "user",
              username: this.ruleForm.username
            }
          }
        );
        // 校验用户名是否存在
        if (data.code === 1) {
          this.$alert("亲，您的名字太受欢迎了，换一个试试吧", "温馨提示", {
            confirmButtonText: "确定",
            center:true,
            callback: () => {
              this.$message({
                type: "info",
                message: `注册失败`
              });
            }
          });
        } else {
          if (valid) {
            // alert("恭喜你,验证全部通过");
            let { username, password } = this.ruleForm;
            let { data } = await this.$wedding.post(
              "datas/createdata",
              { username, password, colName: "user" }
            );
            if (data.code === 1) {
              this.$alert("恭喜你注册成功", "温馨提示", {
                confirmButtonText: "好的",
                center:true,
                callback: () => {
                  this.$message({
                    type: "info",
                    message: `注册完成`
                  });
                }
              });
              //用户名不存在
              this.$router.replace({
                name: "RegLogin",
                params: { username },
                query: { username }
              });
            } else {
              this.$alert("注册失败", "温馨提示", {
                confirmButtonText: "确定",
                center:true,
                callback: () => {
                  this.$message({
                    type: "info",
                    message: `注册完成`
                  });
                }
              });
            }
          } else {
            return false;
          }
        }
      });
    },
    LoginForm() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          let { username, password } = this.ruleForm;
          let { data } = await this.$wedding.get(
            "datas/checkUSN",
            {
              params: {
                username,
                password,
                colName: "user"
              }
            }
          );
          if (data.code === 1) {
            //用户存在，跳转
            this.$router.push({ name: "home", params: { username } });
            // 把token写入localstorage

            localStorage.setItem("username", username);
          } else {
            this.$alert("请检查输入的账号密码是否正确!!!", "温馨提示", {
              confirmButtonText: "确定",
              center:true,
              callback: () => {
                this.$message({
                  type: "info",
                  message: `登录失败`
                });
              }
            });
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
#RegLogin {
  h1 {
    height: 70px;
    text-align: center;
    margin: 50px 0 25px 0;
    img{
      height: 100%;
      margin: auto;
    }
  }
  .el-form-item {
    margin-right: 30px;
  }
}
</style>