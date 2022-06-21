<template>
  <section
    id="tailSection"
    class="tail-section dark"
    :style="`background-image : url(require(${bg}))`"
  >
    <p v-html="mention"></p>
    <button
      class="blue-btn"
      v-if="blueBtn"
      @click="
        $router.push({ name: blueRouter })
        scrollContent()
      "
    >
      {{ blueBtn }}
    </button>
    <button
      class="grey-btn"
      v-if="greyBtn"
      @click="
        $router.push({ name: greyRouter })
        scrollContent()
      "
    >
      {{ greyBtn }}
    </button>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'
// import mixin from 'mixins/mixin' << 모바일 체크용인듯
export default {
  // mixins: [mixin],
  props: {
    bg: String,
    mention: String,
    blueBtn: String,
    blueRouter: String,
    greyBtn: String,
    greyRouter: String,
  },
  computed: {
    // ...mapGetters(['isMobile']),
    // mobileImg() {
    //   if (!this.isMobile) return this.bg
    //   else return `${this.bg}-m@2x`
    // },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/global/tail.scss';
</style>
