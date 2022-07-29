<template>
  <section class="brand">
    <div class="brandInner">
      <!-- 브랜드 개요 -->
      <span class="brandTitle">
        <h2>{{ $t("newCompany.BrandText.topTitleText") }}</h2>
        <p>{{ $t("newCompany.BrandText.topContents1") }}</p>
        <p>{{ $t("newCompany.BrandText.topContents2") }}</p>
      </span>
      <!-- 기업로고 (CI) -->
      <span class="brandCi">
        <dl>
          <dt>{{ $t("newCompany.BrandText.companylogo") }}</dt>
          <dd>
            {{ $t("newCompany.BrandText.logoContents") }}
          </dd>
        </dl>
        <ul>
          <li>
            <div>
              <img
                src="https://www.virnect.com/images/pages/company/img-brand-02.png"
                alt=""
              />
            </div>
            <div>
              <p class="ciTit">{{ $t("newCompany.BrandText.twinTitle1") }}</p>
              <p class="ciCont">
                {{ $t("newCompany.BrandText.twinContents1") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://www.virnect.com/images/pages/company/img-brand-01.png"
                alt=""
              />
            </div>
            <div>
              <p class="ciTit">{{ $t("newCompany.BrandText.twinTitle2") }}</p>
              <p class="ciCont">
                {{ $t("newCompany.BrandText.twinContents2") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://www.virnect.com/images/pages/company/img-brand-03.png"
                alt=""
              />
            </div>
            <div>
              <p class="ciTit">{{ $t("newCompany.BrandText.twinTitle3") }}</p>
              <p class="ciCont">
                {{ $t("newCompany.BrandText.twinContents3") }}
              </p>
            </div>
          </li>
        </ul>
        <span class="fontStyle1">
          <p>{{ $t("newCompany.BrandText.basicText") }}</p>
          <span>
            <img
              src="https://www.virnect.com/images/pages/company/logo-basic.png"
              alt="기본형"
            />
          </span>
        </span>
        <span class="fontStyle2">
          <span>
            <p>{{ $t("newCompany.BrandText.hangeulText") }}</p>
            <span>
              <img
                src="https://www.virnect.com/images/pages/company/logo-kor-type.png"
                alt="한글조합형"
              />
            </span>
          </span>
          <span>
            <p>{{ $t("newCompany.BrandText.englishText") }}</p>
            <span>
              <img
                src="https://www.virnect.com/images/pages/company/logo-eng-type.png"
                alt="영문조합형"
              />
            </span>
          </span>
        </span>
        <div class="branding-notice">
          <p>
            {{ $t("newCompany.BrandText.downText") }}
          </p>
          <a href="http://test-api.virnect.com:8080/static/VIRNECT_CI.zip" download>{{
            $t("newCompany.BrandText.downTextButtonText")
          }}</a>
        </div>
      </span>
      <!-- 제품로고 (BI) -->
      <span class="brrandBi">
        <dl>
          <dt>{{ $t("newCompany.BrandText.logoText2") }}</dt>
          <dd>
            {{ $t("newCompany.BrandText.logoContents2") }}
            <div>
              <img
                src="https://www.virnect.com/images/pages/company/logo-bi.png"
                alt="로고이미지"
              />
            </div>
          </dd>
        </dl>
      </span>
    </div>
  </section>
</template>

<script>
import headingModule from "../../modules/Heading";
export default {
  components: {
    headingModule,
  },
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/products.scss";
//@import "~assets/css/pages/company.scss";
@import "~assets/css/pages/brand.scss";
</style>
