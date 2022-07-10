<template>
  <section class="view-section">
    <!-- <intro-part :introSource="viewIntro"></intro-part> -->
    <heading-module
      :category="$t('productsText.viewText.introText.category')"
      :title="$t('productsText.viewText.introText.title')"
      :contents="$t('productsText.viewText.introText.contents')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.viewText.benefitLists')"
    ></benefit-part>
    <heading-module
      :category="$t('productsText.viewText.funcTitle.category')"
      :title="$t('productsText.viewText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.viewText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>

    <effect-part
      :bg="effectBG"
      :category="$t('productsText.viewText.effectHeading.category')"
      :title="$t('productsText.viewText.effectHeading.title')"
      :contents="$t('productsText.viewText.effectHeading.contents')"
      :effectArr="$t('productsText.viewText.effectList')"
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
          :supportArr="$t('productsText.viewText.supportList')"
        ></support-part>
      </div>
    </section> -->

    <!-- <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('productsText.exampleTitle.category')"
            :title="$t('productsText.exampleTitle.title')"
            :contents="$t('productsText.viewText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.viewText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div> -->

    <bg-slide-part
      :bgExampleArr="$t('productsText.viewText.bgExampleList')"
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
      viewIntro: {
        logo: "../images/pages/products/logo-products-bi-view",
        // img: '../images/pages/products/img-products-view',
        // intoBtn: `${window.urls['download']}/view`,
        btnText: this.$t("global.downloadIntoBtn"),
        videoLink:
          "https://player.vimeo.com/external/427962056.hd.mp4?s=4c405dbd984c474798385f7ccc95c1b38de0e7db&profile_id=174",
      },
      functionIconImage:
        "../images/pages/products/img-products-view-function-0",
      effectBG: "../images/pages/products/img-view-effect",
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
