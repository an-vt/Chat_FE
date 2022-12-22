<template>
  <div v-if="tokenAuthenticated">
    <Main />
  </div>
  <div v-if="!tokenAuthenticated">
    <Login />
  </div>
</template>

<script lang="ts">
import Login from '@/views/Login.vue'
import Main from '@/components/Main.vue'

export default {
  components: {
    Login,
    Main
  },
  data() {
    return {
      tokenAuthenticated: true
    }
  },
  mounted() {
    console.log('this', this)
    console.log('mounted')
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
