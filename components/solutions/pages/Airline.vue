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
              src="~/assets/images/pages/value/img_4_big.jpg"
              alt="엔터테인먼트 이미지"
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
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(1)">
                    {{ $t("ValueText.ValueEnterUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-14@2x.png"
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
                    @click="showMenu(1)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 1">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents1-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents1-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents1-3')"
                  ></p>

                  <i>
                    <img
                      src="~/assets/images/pages/value/enter1.png"
                      alt="서울 국립중앙박물관"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueEnterUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-15@2x.png"
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
                    @click="showMenu(2)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 2">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents2-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents2-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents2-3')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/enter2.png"
                      alt="미니병풍 개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueEnterUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-15@2x.png"
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
                    @click="showMenu(3)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 3">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents3-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents3-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents3-3')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents3-4')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/enter3.png"
                      alt="증강현실 콘텐츠 제작"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueEnterUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-16@2x.png"
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
                    @click="showMenu(4)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 4">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents4-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents4-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents4-3')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents4-4')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/enter4.png"
                      alt="체험전시 시스템"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(5)">
                    {{ $t("ValueText.ValueEnterUseCaseText.title5") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-17@2x.png"
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
                    @click="showMenu(5)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 5">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents5-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents5-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents5-3')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/enter5.png"
                      alt="증강현실 전시 콘텐츠 개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(6)">
                    {{ $t("ValueText.ValueEnterUseCaseText.title6") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-18@2x.png"
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
                    @click="showMenu(6)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 6">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents6-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents6-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEnterUseCaseText.contents6-3')"
                  ></p>

                  <i>
                    <img
                      src="~/assets/images/pages/value/enter6.png"
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
      menu: 1,

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
  methods: {
    showMenu(e) {
      this.menu = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/enterChallenges.scss";
@import "~/assets/css/pages/enterS&E.scss";
@import "~/assets/css/pages/enter_Usecase.scss";
</style>
