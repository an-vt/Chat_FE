<template>
  <div v-if="currentUser">
    <Layout />
  </div>
  <div v-if="!currentUser">
    <Login />
  </div>
</template>

<script lang="ts">
import Login from '@/layouts/login/index.vue'
import Layout from '@/components/Layout.vue'
import { useStore } from './store'

export default {
  components: {
    Login,
    Layout
  },
  computed: {
    currentUser() {
      const store = useStore()

      return store.state.authModule.token
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  box-sizing border-box
  position relative
  width 100%
  height 100%
}
</style>
