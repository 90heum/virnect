<template>
  <section class="arsdk-section">
    <!-- <intro-part :introSource="arsdkIntro"></intro-part> -->
    <heading-module
      :category="$t('productsText.arsdkText.introText.category')"
      :title="$t('productsText.arsdkText.introText.title')"
      :contents="$t('productsText.arsdkText.introText.contents')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.arsdkText.benefitLists')"
    ></benefit-part>
    <heading-module
      :category="$t('productsText.arsdkText.funcTitle.category')"
      :title="$t('productsText.arsdkText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.arsdkText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>

    <effect-part
      :bg="effectBG"
      :category="$t('productsText.arsdkText.effectHeading.category')"
      :title="$t('productsText.arsdkText.effectHeading.title')"
      :contents="$t('productsText.arsdkText.effectHeading.contents')"
      :effectArr="$t('productsText.arsdkText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
    ></effect-part>

    <!-- <section class="divide-section">
      <heading-module
        :align="supportTitle.align"
        :category="$t('productsText.supportTitle.category')"
        :title="$t('productsText.supportTitle.title')"
        :contents="$t('productsText.supportTitle.contents')"
      ></heading-module>

      <div class="divide-contents-section">
        <support-part
          :supportArr="$t('productsText.arsdkText.supportList')"
        ></support-part>
      </div>
    </section> -->

    <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('productsText.exampleTitle.category')"
            :title="$t('productsText.exampleTitle.title')"
            :contents="$t('productsText.arsdkText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.arsdkText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div>

    <bg-slide-part
      :bgExampleArr="$t('productsText.arsdkText.bgExampleList')"
    ></bg-slide-part>
  </section>
</template>

<script>
import introPart from "../partials/IntroducePart";
import benefitPart from "../partials/BenefitPart";
import functionPart from "../partials/FunctionPart2";
import effectPart from "../partials/EffectPart";
import supportPart from "../partials/SupportPart";
import examplePart from "../partials/ExamplePart";
import bgSlidePart from "../partials/BgSlidePart";

import headingModule from "../../modules/Heading";
export default {
  components: {
    introPart,
    benefitPart,
    functionPart,
    effectPart,
    supportPart,
    examplePart,
    bgSlidePart,
    headingModule,
  },
  data() {
    return {
      arsdkIntro: {
        logo: "../images/pages/products/logo-products-bi-track",
        // intoBtn: `${window.urls['download']}/track`,
        site: `http://track.virnect.com/`,
        btnText: this.$t("global.downloadIntoBtn"),
        img: "../images/pages/products/img-products-ar-sdk",
      },
      functionIconImage:
        "../images/pages/products/img-products-ar-sdk-function-0",
      effectBG: "../images/pages/products/img-ar-sdk-effect",
      supportTitle: {
        align: "left",
        btnText: "Pricing",
      },
      exampleAlign: "left",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
</style>
