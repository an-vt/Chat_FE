<template>
  <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple">a</div></el-col>
    <el-col :span="18"><div class="grid-content ep-bg-purple">b</div></el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped lang="stylus">
.el-row {
  margin-bottom  50px;
}
.grid-content {
  height: 50px
  background-color red
}
</style>
