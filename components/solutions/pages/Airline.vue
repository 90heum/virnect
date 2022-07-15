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
    <section class="enter_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li class="active">
              <div class="listWrap">
                <span>
                  <p>AR 글라스 기반 도슨트 운용(서울 국립중앙박물관)</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/1ad6d4b8-e85e-4a8c-b9cd-cdc3cb6c5a6b/image.jpg"
                    alt="한국콘텐츠진흥원"
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
              <ul class="listInner">
                <li>
                  <p>- 조작이 편리하고 습득이 쉽고 몰입 향상이 가능</p>
                  <p>- 관람자 행동과 패턴을 분석하여 차별화된 서비스 제공</p>
                  <p>- 인터랙티브한 체험 학습을 할 수 있는 콘텐츠로 활용</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/548dd5c2-367a-4c92-add5-847b5ba07361/image.jpg"
                      alt="서울 국립중앙박물관"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>혼합현실 기술 기반의 미니병풍(경복궁) 개발</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/1ad6d4b8-e85e-4a8c-b9cd-cdc3cb6c5a6b/image.jpg"
                    alt="한국콘텐츠진흥원"
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
              <ul class="listInner">
                <li>
                  <p>
                    - 역사적, 문화적 소재들에 대한 다양한 가상체험 서비스 제공
                  </p>
                  <p>
                    - 원격 체험으로 관광지에 대한 지속적인 관심과 재방문 유도
                  </p>
                  <p>
                    - 휴대형으로 필요할 때 스마트폰에 손쉽게 장착하여 간편화
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/25b51d1f-291c-4863-9929-96e873406ac6/image.jpg"
                      alt="미니병풍 개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>증강현실 황룡사 중문 실감형 콘텐츠 제작</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/b1ee8b8a-bd78-47ae-bbe0-8d52a596884a/image.jpg"
                    alt="국립문화재연구소"
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
              <ul class="listInner">
                <li>
                  <p>- 황룡사 복원 고증 연구 결과에 대한 공감각적 검토</p>
                  <p>- 실현가능한 복원 안 마련 가능</p>
                  <p>- 황룡사지 유적에 대한 관심 유도 및 가치 전달 강화</p>
                  <p>- 전통 건축 문화재 증강현실 구현 방안 제시</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/da46f306-aeae-4d19-9211-1fa5b9b6f4dc/image.jpg"
                      alt="증강현실 콘텐츠 제작"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>AR-VR 전환 가능한 몰입형 체험전시 시스템</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/2a6b6ecf-c49f-4abd-a8b9-175c0b0dbbc5/image.jpg"
                    alt="목포자연사박물관"
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
              <ul class="listInner">
                <li>
                  <p>- 관람자는 AR기반 기본정보를 효과적으로 습득</p>
                  <p>- 3D로 복원하여 해당 전시물에 대한 상세 정보를 제공</p>
                  <p>- VR기반 실제 전시물과 동일한 크기의 가상공간 구현</p>
                  <p>- 관람자에게 몰입감과 사실감을 높여 시간여행 체험 가능</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/0183e477-95a9-4e2a-a429-7abd48610f55/image.jpg"
                      alt="체험전시 시스템"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>전시관을 위한 증강현실 전시 콘텐츠 개발</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/33ecee28-cce6-406c-bd88-62f5fc031f06/image.jpg"
                    alt="천연기념물센터"
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
              <ul class="listInner">
                <li>
                  <p>- 체험형 전시의 몰입감을 극대화</p>
                  <p>- AR기반 몰입, 체험형 천연기념물센터 매머드 특별전 전시</p>
                  <p>- IT 기술 적용한 매머드 콘텐츠로 관람객 증가</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/ac75166c-ffe3-4423-ae76-2e5b802a9d61/image.jpg"
                      alt="증강현실 전시 콘텐츠 개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>직업가상체험 360도 파노라마</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/45585afc-6dbf-49fe-a506-7ccabf239e25/image.jpg"
                    alt="국토정보기술단"
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
              <ul class="listInner">
                <li>
                  <p>- 직업별 실제적인 상황을 간접적으로 체험</p>
                  <p>- 실제 일어날 수 있는 상황들을 빠르게 습득</p>
                  <p>- 360도 VR 영상을 체험으로 실제와 비슷한 경험</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/4b26db7b-5b14-406a-a3b5-ae6404240b52/image.jpg"
                      alt="직업가상체험 360도 파노라마"
                    />
                  </i>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </div>
    </section>

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
@import "~/assets/css/pages/enter_Usecase.scss";
</style>
