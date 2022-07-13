<template>
  <section class="view-section" id="viewId">
    <!-- <intro-part :introSource="viewIntro"></intro-part> -->
    <span id="headingModuleTop" />
    <!-- <heading-module
      :category="$t('productsText.viewText.introText.category')"
      :title="$t('productsText.viewText.introText.title')"
      :contents="$t('productsText.viewText.introText.contents')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.viewText.benefitLists')"
    ></benefit-part> -->

    <div class="overViewView">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>제품개요</p>
          <h2>
            XR 콘텐츠를 언제 어디서나 원하는 위치에서 상용화된 기기로 즉시
            확인가능
          </h2>
          <span>
            VIRNECT View는 확장현실(XR) 정보 및 데이터 시각화 솔루션입니다.
            상용회된 기기로 작업 매뉴얼, 안전 가이드 등의 업무 정보와
            <p>
              운영 데이터를 현장에서 바로 확인할 수 있으며, 신속한 의사 결정과
              빠른 대응이 가능합니다.
            </p>
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/03189562-2552-4290-883b-977b8f3aca79/image.png"
                alt="Check it out right away"
            /></i>
            <p>Check it out right away</p>
            <p>상용 디바이스로 제작한</p>
            <p>XR 콘텐츠를 바로 확인!</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/bd7cbdad-7d8f-4f2a-8ba7-fe5eaa82d0ce/image.png"
                alt="Save Time & Efficiency"
            /></i>
            <p>Save Time & Efficiency</p>
            <p>작업 시간 단축 및 효율적인</p>
            <p>현장업무 활용성</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/138ea655-8c32-4f13-a2c8-8a401996cff6/image.png"
                alt="Expandability & Customize"
            /></i>
            <p>Expandability & Customize</p>
            <p>데이터 연동 및 커스텀마이즈를</p>
            <p>통한 확장성 제공(구축형)</p>
          </span>
        </span>
        <span class="overViewBox">
          <ul>
            <li>
              <p>2,569</p>
              <p>디운로드 수</p>
            </li>
            <li>
              <p>38</p>
              <p>Enterprise</p>
            </li>
            <li>
              <p>51</p>
              <p>계약건수</p>
            </li>
          </ul>
        </span>
      </div>
    </div>

    <!-- sdaf -->
    <div class="featuresView">
      <div class="featuresWrap">
        <span class="title">
          <p>제품특징</p>
        </span>
        <div class="contents">
          <span class="featuresTit">
            <h2>
              타사 제품 대비 접근성, 사용성, 확장성 <br />
              이 높습니다!
            </h2>
            <ul>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트1"
                /></i>
                <p>
                  하나의 타겟으로 여러 개의 콘텐츠를 선택 시각화 (연관된 콘텐츠
                  목록을 제공)
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트2"
                /></i>
                <p>보조현실/증강현실/가상현실 유형을 선택하여 시각화</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트3"
                /></i>
                <p>
                  접근 권한 설정을 통해 특정 사용자에게만 콘텐츠 확인 권한 부여
                  가능
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>
                  고객사 데이터 연동 및 조직 구조 인증환경(SSO)에 맞춰 커스텀
                  가능(구축형)
                </p>
              </li>
            </ul>
          </span>
          <span class="featuresCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/d6f996f0-0c60-40f8-8ca7-3b123e0ab1d1/image.png"
              alt="features"
            />
          </span>
        </div>
      </div>
    </div>
    <!-- dsadsf -->
    <span id="headingModuleBottom" />
    <heading-module
      :category="$t('productsText.viewText.funcTitle.category')"
      :title="$t('productsText.viewText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.viewText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>
    <span id="functionPart" />

    <!-- <effect-part
      :bg="effectBG"
      :category="$t('productsText.viewText.effectHeading.category')"
      :title="$t('productsText.viewText.effectHeading.title')"
      :contents="$t('productsText.viewText.effectHeading.contents')"
      :effectArr="$t('productsText.viewText.effectList')"
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
          <new-module :bannerData="$t('productsText.viewText.exampleList')"
                      :title="`View가`"/>
        </div>
      </section>
    </div> -->
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
import functionPart from "../partials/FunctionPart2";
import effectPart from "../partials/EffectPart";
import supportPart from "../partials/SupportPart";
import examplePart from "../partials/ExamplePart";
import bgSlidePart from "../partials/BgSlidePart";
import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";
import NewEffectPart from "~/components/products/partials/NewEffectPart.vue";
import { filedData, moduleData } from "~/components/products/newModuleData.js";
import { title, effectList } from "~/components/products/newEffectPartData.js";
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
      title,
      effectList,
      filedData,
      moduleData,
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
@import "~/assets/css/pages/overviewView.scss";
@import "~/assets/css/pages/FeaturesView.scss";
</style>
