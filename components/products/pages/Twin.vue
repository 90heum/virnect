<template>
  <section class="twin-section" id="twinId">
    <!-- <intro-part :introSource="twinIntro"></intro-part> -->
    <span id="headingModuleTop" />
    <!-- <heading-module
      :category="$t('productsText.twinText.introText.category')"
      :title="$t('productsText.twinText.introText.title')"
      :contents="$t('productsText.twinText.introText.contents')"
    ></heading-module> -->
    <!-- <benefit-part
      :benefitArr="$t('productsText.twinText.benefitLists')"
    ></benefit-part> -->
    <!-- 제품개요~ -->
    <div class="overViewTwin">
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
                src="https://velog.velcdn.com/images/kyj0206/post/a093d711-5ab6-43e9-a55f-1686b3a56c45/image.png"
                alt="실시간 모니터링"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title1") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents1") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/2f434057-76ce-44f4-add8-0c22ca243216/image.png"
                alt="3D 모델 경량화로 웹 환경 구동"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title2") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents2") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/4917a77e-db49-489c-99bc-0f7c915dc254/image.png"
                alt="강력한 협업 시스템"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title3") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents3") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/8dcad46f-f757-4a25-be3c-ab59ce941656/image.png"
                alt="완벽한 설비 연동"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title4") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents4") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/9167e316-428a-4843-abac-efd11778055b/image.png"
                alt="다양한 모바일 디바이스 지원"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title5") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents5") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/c4eed5ed-3d3c-42db-abe7-902e30d4a7c1/image.png"
                alt="3D 모델 제작 서비스 제공"
            /></i>
            <p>{{ $t("productsText.twinSubText.Title6") }}</p>
            <p>{{ $t("productsText.twinSubText.Contents6") }}</p>
          </span>
        </span>
        <span id="headingModuleBottom" />
      </div>
    </div>

    <heading-module
      :category="$t('productsText.twinText.funcTitle.category')"
      :title="$t('productsText.twinText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.twinText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>
    <span id="functionPart" />
    <!-- 
    <effect-part
      :bg="effectBG"
      :category="$t('productsText.twinText.effectHeading.category')"
      :title="$t('productsText.twinText.effectHeading.title')"
      :contents="$t('productsText.twinText.effectHeading.contents')"
      :effectArr="$t('productsText.twinText.effectList')"
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
          :supportArr="$t('productsText.twinText.supportList')"
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
            :contents="$t('productsText.twinText.exampleContents')"
          ></heading-module>

          <new-module :bannerData="$t('productsText.arsdkText.exampleList')"
                      :title="`Twin이`"/>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.twinText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div> -->

    <new-effect-part
      :title="title"
      :effectList="effectList.twin"
      :moduleData="moduleData.twin"
    />
    <new-bg-slide
      :bannerData="moduleData.twin"
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
import NewEffectPart from "~/components/products/partials/NewEffectPart.vue";
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
      twinIntro: {
        logo: "../images/pages/products/logo-products-bi-twin",
        // img: '../images/pages/products/img-products-twin',
        // intoBtn: 'https://download.virnect.com/make',
        videoLink: this.$t("productsText.twinText.videoLink"),
      },
      functionIconImage:
        "../images/pages/products/img-products-twin-function-0",
      effectBG:
        "https://image.virnect.com/images/pages/products/img-twin-effect",
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
@import "~/assets/css/pages/overviewTwin.scss";
</style>
