<template>
  <section class="twin-section">
    <intro-part :introSource="twinIntro"></intro-part>
    <heading-module
      :category="$t('productsText.twinText.introText.category')"
      :title="$t('productsText.twinText.introText.title')"
      :contents="$t('productsText.twinText.introText.contents')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.twinText.benefitLists')"
    ></benefit-part>
    <heading-module
      :category="$t('productsText.twinText.funcTitle.category')"
      :title="$t('productsText.twinText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.twinText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>

    <effect-part
      :bg="effectBG"
      :category="$t('productsText.twinText.effectHeading.category')"
      :title="$t('productsText.twinText.effectHeading.title')"
      :contents="$t('productsText.twinText.effectHeading.contents')"
      :effectArr="$t('productsText.twinText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
    ></effect-part>

    <section class="divide-section">
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
    </section>

    <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('productsText.exampleTitle.category')"
            :title="$t('productsText.exampleTitle.title')"
            :contents="$t('productsText.twinText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.twinText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div>

    <bg-slide-part
      :bgExampleArr="$t('productsText.twinText.bgExampleList')"
    ></bg-slide-part>
  </section>
</template>

<script>
import introPart from '../partials/IntroducePart'
import benefitPart from '../partials/BenefitPart'
import functionPart from '../partials/FunctionPart'
import effectPart from '../partials/EffectPart'
import supportPart from '../partials/SupportPart'
import examplePart from '../partials/ExamplePart'
import bgSlidePart from '../partials/BgSlidePart'

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
    headingModule,
  },
  data() {
    return {
      twinIntro: {
        logo: '../images/pages/products/logo-products-bi-twin',
        // img: '../images/pages/products/img-products-twin',
        // intoBtn: 'https://download.virnect.com/make',
        videoLink: this.$t('productsText.twinText.videoLink'),
      },
      functionIconImage:
        '../images/pages/products/img-products-twin-function-0',
      effectBG:
        'https://image.virnect.com/images/pages/products/img-twin-effect',
      supportTitle: {
        align: 'left',
        btnText: 'Pricing',
      },
      exampleAlign: 'left',
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/css/pages/products.scss';
</style>
