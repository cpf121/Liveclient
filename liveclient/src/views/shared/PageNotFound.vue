<template>
  <el-row class="container" type="flex" justify="center" align="middle">
    <label>Page not found</label>
  </el-row>
</template>
<script>
export default {
  name: "PageNotFound"
};
</script>
<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  flex-direction: column;
  label {
    font-size: 32px;
    color: red;
  }
}
</style>