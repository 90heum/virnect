<template>
  <!-- 햄버거 서브메뉴 박스 -->
  <div class="hamSubBox" v-if="isMenu">
    <ul class="hamSubMenu">
      <li class="hamUseCase">
        <span class="hamUseCaseTit">
          <a href="#"> Value </a>
          <ul class="hamUseCaseMenu" v-if="isSub">
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
        <span class="hamMenuToggle" @click="[showUse(true)]">
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
          <ul class="hamProductsMenu" v-if="isSub2">
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
        <span class="hamMenuToggle" @click="[showUse2(true)]">
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
          <ul class="hamSupportMenu" v-if="isSub3">
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
        <span class="hamMenuToggle" @click="[showUse3(true)]">
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
          <ul class="hamNewsMenu" v-if="isSub4">
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
        <span class="hamMenuToggle" @click="[showUse4(true)]">
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
          <ul class="hamCompanyMenu" v-if="isSub5">
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
        <span class="hamMenuToggle" @click="[showUse5(true)]">
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
      <button class="bottomButton" @click="subBottom()" v-if="isWeb">
        <a>
          <p>VIRNECT Service</p>
          <div class="arrow">
            <img
              class="downIcon6"
              src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
              alt="다운아이콘"
              v-if="!isBottomMenu"
            />
            <img
              class="upIcon6"
              src="https://velog.velcdn.com/images/kyj0206/post/40c8c0f7-9963-4afb-b488-b7fab422d86f/image.png"
              alt="업아이콘"
              v-if="isBottomMenu"
            />
          </div>
        </a>
        <ul class="hamSubBottomMenu" v-if="isBottomMenu">
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
      <span @click="[(lang = true), langlang()]" v-if="isWeb">
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
          >
            <a>{{ locale.name }}</a>
          </span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
//import vClickOutside from 'v-click-outside'

export default {
  /* directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
  }, */
  props: {
    isMenu: Boolean,
    availableLocales: Array,
  },
  data: () => ({
    lang: false,
    isHam: true,
    isSub: false,
    isSub2: false,
    isSub3: false,
    isSub4: false,
    isSub5: false,
    isBottomMenu: false,
    isWeb: true,
    showEarth: false,
  }),
  methods: {
    showUse() {
      this.isSub = !this.isSub;
    },
    showUse2() {
      this.isSub2 = !this.isSub2;
    },
    showUse3() {
      this.isSub3 = !this.isSub3;
    },
    showUse4() {
      this.isSub4 = !this.isSub4;
    },
    showUse5() {
      this.isSub5 = !this.isSub5;
    },
    test() {
      console.log("test");
      this.$emit("close");
    },
    subBottom() {
      this.isBottomMenu = !this.isBottomMenu;
    },
    langlang() {
      this.showEarth = !this.showEarth;
    },

    /* onClickOutside (event) {
          this.isSub = false
        },
        selectTab (input) {
          this.value = input
          this.isSub = false
        }, */
    /* showUse(){
            if(this.isSub){
                window.addEventListener('click', this.onClick);
            }else{
                window.removeEventListener('click', this.onClick);
            } 
        } */
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/header.scss";
</style>
