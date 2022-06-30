<template>
  <section class="company-summary-section">
    <heading-module
      :title="$t('companyText.summaryText.summaryTitle.title')"
      :contents="$t('companyText.summaryText.summaryTitle.contents')"
    ></heading-module>

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

    <section class="line-divide-list customers">
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
    </section>

    <section class="line-divide-list partners">
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
    </section>
  </section>
</template>

<script>
//import { mapGetters } from "vuex";
import headingModule from "~/layouts/modules/Heading";
export default {
  components: {
    headingModule,
  },
  data() {
    return {
      publicOptions: {
        slidesPerView: 2,
        slidesPerColumn: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        pagination: {
          el: ".pagination",
          clickable: true,
          renderBullet(index, classs) {
            return `<li class="${classs}"><svg
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="10px" height="12px">
<path fill-rule="evenodd"  
 d="M5.000,-0.000 L-0.000,3.000 L-0.000,9.000 L5.000,12.000 L10.000,9.000 L10.000,3.000 L5.000,-0.000 Z"/>
</svg></li>`;
          },
        },
      },
    };
  },
  computed: {
    //  ...mapGetters(["isMobile"]),
  },
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/company.scss";
</style>
