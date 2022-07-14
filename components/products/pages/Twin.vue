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
          <p>제품개요</p>
          <h2>현장을 디지털로 복제하여 상황을 예측하고 관리합니다</h2>
          <span>
            VIRNECT Twin은 산업 현장을 스캐닝 및 모델링으로 디지털화하고 이를
            실제 데이터와 연동하여, 산업 현장의 운영 상태 및 프로세스를
            <p>
              모니터링할 수 있는 제품입니다. 설비 및 현장 프로세스 전반을 예측,
              통제, 관리하여 운영을 최적화합니다.
            </p>
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/a093d711-5ab6-43e9-a55f-1686b3a56c45/image.png"
                alt="실시간 모니터링"
            /></i>
            <p>실시간 모니터링</p>
            <p>설비 데이터와 현장 영상은 물론 작업자 및</p>
            <p>장비의 위치 현황 등을 가상 모델에서</p>
            <p>실시간으로 모니터링할 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/2f434057-76ce-44f4-add8-0c22ca243216/image.png"
                alt="3D 모델 경량화로 웹 환경 구동"
            /></i>
            <p>3D 모델 경량화로 웹 환경 구동</p>
            <p>버넥트만의 3D 시각화 프로세스로 용량이 큰</p>
            <p>3D 데이터를 경량화하여, 다양한 디바이스에서 접근이</p>
            <p>가능한 웹 환경에서 구동할 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/4917a77e-db49-489c-99bc-0f7c915dc254/image.png"
                alt="강력한 협업 시스템"
            /></i>
            <p>강력한 협업 시스템</p>
            <p>버넥트 이외 다른 제품들과 연계하여 XR 원격지원,</p>
            <p>매뉴얼 제작, 작업 현황 열람 등 강력한</p>
            <p>협업 시스템을 구축할 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/8dcad46f-f757-4a25-be3c-ab59ce941656/image.png"
                alt="완벽한 설비 연동"
            /></i>
            <p>완벽한 설비 연동</p>
            <p>2D HMI 화면인식 기술을 이용해 네트워크와</p>
            <p>단절된 기존 아날로그 방식의 설비까지</p>
            <p>데이터화 하여 연동할 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/9167e316-428a-4843-abac-efd11778055b/image.png"
                alt="다양한 모바일 디바이스 지원"
            /></i>
            <p>다양한 모바일 디바이스 지원</p>
            <p>전용 앱을 설치할 필요 없이 웹 환경에서</p>
            <p>이용할 수 있어 PC, 태블릿 등 다양한 디바이스에서</p>
            <p>사용할 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/c4eed5ed-3d3c-42db-abe7-902e30d4a7c1/image.png"
                alt="3D 모델 제작 서비스 제공"
            /></i>
            <p>3D 모델 제작 서비스 제공</p>
            <p>가상의 산업현장을 구축하기 위해 필요한</p>
            <p>산업 설비 및 장비 등을 간편하게 3D 모델로 제작할 수</p>
            <p>있는 3D 스캐닝 서비스를 제공합니다.</p>
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
