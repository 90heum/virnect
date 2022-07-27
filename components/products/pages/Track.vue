<template>
  <section class="arsdk-section" id="trackId">
    <!-- <intro-part :introSource="arsdkIntro"></intro-part> -->
    <span id="headingModuleTop" />
    <!-- <heading-module
      :category="$t('productsText.arsdkText.introText.category')"
      :title="$t('productsText.arsdkText.introText.title')"
      :contents="$t('productsText.arsdkText.introText.contents')"
    ></heading-module> -->
    <!-- <benefit-part
      :benefitArr="$t('productsText.arsdkText.benefitLists')"
    ></benefit-part> -->

    <div class="overViewTrack">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>{{ $t("productsText.twinTitle.category") }}</p>
          <h2>{{ $t("productsText.twinTitle.title") }}</h2>
          <span>
            {{ $t("productsText.twinTitle.contents") }}
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/d47cf553-7a4f-4e94-b696-dff128df0eae/image.png"
                alt="우수한 검출 성능"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title1") }}</p>
            <p>
              {{ $t("productsText.twinSubText.Contents1") }}
            </p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/ef06c2ae-8193-498e-8a81-cceebcd9be6a/image.png"
                alt="경량 디바이스 최적화"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title2") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents2") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/b6d72214-1b00-4b81-a786-580203193731/image.png"
                alt="수정 가능한 소스코드"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title3") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents3") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/545eccf4-9784-419d-a579-d6f6e3fd2a95/image.png"
                alt="다양한 타겟 지원"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title4") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents4") }}</p>
          </span>
          <span id="headingModuleBottom" />
        </span>
      </div>
    </div>
    <heading-module
      :category="$t('productsText.arsdkText.funcTitle.category')"
      :title="$t('productsText.arsdkText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.arsdkText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>
    <span id="functionPart" />
    <!-- <effect-part
      :bg="effectBG"
      :category="$t('productsText.arsdkText.effectHeading.category')"
      :title="$t('productsText.arsdkText.effectHeading.title')"
      :contents="$t('productsText.arsdkText.effectHeading.contents')"
      :effectArr="$t('productsText.arsdkText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
    ></effect-part> -->

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

    <!-- <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('productsText.exampleTitle.category')"
            :title="$t('productsText.exampleTitle.title')"
            :contents="$t('productsText.arsdkText.exampleContents')"
          ></heading-module>

          <new-module :bannerData="$t('productsText.arsdkText.exampleList')"
                      :title="`Track이`"/>
          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.arsdkText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div> -->

    <!-- <bg-slide-part
      :bgExampleArr="$t('productsText.arsdkText.bgExampleList')"
    ></bg-slide-part> -->
    <new-effect-part
      :title="title"
      :effectList="effectList.track"
      :moduleData="moduleData.track"
    />
    <new-bg-slide
      :bannerData="moduleData.view"
      :title="`Remote가`"
    ></new-bg-slide>
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
import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";

import headingModule from "../../modules/Heading";
import NewEffectPart from "~/components/products/partials/NewEffectTrack.vue";
import { filedData, moduleData } from "~/components/products/newModuleData.js";
import { title, effectList } from "~/components/products/newEffectPartData.js";

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
    NewModule,
    NewBgSlide,
    NewEffectPart,
  },
  data() {
    return {
      title,
      effectList,
      filedData,
      moduleData,
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
@import "~/assets/css/pages/overviewTrack.scss";
</style>
