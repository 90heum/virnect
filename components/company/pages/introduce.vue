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

    <heading-module
      :title="$t('companyText.summaryText.summaryTitle.title')"
      :contents="$t('companyText.summaryText.summaryTitle.contents')"
    ></heading-module>

    <dl class="mission insight-section">
      <dt class="title">
        {{ $t("companyText.summaryText.missionText.title") }}
      </dt>
      <dd>
        <p class="title">
          {{ $t("companyText.summaryText.missionText.contents") }}
        </p>
        <p
          class="contents"
          v-if="$t('companyText.summaryText.missionText.subContents')"
        >
          {{ $t("companyText.summaryText.missionText.subContents") }}
        </p>
      </dd>
    </dl>
    <dl class="vission insight-section">
      <dt class="title">
        {{ $t("companyText.summaryText.vissionText.title") }}
      </dt>
      <dd>
        <p
          class="title"
          v-html="$t('companyText.summaryText.vissionText.contents')"
        ></p>
      </dd>
    </dl>

    <ul class="we-proud">
      <li
        v-for="(list, idx) of $t('companyText.summaryText.weProudArr')"
        :key="idx"
      >
        <p class="contents" v-html="list.contents"></p>
        <p class="count" v-html="list.count"></p>
      </li>
    </ul>
    <p class="we-proud-noti">{{ $t("companyText.summaryText.weProudText") }}</p>

    <section class="businessarea-section">
      <p class="category">
        {{ $t("companyText.summaryText.businessAreaTitle.category") }}
      </p>
      <p
        class="contents"
        v-html="$t('companyText.summaryText.businessAreaTitle.title')"
      ></p>
      <img src="~assets/images/pages/company/img-compay-info@2x.png" />
    </section>

    <!-- <section class="line-divide-list customers">
      <h3>CUSTOMERS</h3>
      <dl>
        <dt>{{ $t("companyText.summaryText.customers.public") }}</dt>
        <dd>
          <ul>
            <li v-for="(list, idx) in 16" :key="idx">
              <img
                :src="`../images/pages/company/img-public-${idx + 1}.png`"
                :srcset="`../images/pages/company/img-public-${
                  idx + 1
                }@2x.png 2x`"
              />
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="public-list-wrap">
        <dt>{{ $t("companyText.summaryText.customers.private") }}</dt>
        <dd>
          <ul v-if="!isMobile">
            <li v-for="(list, idx) in 28" :key="idx">
              <img
                :src="`../images/pages/company/img-private-${idx + 1}.png`"
                :srcset="`../images/pages/company/img-private-${
                  idx + 1
                }@2x.png 2x`"
              />
            </li>
          </ul>
          <swiper :options="publicOptions" v-if="isMobile">
            <swiper-slide v-for="(list, idx) in 16" :key="idx">
              <img
                :src="`../images/pages/company/img-private-${idx + 1}.png`"
                :srcset="`../images/pages/company/img-private-${
                  idx + 1
                }@2x.png 2x`"
              />
            </swiper-slide>
          </swiper>
          <ul class="pagination" slot="pagination" v-if="isMobile"></ul>
        </dd>
      </dl>
      <dl>
        <dt>{{ $t("companyText.summaryText.customers.education") }}</dt>
        <dd>
          <ul>
            <li v-for="(list, idx) in 12" :key="idx">
              <img
                :src="`../images/pages/company/img-edu-${idx + 1}.png`"
                :srcset="`../images/pages/company/img-edu-${idx + 1}@2x.png 2x`"
              />
            </li>
          </ul>
        </dd>
      </dl>
    </section> -->

    <!-- <section class="line-divide-list partners">
      <h3>PARTNERS</h3>
      <ul>
        <li v-for="(list, idx) in 8" :key="idx">
          <img
            :src="`../images/pages/company/img-partners-${idx + 1}.png`"
            :srcset="`../images/pages/company/img-partners-${
              idx + 1
            }@2x.png 2x`"
          />
        </li>
      </ul>
    </section> -->
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
import snbSection from "~/components/modules/Snb";
import headingModule from "../../modules/Heading";
export default {
  components: {
    subVisualSection,
    snbSection,
    headingModule,
  },
  data() {
    return {
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
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/products.scss";
@import "~assets/css/pages/company.scss";
</style>
