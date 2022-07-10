<template>
  <!-- 햄버거 서브메뉴 박스 -->
  <div class="hamSubBox" v-if="isMenu">
    <ul class="hamSubMenu">
      <li class="hamUseCase">
        <span class="hamUseCaseTit">
          <a
            @click="showMobileMenu('list1')"
            :class="`${mobileMenu['list1'] ? 'mobileMenuActive' : ''}`"
          >
            Value
          </a>
          <ul class="hamUseCaseMenu" v-if="mobileMenu['list1']">
            <li @click="goToPage(`/solutions/energy_resource`)">
              <a> 인프라/자원 </a>
            </li>
            <li @click="goToPage(`/solutions/oil_chemical_battery`)">
              <a> 제조/건설 </a>
            </li>
            <li @click="goToPage('/solutions/motor_parts')">
              <a> 공공/교육 </a>
            </li>
            <li @click="goToPage('/solutions/airline_railroad')">
              <a> 엔터테인먼트 </a>
            </li>
            <li @click="goToPage('/solutions/epc')">
              <a> 기타 </a>
            </li>
          </ul>
        </span>
        <span
          class="hamMenuToggle"
          @click="showMobileMenu('list1')"
        >
          <img
            :src="mobileMenu['list1'] ? isClose : isOpen"
            alt="일정접기"
            @click="showMobileMenu('list1')"
          />

          <!-- <img
            class="hamSubMenuOpen"
            src="https://velog.velcdn.com/images/kyj0206/post/77d76d78-4bc7-4e93-afa3-23eff596d40a/image.png"
            alt="메뉴 열기 아이콘"
            
          />
          <img
            class="hamSubMenuClose"
            src="https://velog.velcdn.com/images/kyj0206/post/1ada69e3-933d-498a-a77f-ddb3de372ae8/image.png"
            alt="메뉴 닫기 아이콘"
            v-if="isSub"
          /> -->
        </span>
      </li>
      <li class="hamProducts">
        <span class="hamProductsTit">
          <a @click="showMobileMenu('list2')"
              :class="`${mobileMenu['list2'] ? 'mobileMenuActive' : ''}`"> Products </a>
          <ul class="hamProductsMenu" v-if="mobileMenu['list2']">
            <li @click="goToPage('/products/remote')">
              <a> VIRNECT Remote </a>
            </li>
            <li @click="goToPage('/products/make')">
              <a> VIRNECT Make </a>
            </li>
            <li @click="goToPage('/products/view')">
              <a> VIRNECT VIEW </a>
            </li>
            <li @click="goToPage('/products/twin')">
              <a> VIRNECT Twin </a>
            </li>
            <li @click="goToPage('/products/track')">
              <a> VIRNECT Track </a>
            </li>
            <li @click="goToPage('/products/ms')">
              <a> XR Devices </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle" @click="[showMobileMenu('list2')]">
          <img
            :src="mobileMenu['list2'] ? isClose : isOpen"
            alt="일정접기"
            @click="showMobileMenu('list2')"
          />
        </span>
      </li>
      <li class="hamSupport">
        <span class="hamSupportTit">
          <a @click="showMobileMenu('list3')"
             :class="`${mobileMenu['list3'] ? 'mobileMenuActive' : ''}`"> Support </a>
          <ul class="hamSupportMenu" v-if="mobileMenu['list3']">
            <li @click="goToPage('/support/notice')">
              <a> Product Notice </a>
            </li>
            <li @click="goToPage('/support/faq')">
              <a> FAQ </a>
            </li>
            <li @click="goToPage('/support/learning-center')">
              <a> 학습센터 </a>
            </li>
            <li @click="goToPage('/support/inquiry')">
              <a> 문의하기 </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle" @click="[showMobileMenu('list3')]">
          <img
            :src="mobileMenu['list3'] ? isClose : isOpen"
            alt="일정접기"
            @click="showMobileMenu('list3')"
          />
        </span>
      </li>
      <li class="hamNews">
        <span class="hamNewsTit">
          <a @click="showMobileMenu('list4')"
             :class="`${mobileMenu['list4'] ? 'mobileMenuActive' : ''}`"> News </a>
          <ul class="hamNewsMenu" v-if="mobileMenu['list4']">
            <li @click="goToPage('/news/main')">
              <a> News & Press </a>
            </li>
            <!-- <li @click="goToPage('/company/about')">
              <a> People & Culture </a>
            </li>
            <li @click="goToPage('/company/about')">
              <a> Insight </a>
            </li> -->
          </ul>
        </span>
        <span class="hamMenuToggle" @click="[showMobileMenu('list4')]">
          <img
            :src="mobileMenu['list4'] ? isClose : isOpen"
            alt="일정접기"
            @click="showMobileMenu('list4')"
          />
        </span>
      </li>
      <li class="hamCompany">
        <span class="hamCompanyTit">
          <a @click="showMobileMenu('list5')"
             :class="`${mobileMenu['list5'] ? 'mobileMenuActive' : ''}`"> Company </a>
          <ul class="hamCompanyMenu" v-if="mobileMenu['list5']">
            <li @click="goToPage('/company/about')">
              <a> About VIRNECT </a>
            </li>
            <li @click="goToPage('/company/talent')">
              <a> 인재채용 </a>
            </li>
            <li @click="goToPage('/company/ir')">
              <a> IR </a>
            </li>
          </ul>
        </span>
        <span class="hamMenuToggle" @click="[showMobileMenu('list5')]">
          <img
            :src="mobileMenu['list5'] ? isClose : isOpen"
            alt="일정접기"
            @click="showMobileMenu('list5')"
          />
        </span>
      </li>
    </ul>
    <div class="hamSubBottom">
      <button
        class="bottomButton"
        @click="[subBottom(), toggle6(), (showEarth = false)]"
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
              target="blank"
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
            <a href="https://download.virnect.com/remote" target="blank">
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
            <a href="https://workstation.virnect.com/start" target="blank">
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
            <a href="https://remote.virnect.com/home" target="blank">
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
        <div class="languageWrap" v-if="showEarth" @click="langHide()">
          <span
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            @click="[langlang()]"
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

