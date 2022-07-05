<template>
  <section class="brand">
    <div class="brandInner">
      <!-- 브랜드 개요 -->
      <span class="brandTitle">
        <h2>VIRNECT는 고객의 가치를 지향합니다</h2>
        <p>VIRNECT는 고객의 문제를 해결하기 위해</p>
        <p>가상 현실(VIRTUAL)과 고객의 현실을 연결(Connect)합니다.</p>
      </span>
      <!-- 기업로고 (CI) -->
      <span class="brandCi">
        <dl>
          <dt>기업로고 (CI)</dt>
          <dd>
            VIRNECT CI는 신뢰 중시 / 시장 선도 / 상생 추구의 가치를 가지고
            있으며 VIRNECT의 아이덴티티를 일관성있게 표현하기 위한 핵심 디자인
            요소이자 상징적으로 시각화하는 기준점입니다.
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
              <p class="ciTit">신뢰 중시 (Blue)</p>
              <p class="ciCont">
                블루 색상은 고객과의 신뢰 관계를 중요하게 생각하고, 고객의 업무
                환경 개선의 청사진을 함께 만들어가는 VIRNECT를 의미합니다.
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
              <p class="ciTit">시장 선도 (Bold)</p>
              <p class="ciCont">
                볼드 타입의 로고 타이프는 AR/DT 시장을 선도하여 지속가능한
                솔루션을 제공하겠다는 VIRNECT 의지를 나타냅니다.
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
              <p class="ciTit">상생 추구 (Vertical & Round)</p>
              <p class="ciCont">
                사회의 일원으로서 더불어 살아간다는 마음을 가지고 사회, 국가,
                인류의 공동 번영을 위해 다름의 융화와 조화의 가치를 추구함을
                의미합니다.
              </p>
            </div>
          </li>
        </ul>
        <span class="fontStyle1">
          <p>기본형</p>
          <span>
            <img
              src="https://www.virnect.com/images/pages/company/logo-basic.png"
              alt="기본형"
            />
          </span>
        </span>
        <span class="fontStyle2">
          <span>
            <p>한글조합형</p>
            <span>
              <img
                src="https://www.virnect.com/images/pages/company/logo-kor-type.png"
                alt="한글조합형"
              />
            </span>
          </span>
          <span>
            <p>영문조합형</p>
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
            버넥트의 심벌마크 및 로고타이프는 어떤 상황에서도 변형이나 재조합이
            불가능합니다. 시그니처, 로고 타입 등을 사용하기 위해서는 CI 파일을
            다운로드받아 활용하시기 바랍니다.
          </p>
          <a href="#" download>CI 다운로드</a>
        </div>
      </span>
      <!-- 제품로고 (BI) -->
      <span class="brrandBi">
        <dl>
          <dt>제품 로고 (BI)</dt>
          <dd>
            VIRNECT 제품의 육각형 모티브 로고는 산업을 구성하는 모든 정보와
            구성원의 융화와 결합을 의미합니다. VIRNECT의 다양한 제품을 사용자가
            쉽게 구별하기 위한 목적으로 사용됩니다.
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
