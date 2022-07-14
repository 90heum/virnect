<template>
  <section class="energy-section">
    <!-- <heading-module
      :category="$t('solutionText.energyText.motorTitle.category')"
      :title="$t('solutionText.energyText.motorTitle.title')"
      :contents="$t('solutionText.energyText.motorTitle.contents')"
    ></heading-module> -->
    <section class="infraChallenge">
      <div class="infraChallengeWrap">
        <div class="infraTit">
          <h2>
            인프라/자원 산업의 문제에 대해
            <p>고민 해 보셨나요?</p>
          </h2>
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
        <div class="infraContWrap">
          <div class="infraCont">
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
    <!-- <issue-part
      :image="issueBg"
      :title="$t('solutionText.energyText.issueTitle')"
      :issueArr="$t('solutionText.energyText.issueList')"
      :bannerImg="
        $t('global.myUrl') +
        `/images/pages/solution/img-solution-energy-top.png`
      "
    ></issue-part> -->
    <section class="infra_SE">
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
      :category="$t('solutionText.energyText.infographicText.category')"
      :title="$t('solutionText.energyText.infographicText.title')"
      :contents="$t('solutionText.energyText.infographicText.contents')"
    ></heading-module> -->

    <!-- <infographic-part
      :image="$t('solutionText.energyText.infographicText.image')"
      :infographicArr="
        $t('solutionText.energyText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographic-part> -->
    <section class="intra_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li class="active">
              <div class="listWrap">
                <span>
                  <p>실시간 원격 협업 솔루션</p>
                  <ul class="listInner">
                    <li>
                      <p>
                        - 발전소 내 데이터를 관리함으로써 작업 오류 감소 및 예방
                      </p>
                      <p>- 복잡한 발전소 설비의 효율적인 유지관리 가능</p>
                      <p>
                        - 작업자에게 정확한 지시 사항 제공으로 현장 안전사고
                        감소
                      </p>
                      <i>
                        <img
                          src="https://velog.velcdn.com/images/kyj0206/post/983bd062-8e99-44d0-8eb1-53ac5ba59e77/image.png"
                          alt="협업솔루션"
                        />
                      </i>
                    </li>
                  </ul>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/5fb24587-342d-497c-a6bb-9a38ba606fd6/image.png"
                    alt="협업솔루션"
                  />
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/6add4766-ac35-47a3-affa-aba62b87881e/image.png"
                    alt="normal"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/198b9aa4-f609-4154-9726-c6e765ee2052/image.png"
                    alt="hover"
                  />
                </i>
              </div>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>발전소 디지털트윈 O&M 시스템 개발</p>
                  <ul class="listInner">
                    <li>
                      <p>
                        - 발전소 내 데이터를 관리함으로써 작업 오류 감소 및 예방
                      </p>
                      <p>- 복잡한 발전소 설비의 효율적인 유지관리 가능</p>
                      <p>
                        - 작업자에게 정확한 지시 사항 제공으로 현장 안전사고
                        감소
                      </p>
                      <i>
                        <img
                          src="https://velog.velcdn.com/images/kyj0206/post/57c29367-7d69-4433-aec0-170881cf98e7/image.png"
                          alt="협업솔루션"
                        />
                      </i>
                    </li>
                  </ul>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/a92a1ae1-0697-40e7-9e26-cb55312c743b/image.png"
                    alt="시스템개발"
                  />
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/6add4766-ac35-47a3-affa-aba62b87881e/image.png"
                    alt="normal"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/198b9aa4-f609-4154-9726-c6e765ee2052/image.png"
                    alt="hover"
                  />
                </i>
              </div>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>AR기반 구조물 안정성 검증 솔루션</p>
                  <ul class="listInner">
                    <li>
                      <p>
                        - 발전소 내 데이터를 관리함으로써 작업 오류 감소 및 예방
                      </p>
                      <p>- 복잡한 발전소 설비의 효율적인 유지관리 가능</p>
                      <p>
                        - 작업자에게 정확한 지시 사항 제공으로 현장 안전사고
                        감소
                      </p>
                      <i>
                        <img
                          src="https://velog.velcdn.com/images/kyj0206/post/6b0d4487-2a22-4b41-9d3f-3486634422eb/image.png"
                          alt="협업솔루션"
                        />
                      </i>
                    </li>
                  </ul>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/85c82f2a-dc8f-4d80-b2ac-eb0cde5e6087/image.png"
                    alt="검증솔루션"
                  />
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/6add4766-ac35-47a3-affa-aba62b87881e/image.png"
                    alt="normal"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/198b9aa4-f609-4154-9726-c6e765ee2052/image.png"
                    alt="hover"
                  />
                </i>
              </div>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>생산기지 자율주행로봇(SPOT) 현장적용 검증 용역</p>
                  <ul class="listInner">
                    <li>
                      <p>
                        - 발전소 내 데이터를 관리함으로써 작업 오류 감소 및 예방
                      </p>
                      <p>- 복잡한 발전소 설비의 효율적인 유지관리 가능</p>
                      <p>
                        - 작업자에게 정확한 지시 사항 제공으로 현장 안전사고
                        감소
                      </p>
                      <i>
                        <img
                          src="https://velog.velcdn.com/images/kyj0206/post/14731540-0a65-494d-a057-5b20e5df1423/image.png"
                          alt="협업솔루션"
                        />
                      </i>
                    </li>
                  </ul>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/546b114e-b806-41ab-b1c3-22b5d8603880/image.png"
                    alt="검증용역"
                  />
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/6add4766-ac35-47a3-affa-aba62b87881e/image.png"
                    alt="normal"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/198b9aa4-f609-4154-9726-c6e765ee2052/image.png"
                    alt="hover"
                  />
                </i>
              </div>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>3D Visualization System 기능 개선</p>
                  <ul class="listInner">
                    <li>
                      <p>
                        - 발전소 내 데이터를 관리함으로써 작업 오류 감소 및 예방
                      </p>
                      <p>- 복잡한 발전소 설비의 효율적인 유지관리 가능</p>
                      <p>
                        - 작업자에게 정확한 지시 사항 제공으로 현장 안전사고
                        감소
                      </p>
                      <i>
                        <img
                          src="https://velog.velcdn.com/images/kyj0206/post/280eb101-f01e-4c58-a109-7ed23728838c/image.png"
                          alt="협업솔루션"
                        />
                      </i>
                    </li>
                  </ul>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/70183a55-342f-46c2-8a76-9acc85fab18a/image.png"
                    alt="기능개선"
                  />
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/6add4766-ac35-47a3-affa-aba62b87881e/image.png"
                    alt="normal"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/198b9aa4-f609-4154-9726-c6e765ee2052/image.png"
                    alt="hover"
                  />
                </i>
              </div>
            </li>
          </ul>
        </span>
      </div>
    </section>

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <new-bg-slide
      :bannerData="moduleData.energy"
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
import issuePart from "../partials/IssuePart.vue";
import bgNormalPart from "../partials/BgNormalPart";
import infographicPart from "../partials/InfographicPart";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";

import examplePart from "../../products/partials/ExamplePart.vue";
import bgSlidePart from "../../products/partials/BgSlidePart.vue";
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
      issueBg:
        "https://virnect.com/images/pages/solution/img-solution-energy-top",
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
        ],
      ],
      exampleAlign: "left",
      solutionGellary: [
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-01-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-01-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-arsdk"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-01-02.png",
            img: "https://virnect.com/images/pages/solution/info-energy-01-02@3x.png",
            iconList: ["https://virnect.com/images/common/logo-twin"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-01-03.png",
            img: "https://virnect.com/images/pages/solution/info-energy-01-03@3x.png",
            iconList: ["https://virnect.com/images/common/logo-twin"],
          },
        ],
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-make"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-02.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-02@3x.png",
            iconList: ["https://virnect.com/images/common/logo-make"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-03.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-03@3x.png",
            iconList: ["https://virnect.com/images/common/logo-view"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-04.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-04@3x.png",
            iconList: ["https://virnect.com/images/common/logo-remote"],
          },
        ],
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-03-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-03-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-remote"],
          },
        ],
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-04-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-04-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-view"],
          },
        ],
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/infraChallenges.scss";
@import "~/assets/css/pages/infraS&E.scss";
@import "~/assets/css/pages/intra_Usecase.scss";
</style>
