<template>
  <section class="talent">
    <subVisualSection
      class="sm"
      :image="'https://velog.velcdn.com/images/kyj0206/post/826e3755-e1d4-4466-bf63-273cc3b52c9c/image.png'"
      :category="'Company'"
      :title="$t('companyText.visualText.title')"
      :contents="$t('companyText.visualText.contents')"
    ></subVisualSection>

    <subMenuBrand />
    <div class="talentWrap">
      <span class="talentTit">
        <p>
          버넥트는 글로벌 No.1 XR 플랫폼 기업이 되기 위해 모두가 같은 목표를
          향해 달리고 있습니다.
        </p>
        <p>버넥트의 현재와 미래를 함께 만들어갈 여러분을 기다립니다.</p>
      </span>
      <span class="talentCont">
        <button>
          <a href="#"> 채용정보 자세히 보기 </a>
        </button>
      </span>
    </div>
  </section>
</template>

<script>
import Recruit from "~/components/company/pages/Recruit.vue";
import subMenuBrand from "../../components/company/partials/subMenuBrand.vue";
import subVisualSection from "~/layouts/common/SubVisual.vue";

export default {
  components: {
    Recruit,
    subMenuBrand,
    subVisualSection,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
.talent {
  width: 100%;
}
.talent .talentWrap {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 30px 80px;
}
.talent .talentWrap .talentTit {
  p {
    color: #121212;
  }
  display: block;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
  padding-bottom: 80px;
  border-bottom: solid 1px #979797;
}
.talent .talentWrap .talentCont {
  display: block;
  margin-top: 80px;
}
.talent .talentWrap .talentCont button {
  width: 282px;
  height: 84.6px;
  padding: 26px 45px;
  border: solid 1px #0a51b7;
  background-color: #0a51b7;
}
.talent .talentWrap .talentCont button a {
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}
</style>