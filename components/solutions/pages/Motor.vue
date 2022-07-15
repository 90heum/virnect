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
              src="https://velog.velcdn.com/images/kyj0206/post/436a0f11-e6d3-4dcb-86c1-83f4b425a5e1/image.png"
              alt="인프라 이미지"
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
                  <p @click="showMenu(1)">2021년 혁신제품 시범사용</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/2262f8d5-2bdf-4cb0-bffe-9a9b03104394/image.jpg"
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
              <ul class="listInner" v-if="menu===1">
                <li>
                  <p>
                    - 코로나 환경에서 대학과 실습처인 기업체간 Remote 시스템
                    구축과 원격 실감형 현장실습 구현
                  </p>
                  <p>
                    - 대학 내부에서 외부의 실습 환경과 학생의 실습 정보를 확인,
                    모니티링하여 비대면 원격 지원 플랫폼을 구축
                  </p>
                  <p>
                    - 대학과 대학, 대학과 산업체간의 기술 협업체계를 대면 방식이
                    아닌 비대면 방식의 혁신적 전환을 위해 비대면 VIRNECT Remote
                    기술을 적용
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/20089a5c-6e07-488d-a5cc-d67599f2089c/image.png"
                      alt="시범사용"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">경기도 찾아가는 수출 상담회</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/ef3da921-94b4-475a-b233-801a3b64608c/image.jpg"
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
              <ul class="listInner" v-if="menu===2">
                <li>
                  <p>- 해외 바이어를 사업장으로 초청하는 것과 같은 효과</p>
                  <p>
                    - 미팅 대상 바이어에게 기업의 실제 활동을 보여주어 신뢰감
                    형성
                  </p>
                  <p>
                    - 제품이 커서 이동이 불가한 기업도 현장 연결을 통해 소개 및
                    데모 가능
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/8037fdb6-443f-415a-b39c-fc1b32ff99de/image.jpg"
                      alt="수출상담회"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">한국 건설안전박람회 2020 비대면 도슨트 투어</p>
                </span>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/b311c568-a7b1-4621-beea-d095236c85f1/image.jpg"
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
              <ul class="listInner" v-if="menu===3">
                <li>
                  <p>
                    - 국내 전시회에 참석이 불가한 해외 바이어에게 간접 체험의
                    기회
                  </p>
                  <p>
                    - 실제 제품의 데모 및 체험을 간접적이지만 생생하게 볼 수
                    있어 단순 비디오 촬영과는 다른 현장감을 부여
                  </p>
                  <p>
                    - 양방향 커뮤니케이션을 통해 현장에서 직접 문의 사항을
                    질의하고 답변하여 즉각적 정보제공 가능
                  </p>
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/0b9bc053-78e7-43a8-9b9b-e609ec382e48/image.jpg"
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
    showMenu(e){
      this.menu=e;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/eduChallenges.scss";
@import "~/assets/css/pages/eduS&E.scss";
@import "~/assets/css/pages/edu_Usecase.scss";
</style>
