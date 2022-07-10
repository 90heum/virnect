<template>
  <section class="remote-section">
    <!-- <intro-part :introSource="remoteIntro"></intro-part> -->
    <!-- <heading-module
      :category="$t('productsText.remoteText.introText.category')"
      :title="$t('productsText.remoteText.introText.title')"
      :contents="$t('productsText.remoteText.introText.contents')"
    ></heading-module> -->

    <!-- <benefit-part
      :benefitArr="$t('productsText.remoteText.benefitLists')"
    ></benefit-part> -->

    <heading-module
      :category="$t('productsText.remoteText.funcTitle.category')"
      :title="$t('productsText.remoteText.funcTitle.title')"
      :id="remoteHeadingModuleId"
    ></heading-module>

    <function-part
      :functionArr="$t('productsText.remoteText.functionLists')"
      :iconImage="functionIconImage"
      :id="remoteFunctionPartId"
    ></function-part>

    <!-- <effect-part
      :bg="effectBG"
      :category="$t('productsText.remoteText.effectHeading.category')"
      :title="$t('productsText.remoteText.effectHeading.title')"
      :contents="$t('productsText.remoteText.effectHeading.contents')"
      :effectArr="$t('productsText.remoteText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
      :id="`remoteEffectPartId`"
    ></effect-part> -->
    <!-- <new-effect-part
      :title="title"
      :effectList="effectList.remote"
      :moduleData="moduleData.remote"
    /> -->

    <!-- <section class="divide-section">
      <heading-module
        :align="supportTitle.align"
        :category="$t('productsText.supportTitle.category')"
        :title="$t('productsText.supportTitle.title')"
        :contents="$t('productsText.supportTitle.contents')"
      ></heading-module>

      <div class="divide-contents-section">
        <support-part
          :supportArr="$t('productsText.remoteText.supportList')"
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
            :contents="$t('productsText.remoteText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.remoteText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div> -->
    <!-- <div class="example-style">
      <new-module :bannerData="bannerData"
                  :title="`Remote가`"/>
    </div> -->
    <!-- <new-bg-slide
      :bannerData="moduleData.remote"
      :title="`Remote가`"
    ></new-bg-slide> -->
    <new-effect-part
      :title="title"
      :effectList="effectList.view"
      :moduleData="moduleData.view"
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
import functionPart from "../partials/FunctionPart.vue";
import effectPart from "../partials/EffectPart.vue";
import supportPart from "../partials/SupportPart";
import examplePart from "../partials/ExamplePart";
import bgSlidePart from "../partials/BgSlidePart.vue";
import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";
import NewEffectPart from "~/components/products/partials/NewEffectPart.vue";
import { filedData, moduleData } from "~/components/products/newModuleData.js";
import { title, effectList } from "~/components/products/newEffectPartData.js";

const bannerData = [
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/50d63145-9f5d-4634-8450-14fe2928485b/image.png",
    alt: "삼성SDS",
    title: "철도 차량 교육 훈련 및 정비 관리 지원",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/6723d6c9-eae0-48c5-bc36-9eafb8580414/image.png",
    alt: "미래시티",
    title: "발전소 설비 점검 및 유지보수 지원",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/99aab915-de88-4603-bb61-28416693be39/image.png",
    alt: "미래시티",
    title: "상세하고 정확한 장비 조작 가이드",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/623662f6-c25b-4475-b2bf-cea6e3e3747f/image.png",
    alt: "미래시티",
    title: "해외 제조 사업장 품질 관리",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/991c2d52-58d1-4b89-9da5-9a1eb9e32c1f/image.png",
    alt: "미래시티",
    title: "상세하고 정확한 장비 조작 가이드",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/991c2d52-58d1-4b89-9da5-9a1eb9e32c1f/image.png",
    alt: "미래시티",
    title: "장기/대규모 건설 시공 과정 중 안정적인 커뮤니케이션 지원",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/11b70aeb-659a-4d2e-bf63-09bc7a5cbd44/image.png",
    alt: "미래시티",
    title: "해외 원격 근무자 대체 도입 지원",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/8f37e236-8ad8-457c-b207-938aa560e182/image.png",
    alt: "미래시티",
    title: "MICE 행사 진행 시 온라인 도슨트/원격지원",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/3b2fa29f-317c-4dc1-8ead-04cd75ef93bf/image.png",
    alt: "미래시티",
    title: "건설 플랜트 신축 현장 시운전 원격 지원",
  },
  {
    src: "https://velog.velcdn.com/images/kyj0206/post/50d63145-9f5d-4634-8450-14fe2928485b/image.png",
    alt: "미래시티",
    title: "철도 차량 교육 훈련 및 정비 관리 지원",
  },
];
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
    NewModule,
    NewBgSlide,
    NewEffectPart,
  },
  data() {
    return {
      effectList,
      title,
      filedData,
      moduleData,
      bannerData,
      remoteIntro: {
        logo: "../images/pages/products/logo-products-bi-remote",
        // img: '../images/pages/products/img-products-remote',
        // intoBtn: `${window.urls['remote']}`,
        intoBtn: `${"remote"}`,
        btnText: `Remote ${this.$t("global.shortcut")}`,
        videoLink:
          "https://player.vimeo.com/external/560735983.hd.mp4?s=e14e93e201c67212624d232508ddcad911d7d617&profile_id=174",
      },
      functionIconImage:
        "~assets/images/pages/products/img-products-remote-function-0",
      effectBG: "~assets/images/pages/products/img-remote-effect.png",
      supportTitle: {
        align: "left",
        btnText: "Pricing",
      },
      exampleAlign: "left",
    };
  },
  methods: {
    popupToggle() {
      this.videoPopup = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
</style>
