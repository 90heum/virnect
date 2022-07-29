<template>
  <section class="products-section">
    <sub-menu-product />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section> -->
    <!-- <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <sub-banner class="aa" />

    <!-- 제품개요 -->
    <xr-solution />

    <!-- 제품특징 -->
    <product-property />
    <!-- 데이터 모듈 -->
    <dataModule />
    <!-- 기능소개 -->

    <remote-component />
    <!-- <tail-section
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section>
     -->
    <!-- <bottom-banner-remote /> -->
    <!-- <tailSection class="bb" /> -->
    <CtaModule />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import snbSection from "../../layouts/modules/Snb.vue";
import tailSection from "../../layouts/common/Tail.vue";
import remoteComponent from "../../components/products/pages/Remote.vue";
import SubBanner from "~/components/products/partials/subBanner.vue";
import XrSolution from "~/components/products/partials/XRSolution.vue";
// import XRSolution from "~/components/products/partials/XRSolution.vue";
import ProductProperty from "~/components/products/partials/productProperty.vue";
import BottomBannerRemote from "~/components/products/partials/bottomBannerRemote.vue";
import CtaModule from "~/components/main/ctaModule.vue";
import SubMenuProduct from "~/components/products/partials/subMenuProduct.vue";

export default {
  head: {
    title: 'VIRNECT Remote - XR 원격 협업 솔루션',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT Remote의 실시간 원격협업 서비스를 통해 산업 현장에 필요한 정보와 이슈를 실시간으로 공유하여 언제 어디서든 업무 대응이 가능합니다. 쉽고 빠르게 협업이 가능하며 기존의 익숙한 업무 환경을 그대로 유지하여 업무의 정확성과 효율성을 높일 수 있습니다.'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    remoteComponent,
    SubBanner,
    XrSolution,
    // XRSolution,
    ProductProperty,
    BottomBannerRemote,
    CtaModule,
    SubMenuProduct,
  },
  data() {
    return {
      visualText: {
        // 상단 비주얼 텍스트
        image:
          "https://image.virnect.com/images/pages/solution/img-products-main.png",
        category: "Products",
      },
      tailText: {
        // 막줄 꼬리 텍스트
        bg: "assets/images/pages/products/img-products-banner.png",
        blue: "SOLUTIONS",
        blueRouter: "infra_resource",
        grey: "Contact",
        greyRouter: "inquiry",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
.aa {
  margin: 0 auto;
  //padding-top: 60px;
}
.bb {
  //margin-top: 100px;
}
</style>
