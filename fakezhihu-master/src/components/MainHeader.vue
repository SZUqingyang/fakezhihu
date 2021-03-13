<template>
  <header class="main-header">
    <div class="header-content">
      <router-link class="m-r-20" :to="{name: 'home'}">
        <img class="logo" src="./../assets/imgs/logo.png" alt="">
      </router-link>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">话题</el-menu-item>
      </el-menu>
      <el-input v-model="input" placeholder="请输入内容" size="small" class="search m-r-10">
        <i slot="append" class="el-icon-search"></i>
      </el-input>
      <el-button type="primary" icon="el-icon-search">提问</el-button>

      <!-- 根据isLogin展示隐藏 -->
      <div class="userInfo" v-if="!isLogin">
        <router-link :to="{name:'signup'}">登录</router-link>
      </div>
      <!-- 根据isLogin展示隐藏 -->
      <div class="userInfo" v-if="isLogin">
        <i class="el-icon-bell m-r-40"></i>
        <i class="el-icon-message m-r-40"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            <span class="iconfont icon-morentouxiang"></span>
            {{this.name}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="goTopersonalPage">
                <i class="el-icon-user"></i>
                我的主页
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div>
                <i class="el-icon-setting"></i>
                设置
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="logout">
                <i class="el-icon-circle-close"></i>
                退出
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
  import request from '@/service';
  export default {
    data() {
      return {
        activeIndex: '1',
        input: '',
        isLogin: false,
        name: '',
      };
    },

    // 页面渲染时的钩子函数
    mounted() {
      this.checkLogin();
    },

    methods: {
      // 检查是否登录的方法
      async checkLogin() {
        await request.get('/users/checkLogin')
          .then((res) => {
            if (res.status == 200) {
              this.name = res.data.name;
              this.isLogin = true;
            } else {
              this.$router.push({name: 'signup'});
              this.isLogin = false;
            }
          });
      },

      async logout() {
        await request.post('/users/logout')
          .then((res) => {
            if (res.status === 200) {
              this.name = res.data.name;
              this.$message.success('注销成功');
              this.name = '';
              this.$router.push({name:'signup'});
            } else {
              this.$message.error('注销失败，请稍后重试！');
            }
          });
      },

      handleSelect(key) {
        console.log(key);
      },
      goTopersonalPage() {
        console.log('跳转');
      },
    },
  };
</script>