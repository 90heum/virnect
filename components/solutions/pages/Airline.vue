<template>
  <section class="airline-section">
    <heading-module
      :category="$t('solutionText.airlineText.airlineTitle.category')"
      :title="$t('solutionText.airlineText.airlineTitle.title')"
      :contents="$t('solutionText.airlineText.airlineTitle.contents')"
    ></heading-module>

    <issue-part
      :image="issueBg"
      :title="$t('solutionText.airlineText.issueTitle')"
      :issueArr="$t('solutionText.airlineText.issueList')"
      :bannerImg="
        $t('global.myUrl') +
        `/images/pages/solution/img-solution-airline-top.png`
      "
    ></issue-part>

    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <heading-module
      :category="$t('solutionText.airlineText.infographicText.category')"
      :title="$t('solutionText.airlineText.infographicText.title')"
      :contents="$t('solutionText.airlineText.infographicText.contents')"
    ></heading-module>

    <infographic-part
      :image="$t('solutionText.airlineText.infographicText.image')"
      :infographicArr="
        $t('solutionText.airlineText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographic-part>

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <!-- <div class="example-wrap">
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
              :exampleArr="$t('solutionText.airlineText.exampleList')"
            ></example-part>
          </div>
          <new-module :bannerData="$t('solutionText.airlineText.exampleList')"
            :title="`Twin이`"/>
        </div>
      </section>
    </div> -->
    <!-- <bg-slide-part
      :bgExampleArr="$t('solutionText.airlineText.bgExampleList')"
    ></bg-slide-part> -->

    <new-bg-slide
      :bannerData="moduleData.airline"
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

import {filedData, moduleData} from "~/components/products/NewBgPartData.js";
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
      filedData,
      moduleData,
      issueBg: "../images/pages/solution/img-solution-airline-top",
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
        [
          {
            thumb: "../images/pages/solution/info-airline-01-01.png",
            img: "../images/pages/solution/info-airline-01-01@3x.png",
            iconList: ["../images/common/logo-remote"],
          },
        ],
        [
          {
            thumb: "../images/pages/solution/info-airline-01-02.png",
            img: "../images/pages/solution/info-airline-01-02@3x.png",
            iconList: ["../images/common/logo-view"],
          },
        ],
        [],
        [],
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
</style>
