<template>
  <section class="products-section">
    <subMenuTrack />
    <SubBannerTrack class="bb" />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section> -->
    <!-- <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <track-component />
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
import trackComponent from "../../components/products/pages/Track.vue";
import SubBannerTrack from "~/components/products/partials/subBannerTrack.vue";
import subMenuTrack from "~/components/products/partials/subMenuTrack.vue";
import CtaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: 'VIRNECT Track - 검출/추적용 XR 개발 엔진',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT Track은 빠르고 정확하게 객체를 학습, 인식 검출, 추적하는 버넥트 자체 개발 XR 엔진입니다. 버넥트 XR 제품들에 탑재되어 뛰어난 성능과 운영 퍼포먼스를 제공하고 있습니다.'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    trackComponent,
    SubBannerTrack,
    subMenuTrack,
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
