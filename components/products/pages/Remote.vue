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

    <effect-part
      :bg="effectBG"
      :category="$t('productsText.remoteText.effectHeading.category')"
      :title="$t('productsText.remoteText.effectHeading.title')"
      :contents="$t('productsText.remoteText.effectHeading.contents')"
      :effectArr="$t('productsText.remoteText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
      :id="`remoteEffectPartId`"
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
    
    <bg-slide-part
      :bgExampleArr="$t('productsText.remoteText.bgExampleList')"
      :id="remoteBgExampleArrId"
    ></bg-slide-part>
  </section>
</template>

<script>
import introPart from '../partials/IntroducePart'
import benefitPart from '../partials/BenefitPart'
import functionPart from '../partials/FunctionPart.vue'
import effectPart from '../partials/EffectPart.vue'
import supportPart from '../partials/SupportPart'
import examplePart from '../partials/ExamplePart'
import bgSlidePart from '../partials/BgSlidePart.vue'


import headingModule from '../../modules/Heading'
export default {
  components: {
    introPart,
    benefitPart,
    functionPart,
    effectPart,
    supportPart,
    examplePart,
    bgSlidePart,
    headingModule
  },
  data() {
    return {
      remoteIntro: {
        logo: '../images/pages/products/logo-products-bi-remote',
        // img: '../images/pages/products/img-products-remote',
        // intoBtn: `${window.urls['remote']}`,
        intoBtn: `${'remote'}`,
        btnText: `Remote ${this.$t('global.shortcut')}`,
        videoLink:
          'https://player.vimeo.com/external/560735983.hd.mp4?s=e14e93e201c67212624d232508ddcad911d7d617&profile_id=174',
      },
      functionIconImage:
        '~assets/images/pages/products/img-products-remote-function-0',
      effectBG: '~assets/images/pages/products/img-remote-effect.png',
      supportTitle: {
        align: 'left',
        btnText: 'Pricing',
      },
      exampleAlign: 'left',
    }
  },
  methods: {
    popupToggle() {
      this.videoPopup = true
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/css/pages/products.scss';
</style>
