<template>
  <transition name="slide">
    <div class="music-list"></div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'singerdetail',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    console.log(this.singer)
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  .music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
