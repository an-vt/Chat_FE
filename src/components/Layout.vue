<template>
  <main class="main-container">
    <div class="top">
      <Header />
    </div>

    <div class="bottom">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Header
  }
})
</script>

<style scoped lang="stylus">

@import "../style/basic.styl"

$top-height = 60px
$left-side-width = 80px

.main-container {
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  width 100%
  height 100%
  background $second-background-color
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between

  .top {
    position relative
    box-sizing border-box
    width 100%
    height $top-height
    margin-bottom 10px
  }

  .bottom {
    flex 1
  }
}

.page-links {
  a {
    font-weight: bold;
    margin: 0 20px;
  }
}
</style>
