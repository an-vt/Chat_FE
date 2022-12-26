<template>
  <el-form
    label-position="left"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
    class="login-form"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from '../../store'
import { useRouter } from 'vue-router'

const formLabelAlign = reactive({
  name: 'abcd',
  region: '',
  type: ''
})

export default defineComponent({
  name: 'Login',
  data() {
    return { formLabelAlign }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const onSubmit = () => {
      store.commit('authModule/LOGIN')
      router.push('/home')
    }

    return { onSubmit }
  }
})
</script>

<style scoped lang="stylus">
.login-form {
width 500px
margin 50px auto 0 auto
border 1px solid #ccc
border-radius 6px
padding 16px 12px 0 12px
}
</style>
