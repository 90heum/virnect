<template>
  <section class="motor-section">
    <heading-module
      :category="$t('solutionText.motorText.motorTitle.category')"
      :title="$t('solutionText.motorText.motorTitle.title')"
      :contents="$t('solutionText.motorText.motorTitle.contents')"
    ></heading-module>

    <issue-part
      :image="issueBg"
      :title="$t('solutionText.motorText.issueTitle')"
      :issueArr="$t('solutionText.motorText.issueList')"
      :bannerImg="
        $t('global.myUrl') + `/images/pages/solution/img-solution-motor-top.png`
      "
    ></issue-part>
    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <heading-module
      :category="$t('solutionText.motorText.infographicText.category')"
      :title="$t('solutionText.motorText.infographicText.title')"
      :contents="$t('solutionText.motorText.infographicText.contents')"
    ></heading-module>

    <infographic-part
      :image="$t('solutionText.motorText.infographicText.image')"
      :infographicArr="
        $t('solutionText.motorText.infographicText.infographicList')
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

          <!-- <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('solutionText.motorText.exampleList')"
            ></example-part>
          </div> -->
          <new-module :bannerData="$t('solutionText.motorText.exampleList')"
            :title="`Twin이`"/>
        </div>
      </section>
    </div>
    <!-- <bg-slide-part
      :bgExampleArr="$t('solutionText.motorText.bgExampleList')"
    ></bg-slide-part> -->
    <new-bg-slide
      :bannerData="$t('solutionText.motorText.bgExampleList')"
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
import infographicPart from "../partials/InfographicPart";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";

import examplePart from "../../products/partials/ExamplePart";
import bgSlidePart from "../../products/partials/BgSlidePart";

import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";

import headingModule from "../../modules/Heading";
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
    NewModule,
    NewBgSlide
  },
  data() {
    return {
      issueBg: "../images/pages/solution/img-solution-motor-top",
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
        ],
        [
          {
            name: "VIRNECT Remote",
            router: "remote",
          },
          {
            name: "VIRNECT Twin",
            router: "twin",
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
        ],
      ],
      exampleAlign: "left",
      solutionGellary: [
        [
          {
            thumb: "../images/pages/solution/info-motor-01-01.png",
            img: "../images/pages/solution/info-motor-01-01@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-02.png",
            img: "../images/pages/solution/info-motor-01-02@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-03.png",
            img: "../images/pages/solution/info-motor-01-03@3x.png",
            iconList: ["../images/common/logo-arsdk"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-04.png",
            img: "../images/pages/solution/info-motor-01-04@3x.png",
            iconList: ["../images/common/logo-view"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-05.png",
            img: "../images/pages/solution/info-motor-01-05@3x.png",
            iconList: ["../images/common/logo-view"],
          },
        ],
        [
          {
            thumb: "../images/pages/solution/info-motor-02-01.png",
            img: "../images/pages/solution/info-motor-02-01@3x.png",
            iconList: ["../images/common/logo-view"],
          },
        ],
        [],
        [
          {
            thumb: "../images/pages/solution/info-motor-04-01.png",
            img: "../images/pages/solution/info-motor-04-01@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-04-03.png",
            img: "../images/pages/solution/info-motor-04-03@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-04-02.png",
            img: "../images/pages/solution/info-motor-04-02@3x.png",
            iconList: ["../images/common/logo-view"],
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
