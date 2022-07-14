<template>
  <section class="oil-section">
    <!-- 제조 -->
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
    <section class="produce_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li class="active">
              <div class="listWrap">
                <span>
                  <p>AR 원격 기술 지원 솔루션 적용</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/69a08821-786b-4849-b94b-c785a8ec4b81/image.jpg"
                    alt="kt"
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
                  <p>- 전문가의 출장 비용 및 현장 작업자의 교육 비용 절감</p>
                  <p>
                    - 현장 작업자가 직관적인 원격 지원을 받음으로써 생산성 향상
                  </p>
                  <p>
                    - 현장 작업자가 지시를 받음과 동시에 양 손이 자유롭게
                    작업함으로써 작업 시간 단축
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/0a5482a3-7e31-4075-b725-d5fdedd54dce/image.jpg"
                      alt="지원솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>AR 원격 기술 지원 솔루션 적용</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/aca02112-777a-4576-8fe3-0c4ca39e45e4/image.jpg"
                    alt="삼성sds"
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
                    - 생산 설비 문제 발생 시, 즉각적 대처가 가능해짐으로써 큰
                    사고 방지
                  </p>
                  <p>- 유지보수, 점검 등을 원격으로 지원함으로써 비용 절감</p>
                  <p>- 해외 사업장에 AR솔루션을 적용함으로써 생산성 향상</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/7859c441-1f57-4ed4-b607-5bc2f9304823/image.jpg"
                      alt="지원솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>AR 기반 IoT 센서 정보 연동 시각화</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/f81ef3fb-2f4e-4833-a878-eb91b9d31297/image.jpg"
                    alt="스마트제조혁신센터"
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
                  <p>- 시각화 정보를 통해 데모공장 구조에 대한 이해도를 높임</p>
                  <p>- 현장에서 공장 정보관리 효율성 증대</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/827c3208-6e1a-4d1c-a829-1c1303c46713/image.jpg"
                      alt="연동시각화"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>해외 생산 공장 원격 기술 지원</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/bbfe1d90-fa44-4296-aaf2-406701cf195a/image.jpg"
                    alt="오토모티브"
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
                    - 한국 본사와 해외 지사를 원격지원을 함으로써 출장 비용 감소
                    AR을 기반으로 확실한 지시를 내림으로써 해외 지사의 직관적인
                    이해를 통한 생산성 향상
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/65c80453-a5d7-46e5-958c-b0009aedf3b8/image.jpg"
                      alt="기술지원"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p>배선 설계 시각화 어플리케이션 개발</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/66d064ef-edb6-435e-98ad-4385fc1ec59b/image.jpg"
                    alt="엔지니어링디자인"
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
                  <p>- AR 시각화를 통해 빠르고 정확한 배선 작업 가능</p>
                  <p>- XR 가이드로 작업자의 작업능률 향상 기대</p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/7c9cd4ba-a553-40a2-b268-90949b78b640/image.jpg"
                      alt="어플리케이션 개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </div>
    </section>

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
@import "~/assets/css/pages/produce_Usecase.scss";
</style>
