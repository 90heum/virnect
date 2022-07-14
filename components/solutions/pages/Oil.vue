<template>
  <section class="oil-section">
    <!-- <heading-module
      :category="$t('solutionText.oilText.oilTitle.category')"
      :title="$t('solutionText.oilText.oilTitle.title')"
      :contents="$t('solutionText.oilText.oilTitle.contents')"
    ></heading-module> -->

    <!-- <issue-part
      :image="issueBg"
      :title="$t('solutionText.oilText.issueTitle')"
      :issueArr="$t('solutionText.oilText.issueList')"
      :bannerImg="
        $t('global.myUrl') +
        `/images/pages/solution/img-solution-chemical-top.png`
      "
    ></issue-part> -->
    <section class="ProduceChallenge">
      <div class="ProduceChallengeWrap">
        <div class="ProduceTit">
          <h2>
            {{ $t("ValueText.OilProduceText.topText.title1") }}
            <p>{{ $t("ValueText.OilProduceText.topText.title2") }}</p>
          </h2>
          <span>
            {{ $t("ValueText.OilProduceText.topText.contents1") }}
            <p>
              {{ $t("ValueText.OilProduceText.topText.contents2") }}
            </p>
          </span>
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/436a0f11-e6d3-4dcb-86c1-83f4b425a5e1/image.png"
              alt="인프라 이미지"
            />
          </i>
        </div>
        <div class="ProduceContWrap">
          <div class="ProduceCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>
                    {{ $t("ValueText.OilProduceText.challengesText.title1") }}
                  </p>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents1")
                    }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.OilProduceText.challengesText.title2") }}
                  </p>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents2")
                    }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.OilProduceText.challengesText.title3") }}
                  </p>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents3")
                    }}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="produce_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>
                {{ $t("ValueText.OilProduceText.challengesText.title4") }}
              </p>
              <span>
                {{ $t("ValueText.OilProduceText.challengesText.contents4") }}
              </span>
            </li>
            <li>
              <p>
                {{ $t("ValueText.OilProduceText.challengesText.title5") }}
              </p>
              <span>
                {{ $t("ValueText.OilProduceText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>
                {{ $t("ValueText.OilProduceText.challengesText.title6") }}
              </p>
              <span>
                {{ $t("ValueText.OilProduceText.challengesText.contents6") }}
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

    <!-- <heading-module
      :category="$t('solutionText.oilText.infographicText.category')"
      :title="$t('solutionText.oilText.infographicText.title')"
      :contents="$t('solutionText.oilText.infographicText.contents')"
    ></heading-module> -->
    <!-- 
    <infographicPart
      :image="$t('solutionText.oilText.infographicText.image')"
      :infographicArr="
        $t('solutionText.oilText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographicPart> -->

    <!-- 신규모듈 자리 -->

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <new-bg-slide :bannerData="moduleData.oil" :title="`Twin이`"></new-bg-slide>
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
import { filedData, moduleData } from "~/components/products/NewBgPartData.js";
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
@import "~/assets/css/pages/produceChallenges.scss";
@import "~/assets/css/pages/produceS&E.scss";
</style>
