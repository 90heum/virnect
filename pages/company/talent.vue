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
          버넥트는 사람과 사람/로봇, 현실과 가상, 시간과 공간, 정보와 지식,
          그리고 지혜를 서로 연결하여스마트한 미래, 행복한 미래, 지속가능한
          저탄소 미래를 만들어 나갑니다.
        </p>
      </span>
      <span class="talentCont">
        <button>
          <a
            href="https://virnect.notion.site/70deb7e4870c45b29bb3fccf9103af57"
            target="blank"
          >
            채용정보 자세히 보기
          </a>
        </button>
      </span>
    </div>
    <ctaModule />
  </section>
</template>

<script>
import Recruit from "~/components/company/pages/Recruit.vue";
import subMenuBrand from "../../components/company/partials/subMenuBrand.vue";
import subVisualSection from "~/layouts/common/SubVisual.vue";
import ctaModule from "~/components/main/ctaModule.vue";

export default {
  components: {
    Recruit,
    subMenuBrand,
    subVisualSection,
    ctaModule,
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