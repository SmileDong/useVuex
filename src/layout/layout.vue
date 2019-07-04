<template>
  <div class='layoutWapper'>
    <el-container>
      <el-aside width="auto">
        <div class='logoDiv'>
          <el-button @click='tollge' class='logo'>logo</el-button>
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-menu-item index="1">
            <router-link to="/home" tag='li' class="nav-link">
              <i class="el-icon-menu"></i>
              <span >导航一</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/page1" tag='li' class="nav-link">
              <i class="el-icon-menu"></i>
              <span >导航二</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default{
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    tollge () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped>
  .nav-link{
    width: 100%;
    height:100%;
  }
  .logoDiv{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #B3C0D1;
    box-sizing: border-box;
  }
  .logo{
    height: 100%;
    width: 64px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #fff;
    color: #333;
    height:100vh;
    text-align: center;
    border:none;
    border-right:0.5px solid #B3C0D1;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    /*text-align: center;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 198px;
    height:calc(100% - 60px)
  }
</style>
