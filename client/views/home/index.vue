<template>
  <div :class="$style.root">
    <el-container>
      <el-container>
        <el-header :class="$style.headerMenu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>hello world</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Header from ''
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" module>
  .root{
    .headerMenu{
      padding 0
    }
  }
</style>

<style lang="stylus" scoped>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 300px;
  }
</style>


