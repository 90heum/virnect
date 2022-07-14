<template>
  <section class="airline-section">
    <!-- 엔터 -->
    <!-- <heading-module
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
    ></issue-part> -->
    <section class="EnterChallenge">
      <div class="EnterChallengeWrap">
        <div class="EnterTit">
          <h2>
            {{ $t("ValueText.enterText.topText.title1") }}
            <p>{{ $t("ValueText.enterText.topText.title2") }}</p>
          </h2>
          <span>
            {{ $t("ValueText.enterText.topText.contents1") }}
            <p>
              {{ $t("ValueText.enterText.topText.contents2") }}
            </p>
          </span>
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/436a0f11-e6d3-4dcb-86c1-83f4b425a5e1/image.png"
              alt="인프라 이미지"
            />
          </i>
        </div>
        <div class="EnterContWrap">
          <div class="EnterCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>{{ $t("ValueText.enterText.challengesText.title1") }}</p>
                  <span>
                    {{ $t("ValueText.enterText.challengesText.contents1") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.enterText.challengesText.title2") }}</p>
                  <span>
                    {{ $t("ValueText.enterText.challengesText.contents2") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.enterText.challengesText.title3") }}</p>
                  <span>
                    {{ $t("ValueText.enterText.challengesText.contents3") }}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="enter_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>{{ $t("ValueText.enterText.challengesText.title4") }}</p>
              <span>
                {{ $t("ValueText.enterText.challengesText.contents4") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.enterText.challengesText.title5") }}</p>
              <span>
                {{ $t("ValueText.enterText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.enterText.challengesText.title6") }}</p>
              <span>
                {{ $t("ValueText.enterText.challengesText.contents6") }}
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

    <!-- 새로들어갈 자리 -->

    <!-- <heading-module
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
    ></infographic-part> -->

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

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
@import "~/assets/css/pages/enterChallenges.scss";
@import "~/assets/css/pages/enterS&E.scss";
</style>
