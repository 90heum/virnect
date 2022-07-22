<template>
  <div class="footer">
    <div class="footerWrap">
      <span class="footerTop">
        <span class="footerNavWeb">
          <div class="upButton" @click="scrollToTop">
            <a>
              <img
                class="upup"
                src="../assets/images/common/topbut@2x.png"
                alt="upButton"
              />
              <img
                class="upHover"
                src="~/assets/images/pages/epc/footerTop12.png"
                alt="upButton"
              />
            </a>
          </div>
          <ul>
            <li>
              <nuxt-link to="/value/infra_resource">Value</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/value/infra_resource">{{
                    $t(`footer.value.title1`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/manufacture_construction">{{
                    $t(`footer.value.title2`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/public_education">{{
                    $t(`footer.value.title3`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/entertainment">{{
                    $t(`footer.value.title4`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/etc">{{
                    $t(`footer.value.title5`)
                  }}</nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/products/productsMain">Products</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/products/remote">VIRNECT Remote</nuxt-link>
                </li>
                <li><nuxt-link to="/products/make">VIRNECT Make</nuxt-link></li>
                <li><nuxt-link to="/products/view">VIRNECT View</nuxt-link></li>
                <li><nuxt-link to="/products/twin">VIRNECT Twin</nuxt-link></li>
                <li>
                  <nuxt-link to="/products/track">VIRNECT Track</nuxt-link>
                </li>
                <li><nuxt-link to="/products/ms">XR Devices</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/support/supportSubMain">Support</nuxt-link>
              <ul>
                <li><nuxt-link to="/support/notice">Notice</nuxt-link></li>
                <li><nuxt-link to="/support/faq">FAQ</nuxt-link></li>
                <li>
                  <nuxt-link to="/support/learning-center">{{$t(`footer.support.tit1`)}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/support/inquiry" :target="blank"
                    >{{$t(`footer.support.tit2`)}}</nuxt-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/news/news-press">News</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/news/main">News & press</nuxt-link>
                </li>
                <!-- <li><a href="#">People & Culture</a></li>
                <li><a href="#">Insight</a></li>
                <li><a href="#">ESG</a></li> -->
              </ul>
            </li>
            <li>
              <nuxt-link to="/company/about">Company</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/company/about">About VIRNECT</nuxt-link>
                </li>
                <li v-if="$i18n.localeProperties.code === 'ko'">
                  <nuxt-link to="/company/talent">인재채용</nuxt-link>
                </li>
                <li v-if="$i18n.localeProperties.code === 'ko'">
                  <nuxt-link to="/company/ir">IR</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </span>
        <span class="footerNavMb">
          <span class="infoLogoMb">
            <img
              src="~/assets/images/pages/epc/footerlogologo.png"
              alt="infoLogo"
            />
          </span>
          <ul>
            <li>
              <nuxt-link to="/products/remote">
                <i
                  ><img
                    src="~/assets/images/pages/epc/footerimage2311.png"
                    alt="Remote"
                /></i>
                <p>VIRNECT Remote</p>
                <i
                  ><img
                    src="~/assets/images/pages/epc/footer1245.png"
                    alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/make">
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6bd22ee2-8bfe-4266-a733-fa30444c86c4/image.png"
                    alt="Make"
                /></i>
                <p>VIRNECT Make</p>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/80ac6d1e-8bf0-400b-aaae-4117151d714d/image.png"
                    alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/view">
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/eaee1485-ad71-4cb5-9bc4-334007dea716/image.png"
                    alt="View"
                /></i>
                <p>VIRNECT View</p>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/80ac6d1e-8bf0-400b-aaae-4117151d714d/image.png"
                    alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/twin">
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/737f774b-0624-4e69-8d03-d54d4eca271e/image.png"
                    alt="Twin"
                /></i>
                <p>VIRNECT Twin</p>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/80ac6d1e-8bf0-400b-aaae-4117151d714d/image.png"
                    alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/track">
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/503bf3bb-8bb4-4dcf-87bd-ab561d3a374f/image.png"
                    alt="Track"
                /></i>
                <p>VIRNECT Track</p>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/80ac6d1e-8bf0-400b-aaae-4117151d714d/image.png"
                    alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
          </ul>
        </span>
        <span class="footerInfo">
          <span class="infoLeft">
            <span class="infoLogoWeb">
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/d3ed8e90-ece6-44d8-be3c-5e6a93b8a7ec/image.png"
                alt="infoLogo"
              />
            </span>
            <span class="infoList">
              <p>
                {{ $t(`footer.infolink.contents1`)
                }}<a>{{ $t(`footer.infolink.contents2`) }}</a>
              </p>
              <p>
                {{ $t(`footer.infolink.contents3`) }}
                <a href="mailto:contact@virnect.com" target="blank"
                  ><u>{{ $t(`footer.infolink.contents4`) }}</u>
                </a>
              </p>
              <p>
                {{ $t(`footer.infolink.contents5`) }}
                <a href="mailto:support@virnect.com" target="blank"
                  ><u>{{ $t(`footer.infolink.contents6`) }}</u></a
                >
              </p>
            </span>
            <span class="infoButton">
              <span class="buttonWrap">
                <!-- 서비스선택 박스 -->
                <div
                  class="serviceSelect"
                  @click="[showServiceMenu(), toggle(), (showEarth = false)]"
                  v-click-outside="serviceHide"
                  v-if="isWeb"
                >
                  <div class="select" v-bind:style="showStyle">
                    <div class="selected">
                      <div class="selected-value" v-bind:style="showText">
                        <a>VIRNECT Service</a>
                      </div>
                      <div class="arrow">
                        <img
                          class="downIcon6"
                          src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                          alt="다운아이콘"
                          v-if="!isServiceMenu"
                        />
                        <img
                          class="upIcon6"
                          src="https://velog.velcdn.com/images/kyj0206/post/40c8c0f7-9963-4afb-b488-b7fab422d86f/image.png"
                          alt="업아이콘"
                          v-if="isServiceMenu"
                        />
                      </div>
                    </div>
                    <ul v-if="isServiceMenu" v-show="serviceOpen">
                      <li class="option">
                        <a
                          href="https://console.virnect.com/?continue=https%3A%2F%2Fvirnect.com%2F"
                          target="blank"
                        >
                          <p v-html="$t(`service.text1`)"></p>

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
                        <a
                          href="https://download.virnect.com/remote"
                          target="blank"
                        >
                          <p v-html="$t(`service.text2`)"></p>

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
                        <a
                          href="https://workstation.virnect.com/start"
                          target="blank"
                        >
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
                        <a
                          href="https://remote.virnect.com/home"
                          target="blank"
                        >
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
                  </div>
                </div>
                <button>
                  <a href="/support/inquiry" target="_blank">{{
                    $t(`footer.infolink.contents7`)
                  }}</a>
                </button>
              </span>
              <com-modal :comModal="comModal" :comPopup="comPopup" />
              <span class="downLoad">
                <span @click="comModal()">
                  <a>
                    <i class="downIcon"
                      ><img
                        src="https://velog.velcdn.com/images/kyj0206/post/82654c80-4c59-4e7e-a9bc-7d5ed7523d93/image.png"
                        alt="회사소개서 다운로드"
                    /></i>
                    <i class="downHoverIcon"
                      ><img
                        src="https://velog.velcdn.com/images/kyj0206/post/034f327b-6153-4e14-8058-17d2899545b7/image.png"
                        alt="다운로드호버"
                    /></i>
                    <u>{{ $t(`footer.infolink.contents8`) }}</u>
                  </a>
                </span>
                <span @click="modal()">
                  <a>
                    <i class="downIcon"
                      ><img
                        src="https://velog.velcdn.com/images/kyj0206/post/82654c80-4c59-4e7e-a9bc-7d5ed7523d93/image.png"
                        alt="제품소개서 다운로드"
                    /></i>
                    <i class="downHoverIcon"
                      ><img
                        src="https://velog.velcdn.com/images/kyj0206/post/034f327b-6153-4e14-8058-17d2899545b7/image.png"
                        alt="다운로드호버"
                    /></i>
                    <u>{{ $t(`footer.infolink.contents9`) }}</u>
                  </a>
                </span>
                <pro-modal :modal="modal" :popup="popup" />
              </span>
            </span>
          </span>
          <span class="infoRight">
            <span>
              <p>{{ $t(`footer.infolink.contents10`) }}</p>
            </span>
            <span>
              <!-- <input type="text" placeholder="email을 입력하세요" /> -->
              <button @click="handleModal()">
                <a>{{ $t(`footer.infolink.contents11`) }}</a>
              </button>
            </span>
          </span>
        </span>
      </span>
      <span class="footerBottom">
        <div class="footerBottomInner">
          <div class="bottomInnerLeft">
            <span>
              <u
                ><nuxt-link to="/terms/service">{{
                  $t(`footer.service.title1`)
                }}</nuxt-link></u
              >
              <u
                ><nuxt-link to="/terms/persnal">{{
                  $t(`footer.service.title2`)
                }}</nuxt-link></u
              >
              <u
                ><nuxt-link to="/terms/charged">{{
                  $t(`footer.service.title3`)
                }}</nuxt-link></u
              >
            </span>
            <span>
              <p>©VIRNECT Co., Ltd. All rights reserved.</p>
            </span>
          </div>
          <div class="bottomInnerRight">
            <span>
              <a href="https://www.youtube.com/virnect%E2%80%8B" target="blank">
                <i class="iconOn iconOn1"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/9dddd89b-60a1-4f6d-a723-f50f21a095d7/image.png"
                    alt="유튜브"
                /></i>
                <i class="iconHover iconHover1"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/f86f0c8e-13c6-4ae8-aa60-df5e46c2f659/image.png"
                    alt="유튜브"
                /></i>
              </a>
            </span>
            <span>
              <a href="https://blog.naver.com/virnect" target="blank">
                <i class="iconOn iconOn2"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/d88977ea-8624-4d40-8315-5bb1e85565eb/image.png"
                    alt="블로그"
                /></i>
                <i class="iconHover iconHover2"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/75c4888d-5feb-4715-97c8-0bd431a4ca1a/image.png"
                    alt="블로그"
                /></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/company/virnect/"
                target="blank"
              >
                <i class="iconOn iconOn3"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/7ac04e9b-2cc6-489a-8cbb-775ec8b110da/image.png"
                    alt="링크드인"
                /></i>
                <i class="iconHover iconHover3"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/366b74df-cd6d-4710-8fb1-b027fbee5fe1/image.png"
                    alt="링크드인"
                /></i>
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/virnectkorea" target="blank">
                <i class="iconOn iconOn4"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/1d55cef0-568a-4322-9ea5-9658c7a099c3/image.png"
                    alt="페이스북"
                /></i>
                <i class="iconHover iconHover4"
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/83cf0191-860c-46e0-bea9-0d66c830d5ca/image.png"
                    alt="페이스북"
                /></i>
              </a>
            </span>
            <span
              @click="[(lang = true), langlang()]"
              v-if="isWeb"
              v-click-outside="langHide"
            >
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/20a62134-5b70-4f72-ab0d-fdef4689940f/image.png"
                  alt="언어선택"
              /></i>
              <div>
                <span>{{
                  $i18n.localeProperties.code === "ko" ? "KOR" : "ENG"
                }}</span>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/7390c5c2-b41e-4326-88fa-12fee83798e0/image.png"
                    alt="다운아이콘"
                /></i>
              </div>
              <!-- <div class="tabLang" v-if="showEarth">
                <span
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click.prevent.stop="$i18n.setLocale(locale.code)"
                  @click="langlang()"
                >
                  <a href="#">{{ locale.name }}</a>
                </span>
              </div> -->
              <div class="tabLang" v-if="showEarth">
                <p><a href="http://13.209.200.75:3001/en">english</a></p>
                <p><a href="http://13.209.200.75:3000/">korean</a></p>
              </div>
            </span>
          </div>
          <span class="mobileInfo">
            <p>©VIRNECT Co., Ltd. All rights reserved.</p>
          </span>
        </div>
      </span>
    </div>
    <modal-component :handleModal="handleModal" :isModal="isModal" />
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import ModalComponent from "~/components/subscription/modal.vue";
import ProModal from "./subscription/proModal.vue";
import ComModal from "./subscription/comModal.vue";

export default {
  components: {
    ModalComponent,
    ProModal,
    ComModal,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
    data() {
      return {
        visible: false,
      };
    },
  },
  data: () => ({
    lang: false,
    isWeb: true,
    showEarth: false,
    isServiceMenu: false,
    serviceOpen: false,
    showStyle: {},
    showText: {},
    isModal: false,
    popup: false,
    comPopup: false,
  }),
  directives: {
    ClickOutside,
  },
  methods: {
    handleModal() {
      this.isModal = !this.isModal;
    },
    modal() {
      this.popup = !this.popup;
    },
    comModal() {
      this.comPopup = !this.comPopup;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    langlang() {
      this.showEarth = !this.showEarth;
    },
    langHide() {
      if (!this.showEarth) return;
      this.showEarth = false;
    },
    showServiceMenu() {
      this.isServiceMenu = !this.isServiceMenu;
      /* this.showStyle.backgroundColor = "#fff";
      this.showText.color = "#000"; */
    },
    toggle() {
      this.serviceOpen = true;
    },
    serviceHide() {
      this.serviceOpen = false;
      this.isServiceMenu = false;
    },
    /* showServiceMenu () {
      if (isServiceMenu == true) {
          this.select.backgroundColor="#0a51b7";/images/kyj0206/post/3ab14d47-45c9-4f4c-aaa0-ead413260671/image.png
      } else if(isServiceMenu == false) { 
          this.select.backgroundColor="#121212";
      }
    }, */
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/pages/footer.scss";
@import "~/assets/css/reset.scss";
@import "~/assets/css/common.scss";
</style>