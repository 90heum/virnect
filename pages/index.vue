
<template>
  <div>
    <main-banner class="mainBanner" />

    <!-- <banner-module /> -->

    <product-component />

    <use-case />

    <company-component :contentList="contentList"/>

    <support-component />

    <cta-module />
  </div>
</template>

<script>
import MainBanner from "~/components/main/mainBanner.vue";
/* import BannerModule from "~/components/main/bannerModule.vue"; */
import UseCase from "~/components/main/useCase.vue";
import CompanyComponent from "~/components/main/company.vue";
import SupportComponent from "~/components/products/partials/SupportPart.vue";
import CtaModule from "~/components/main/ctaModule.vue";
import ProductComponent from "~/components/main/products.vue";
export default {
  async asyncData({ $axios }) {
      try {
        const data = await $axios.get(`admin/news?page=1&size=${20}`);
        const dataJson = await data;
        return {
          contentList: dataJson.data.data.newsBoardResponseList,
        };
      } catch (e) {
        console.error(e);
      }
    },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  components: {
    MainBanner,
    /*  BannerModule, */
    UseCase,
    CompanyComponent,
    SupportComponent,
    CtaModule,
    ProductComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/reset.scss";

.mainBanner {
  margin: 0 auto;
}
</style>
