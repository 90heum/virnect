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
          <h2>XR 솔루션 도입을 통한 다양한 비즈니스 확장 사례가 있습니다.</h2>
          <span>
            XR기술은 산업현장 뿐만 아니라 의료, 헬스케어 등 일상 생활 속 밀접한
            부분까지 다양한 분야에 적용 가능합니다.
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
                  <p>운영 인력 및 교육/훈련 시스템 부족</p>
                  <span>
                    다양한 환경에서 운영 인력과 교육/훈련의 부족은 생산성과 품질
                    향상에 중요한 척도가 됩니다. 인프라 확충과 함께 고급 인력
                    수요도 증가하고 있으나, 현장에 바 로 투입할 수 있는 인력
                    공급은 부족합니다. 또한 잦은 출장 비용을 줄이고 효율적으로
                    정비할 수 있는 시스템이 필요합니다.
                  </span>
                </li>
                <li>
                  <p>정보와 기술의 불균형</p>
                  <span>
                    새로운 방식의 업무나 진료 등은 오류나 부작용에 대한 정보를
                    공유하고 함께 신속히 문제해결을 필요로 하고 있습니다. 그러나
                    도서지역과 같은 열악한 환경에서 정보가 차단되어 원하는
                    시기에 적합한 정보를 공유 받을 수 없거나, 대처하기 어려운
                    경우가 발생합니다.
                  </span>
                </li>
                <li>
                  <p>의료 환경의 시스템 개선 필요</p>
                  <span>
                    수술 시 별도의 모니터를 수술대 옆에 설치하고 보면서 환자를
                    수술하나, 고개를 돌리면서 보느라 수술시간이 많이 경과하고
                    있습니다. 실제 모습과 CT 파일을 정합하여 볼 수 있는 시스템이
                    필요하며, 수술 진행 중 환자의 맥박, 호흡 등의 데이터를
                    빠르게 확인할 수 있는 수술 환경 필요합니다.
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
              <p>정확하고 즉각적인 교육/훈련 제공</p>
              <span>
                AR시각화를 통한 몰입형 체험으로 미숙련 작업자에게도 정확한
                지침과 정보를 제공해 줄 수 있습니다. 특히, 의료 및
                헬스분야에서는 의료기기 및 의약품 설명을 효과적으로 소개할 수
                있으며, 합병증 정보를 연관 지어 정확한 정보를 전달하여 체험자의
                이해도와 신뢰성를 높일 수 있습니다. 또한 원격 지원으로
                실시간으로 문제 해결 및 의사결정을 진행할 수 있습니다.
              </span>
            </li>
            <li>
              <p>시간 및 비용 절감과 업무 효율의 극대화</p>
              <span>
                현장의 문제 발생 시 원격 기술 전문가와 현장 직원이 실시간으로
                상황을 공유하며 카메라를 통해 같은 상황을 인지하여 협업 및
                조치를 신속히 처리 할 수 있습니다. 이는 AR 인식 및 추적기술과 XR
                다중 원격 협업지원 기능을 통해 일상/경정비 점검에 소요되는
                시간과 예산을 줄일 수 있습니다. 2D도면이나 점검 매뉴얼 정보를
                시각화하여 작업시 안전하고 효율적으로 관리할 수 있습니다.
              </span>
            </li>
            <li>
              <p>지역불균형 완화 및 의료환경 개선</p>
              <span>
                XR 솔루션을 활용하여 지역응급의료센터의 전문의가 보건지소의
                의료인/응급 구조사와 통신을 통해 환자의 상태 파악, 원격 협진,
                지시, 교육 등을 진행할 수 있는 시스템을 제공함으로써 도서지역
                재난/사고 응급환자에게 의료 혜택을 제공하고 의료 지역적 불균형
                완화에 기여 할 수 있습니다. 또한, XR디바이스를 할용하여 수술 시
                환자의 CT파일을 AR로 시각화하여 고개를 돌리지 않아도 한눈에
                환자의 정보를 볼 수 있어 효율이 증가하며, 두 손이 자유롭게 되어
                별도의 장비를 만지지 않고 인터랙션이 가능해 위생적 문제도 해결할
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
