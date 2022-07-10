<template>
  <section class="oil-section">
    <heading-module
      :category="$t('solutionText.oilText.oilTitle.category')"
      :title="$t('solutionText.oilText.oilTitle.title')"
      :contents="$t('solutionText.oilText.oilTitle.contents')"
    ></heading-module>

    <issue-part
      :image="issueBg"
      :title="$t('solutionText.oilText.issueTitle')"
      :issueArr="$t('solutionText.oilText.issueList')"
      :bannerImg="
        $t('global.myUrl') +
        `/images/pages/solution/img-solution-chemical-top.png`
      "
    ></issue-part>

    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <heading-module
      :category="$t('solutionText.oilText.infographicText.category')"
      :title="$t('solutionText.oilText.infographicText.title')"
      :contents="$t('solutionText.oilText.infographicText.contents')"
    ></heading-module>

    <infographicPart
      :image="$t('solutionText.oilText.infographicText.image')"
      :infographicArr="
        $t('solutionText.oilText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographicPart>

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>
    <!-- <bg-slide-part
      :bgExampleArr="$t('solutionText.oilText.bgExampleList')"
    ></bg-slide-part> -->
        <new-bg-slide
      :bannerData="moduleData.oil"
      :title="`Twin이`"
    ></new-bg-slide>
    <offer-part
      :title="$t('solutionText.offerText.title')"
      :contents="$t('solutionText.offerText.contents')"
      :lists="$t('solutionText.offerText.array')"
    ></offer-part>
  </section>
</template>

<script>
import issuePart from "../partials/IssuePart";
import bgNormalPart from "../partials/BgNormalPart";
import infographicPart from "~/components/solutions/partials/InfographicPart";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";
import bgSlidePart from "../../products/partials/BgSlidePart";
import headingModule from "../../modules/Heading";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";
import {filedData, moduleData} from "~/components/products/NewBgPartData.js";
export default {
  components: {
    issuePart,
    bgNormalPart,
    infographicPart,
    roiPart,
    offerPart,
    bgSlidePart,
    headingModule,
    NewBgSlide,
  },
  data() {
    return {
      filedData,
      moduleData,
      issueBg: "../images/pages/solution/img-solution-chemical-top",
      infographicBtn: [
        [
          {
            name: "VIRNECT Make",
            router: "make",
          },
          {
            name: "VIRNECT View",
            router: "view",
          },
        ],
        [
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
          {
            name: "VIRNECT View",
            router: "view",
          },
        ],
        [
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
          {
            name: "VIRNECT Remote",
            router: "remote",
          },
        ],
        [
          {
            name: "VIRNECT Make",
            router: "make",
          },
          {
            name: "VIRNECT View",
            router: "view",
          },
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
        ],
      ],
      exampleAlign: "left",
      solutionGellary: [
        [],
        [
          {
            thumb: "../images/pages/solution/info-chemical-02-01.png",
            img: "../images/pages/solution/info-chemical-02-01@3x.png",
            iconList: ["../images/common/logo-make"],
          },
        ],
        [],
        [
          {
            thumb: "../images/pages/solution/info-chemical-02-02.png",
            img: "../images/pages/solution/info-chemical-02-02@3x.png",
            iconList: ["../images/common/logo-remote"],
          },
        ],
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
</style>
