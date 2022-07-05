<template>
  <section>
    <Recruit />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";

import Recruit from "~/components/company/pages/Recruit.vue";

export default {
  components: {
    subVisualSection,
    Recruit,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
</style>