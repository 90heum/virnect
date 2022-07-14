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
          <h2>인프라/자원 산업의 문제에 <br />대해 고민 해 보셨나요?</h2>
          <span>
            인프라/자원 산업은 복잡한 설비와 데이터로 인해 관리 효율 저하를 겪고
            있습니다. 눈에 보이지 않는 매립된 설비들, 설비 간
            <p>
              복잡한 관계성은 현장 파악에 어려움을 줍니다. 현장 전문성을 가진
              고급 인력 확보 또한 문제가 되는 상황입니다.
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
                  <p>인프라/자원 관리 시스템의 필요성</p>
                  <span>
                    원가 상승과 생산 설비 노후화에 따라 효율적인 에너지 관리
                    시스템의 중요성이 커지고 있습니다. 미세먼지, 온실가스 저감과
                    같은 정책은 에너지 산업 분야 확장에 걸림돌이 되며, 잦은 지진
                    발생으로 안전성에 대한 우려 또한 커지고 있습니다.​
                  </span>
                </li>
                <li>
                  <p>설비 점검의 전문성 결여</p>
                  <span>
                    관리 인력의 순환 재배치 및 숙련자 은퇴로 인해 설비 점검
                    업무의 전문성 확보가 어려우며, 정확도를 요구하는 점검 사항이
                    작업자의 대략적인 짐작으로 진행되는 경우가 많이 발생합니다.
                  </span>
                </li>
                <li>
                  <p>복잡한 설비, 어려운 의사결정</p>
                  <span>
                    하나의 설비에 문제가 생기면 이와 연결된 다른 설비들에 대한
                    확인도 같이 이뤄져야 하기 때문에, 다수의 전문 인원이
                    다각도로 확인하는 과정이 필요합니다. 이에 따라 장시간 여러
                    단계의 의사결정 과정을 거쳐야 하고, 그 기간동안 공정은 멈춰
                    있게 됩니다.​
                  </span>
                </li>
                <li>
                  <p>눈에 보이지 않는 매립, 매설 정보r</p>
                  <span>
                    지하시설물 정보에 대한 관리가 전혀 되고 있지 않거나 전력선,
                    통신선 등 시설물의 위치 정보 신뢰도가 낮습니다. 위치 정보가
                    관리 되더라도 현장에서 직접 확인할 수 있는 방법이 없어 유지
                    관리 작업에 도움이 되지 않습니다.​
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
              <p>에너지 관리 통합 시스템</p>
              <span>
                발전소 내에 유기적으로 연결된 설비들의 방대한 데이터와 미세먼지,
                온실가스 등 확인이 필요한 데이터들을 시각화하여, 에너지 생산
                공정과 관련된 모든 정보들을 관리합니다. 또한 사고 발생을
                예측하고, 혹여 사고가 발생하더라도 즉시 문제를 식별하고 조치할
                수 있는 통합 관제 시스템을 제공합니다.
              </span>
            </li>
            <li>
              <p>현장 설비 관리 업무의 최적화</p>
              <span>
                현장에서 확인이 필요한 변전, 송전, 발전 설비 정보 및 점검 항목,
                정비 프로세스 등 업무를 보조할 수 있는 정보들을 스마트
                디바이스를 통해 선별적으로 시각화합니다. 또한 고장 발생 시
                현장에서 Trouble Memo(TM)를 발행 및 등록하여 관련부서에서
                실시간으로 내용 확인이 가능합니다.
              </span>
            </li>
            <li>
              <p>빠른 현장 문제 확인 및 조치</p>
              <span>
                VIRNECT Remote는 여러 명의 전문가가 함께 의사소통할 수 있는
                기능을 제공합니다. 업무 관련자들이 동시에 실시간 설비 데이터,
                점검 이력 등을 확인하고, 조치 사항에 대해 결정하여 작업 효율과
                신뢰도를 높입니다. 실시간으로 의사 결정한 내용과 조치 사항은
                미래의 작업 관리를 위해 기록하고 저장할 수 있습니다.
              </span>
            </li>
            <li>
              <p>보이지 않는 시설물과 설비의 3차원 시각화</p>
              <span>
                지하에 매립된 시설물이나 매설되어 있는 설비를 개폐작업이나 공사
                없이 현장에서 3차원으로 볼 수 있습니다. VIRNECT View가 설치된
                스마트폰이나 스마트글라스로 현장의 땅을 비추면 사활선이나 배전
                방향, 매립된 설비 상태까지도 확인할 수 있기 때문에 긴급 상황
                발생 시, 정확한 대응이 가능합니다.
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
