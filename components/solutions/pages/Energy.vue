<template>
  <section class="energy-section">
    <heading-module
      :category="$t('solutionText.energyText.motorTitle.category')"
      :title="$t('solutionText.energyText.motorTitle.title')"
      :contents="$t('solutionText.energyText.motorTitle.contents')"
    ></heading-module>

    <issue-part
      :image="issueBg"
      :title="$t('solutionText.energyText.issueTitle')"
      :issueArr="$t('solutionText.energyText.issueList')"
      :bannerImg="`https://virnect.com/images/pages/solution/img-solution-energy-top.png`"
    ></issue-part>

    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <heading-module
      :category="$t('solutionText.energyText.infographicText.category')"
      :title="$t('solutionText.energyText.infographicText.title')"
      :contents="$t('solutionText.energyText.infographicText.contents')"
    ></heading-module>

    <infographic-part
      :image="$t('solutionText.energyText.infographicText.image')"
      :infographicArr="
        $t('solutionText.energyText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographic-part>

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('solutionText.exampleTitle.category')"
            :title="$t('solutionText.exampleTitle.title')"
            :contents="$t('solutionText.exampleTitle.contents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('solutionText.energyText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div>
    <bg-slide-part
      :bgExampleArr="$t('solutionText.energyText.bgExampleList')"
    ></bg-slide-part>

    <offer-part
      :title="$t('solutionText.offerText.title')"
      :contents="$t('solutionText.offerText.contents')"
      :lists="$t('solutionText.offerText.array')"
    ></offer-part>
  </section>
</template>

<script>
import issuePart from '../partials/IssuePart.vue'
import bgNormalPart from '../partials/BgNormalPart'
import infographicPart from '../partials/InfographicPart'
import roiPart from '../partials/RoiPart'
import offerPart from '../partials/OfferPart'

import examplePart from '../../products/partials/ExamplePart.vue'
import bgSlidePart from '../../products/partials/BgSlidePart.vue'

import headingModule from '../../modules/Heading'
export default {
  components: {
    issuePart,
    bgNormalPart,
    infographicPart,
    roiPart,
    offerPart,
    examplePart,
    bgSlidePart,
    headingModule,
  },
  data() {
    return {
      issueBg: 'https://virnect.com/images/pages/solution/img-solution-energy-top',
      infographicBtn: [
        [
          {
            name: 'VIRNECT Twin',
            router: 'twin',
          },
        ],
        [
          {
            name: 'VIRNECT Twin',
            router: 'twin',
          },
          {
            name: 'VIRNECT View',
            router: 'view',
          },
        ],
        [
          {
            name: 'VIRNECT Remote',
            router: 'remote',
          },
        ],
        [
          {
            name: 'VIRNECT Make',
            router: 'make',
          },
          {
            name: 'VIRNECT View',
            router: 'view',
          },
        ],
      ],
      exampleAlign: 'left',
      solutionGellary: [
        [
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-01-01.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-01-01@3x.png',
            iconList: ['https://virnect.com/images/common/logo-arsdk'],
          },
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-01-02.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-01-02@3x.png',
            iconList: ['https://virnect.com/images/common/logo-twin'],
          },
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-01-03.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-01-03@3x.png',
            iconList: ['https://virnect.com/images/common/logo-twin'],
          },
        ],
        [
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-02-01.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-02-01@3x.png',
            iconList: ['https://virnect.com/images/common/logo-make'],
          },
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-02-02.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-02-02@3x.png',
            iconList: ['https://virnect.com/images/common/logo-make'],
          },
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-02-03.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-02-03@3x.png',
            iconList: ['https://virnect.com/images/common/logo-view'],
          },
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-02-04.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-02-04@3x.png',
            iconList: ['https://virnect.com/images/common/logo-remote'],
          },
        ],
        [
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-03-01.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-03-01@3x.png',
            iconList: ['https://virnect.com/images/common/logo-remote'],
          },
        ],
        [
          {
            thumb: 'https://virnect.com/images/pages/solution/info-energy-04-01.png',
            img: 'https://virnect.com/images/pages/solution/info-energy-04-01@3x.png',
            iconList: ['https://virnect.com/images/common/logo-view'],
          },
        ],
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/css/pages/products.scss';
</style>
