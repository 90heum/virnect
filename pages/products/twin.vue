<template>
  <section class="products-section">
    <subMenuTwin />
    <sub-banner-twin class="bb" />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section>
    <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <twin-component />
    </transition>
    <!-- <tail-section
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section> -->
    <!-- <tailSection class="aa" /> -->
    <CtaModule />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import snbSection from "../../layouts/modules/Snb.vue";
import tailSection from "../../layouts/common/Tail.vue";
import twinComponent from "../../components/products/pages/Twin.vue";
import SubBannerTwin from "~/components/products/partials/subBannerTwin.vue";
import subMenuTwin from "~/components/products/partials/subMenuTwin.vue";
import CtaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: 'VIRNECT Twin - XR 기반 3D 현장 관리 솔루션',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT Twin은 산업 현장을 가상 모델로 재현하고 이를 실제 데이터와 연동하여, 산업 현장의 운영 상태 및 프로세스를 모니터링할 수 있는 제품입니다'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    twinComponent,
    SubBannerTwin,
    subMenuTwin,
    CtaModule,
  },
  data() {
    return {
      visualText: {
        // 상단 비주얼 텍스트
        image:
          "https://image.virnect.com/images/pages/products/img-products-main.png",
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
  //margin-top: 100px;
}
.bb {
  margin: 0 auto;
}
</style>
