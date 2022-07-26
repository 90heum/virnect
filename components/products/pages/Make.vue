<template>
  <section class="make-section" id="makeId">
    <!-- <intro-part :introSource="makeIntro"></intro-part> -->
    <span id="headingModuleTop" />
    <!-- <heading-module
      :category="$t('productsText.makeText.introText.category')"
      :title="$t('productsText.makeText.introText.title')"
      :contents="$t('productsText.makeText.introText.contents')"
    ></heading-module> -->
    <!-- 
    <benefit-part
      :benefitArr="$t('productsText.makeText.benefitLists')"
    ></benefit-part> -->

    <!-- 제품개요 -->
    <div class="overViewMake">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>{{ $t("productsText.makeSubTitle.category") }}</p>
          <h2>{{ $t("productsText.makeSubTitle.title") }}</h2>
          <span>
            {{ $t("productsText.makeSubTitle.contents") }}
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/e7e696f2-8017-40bb-ad77-9243d372adc3/image.png"
                alt="No Code and Simple"
            /></i>
            <p>No Code and Simple</p>
            <p>{{ $t("productsText.makeSubContent.noCode") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/d8325cfd-f225-4696-9104-ca4f90385db8/image.png"
                alt="Custom-made Content"
            /></i>
            <p>Custom-made Content</p>
            <p>{{ $t("productsText.makeSubContent.content") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/97103073-33e1-46cb-b560-2919935cbb42/image.png"
                alt="XR Device Accessibility"
            /></i>
            <p>XR Device Accessibility</p>
            <p>{{ $t("productsText.makeSubContent.accessibility") }}</p>
          </span>
        </span>
        <span class="overViewBox" id="featuresWrapId">
          <ul>
            <li>
              <p>2,569</p>
              <p>{{ $t("productsText.subBox.download") }}</p>
            </li>
            <li>
              <p>38</p>
              <p>{{ $t("productsText.subBox.current") }}</p>
            </li>
            <li>
              <p>51</p>
              <p>{{ $t("productsText.subBox.prject") }}</p>
            </li>
          </ul>
        </span>
      </div>
    </div>

    <!-- 기능소개 -->
    <div class="featuresMake">
      <div class="featuresWrap">
        <span class="title">
          <p>{{ $t("productsText.makeFeaturesText.category") }}</p>
        </span>
        <div class="contents">
          <span class="featuresTit">
            <h2>
              {{ $t("productsText.makeFeaturesText.title") }}
            </h2>
            <ul>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트1"
                /></i>
                <p>
                  {{ $t("productsText.makeFeaturesText.resources") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트2"
                /></i>
                <p>
                  {{ $t("productsText.makeFeaturesText.interface") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트3"
                /></i>
                <p>
                  {{ $t("productsText.makeFeaturesText.simplify") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>
                  {{ $t("productsText.makeFeaturesText.devices") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>{{ $t("productsText.makeFeaturesText.targets") }}</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>{{ $t("productsText.makeFeaturesText.ioT") }}</p>
              </li>
            </ul>
            <span id="headingModuleBottom" />
          </span>
          <span class="featuresCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/e0d52296-ef46-4e4d-9c6e-485ef6742765/image.png"
              alt="features"
            />
          </span>
        </div>
      </div>
    </div>

    <!-- ㅇㄹㅁㅇㄴㄹ -->
    <heading-module
      :category="$t('productsText.makeText.funcTitle.category')"
      :title="$t('productsText.makeText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.makeText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>
    <span id="functionPart" />
    <!-- <effect-part
      :bg="effectBG"
      :category="$t('productsText.makeText.effectHeading.category')"
      :title="$t('productsText.makeText.effectHeading.title')"
      :contents="$t('productsText.makeText.effectHeading.contents')"
      :effectArr="$t('productsText.makeText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
    ></effect-part> -->

    <div class="laptop-mockup" v-if="false">
      <article>
        <img :src="isMobile" class="mock-img" />
        <div class="half-wrap" v-if="!videoPlaying">
          <div>
            <button @click="video">
              <img src="~assets/images/pages/products/play-btn@2x.png" />
              <p>Watch Video</p>
            </button>
          </div>
        </div>
        <div class="video-wrap" v-if="videoPlaying">
          <iframe
            src="https://player.vimeo.com/video/326497813?autoplay=1&loop=1&autopause=0?음소거=1"
            width="862"
            height="540"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
      </article>
    </div>

    <!-- <section class="divide-section">
       <heading-module
        :align="supportTitle.align"
        :category="$t('productsText.supportTitle.category')"
        :title="$t('productsText.supportTitle.title')"
        :contents="$t('productsText.supportTitle.contents')"
      ></heading-module> 

      <div class="divide-contents-section">
        <support-part
          :supportArr="$t('productsText.makeText.supportList')"
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
            :contents="$t('productsText.makeText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.makeText.exampleList')"
            ></example-part>
          </div>
          <new-module :bannerData="$t('productsText.makeText.exampleList')"
                      :title="`Make가`"/>
        </div>
        </div> 
      </section>
    </div> -->

    <!-- <bg-slide-part
      :bgExampleArr="$t('productsText.makeText.bgExampleList')"
    ></bg-slide-part> -->
    <new-effect-part
      :title="title"
      :effectList="effectList.make"
      :moduleData="moduleData.make"
    />
    <new-bg-slide
      :bannerData="moduleData.view"
      :title="`Remote가`"
    ></new-bg-slide>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'

import introPart from "../partials/IntroducePart";
import benefitPart from "../partials/BenefitPart";
import functionPart from "../partials/FunctionPart2";
import effectPart from "../partials/EffectPart";
import supportPart from "../partials/SupportPart";
import examplePart from "../partials/ExamplePart";
import bgSlidePart from "../partials/BgSlidePart";
import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";
import NewEffectPart from "~/components/products/partials/NewEffectPartMake.vue";
import headingModule from "../../modules/Heading";
import { filedData, moduleData } from "~/components/products/newModuleData.js";
import { title, effectList } from "~/components/products/newEffectPartData.js";

export default {
  // mixins: [mixin],
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
      isMobile: false,
      makeIntro: {
        logo: "../images/pages/products/logo-products-bi-make",
        img: "../images/pages/products/img-products-make",
        // intoBtn: `${window.urls['download']}/make`,
        btnText: this.$t("global.downloadIntoBtn"),
        videoLink:
          "https://player.vimeo.com/external/560736136.hd.mp4?s=34d4f2557f02474e88d1c1450bbecf3ae5ebb8cb&profile_id=174",
      },
      functionIconImage:
        "~/assets/images/pages/products/functionImage/Make/Make1.png",
      effectBG: "../images/pages/products/img-make-effect",
      supportTitle: {
        align: "left",
        btnText: "Pricing",
      },
      exampleAlign: "left",
      videoPlaying: false,
    };
  },
  computed: {
    isMobile() {
      // if (!this.checkMobile()) return '../images/pages/products/video.png'
      // else return '../images/pages/products/video-m@2x.png'
    },
  },
  methods: {
    popupToggle() {
      this.videoPopup = true;
    },
    video() {
      this.videoPlaying = true;
      return;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/overviewMake.scss";
@import "~/assets/css/pages/FeaturesMake.scss";
</style>
