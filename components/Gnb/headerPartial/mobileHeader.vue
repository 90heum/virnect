<template>
  <!-- 햄버거 서브메뉴 박스 -->
  <div class="hamSubBox" v-if="isMenu">
    <ul class="hamSubMenu">
      <li class="hamUseCase">
        <span class="hamUseCaseTit">
          <a href="#"> Value </a>
          <ul class="hamUseCaseMenu">
            <li>
              <a href="#"> 인프라/자원 </a>
            </li>
            <li>
              <a href="#"> 제조/건설 </a>
            </li>
            <li>
              <a href="#"> 공공/교육 </a>
            </li>
            <li>
              <a href="#"> 엔터테인먼트 </a>
            </li>
            <li>
              <a href="#"> 기타 </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle">
          <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
          />
        </span>
      </li>
      <li class="hamProducts">
        <span class="hamProductsTit">
          <a href="#"> Products </a>
          <ul class="hamProductsMenu">
            <li>
              <a href="#"> VIRNECT Remote </a>
            </li>
            <li>
              <a href="#"> VIRNECT Make </a>
            </li>
            <li>
              <a href="#"> VIRNECT VIEW </a>
            </li>
            <li>
              <a href="#"> VIRNECT Twin </a>
            </li>
            <li>
              <a href="#"> VIRNECT Track </a>
            </li>
            <li>
              <a href="#"> XR Devices </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle">
          <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
          />
        </span>
      </li>
      <li class="hamSupport">
        <span class="hamSupportTit">
          <a href="#"> Support </a>
          <ul class="hamSupportMenu">
            <li>
              <a href="#"> Product Notice </a>
            </li>
            <li>
              <a href="#"> FAQ </a>
            </li>
            <li>
              <a href="#"> 학습센터 </a>
            </li>
            <li>
              <a href="#"> 문의하기 </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle">
          <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
          />
        </span>
      </li>
      <li class="hamNews">
        <span class="hamNewsTit">
          <a href="#"> News </a>
          <ul class="hamNewsMenu">
            <li>
              <a href="#"> News & Press </a>
            </li>
            <li>
              <a href="#"> People & Culture </a>
            </li>
            <li>
              <a href="#"> Insight </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle">
          <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
          />
        </span>
      </li>
      <li class="hamCompany">
        <span class="hamCompanyTit">
          <a href="#"> Company </a>
          <ul class="hamCompanyMenu">
            <li>
              <a href="#"> About VIRNECT </a>
            </li>
            <li>
              <a href="#"> 인재채용 </a>
            </li>
            <li>
              <a href="#"> IR </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle">
          <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
          />
        </span>
      </li>
    </ul>
    <div class="hamSubBottom">
      <button class="bottomButton">
        <a>
          <p>VIRNECT Service</p>
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/403aea25-9c5a-498a-acf2-8766e5383a18/image.png"
              alt="다운아이콘"
            />
          </i>
        </a>
        <ul class="hamSubBottomMenu">
          <li class="option">
            <a href="#">
              <p>서비스 로그인</p>
              <i>
                <img
                  class="subBottomMenuIconOpen"
                  src="https://velog.velcdn.com/images/kyj0206/post/bd7c4128-8517-4eb0-b693-b3df42c50524/image.png"
                  alt="서브옵션메뉴아이콘"
                />
                <img
                  class="subBottomMenuIconClose"
                  src="https://velog.velcdn.com/images/kyj0206/post/c045ee98-b154-48bb-bb09-365f51214fec/image.png"
                  alt="서브옵션메뉴아이콘"
                />
              </i>
            </a>
          </li>
          <li class="option">
            <a href="#">
              <p>다운로드 센터 2.0</p>
              <i>
                <img
                  class="subBottomMenuIconOpen"
                  src="https://velog.velcdn.com/images/kyj0206/post/bd7c4128-8517-4eb0-b693-b3df42c50524/image.png"
                  alt="서브옵션메뉴아이콘"
                />
                <img
                  class="subBottomMenuIconClose"
                  src="https://velog.velcdn.com/images/kyj0206/post/c045ee98-b154-48bb-bb09-365f51214fec/image.png"
                  alt="서브옵션메뉴아이콘"
                />
              </i>
            </a>
          </li>
          <li class="option">
            <a href="#">
              <p>Workstation 2.0</p>
              <i>
                <img
                  class="subBottomMenuIconOpen"
                  src="https://velog.velcdn.com/images/kyj0206/post/bd7c4128-8517-4eb0-b693-b3df42c50524/image.png"
                  alt="서브옵션메뉴아이콘"
                />
                <img
                  class="subBottomMenuIconClose"
                  src="https://velog.velcdn.com/images/kyj0206/post/c045ee98-b154-48bb-bb09-365f51214fec/image.png"
                  alt="서브옵션메뉴아이콘"
                />
              </i>
            </a>
          </li>
          <li class="option">
            <a href="#">
              <p>Remote 2.0</p>
              <i>
                <img
                  class="subBottomMenuIconOpen"
                  src="https://velog.velcdn.com/images/kyj0206/post/bd7c4128-8517-4eb0-b693-b3df42c50524/image.png"
                  alt="서브옵션메뉴아이콘"
                />
                <img
                  class="subBottomMenuIconClose"
                  src="https://velog.velcdn.com/images/kyj0206/post/c045ee98-b154-48bb-bb09-365f51214fec/image.png"
                  alt="서브옵션메뉴아이콘"
                />
              </i>
            </a>
          </li>
        </ul>
      </button>
      <span>
        <a class="subBottomLanguage">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/98320b08-1c52-4226-a6f0-7ab1e58fb363/image.png"
            alt="언어선택 박스"
          />
        </a>
        <!-- 언어선택 박스 -->
        <div class="languageWrap" v-if="showEarth">
          <span
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            @click="langlang()"
          >
            <a>{{ locale.name }}</a>
          </span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenu: Boolean,
    availableLocales: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/header.scss";
</style>