const hamUse = {};

export default {
  /* created(){
    function ff (e) {
    this.hamUse = { [e] : true or false }
    }
  }, */
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
    showMenu: Function
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
    mobileMenu: null,
    isShowing: true,
    isShowing2: true,
    isShowing3: true,
    isShowing4: true,
    isShowing5: true,
    isOpen: require("~/assets/images/common/icon-menu-more.png"),
    isClose: require("~/assets/images/common/icon-menu-close.png"),
    blueStyle: {},
    masterkey: false,
    mobileMenu: {list1: false}
    /* subOpen: false, */
  }),
  methods: {
    showMobileMenu(e) {
      console.log(e, "<<??", this.mobileMenu)
      const energy = "/solutions/energy_resource";
      const remote = "/products/remote";
      const notice = "/support/notice";
      const news = "/news/main";
      const about = "/company/about";
      const goPage = e === "list1" ? energy :
                     e === "list2" ? remote :
                     e === "list3" ? notice :
                     e === "list4" ? news   :
                     e === "list5" ? about : '';
      if (this.mobileMenu[e]) {
        this.goToPage(goPage);
        this.mobileMenu = {};
      } else {
        this.mobileMenu = {[e]: !this.mobileMenu[e]};
      }
    },
    goToPage(e) {
      this.mobileMenu = {};
      this.showMenu(false);
      this.$router.push(e);
    },
    // clickblue, masterClick 로직으로 텍스트 값도 변경하게 만듬.
    clickBlue() {
      if (this.masterkey == false) {
        this.blueStyle.color = "#0a51b7";
      }
      if (this.masterkey == true) {
        this.blueStyle.color = "#000000";
      }
    },
    masterClick() {
      this.masterkey = !this.masterkey;
    },
    happykey() {
      this.isShowing = !this.isShowing;
    },

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
      this.isBottomMenu = false;
    },
    showPage(e) {
      if (e === this.mobileMenu) {
        this.mobileMenu = null;
        this.$router.push(e);
        this.isMenu = false;
      } else {
        this.mobileMenu = e;
        if (e === "/solutions/energy_resource") {
          this.isSub = !this.isSub;
        }
        if (e === "/products/remote") {
          this.isSub2 = !this.isSub2;
        }
        if (e === "/support/notice") {
          this.isSub3 = !this.isSub3;
        }
        if (e === "/news/main") {
          this.isSub4 = !this.isSub4;
        }
        if (e === "/company/about") {
          this.isSub5 = !this.isSub5;
        }
      }
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
header .hamSubBox .hamSubMenu > li > span > a.mobileMenuActive {
  color: #0a51b7;
}
</style>
