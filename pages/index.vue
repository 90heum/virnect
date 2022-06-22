
<template>
  <div>

    <main-banner />

    <banner-module />

    <!-- 프로덕트 들어갈 듯 -->

    <use-case />

    <company-component />

    <suppoer-component />

    <cta-module />
    
  </div>
</template>

<script>
import MainBanner from "~/components/main/mainBanner.vue";
import BannerModule from "~/components/main/bannerModule.vue";
import UseCase from "~/components/main/useCase.vue";
import CompanyComponent from "~/components/main/company.vue";
import SupportComponent from "~/components/main/suppoert.vue";
import CtaModule from '../components/main/ctaModule.vue';
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  components: {
    MainBanner,
    BannerModule,
    UseCase,
    CompanyComponent,
    SupportComponent,
    CtaModule
  }
};
</script>

<style lang="scss" scoped>
</style>
