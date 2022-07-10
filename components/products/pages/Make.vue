<template>
  <section class="make-section">
    <!-- <intro-part :introSource="makeIntro"></intro-part> -->
    <heading-module
      :category="$t('productsText.makeText.introText.category')"
      :title="$t('productsText.makeText.introText.title')"
      :contents="$t('productsText.makeText.introText.contents')"
    ></heading-module>

    <benefit-part
      :benefitArr="$t('productsText.makeText.benefitLists')"
    ></benefit-part>
    <heading-module
      :category="$t('productsText.makeText.funcTitle.category')"
      :title="$t('productsText.makeText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.makeText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>

    <effect-part
      :bg="effectBG"
      :category="$t('productsText.makeText.effectHeading.category')"
      :title="$t('productsText.makeText.effectHeading.title')"
      :contents="$t('productsText.makeText.effectHeading.contents')"
      :effectArr="$t('productsText.makeText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
    ></effect-part>

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
        </div> 
      </section>
    </div> -->

    <bg-slide-part
      :bgExampleArr="$t('productsText.makeText.bgExampleList')"
    ></bg-slide-part>
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

import headingModule from "../../modules/Heading";
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
  },
  data() {
    return {
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
        "~assets/images/pages/products/img-products-remote-function-0",
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
</style>
