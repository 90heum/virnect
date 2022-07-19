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
              src="~/assets/images/pages/solution/img-solution-chemical-top.png"
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
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(1)">
                    {{ $t("ValueText.ValueOilUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-6@2x.png"
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
                    @click="showMenu(1)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 1">
                <li>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents1-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents1-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents1-3')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/oil1x.png"
                      alt="지원솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueOilUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-7@2x.png"
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
                    @click="showMenu(2)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 2">
                <li>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents2-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents2-2')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents2-3')"
                  ></p>

                  <i>
                    <img
                      src="~/assets/images/pages/value/oil2.png"
                      alt="지원솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueOilUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-8@2x.png"
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
                    @click="showMenu(3)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 3">
                <li>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents3-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents3-2')"
                  ></p>

                  <i>
                    <img
                      src="~/assets/images/pages/value/oil3.png"
                      alt="연동시각화"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueOilUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-9@2x.png"
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
                    @click="showMenu(4)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 4">
                <li>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents4-1')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/oil4.png"
                      alt="기술지원"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(5)">
                    {{ $t("ValueText.ValueOilUseCaseText.title5") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-10@2x.png"
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
                    @click="showMenu(5)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 5">
                <li>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents5-1')"
                  ></p>
                  <p
                    v-html="$t('ValueText.ValueOilUseCaseText.contents5-2')"
                  ></p>
                  <i>
                    <img
                      src="~/assets/images/pages/value/oil5.png"
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
      menu: 1,

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
  methods: {
    showMenu(e) {
      this.menu = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/produceChallenges.scss";
@import "~/assets/css/pages/produceS&E.scss";
@import "~/assets/css/pages/produce_Usecase.scss";
</style>
