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
    <section class="ecc_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li class="active">
              <div class="listWrap">
                <span>
                  <p>상대측위, 절대측위 변환 SW</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/a0ec6526-8ec1-4a7d-ab7b-e4d15014616a/image.jpg"
                    alt="kt commerce"
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
                    - 출발 지점, 이동방향에 구애 받지 않고 목적지로 안내 가능
                  </p>
                  <p>
                    - Core 기술을 통한 Navigation 기능 구현에 필요한 기술 입증
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/d5507b21-74d9-4dc1-8da0-de2ff92eb3ad/image.jpg"
                      alt="측위변환SW"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>스마트글라스기반 AR전시시스템</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/369ae049-e67b-400d-b4c9-f1b218fe3eb3/image.jpg"
                    alt="종근당"
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
                  <p>- AR시각화로 합병증 정보를 연관지어 정확한 정보를 전달</p>
                  <p>
                    - 몰입형 체험이 가능하고 전시 체험자가 정보에 대한 이해가
                    빨라짐
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/e3efede0-ab50-4ed0-9edd-61c0f8563e83/image.jpg"
                      alt="AR전시시스템"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>금융상품 AR콘텐츠 개발</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/d829c06f-ebe8-459c-91a8-cf8af43e7f5a/image.jpg"
                    alt="농협카드"
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
                    - 행사장에서 고객이 AR콘텐츠를 직접 체험하여 홍보효과가 높음
                  </p>
                  <p>
                    - 복잡한 설명서 없이 간단한 절차로 상품에 대한 이해도가 빠름
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/c9d90c12-dd3e-4188-9ea1-c32a971b893d/image.jpg"
                      alt="금융상품 AR개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>증강현실 기술 기반의 성형외과 수술 플랫폼</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/12c16711-6907-4082-b07b-a1228997a240/image.jpg"
                    alt="안산병원"
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
                  <p>- 수술 시 참고하는 환자의 CT파일을 AR로 시각화</p>
                  <p>
                    - 고개를 돌리지 않아도 한눈에 환자와 정보를 볼 수 있어
                    효율성 증가
                  </p>
                  <p>
                    - 두 손이 자유롭고 만지지 않고 인터랙션이 가능해 위생적 문제
                    해결
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/c418344d-0b0f-464d-840f-d030bfc7e59b/image.jpg"
                      alt="성형외과 수술플랫폼"
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
@import "~/assets/css/pages/ecc_Usecase.scss";
</style>
