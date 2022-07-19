<template>
  <section>
    <!-- COMPANY -->
    <div class="NewsBanner">
      <div class="NewsBannerInner">
        <p>Products</p>
        <h2>{{$t(`productsText.mainBanner.title`)}}</h2>
        <span v-html="$t(`productsText.mainBanner.text`)">
        </span>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "~/assets/css/modules/productsBanner.scss";
</style>