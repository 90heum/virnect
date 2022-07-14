<template>
  <section class="motor-section">
    <!-- 에듀 -->
    <section class="EduChallenge">
      <div class="EduChallengeWrap">
        <div class="EduTit">
          <h2>공공/교육의 효율적인 서비스에 대해 알고 계신가요?</h2>
          <span>
            공공/교육 분야에 사용되는 기존 교육 방식은 비용 대비 효과가
            낮습니다.
            <p>
              XR 기술을 활용한다면 보다 탁월한 학습효과는 물론 언제 어디서나
              접근 가능합니다.
            </p>
          </span>
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/436a0f11-e6d3-4dcb-86c1-83f4b425a5e1/image.png"
              alt="인프라 이미지"
            />
          </i>
        </div>
        <div class="EduContWrap">
          <div class="EduCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>현장 교육의 시/공간 한계</p>
                  <span>
                    현장 교육은 주제에 따라 너무 교육 범위가 넓고 이를 교육하기
                    위한 장비가 다양합니다. 또한 신규 설비 운용 교육은 준비
                    기간도 길고, 넓은 현장이동은 교육의 효과가 떨어집니다.
                    보안/안전 등으로 방문객 또는 VIP 현장투어에도 여러가지
                    한계가 있습니다.
                  </span>
                </li>
                <li>
                  <p>현장감이 필요한 재난 예방/진압 훈련</p>
                  <span>
                    기존에 재난 예방이나 진압 훈련 및 교육은 실제 설비와 공장
                    상황을 모사해서 하기 때문에, 교육 효과가 미흡했습니다. 실제
                    현장 교육으로 진행 시 준비 사항도 많고 교육이나 훈련 시에도
                    많은 위험한 상황들이 발생하여 운영이 어렵습니다.
                  </span>
                </li>
                <li>
                  <p>변화하는 교육방식</p>
                  <span>
                    기존 주입식 강의 방식과 학습자료는 너무 어렵습니다. 또한
                    펜데믹으로 인한 대면 접촉의 어려움으로 현장교육, 기업
                    비즈니스, 국제 교류 활동에 효율적인 커뮤니케이션 솔루션이
                    필요하나 문서나 이미지만으로는 부족하고 원하는 결과를 목표를
                    달성하기 어려웠습니다.
                  </span>
                </li>
                <li>
                  <p>공공지원의 필요성 대두</p>
                  <span>
                    정부의 가상융합경제 발전전략으로 수도권 외 지역 활성화를
                    위한 경제사회 전반의 가상융합기술 활용과 확산의 필요성이
                    대두되고 있습니다.
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="edu_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>탁월한 체험 및 실감형 교육의 학습효과</p>
              <span>
                XR 솔루션을 통해 3차원/실감형 콘텐츠 방식의 교육이 가능합니다.
                작업 프로세스 및 사고 가능성 사전 교육에 효과적이며, 직관적이고
                쉽게 이해할 수 있어 교육 효과도 높아지게 됩니다.
              </span>
            </li>
            <li>
              <p>대피 경로 시뮬레이션 및 실감형 재난 교육/훈련 구현</p>
              <span>
                실제 공정 3D 정보에 각종 재난 발생에 대한 시뮬레이션을 증강하여
                진압 훈련용으로 활용이 가능합니다. 또한 XR기술을 활용하여 대피
                경로 시뮬레이션은 물론 실감형 재난 교육/훈련을 구현할 수
                있습니다.
              </span>
            </li>
            <li>
              <p>언택트 환경에 최적화된 비용과 시간 절감형 XR 솔루션</p>
              <span>
                고가의 장비 없이 원격(현장,사무실, 집)에서 공간의 구애 받지 않고
                가상교육이 가능합니다. 또한 3차원/동영상 진행으로 직관적이고
                쉽게 배울 수 있어 학습 효과가 좋으며, 한번 구축해 놓은 솔루션은
                반복적으로 시간 및 공간 제약없이 활용이 가능합니다.
              </span>
            </li>
            <li>
              <p>지역 입주업체 및 주민 공공지원</p>
              <span>
                XR 솔루션 활용을 통해 지역주민들에게 공공사업의 필요성을 알리고,
                주민들의 호응을 얻을 수 있습니다.또한 기업은 사업의 이해도
                향상과 응용방안 제안을 통해 지역 업체의 수출, 매출증대를 위한
                지원이 가능합니다
              </span>
            </li>
          </ul>
        </span>
      </div>
    </section>

    <!-- <heading-module
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
    ></issue-part> -->
    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <!-- 신규모듈 들어갈자리 -->

    <!-- <heading-module
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
    ></infographic-part> -->

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
              :exampleArr="$t('solutionText.motorText.exampleList')"
            ></example-part>
          </div>
          <new-module :bannerData="$t('solutionText.motorText.exampleList')"
            :title="`Twin이`"/>
        </div>
      </section>
    </div> -->
    <!-- <bg-slide-part
      :bgExampleArr="$t('solutionText.motorText.bgExampleList')"
    ></bg-slide-part> -->
    <new-bg-slide
      :bannerData="moduleData.motor"
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
@import "~/assets/css/pages/eduChallenges.scss";
@import "~/assets/css/pages/eduS&E.scss";
</style>
