<template>
  <section>
    <!-- COMPANY -->
    <div class="NewsBanner">
      <div class="NewsBannerInner">
        <p>Products</p>
        <h2>{{$t(`productsText.mainBanner.title`)}}</h2>
        <span v-html="$t(`productsText.mainBanner.text`)">
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    title: '산업용 XR 전문 솔루션 소개 - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT의 제품은 산업현장의 생산적인 커뮤니케이션과 효율적인 업무 방식을 지원합니다. 확장현실(XR) 원천기술과 다양한 IT 기술들을 융합하여 고객의 이슈를 해결하는 맞춤형 제품 솔루션을 제공하고 있습니다.'
      }
    ],
  },
}
</script>
<style lang="scss" scoped>
@import "~/assets/css/modules/productsBanner.scss";
</style>