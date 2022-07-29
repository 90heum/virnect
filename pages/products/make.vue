<template>
  <section class="products-section">
    <SubMenuMake />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section> -->
    <sub-banner-make class="bb" />
    <!-- <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <make-component />
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
import makeComponent from "../../components/products/pages/Make.vue";
import SubBannerMake from "~/components/products/partials/subBannerMake.vue";
import SubMenuMake from "~/components/products/partials/subMenuMake.vue";
import CtaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: 'VIRNECT Make - 확장현실(XR) 콘텐츠 제작 솔루션',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT Make는 XR 콘텐츠로 제작 도구로, 비전문가도 마우스 클릭으로 XR 콘텐츠 제작이 가능합니다. 또한 문자, 사진, 비디오, 3D 모델은 물론 기존 작업 문서, 설비 도면 등을 그대로 제작에 빠르게 활용할 수 있습니다.'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    makeComponent,
    SubBannerMake,
    SubMenuMake,
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
