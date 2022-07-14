<template>
  <section class="epc-section">
    <!-- <heading-module
      :category="$t('solutionText.epcText.epcTitle.category')"
      :title="$t('solutionText.epcText.epcTitle.title')"
      :contents="$t('solutionText.epcText.epcTitle.contents')"
    ></heading-module>

    <issue-part
      :image="issueBg"
      :title="$t('solutionText.epcText.issueTitle')"
      :issueArr="$t('solutionText.epcText.issueList')"
      :bannerImg="
        $t('global.myUrl') + `/images/pages/solution/img-solution-epc-top.png`
      "
    ></issue-part> -->
    <section class="EccChallenge">
      <div class="EccChallengeWrap">
        <div class="EccTit">
          <h2>{{ $t("ValueText.epcText.topText.title1") }}</h2>
          <span>
            {{ $t("ValueText.epcText.topText.contents1") }}
          </span>
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/436a0f11-e6d3-4dcb-86c1-83f4b425a5e1/image.png"
              alt="인프라 이미지"
            />
          </i>
        </div>
        <div class="EccContWrap">
          <div class="EccCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>{{ $t("ValueText.epcText.challengesText.title1") }}</p>
                  <span>
                    {{ $t("ValueText.epcText.challengesText.contents1") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.epcText.challengesText.title2") }}</p>
                  <span>
                    {{ $t("ValueText.epcText.challengesText.contents2") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.epcText.challengesText.title3") }}</p>
                  <span>
                    {{ $t("ValueText.epcText.challengesText.contents3") }}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="ecc_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>{{ $t("ValueText.epcText.challengesText.title4") }}</p>
              <span>
                {{ $t("ValueText.epcText.challengesText.contents4") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.epcText.challengesText.title5") }}</p>
              <span>
                {{ $t("ValueText.epcText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.epcText.challengesText.title6") }}</p>
              <span>
                {{ $t("ValueText.epcText.challengesText.contents6") }}
              </span>
            </li>
          </ul>
        </span>
      </div>
    </section>

    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <!-- 신규모듈 들어갈자리 -->

    <!-- <heading-module
      :category="$t('solutionText.epcText.infographicText.category')"
      :title="$t('solutionText.epcText.infographicText.title')"
      :contents="$t('solutionText.epcText.infographicText.contents')"
    ></heading-module>

    <infographic-part
      :image="$t('solutionText.epcText.infographicText.image')"
      :infographicArr="
        $t('solutionText.epcText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographic-part> -->

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <new-bg-slide :bannerData="moduleData.epc" :title="`Twin이`"></new-bg-slide>
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
import infographicPart from "../partials/InfographicPart.vue";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";

import examplePart from "../../products/partials/ExamplePart";
import bgSlidePart from "../../products/partials/BgSlidePart";

import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";

import headingModule from "../../modules/Heading";
import { filedData, moduleData } from "~/components/products/NewBgPartData.js";
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
    NewBgSlide,
  },
  data() {
    return {
      filedData,
      moduleData,
      issueBg: "../images/pages/solution/img-solution-epc-top",
      infographicBtn: [
        [
          {
            name: "VIRNECT Twin",
            router: "twin",
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
            name: "VIRNECT Remote",
            router: "remote",
          },
        ],
      ],
      exampleAlign: "left",
      solutionGellary: [
        [],
        [
          {
            thumb: "../images/pages/solution/thumb-view-usecase-01.png",
            img: "../images/pages/solution/view-usecase-01@3x.png",
            iconList: ["../images/common/logo-arsdk"],
          },
        ],
        [
          {
            thumb: "../images/pages/solution/info-epc-03-01.png",
            img: "../images/pages/solution/info-epc-03-01@3x.png",
            iconList: ["../images/common/logo-view"],
          },
          {
            thumb: "../images/pages/solution/info-epc-03-02.png",
            img: "../images/pages/solution/info-epc-03-02@3x.png",
            iconList: ["../images/common/logo-make"],
          },
        ],
        [
          {
            thumb: "../images/pages/solution/info-epc-04-01.png",
            img: "../images/pages/solution/info-epc-04-01@3x.png",
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
@import "~/assets/css/pages/eccChallenges.scss";
@import "~/assets/css/pages/eccS&E.scss";
</style>
