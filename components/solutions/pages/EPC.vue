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
              src="~/assets/images/pages/value/img_5_big.jpg"
              alt="기타 이미지"
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
            <li @click="showMenu(1)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(1)">
                    {{ $t("ValueText.ValueEPCUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-20@2x.png"
                    alt="kt commerce"
                  />
                  <img
                    class="normal"
                    :src="menu === 1 ? close : open"
                    alt="normal"
                    @click="showMenu(1)"
                  />
                  <img
                    class="hover"
                    src="~assets/images/pages/value/icon-plus-hover@2x.png"
                    alt="hover"
                    @click="showMenu(1)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 1">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents1-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents1-2')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/epc1.png"
                      alt="측위변환SW"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(2)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueEPCUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-21@2x.png"
                    alt="종근당"
                  />
                  <img
                    class="normal"
                    :src="menu === 2 ? close : open"
                    alt="normal"
                    @click="showMenu(2)"
                  />
                  <img
                    class="hover"
                    src="~assets/images/pages/value/icon-plus-hover@2x.png"
                    alt="hover"
                    @click="showMenu(2)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 2">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents2-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents2-2')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/epc2.png"
                      alt="AR전시시스템"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(3)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueEPCUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-22@2x.png"
                    alt="농협카드"
                  />
                  <img
                    class="normal"
                    :src="menu === 3 ? close : open"
                    alt="normal"
                    @click="showMenu(3)"
                  />
                  <img
                    class="hover"
                    src="~assets/images/pages/value/icon-plus-hover@2x.png"
                    alt="hover"
                    @click="showMenu(3)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 3">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents3-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents3-2')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/epc3.png"
                      alt="금융상품 AR개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(4)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueEPCUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-23@2x.png"
                    alt="안산병원"
                  />
                  <img
                    class="normal"
                    :src="menu === 4 ? close : open"
                    alt="normal"
                    @click="showMenu(4)"
                  />
                  <img
                    class="hover"
                    src="~assets/images/pages/value/icon-plus-hover@2x.png"
                    alt="hover"
                    @click="showMenu(4)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 4">
                <li>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents4-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents4-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueEPCUseCaseText.contents4-3')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/epc4.png"
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
      menu: 1,
      open: require("~/assets/images/pages/value/icon-plus-close@2x.png"),
      close: require("~/assets/images/pages/value/icon-plus-open@2x.png"),
      
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
  methods: {
    showMenu(e) {
      this.menu = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/eccChallenges.scss";
@import "~/assets/css/pages/eccS&E.scss";
@import "~/assets/css/pages/ecc_Usecase.scss";
</style>
