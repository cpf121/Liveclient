<template>
  <el-container>
    <el-header class="header" style="height:50px;z-index:1000">
      <div class="nav">
        <div class="guidecla">
          <el-avatar class="home" size="medium" icon="el-icon-s-home" @click.native="tohome"></el-avatar>
          <el-button type="text" style="color:white;" @click="beguide">Join as a Guide!</el-button>
        </div>
        <div class="welcomecla"></div>
        <div class="logincla">
          <el-button type="text" style="color:white;">Login</el-button>
          <el-button @click="signup">Sign Up</el-button>
          <el-avatar style="margin-left:10px;" size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        </div>
      </div>
    </el-header>
    <el-main ref="main">
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-main>
  </el-container>
    
    
</template>
<script>
export default {
  name:'Main',
  data(){
    return{}
  },
  methods:{
    beguide(){
      this.$router.push({name:'guidesign'})
    },
    signup(){
      this.$router.push({name:'viewsign'})
    },
    tohome(){
      this.$router.push({name:'home'})
    }
  }
}
</script>
<style lang="scss">
body{
  margin: 0 auto;
}
#app{
  .header{
    box-shadow: 0 1px 2px rgba(0,0,0,.15),0 0 2px rgba(0,0,0,.1);
    background: rgb(32, 23, 49);
    position: sticky;
    top: 0;
    color: white;
    .nav{
      height: 100%;
      padding: 0 10px;
      display: flex;
      align-items: stretch;
      flex-wrap: nowrap;
      .guidecla,.welcomecla,.logincla{
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        align-items: center;
      }
      .guidecla .home{
        margin-left:10px;
        margin-right:4px;
      }
      .guidecla .home:hover{
        cursor:pointer;
      }
      .logincla{
        margin-right: 20px;
        justify-content:flex-end;
      }
    }
  }
  .el-header{
    padding: 0;
  }
  .el-main{
    padding: 2px 0;
  }
}
</style>

