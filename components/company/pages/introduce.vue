<template>
  <section class="energy-section">
    <!-- <subVisualSection
      class="sm"
      :image="visualText.image"
      :category="visualText.category"
      :title="
        $route.name === 'company-about'
          ? $t('virtualConnect.title')
          : $t('companyText.visualText.title')
      "
      :contents="
        $route.name === 'company-about'
          ? $t('virtualConnect.visualContents')
          : $t('companyText.visualText.contents')
      "
    ></subVisualSection> -->
    <!-- <snbSection
      v-if="$route.name === 'company-about'"
      :snbArr="
        $t('gnb[4].array[0].depth').filter((d) => d.page !== 'company-about')
      "
    ></snbSection> -->

    <!-- <heading-module
      :title="$t('companyText.summaryText.summaryTitle.title')"
      :contents="$t('companyText.summaryText.summaryTitle.contents')"
    ></heading-module> -->


    <div class="aboutVirnect">
      <section class="aboutVirnect">
        <div class="aboutVirnectInner">
          <span class="aboutVirnectTit">
            <!-- {{ $t("productsText.remoteSubTitle.title") }}  -->

            <h2>{{ $t("aboutVirnectTitle.title") }}</h2>
            <span>
              {{ $t("aboutVirnectTitle.content") }}
            </span>
          </span>
          <span class="aboutVirnectCont">
            <ul class="no1Cont">
              <li>
                <span> Mission </span>
                <span>
                  {{ $t("aboutVirnectContent.mission") }}
                </span>
              </li>
              <li>
                <span> Vision </span>
                <span>
                  {{ $t("aboutVirnectContent.vision") }}
                </span>
              </li>
            </ul>
            <ul class="no2Cont">
              <li>
                <p>{{ $t("no2Content.year") }}</p>
                <span>{{ $t("no2Content.yearValue") }}</span>
              </li>
              <li>
                <p>{{ $t("no2Content.employee") }}</p>
                <span>{{ $t("no2Content.employeeValue") }} +</span>
              </li>
              <li>
                <p>{{ $t("no2Content.property") }}</p>
                <span>{{ $t("no2Content.propertyValue") }}</span>
              </li>
              <li>
                <p>{{ $t("no2Content.project") }}</p>
                <span>{{ $t("no2Content.projectValue") }}</span>
              </li>
              <li>
                <p>{{ $t("no2Content.awards") }}</p>
                <span>{{ $t("no2Content.awardsValue") }}</span>
              </li>
            </ul>
          </span>
        </div>
      </section>
      <company-awards />
      <section class="aboutHistory">
        <div class="aboutHistoryInner">
          <span class="aboutHistoryTit">
            <h2>{{ $t("aboutHistoryTitle.title") }}</h2>
            <p>{{ $t("aboutHistoryTitle.content") }}</p>
          </span>
          <span class="aboutHistoryCont">
            <ul class="aboutHistoryContTab">
              <li
                :class="HistoryTab === idx + 1 ? 'active' : ''"
                @click="handleHisrotyTab(idx + 1)"
                v-for="(data, idx) of yearsData"
                :key="idx"
              >
                {{ data.years }}
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2021" v-if="HistoryTab === 1">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2021.title") }}</span>
                  <p>{{ $t("aboutHistory2021.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/bec8bd74-3437-4927-8e7b-d61903a4fa1a/image.png"
                    alt="연혁2021"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2021.list1") }}</li>
                  <li>{{ $t("aboutHistory2021.list2") }}</li>
                  <li>{{ $t("aboutHistory2021.list3") }}</li>
                  <li>{{ $t("aboutHistory2021.list4") }}</li>
                  <li>{{ $t("aboutHistory2021.list5") }}</li>
                  <li>{{ $t("aboutHistory2021.list6") }}</li>
                  <li>{{ $t("aboutHistory2021.list7") }}</li>
                  <li>{{ $t("aboutHistory2021.list8") }}</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2020" v-if="HistoryTab === 2">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2020.title") }}</span>
                  <p>{{ $t("aboutHistory2020.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/92c4317e-3153-4e50-b234-6f87795588c8/image.png"
                    alt="연혁2020"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2020.list1") }}</li>
                  <li>{{ $t("aboutHistory2020.list2") }}</li>
                  <li>{{ $t("aboutHistory2020.list3") }}</li>
                  <li>{{ $t("aboutHistory2020.list4") }}</li>
                  <li>{{ $t("aboutHistory2020.list5") }}</li>
                  <li>{{ $t("aboutHistory2020.list6") }}</li>
                  <li>{{ $t("aboutHistory2020.list7") }}</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2019" v-if="HistoryTab === 3">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2019.title") }}</span>
                  <p>{{ $t("aboutHistory2019.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/c1023645-90e2-4352-97ed-99302a7448d6/image.png"
                    alt="연혁2019"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2019.list1") }}</li>
                  <li>{{ $t("aboutHistory2019.list2") }}</li>
                  <li>{{ $t("aboutHistory2019.list3") }}</li>
                  <li>{{ $t("aboutHistory2019.list4") }}</li>
                </ul>
              </li>
            </ul>
            <ul
              class="aboutHistoryContCont"
              id="2017~2018"
              v-if="HistoryTab === 4"
            >
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2017_2018.title") }}</span>
                  <p>{{ $t("aboutHistory2017_2018.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/0ed0ed40-900d-44d7-b65b-d21b74dc51cd/image.png"
                    alt="연혁2017~2018"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2017_2018.list1") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list2") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list3") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list4") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list5") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list6") }}</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2016" v-if="HistoryTab === 5">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2016.title") }}</span>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/4ea0f11e-7bd7-43f3-b177-1342a88a13f8/image.png"
                    alt="연혁2016"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2016.list1") }}</li>
                  <li>{{ $t("aboutHistory2016.list2") }}</li>
                </ul>
              </li>
            </ul>
          </span>
        </div>
      </section>
      <section class="customers">
        <div class="customersInner">
          <span class="customersTit">
            <h2>CUSTOMERS</h2>
            <p>{{ $t("customersContent.content") }}</p>
          </span>
          <span class="customersCont">
            <ul class="customerContTab">
              <li
                :class="CustomerTab === 1 ? 'active' : ''"
                @click="handleCustomerTab(1)"
              >
                공공
              </li>
              <li
                :class="CustomerTab === 2 ? 'active' : ''"
                @click="handleCustomerTab(2)"
              >
                민간
              </li>
              <li
                :class="CustomerTab === 3 ? 'active' : ''"
                @click="handleCustomerTab(3)"
              >
                교육
              </li>
            </ul>
            <ul class="customerContCont">
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/1699289f-7c7e-411f-bc7d-587f891e3b34/image.png"
                  alt="한국전력공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/627b6ebc-8ac5-47a0-9004-a4572a7c42e5/image.png"
                  alt="전력연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0d4f8fcd-e45c-4e92-94e1-17cd1c7f94f6/image.png"
                  alt="국립문화재연구소"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9a6da9ad-ea39-47a2-8ed4-60377f58ebda/image.png"
                  alt="한국서부발전"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/c4cc7bc5-9080-4c15-96cb-e8549b19a2be/image.png"
                  alt="한국과학기술정보연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/17a784f3-1e9e-4443-a23f-43b38174f0b5/image.png"
                  alt="한국전자기술연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/4e92b83c-a19a-4b40-a1e6-e33c56461494/image.png"
                  alt="조달청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/853b1ab4-6fcd-4cd1-9c34-f3c0c4c1387b/image.png"
                  alt="한전kdn"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/e14e7f4d-cc10-45d9-aeb9-4965daa4e0ae/image.png"
                  alt="한국가스공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/06e6fb89-98b7-49aa-90ad-55212ad796ea/image.png"
                  alt="해양경찰청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f79de897-3336-4c22-a2ed-751064103bba/image.png"
                  alt="한국원자력환경공단"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/d8dd0000-f094-4a24-9db6-7958acaf5da4/image.png"
                  alt="서울창조경제혁신센터"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9408bb9c-fe24-4ce7-97ed-d6d61efd0064/image.png"
                  alt="부산현대미술관"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/259b1c50-7ef2-46cc-ac88-49a00627f316/image.png"
                  alt="중소벤처기업진흥공단"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/b22c1179-b10f-4232-977d-3ad882ee6f6d/image.png"
                  alt="한국공항공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/b834cb61-3561-4143-9224-72a39b17d24d/image.png"
                  alt="한국원자력연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/22d3c3ab-e503-498c-bf78-3d622f7634f4/image.png"
                  alt="한국도로공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/8c536493-1115-47a8-9809-22fb019a081e/image.png"
                  alt="한국철도기술연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f89b3702-657e-4dce-b38e-bf866d3913a4/image.png"
                  alt="한국과학기술정보연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/ed8929f6-e816-4491-9f53-7d54863c6434/image.png"
                  alt="부산광역시교육청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9adc7aaf-7ae6-4762-aebb-0c395f9eb54e/image.png"
                  alt="경기도경제과학진흥원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/02cfb563-3bfd-4a4d-98a0-aef5ef09aca4/image.png"
                  alt="충북테크노파크"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0542ecfc-12b9-4273-82f9-10d58451ef89/image.png"
                  alt="울산정보산업진흥원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/addf17de-b76f-46bf-9d0d-cb225ecf783c/image.png"
                  alt="KEA"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/4d765d3f-28de-4517-8775-65f009b619d4/image.png"
                  alt="서울기술연구원"
                />
              </li>
            </ul>
          </span>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
import snbSection from "~/components/modules/Snb";
import headingModule from "../../modules/Heading";
import companyAwards from "~/components/main/companyAwards.vue";
import SubVisual from "~/layouts/common/SubVisual.vue";

const historyData = [
  {
    years: "2021",
  },
  {
    years: "2020",
  },
  {
    years: "2019",
  },
  {
    years: "2017 ~ 2018",
  },
  {
    years: "2016",
  },
];
export default {
  components: {
    subVisualSection,
    snbSection,
    headingModule,
    companyAwards,
    SubVisual
},
  },
  data() {
    return {
      CustomerTab: 1,
      HistoryTab: 1,
      yearsData: historyData,
    };
  },
  methods: {
    handleCustomerTab(e) {
      this.CustomerTab = e;
    },
    handleHisrotyTab(e) {
      this.HistoryTab = e;
    },
  },
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/products.scss";
@import "~assets/css/modules/aboutVirnect.scss";
</style>
