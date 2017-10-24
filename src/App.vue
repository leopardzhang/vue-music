<template>
  <div id="app">
    <header>
      <lc-header></lc-header>
    </header>
    <nav>
      <lc-nav></lc-nav>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import LcHeader from 'components/lc-header/lc-header'
import LcNav from 'components/nav/nav'

export default {
  components: {
    LcHeader,
    LcNav
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
  #app
    padding-top: 88px
    header, nav
      position: fixed
      left: 0
      width: 100%
      z-index: 10
      background: $color-background
    header
      top: 0
      z-index: 10
    nav
      top: 44px
</style>
