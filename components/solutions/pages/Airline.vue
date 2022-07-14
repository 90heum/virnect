<template>
  <section class="airline-section">
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
            엔터테인먼트에 적용된 XR 기술 사례를 확인하세요.<br />
            여러분의 서비스를 더욱 가치있게 만듭니다.
          </h2>
          <span>
            엔터테인먼트 분야에서 고객이 안전하게 콘텐츠를 경험을 하는데 있어
            현장감을 주기위한 몰입형 콘텐츠의 필요성이 점차 부각되고
            <p>
              있습니다. XR기술을 활용하면 창의적이고 실감나는 콘텐츠를 손쉽게
              즐길 수 있습니다.
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
                  <p>넓은 관람 동선과 관리비용</p>
                  <span>
                    관람 동선이 넓은 곳은 직접 둘러보며 체험하는데 있어,
                    이동시간과 노약자와 어린이가 편리하고 안전하게 즐길 수
                    있어야 합니다. 또한 문화 유적지/전시 체험관을 운영하는데
                    있어 문화재 관리 비용이나, 운영시간 등의 제약이 있습니다.
                  </span>
                </li>
                <li>
                  <p>실감/몰입형 정보 필요성</p>
                  <span>
                    미술관 내 도슨트 서비스는 운영상 제한된 관람자에게만
                    정보만을 제공하며, 작품을 이해하고 관람하는데 부가적인 체험
                    콘텐츠 제공이 어렵습니다. 또한 역사적 문화적 소재들에 대한
                    가치를 설명하고 이해를 시키기 위해 음성이나 이미지의
                    정보만으로는 한계가 있습니다.
                  </span>
                </li>
                <li>
                  <p>무형 콘텐츠 제작 필요</p>
                  <span>
                    온라인을 통한 문화체험 서비스가 증가함에 따라 역사적 의미를
                    가상 체험할 수 있는 무형 콘텐츠 제작과 고부가가치의 가상
                    체험 서비스의 필요성이 대두하고 있습니다.
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
              <p>시공간 제약이 없는 역사/문화 체험 실감 콘텐츠 구현</p>
              <span>
                XR솔루션을 활용하면 온라인 전시 서비스를 통해 공간 제약 없이
                콘텐츠를 즐길 수 있습니다. 또한 역사적, 문화적 소재들을 AR로
                제공하여 다양한 관람 정보 서비스를 제공하며, 직관적이고 입체적인
                몰입형 콘텐츠로 체험을 통한 공감과 이해로 정보를 습득할 수
                있습니다.
              </span>
            </li>
            <li>
              <p>유연한 콘텐츠 접근 및 홍보</p>
              <span>
                일부 또는 전체가 소실된 문화재도 XR 콘텐츠를 스마트폰으로 손쉽게
                증강하여 간편하게 몰입형 콘텐츠를 즐길 수 있습니다. 또한 최적의
                인터랙티브 통해 대상물의 기능 정보를 직관적이고 입체적인 체험을
                제공하여 흥미를 제공합니다.
              </span>
            </li>
            <li>
              <p>콘텐츠의 가치 전달과 관심 유도</p>
              <span>
                역사적, 문화적 소재들의 고증 연구 기록물을 공감각적으로 제작하여
                문화상품으로 개발하여, 관심을 유도하고 가치를 효과적으로 전달할
                수 있으며, 다양한 유형/무형의 콘텐츠를 과거/현실/미래로 연결할
                수 있습니다.
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
