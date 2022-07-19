<template>
  <section class="motor-section">
    <!-- 에듀 -->
    <section class="EduChallenge">
      <div class="EduChallengeWrap">
        <div class="EduTit">
          <h2>{{ $t("ValueText.educationText.topText.title1") }}</h2>

          <span>
            {{ $t("ValueText.educationText.topText.contents1") }}
            <p>
              {{ $t("ValueText.educationText.topText.contents2") }}
            </p>
          </span>
          <i>
            <img
              src="~/assets/images/pages/value/img_3_big.jpg"
              alt="공공/교육 이미지"
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
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title1") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents1") }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title2") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents2") }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title3") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents3") }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title4") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents4") }}
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
              <p>{{ $t("ValueText.educationText.challengesText.title5") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.educationText.challengesText.title6") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents6") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.educationText.challengesText.title7") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents7") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.educationText.challengesText.title8") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents8") }}
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
    <section class="edu_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li class="active">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(1)">
                    {{ $t("ValueText.ValueEduUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-11@2x.png"
                    alt="한밭대학교"
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
                    v-html="$t('ValueText.ValueEduUseCaseText.contents1-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEduUseCaseText.contents1-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEduUseCaseText.contents1-3')"
                  ></p>

                  <i>
                    <img
                      src="~/assets/images/pages/value/edu1.png"
                      alt="시범사용"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueEduUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-12@2x.png"
                    alt="경기도경제과학진흥원"
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
                    v-html="$t('ValueText.ValueEduUseCaseText.contents2-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEduUseCaseText.contents2-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEduUseCaseText.contents2-3')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/edu2.png"
                      alt="수출상담회"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueEduUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-13@2x.png"
                    alt="Kintex"
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
                    v-html="$t('ValueText.ValueEduUseCaseText.contents3-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEduUseCaseText.contents3-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEduUseCaseText.contents3-3')"
                  ></p>

                  <i>
                    <img
                      src="~/assets/images/pages/value/edu3.png"
                      alt="도슨트투어"
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
      menu: 1,

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
  methods: {
    showMenu(e) {
      this.menu = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/eduChallenges.scss";
@import "~/assets/css/pages/eduS&E.scss";
@import "~/assets/css/pages/edu_Usecase.scss";
</style>
