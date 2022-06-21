<template>
  <section class="offer-part">
    <p class="title" v-html="title"></p>
    <p class="contents" v-html="contents"></p>
    <ul>
      <li
        v-for="(list, idx) of lists"
        :key="idx"
        :class="{ active: active == idx }"
        @click="
          $router.push({ name: list.router })
          scrollReset()
        "
        @mouseenter="active = idx"
      >
        <p v-html="list.text"></p>
        <img :src="`${isMobile[idx]}.png`" />
      </li>
    </ul>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    title: String,
    contents: String,
    lists: Array,
  },
  data() {
    return {
      active: 0,
    }
  },
  computed: {
    isMobile() {
      let arr = []
      // for (let val of this.lists) {
      //   if (!this.checkMobile()) {
      //     arr.push(val.image)
      //   } else {
      //     arr.push(`${val.image}-m@2x`)
      //   }
      // }
      return arr
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/pages/products.scss';
.offer-part {
  margin-top: 180px;
  text-align: center;
  @include area-flex(1280px);
  @include default-text(#222, 38px);
  .title {
    margin-bottom: 16px;
    font-weight: bold;
    font-family: $noto;
    line-height: 1.51;
  }
  .contents {
    font-size: 16px;
    line-height: 1.78;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    text-align: left;
    li {
      position: relative;
      width: calc(100% / 3 - 28px);
      height: 160px;
      margin: 14px;
      padding: 20px 24px;
      border: 1px solid #e7eaef;
      border-radius: 1px;
      cursor: pointer;
      &.active {
        border: 1px solid rgba(255, 255, 255, 0);
        box-shadow: 0 2px 14px 0 rgba(220, 225, 232, 0.7);
      }
    }
    p {
      font-weight: 500;
      font-size: 17px;
      font-family: $noto;
      line-height: 1.43;
    }
  }
  img {
    position: absolute;
    right: 24px;
    bottom: 14px;
    width: 202px;
  }
  @media (max-width: $mobile) {
    margin-top: 120px;
    .contents {
      font-size: 15px;
    }
    ul {
      margin: 0 -6px;
      margin-top: 32px;
      li {
        width: calc(50% - 12px);
        margin: 6px;
        padding: 12px 16px;
        border: 1px solid rgba(255, 255, 255, 0);
        box-shadow: 0 2px 14px 0 rgba(220, 225, 232, 0.7);
      }
      p {
        font-size: 14px;
      }
    }
    img {
      right: auto;
      bottom: 10px;
      width: calc(100% - 32px);
    }
  }
}
</style>
