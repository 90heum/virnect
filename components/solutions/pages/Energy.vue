<template>
  <section class="energy-section">
    <section class="infraChallenge">
      <div class="infraChallengeWrap">
        <div class="infraTit">
          <h2>
            {{ $t("ValueText.infraText.topText.title") }}
            <p>{{ $t("ValueText.infraText.topText.title2") }}</p>
          </h2>
          <span>
            {{ $t("ValueText.infraText.topText.contents") }}
            <p>
              {{ $t("ValueText.infraText.topText.contents2") }}
            </p>
          </span>
          <i>
            <img
              src="~/assets/images/pages/solution/img-solution-energy-top.png"
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
                  <p>{{ $t("ValueText.infraText.challengesText.title1") }}</p>
                  <span>
                    {{ $t("ValueText.infraText.challengesText.contents1") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.infraText.challengesText.title2") }}</p>
                  <span>
                    {{ $t("ValueText.infraText.challengesText.contents2") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.infraText.challengesText.title3") }}</p>
                  <span>
                    {{ $t("ValueText.infraText.challengesText.contents3") }}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="infra_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>{{ $t("ValueText.infraText.challengesText.title4") }}</p>
              <span>
                {{ $t("ValueText.infraText.challengesText.contents4") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.infraText.challengesText.title5") }}</p>
              <span>
                {{ $t("ValueText.infraText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.infraText.challengesText.title6") }}</p>
              <span>
                {{ $t("ValueText.infraText.challengesText.contents6") }}
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
    <section class="intra_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li  @click="showMenu(1)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(1)">
                    {{ $t("ValueText.ValueUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-1@2x.png"
                    alt="협업솔루션"
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
                    
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 1">
                <li>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents1-1')"
                      ></p>

                  <i>
                        <img
                          src="~/assets/images/pages/value/valueB-1@2x.png"
                          alt="협업솔루션"
                        />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(2)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-2@2x.png"
                    alt="시스템개발"
                  />

                  <img
                    class="normal"
                    :src="menu=== 2 ? close : open"
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
                        v-html="$t('ValueText.ValueUseCaseText.contents2-1')"
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents2-2')"
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents2-3')"
                      ></p>
                  <i>
                        <img
                          src="~/assets/images/pages/value/valueB-2@2x.png"
                          alt="협업솔루션"
                        />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(3)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                   <img
                    src="~/assets/images/pages/value/img-value-3@2x.png"
                    alt="검증솔루션"
                  />
                  <img
                    class="normal"
                    :src="menu=== 3 ? close : open"
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
                        v-html="$t('ValueText.ValueUseCaseText.contents3-1')"
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents3-2')"
                      ></p>
                  <i>
                        <img
                          src="~/assets/images/pages/value/valueB-3@2x.png"
                          alt="협업솔루션"
                        />

                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(4)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-4@2x.png"
                    alt="검증용역"
                  />
                  <img
                    class="normal"
                    :src="menu=== 4 ? close : open"
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
                        v-html="$t('ValueText.ValueUseCaseText.contents4-1')"
                        
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents4-2')"
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents4-3')"
                      ></p>
                  <i>
                        <img
                          src="~/assets/images/pages/value/valueB-4@2x.png"
                          alt="협업솔루션"
                        />

                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(5)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(5)">
                    {{ $t("ValueText.ValueUseCaseText.title5") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-5@2x.png"
                    alt="기능개선"
                  />
                  <img
                    class="normal"
                    :src="menu=== 5 ? close : open"
                    alt="normal"
                    @click="showMenu(5)"
                  />
                  <img
                    class="hover"
                    src="~assets/images/pages/value/icon-plus-hover@2x.png"
                    alt="hover"
                    @click="showMenu(5)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 5">
                <li>
                       <p
                        v-html="$t('ValueText.ValueUseCaseText.contents5-1')"
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents5-2')"
                      ></p>
                      <p
                        v-html="$t('ValueText.ValueUseCaseText.contents5-3')"
                      ></p>
                  <i>
                        <img
                          src="~/assets/images/pages/value/valueB-5@2x.png"
                          alt="협업솔루션"
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
  props: {
    functionArr: Array,
  },
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
  methods: {
    showMenu(e) {
      this.menu = e;
    },

    /* slideDown(idx) {
      if (this.activeIdx == idx) return (this.activeIdx = null);
      else return (this.activeIdx = idx);
    }, */
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/infraChallenges.scss";
@import "~/assets/css/pages/infraS&E.scss";
@import "~/assets/css/pages/intra_Usecase.scss";
</style>
