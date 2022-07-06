<template>
  <!-- 햄버거 서브메뉴 박스 -->
  <div class="hamSubBox" v-if="isMenu">
    <ul class="hamSubMenu">
      <li class="hamUseCase">
        <span class="hamUseCaseTit" @click="[hamMenuPage(), showMenu(false)]">
          <a href="/solutions/energy_resource" @click="supertest()"> Value </a>
          <ul class="hamUseCaseMenu" v-if="isSub" v-show="open">
            <li @click="supertest()">
              <a href="/solutions/energy_resource"> 인프라/자원 </a>
            </li>
            <li @click="supertest()">
              <a href="/solutions/oil_chemical_battery"> 제조/건설 </a>
            </li>
            <li @click="supertest()">
              <a href="/solutions/motor_parts"> 공공/교육 </a>
            </li>
            <li @click="supertest()">
              <a href="/solutions/airline_railroad"> 엔터테인먼트 </a>
            </li>
            <li @click="supertest()">
              <a href="/solutions/epc"> 기타 </a>
            </li>
          </ul>
        </span>
        <span
          class="hamMenuToggle"
          @click="[showUse(), changeHamTit(), toggle()]"
          v-click-outside="hide"
        >
          <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
            v-if="isSub"
          />
        </span>
      </li>
      <li class="hamProducts">
        <span class="hamProductsTit">
          <a href="/products/remote" @click="supertest()"> Products </a>
          <ul class="hamProductsMenu" v-if="isSub2" v-show="open2">
            <li @click="supertest()">
              <a href="/products/remote"> VIRNECT Remote </a>
            </li>
            <li @click="supertest()">
              <a href="/products/make"> VIRNECT Make </a>
            </li>
            <li @click="supertest()">
              <a href="/products/view"> VIRNECT VIEW </a>
            </li>
            <li @click="supertest()">
              <a href="/products/twin"> VIRNECT Twin </a>
            </li>
            <li @click="supertest()">
              <a href="/products/track"> VIRNECT Track </a>
            </li>
            <li @click="supertest()">
              <a href="/products/ms"> XR Devices </a>
            </li>
          </ul>
        </span>
        <span
          class="hamMenuToggle"
          @click="[showUse2(true), toggle2()]"
          v-click-outside="hide2"
        >
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
          <a href="/support/notice" @click="supertest()"> Support </a>
          <ul class="hamSupportMenu" v-if="isSub3" v-show="open3">
            <li @click="supertest()">
              <a href="/support/notice"> Product Notice </a>
            </li>
            <li @click="supertest()">
              <a href="/support/faq"> FAQ </a>
            </li>
            <li @click="supertest()">
              <a href="/support/learning-center"> 학습센터 </a>
            </li>
            <li @click="supertest()">
              <a href="/support/inquiry"> 문의하기 </a>
            </li>
          </ul>
        </span>
        <span
          class="hamMenuToggle"
          @click="[showUse3(true), toggle3()]"
          v-click-outside="hide3"
        >
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
          <a href="#" @click="supertest()"> News </a>
          <ul class="hamNewsMenu" v-if="isSub4" v-show="open4">
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
        <span
          class="hamMenuToggle"
          @click="[showUse4(true), toggle4()]"
          v-click-outside="hide4"
        >
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
          <a href="/company/about" @click="supertest()"> Company </a>
          <ul class="hamCompanyMenu" v-if="isSub5" v-show="open5">
            <li @click="supertest()">
              <a href="/company/about"> About VIRNECT </a>
            </li>
            <li @click="supertest()">
              <a href="/company/talent"> 인재채용 </a>
            </li>
            <li @click="supertest()">
              <a href="/company/ir"> IR </a>
            </li>
          </ul>
        </span>
        <span
          class="hamMenuToggle"
          @click="[showUse5(true), toggle5()]"
          v-click-outside="hide5"
        >
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
      <button
        class="bottomButton"
        @click="[subBottom(), toggle6()]"
        v-if="isWeb"
        v-click-outside="hamServiceHide"
      >
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
        <ul
          class="hamSubBottomMenu"
          v-if="isBottomMenu"
          v-show="hamServiceOpen"
        >
          <li class="option">
            <a
              href="https://console.virnect.com/?continue=https%3A%2F%2Fvirnect.com%2F"
            >
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
            <a href="https://download.virnect.com/remote">
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
            <a href="https://workstation.virnect.com/start">
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
            <a href="https://remote.virnect.com/home">
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
import ClickOutside from "vue-click-outside";

export default {
  /* directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
  }, */
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
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
    isMenu: false,
    hamTitStyle: {},
    open: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    hamServiceOpen: false,
    /* subOpen: false, */
  }),
  methods: {
    subPage() {
      this.subOpen = true;
    },
    subHide() {
      this.subOpen = false;
    },
    toggle() {
      this.open = true;
    },
    hide() {
      this.open = false;
    },
    toggle2() {
      this.open2 = true;
    },
    hide2() {
      this.open2 = false;
    },
    toggle3() {
      this.open3 = true;
    },
    hide3() {
      this.open3 = false;
    },
    toggle4() {
      this.open4 = true;
    },
    hide4() {
      this.open4 = false;
    },
    toggle5() {
      this.open5 = true;
    },
    hide5() {
      this.open5 = false;
    },
    toggle6() {
      this.hamServiceOpen = true;
    },
    hamServiceHide() {
      this.hamServiceOpen = false;
    },

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
    changeHamTit() {
      this.hamTitStyle.color = "#0a51b7";
    },
    subBottom() {
      this.isBottomMenu = !this.isBottomMenu;
    },
    langlang() {
      this.showEarth = !this.showEarth;
    },
    supertest() {
      this.isMenu = false;
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
  mounted() {
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/header.scss";
</style>
