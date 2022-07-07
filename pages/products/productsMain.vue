<template>
  <section>
    <productsMainBanner />
    <Pmain />
  </section>
</template>
<script>
import productsMainBanner from "~/components/products/partials/ProductsMainBanner";
import Pmain from "~/components/products/pages/Pmain";

export default {
  components: {
    productsMainBanner,
    Pmain,
  },
};
</script>
<style  scoped>
</style>
