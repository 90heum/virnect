<template>
  <header>
    <div class="headerInner">
      <div
        class="logo"
        @click="
          () => {
            if (!isMenu) {
              return;
            }
            isMenu = false;
            mobileMenu = { list1: false }
            showMenu(false);
          }
        "
      >
        <nuxt-link to="/">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/9ebd4dfa-26bb-4b50-bb22-9350ed0089b7/image.png"
            alt="알트텍스트로 글로벌 No.1 확장현실(XR) 플랫폼 기업 VIRNECT - 버넥트"
          />
        </nuxt-link>
      </div>
      <!-- 
@mouseover="[changeGnbColor(`list1`)]"
              @mouseleave="[changeGnbColor(`list1`)]"

       -->
      <div class="navWrap">
        <nav>
          <ul>
            <li
              @mouseover="[(gnb1 = true), changeGnbColor()]"
              @mouseleave="[(gnb1 = false), originalGnbColor()]"
              @click="[(gnb1 = false), (gnbStyleBorder = { gnbStyle1: true })]"
            >
              <nuxt-link
                to="/value/infra_resource"
                :class="`navTab container1 ${gnb1 ? 'gnbActive' : ''}`"
                v-bind:style="gnbStyleBorder.gnbStyle1 ? commonGnbStyle : {}"
              >
                Value
                <i>
                  <img
                    class="downIcon1"
                    src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                    alt="다운아이콘"
                    v-show="!gnb1"
                  />
                  <img
                    class="upIcon1"
                    src="https://velog.velcdn.com/images/kyj0206/post/098c0636-bb17-46f5-91c2-f255ae31982a/image.png"
                    alt="업아이콘"
                    v-show="gnb1"
                  />
                </i>
              </nuxt-link>
            </li>
            <li
              @mouseover="[(gnb2 = true), changeGnbColor2()]"
              @mouseleave="[(gnb2 = false), originalGnbColor2()]"
              @click="[(gnb2 = false), (gnbStyleBorder = { gnbStyle2: true })]"
            >
              <nuxt-link
                to="/products/productsMain"
                :class="`navTab container2 ${gnb2 ? 'gnbActive' : ''}`"
                v-bind:style="gnbStyleBorder.gnbStyle2 ? commonGnbStyle : {}"
              >
                Products
                <i>
                  <img
                    class="downIcon2"
                    src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                    alt="다운아이콘"
                    v-show="!gnb2"
                  />
                  <img
                    class="upIcon2"
                    src="https://velog.velcdn.com/images/kyj0206/post/098c0636-bb17-46f5-91c2-f255ae31982a/image.png"
                    alt="업아이콘"
                    v-if="gnb2"
                  />
                </i>
              </nuxt-link>
            </li>
            <li
              @mouseover="[(gnb3 = true), changeGnbColor3()]"
              @mouseleave="[(gnb3 = false), (e) => originalGnbColor3(e)]"
              @click="[(gnb3 = false), (gnbStyleBorder = { gnbStyle3: true })]"
            >
              <nuxt-link
                to="/support/supportSubMain"
                :class="`navTab container3 ${gnb3 ? 'gnbActive' : ''}`"
                v-bind:style="gnbStyleBorder.gnbStyle3 ? commonGnbStyle : {}"
              >
                Support
                <i>
                  <img
                    class="downIcon3"
                    src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                    alt="다운아이콘"
                    v-if="!gnb3"
                  />
                  <img
                    class="upIcon3"
                    src="https://velog.velcdn.com/images/kyj0206/post/098c0636-bb17-46f5-91c2-f255ae31982a/image.png"
                    alt="업아이콘"
                    v-if="gnb3"
                  />
                </i>
              </nuxt-link>
            </li>
            <li
              @mouseover="[(gnb4 = true), changeGnbColor4()]"
              @mouseleave="[(gnb4 = false), originalGnbColor4()]"
              @click="[(gnb4 = false), (gnbStyleBorder = { gnbStyle4: true })]"
            >
              <nuxt-link
                to="/news/main"
                :class="`navTab container4 ${gnb4 ? 'gnbActive' : ''}`"
                v-bind:style="gnbStyleBorder.gnbStyle4 ? commonGnbStyle : {}"
              >
                News
                <i>
                  <img
                    class="downIcon4"
                    src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                    alt="다운아이콘"
                    v-if="!gnb4"
                  />
                  <img
                    class="upIcon4"
                    src="https://velog.velcdn.com/images/kyj0206/post/098c0636-bb17-46f5-91c2-f255ae31982a/image.png"
                    alt="업아이콘"
                    v-if="gnb4"
                  />
                </i>
              </nuxt-link>
            </li>
            <li
              @mouseover="[(gnb5 = true), changeGnbColor5()]"
              @mouseleave="[(gnb5 = false), originalGnbColor5()]"
              @click="[(gnb5 = false), (gnbStyleBorder = { gnbStyle5: true })]"
            >
              <nuxt-link
                to="/company/about"
                :class="`navTab container5 ${gnb5 ? 'gnbActive' : ''}`"
                v-bind:style="gnbStyleBorder.gnbStyle5 ? commonGnbStyle : {}"
              >
                Company
                <i>
                  <img
                    class="downIcon5"
                    src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                    alt="다운아이콘"
                    v-if="!gnb5"
                  />
                  <img
                    class="upIcon5"
                    src="https://velog.velcdn.com/images/kyj0206/post/098c0636-bb17-46f5-91c2-f255ae31982a/image.png"
                    alt="업아이콘"
                    v-if="gnb5"
                  />
                </i>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="demo">
          <nuxt-link to="/support/demo"> 데모신청 </nuxt-link>
        </div>
        <div
          class="serviceSelect"
          @click="[showServiceMenu(), toggle(), (showEarth = false)]"
          v-click-outside="serviceHide"
          v-if="isWeb"
        >
          <div class="select" v-bind:style="gnb6">
            <div class="selected">
              <div class="selected-value"><a>VIRNECT Service</a></div>
              <div class="arrow">
                <img
                  class="downIcon6"
                  src="https://velog.velcdn.com/images/kyj0206/post/5933ac65-99ad-42c7-a624-4158514e9df8/image.png"
                  alt="다운아이콘"
                  v-if="!isServiceMenu"
                  width="24px"
                />
                <img
                  class="upIcon6"
                  src="https://velog.velcdn.com/images/kyj0206/post/5e52da3f-be01-4a83-a14c-4e638e946fc0/image.png"
                  alt="업아이콘"
                  v-if="isServiceMenu"
                  width="24px"
                />
              </div>
            </div>
            <ul v-if="isServiceMenu" v-show="serviceOpen">
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
          </div>
        </div>

        <!-- 언어선택 박스 -->
        <div
          class="language"
          @click="
            [(lang = true), langlang('ko'), toggle2(), (isServiceMenu = false)]
          "
          v-if="isWeb"
          v-click-outside="langHide"
        >
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/3904dc78-e6ec-44d2-8bc0-f6e4c0c7c3a0/image.png"
              alt="글로벌이미지"
            />
          </i>
          <div class="languageWrap" v-if="showEarth" v-show="langOpen">
            <span
              v-for="locale in availableLocales"
              :key="locale.code"
              @click.prevent.stop="$i18n.setLocale(locale.code)"
              @click="langlang(locale.code)"
            >
              <a href="#">{{ locale.name }}</a>
            </span>
          </div>
        </div>
        <!-- 햄버거 버튼 [모바일 메뉴] : 언어박스가 사라지고 얘가 나옴 -->
        <div class="MbHam" v-if="!isWeb">
          <!-- 햄버거 -->
          <span
            class="MbOpen"
            @click="[showMenu(true), (mobileMenu = { list1: false })]"
            v-if="!isMenu"
          >
            <a>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/9c806d74-c1f9-4601-8649-04e69f9613b4/image.png"
                alt="모바일메뉴 열기 버튼"
              />
            </a>
          </span>
          <!-- 닫기버튼 -->
          <span class="MbClose" @click="showMenu(false)" v-if="isMenu">
            <a>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/dc69153c-beb3-4a1f-85f3-ccded373ae9a/image.png"
                alt="모바일메뉴 닫기 버튼"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
    <!-- 솔루션 영역 -->
    <div
      class="subNavi subNavSolutions"
      v-show="gnb1"
      @mouseover="[(gnb1 = true), (upIcon = true), changeGnbColor()]"
      @mouseleave="[(gnb1 = false), originalGnbColor()]"
    >
      <div class="subNavSolutionsInner">
        <div>
          <span>
            <span
              class="subNavSolutionsTit"
              v-html="$t(`solutionText.visualText.title`)"
            ></span>
            <sub-solution-menu
              :snbArr="$t('gnb[0].array')"
              :name="`subNavSolutionsMenu`"
              @click="
                [
                  (gnb1 = false),
                  originalGnbColor(),
                  (gnbStyleBorder = { gnbStyle1: true }),
                ]
              "
            />
          </span>
        </div>
        <!-- <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            더 많은 디지털 인사이트를 발견하세요.
          </span>
          <span class="asideInfoLinkCont">
            <p>
              <a href="#"> <u>Technology</u> () </a>
            </p>
            <p>
              <a href="#"> <u>Market Trend</u> () </a>
            </p>
            <p>
              <a href="#"> <u>Virnect Products 관련</u> () </a>
            </p>
          </span>
          <div>
            <a href="#">
              모든 인사이트 보기
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/6d82fca8-fda9-4286-9b2b-597c38cda81f/image.png"
                  alt="#"
                />
              </i>
            </a>
          </div>
        </span> -->
        <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            준비된 기술 컨설턴트가 직접 도움을 드립니다.
          </span>
          <span class="asideInfoLinkCont">
            <p>대표전화 : 070-7733-2025</p>
            <p>
              구매 및 제휴 문의 :
              <a href="mailto:contact@virnect.com" target="blank">
                <u>contact@virnect.com</u>
              </a>
            </p>
            <p>
              제품 사용 및 기술 지원 :
              <a href="mailto:support@virnect.com" target="blank">
                <u>support@virnect.com</u>
              </a>
            </p>
          </span>
          <div class="BtnWrap">
            <button>
              <nuxt-link to="/support/demo"> 지금 사용해보기 </nuxt-link>
            </button>
            <button>
              <nuxt-link to="/support/inquiry"> 문의하기 </nuxt-link>
            </button>
          </div>
        </span>
      </div>
    </div>
    <!-- 프로덕트 영역 -->
    <div
      class="subNavi subNavProducts"
      v-show="gnb2"
      @mouseover="[(gnb2 = true), changeGnbColor2()]"
      @mouseleave="[(gnb2 = false), originalGnbColor2()]"
    >
      <div class="subNavProductsInner">
        <div>
          <span>
            <!-- <span class="subNavProductsTit">
              산업 현장을 위해 최적화된
              <p>버넥트 XR 솔루션을 만나보세요.</p>
            </span> -->
            <div class="subNavProductsMenu">
              <span>
                <span
                  class="subNavProductsTit"
                  v-html="$t(`productsText.visualText.title`)"
                ></span>
                <sub-solution-menu
                  :snbArr="
                    $t('gnb[1].array').filter((e, idx) => {
                      if (idx < 3) return e;
                    })
                  "
                  :name="`subNavProductsMenus`"
                  @click="
                    [
                      (gnb2 = false),
                      originalGnbColor2(),
                      (gnbStyleBorder = { gnbStyle2: true }),
                    ]
                  "
                />
              </span>
              <span>
                <span
                  class="subNavProductsTit"
                  v-html="$t(`productsText.productText.title`)"
                ></span>
                <sub-solution-menu
                  :snbArr="
                    $t('gnb[2].array').filter((e, idx) => {
                      if (idx < 3) return e;
                    })
                  "
                  :name="`subNavProductsMenus`"
                  @click="
                    [
                      (gnb2 = false),
                      originalGnbColor2(),
                      (gnbStyleBorder = { gnbStyle2: true }),
                    ]
                  "
                />
              </span>
            </div>
          </span>
          <span>
            <!-- <span class="subNavProductsTit">
              확장현실(XR) 및 디지털 트윈 기술을
              <p>바탕으로 미래산업을 만들어 갑니다.</p>
            </span> -->
            <!-- <div class="subNavProductsMenu">
              <span>
                <span class="subNavProductsTit"></span>
                 <sub-solution-menu :snbArr="$t('gnb[1].array').filter((e, idx) => {if(idx > 2) return e; })"
                                   :name="`subNavProductsMenu`"
                                   @click="changeGnbColor(`list2`)"/> 
              </span>
            </div> -->
          </span>
        </div>
        <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            준비된 기술 컨설턴트가 직접 도움을 드립니다.
          </span>
          <span class="asideInfoLinkCont">
            <p>대표전화 : 070-7733-2025</p>
            <p>
              구매 및 제휴 문의 :
              <a href="mailto:contact@virnect.com" target="blank">
                <u>contact@virnect.com</u>
              </a>
            </p>
            <p>
              제품 사용 및 기술 지원 :
              <a href="mailto:support@virnect.com" target="blank">
                <u>support@virnect.com</u>
              </a>
            </p>
          </span>
          <div class="BtnWrap">
            <button>
              <nuxt-link to="/support/demo"> 지금 사용해보기 </nuxt-link>
            </button>
            <button>
              <nuxt-link to="/support/inquiry"> 문의하기 </nuxt-link>
            </button>
          </div>
        </span>
      </div>
    </div>

    <!-- 서포트 -->
    <div
      class="subNavi subNavSupport"
      v-show="gnb3"
      @mouseover="[(gnb3 = true), changeGnbColor3()]"
      @mouseleave="[(gnb3 = false), originalGnbColor3()]"
    >
      <div class="subNavSupportInner">
        <div>
          <span>
            <span
              class="subNavSupportTit"
              v-html="$t(`supportText.visualText.title`)"
            >
              <!-- 서비스 이용에 도움이 되도록
              <p>빠르고 친절하게 해결해 드리겠습니다.</p> -->
            </span>
            <div class="subNavSupportMenu">
              <span>
                <ul>
                  <li
                    @click="
                      [
                        (gnb3 = false),
                        originalGnbColor3(),
                        (gnbStyleBorder = { gnbStyle3: true }),
                      ]
                    "
                  >
                    <nuxt-link to="/support/notice"
                      ><span>{{
                        $t(`supportText.menuList.productNotice.title`)
                      }}</span></nuxt-link
                    >
                  </li>
                  <li
                    v-for="(list, idx) of $t(
                      `supportText.menuList.productNotice.list`
                    )"
                    :key="idx"
                    @click="
                      [
                        changeGnbColor(`list3`),
                        (gnbStyleBorder = { gnbStyle3: true }),
                      ]
                    "
                  >
                    <nuxt-link :to="list.url"
                      ><u>-{{ list.title }}</u></nuxt-link
                    >
                  </li>
                </ul>
              </span>
              <span>
                <ul>
                  <li
                    @click="
                      [
                        (gnb3 = false),
                        originalGnbColor3(),
                        (gnbStyleBorder = { gnbStyle3: true }),
                      ]
                    "
                  >
                    <nuxt-link to="/support/faq"
                      ><span>{{
                        $t(`supportText.menuList.faq.title`)
                      }}</span></nuxt-link
                    >
                  </li>
                  <div class="FAQWrap">
                    <li
                      v-for="(list, idx) of $t(`supportText.menuList.faq.list`)"
                      :key="idx"
                      @click="
                        [
                          changeGnbColor(`list3`),
                          (gnbStyleBorder = { gnbStyle3: true }),
                        ]
                      "
                    >
                      <nuxt-link :to="list.url"
                        ><u>-{{ list.title }}</u></nuxt-link
                      >
                    </li>
                  </div>
                </ul>
              </span>
              <span>
                <ul>
                  <li
                    @click="
                      [
                        (gnb3 = false),
                        originalGnbColor3(),
                        (gnbStyleBorder = { gnbStyle3: true }),
                      ]
                    "
                  >
                    <nuxt-link to="/support/learning-center">
                      <span>{{
                        $t(`supportText.menuList.Leaning Center.title`)
                      }}</span>
                    </nuxt-link>
                  </li>
                  <li
                    v-for="(list, idx) of $t(
                      'supportText.menuList.Leaning Center.list'
                    ).filter((e, idx) => {
                      if (idx < 3) return e;
                    })"
                    :key="idx"
                    @click="changeGnbColor(`list3`)"
                  >
                    <nuxt-link :to="list.url">
                      <u>{{ list.title }}</u>
                    </nuxt-link>
                  </li>
                </ul>
              </span>
              <span>
                <ul>
                  <li
                    @click="
                      [
                        (gnb3 = false),
                        originalGnbColor3(),
                        (gnbStyleBorder = { gnbStyle3: true }),
                      ]
                    "
                  >
                    <nuxt-link to="/support/inquiry">
                      <span>{{
                        $t(`supportText.menuList.Inquiries.title`)
                      }}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </span>
            </div>
          </span>
        </div>
        <span class="asideInfoLink">
          <a href="#">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7562cf58-2e5a-469b-920c-0b43be5a0f4c/image.png"
              alt="서포트이미지"
            />
          </a>
        </span>
      </div>
    </div>
    <!-- 뉴스룸 -->
    <div
      class="subNavi subNavNewsrooom"
      v-show="gnb4"
      @mouseover="[(gnb4 = true), changeGnbColor4()]"
      @mouseleave="[(gnb4 = false), originalGnbColor4()]"
    >
      <div class="subNavNewsrooomInner">
        <div>
          <span>
            <span
              class="subNavNewsrooomTit"
              v-html="$t(`newsRoom.gnbHeaderText.text`)"
            ></span>
            <div class="subNavNewsrooomMenu">
              <span
                v-for="(list, idx) of $t(`newsRoom.menuList`)"
                :key="idx"
                @click="
                  [
                    (gnb4 = false),
                    originalGnbColor4(),
                    (gnbStyleBorder = { gnbStyle4: true }),
                  ]
                "
              >
                <nuxt-link :to="list.url">{{ list.title }}</nuxt-link>
              </span>
            </div>
          </span>
        </div>
        <span class="asideInfoLink">
          <nuxt-link
            :to="`/news/detail?id=${
              contentList ? contentList[0]['id'] : ''
            }&type`"
          >
            <img
              :src="`data:image/png;base64,${
                contentList ? contentList[0]['thumbnail'] : ''
              }`"
              alt="뉴스룸 이미지"
            />
          </nuxt-link>
        </span>
      </div>
    </div>
    <!-- 컴퍼니 -->
    <div
      class="subNavi subNavCompany"
      v-show="gnb5"
      @mouseover="[(gnb5 = true), changeGnbColor5()]"
      @mouseleave="[(gnb5 = false), originalGnbColor5()]"
    >
      <div class="subNavCompanyInner">
        <div>
          <span>
            <span
              class="subNavCompanyTit"
              v-html="$t(`newCompany.title`)"
            ></span>
            <div class="subNavCompanyMenu">
              <span
                v-for="(list, idx) of $i18n.localeProperties.code === 'ko' ? $t(`newCompany.menuList`) : $t(`newCompany.menuList`).filter((e, idx) => {if (idx === 0) return e; })"
                :key="idx"
                @click="
                  [
                    (gnb5 = false),
                    originalGnbColor5(),
                    (gnbStyleBorder = { gnbStyle5: true }),
                  ]
                "
              >
                <nuxt-link :to="list.url">{{ list.title }}</nuxt-link>
              </span>
            </div>
          </span>
        </div>
        <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            산업별 XR / DT 해답.
            <p>VIRNECT가 알려드립니다.</p>
          </span>
          <a href="#">
            <nuxt-link to="/products/productsMain">
              <img src="~/assets/images/pages/product.png" alt="#" />
            </nuxt-link>
            <nuxt-link to="/value/infra_resource">
              <img src="~/assets/images/pages/value.png" alt="#" />
            </nuxt-link>
          </a>
        </span>
      </div>
    </div>
    <mobile-header
      :isMenu="isMenu"
      :availableLocales="availableLocales"
      :showMenu="showMenu"
      :mobileMenu="mobileMenu"
      :handleMobileMenu="handleMobileMenu"
    />
  </header>
</template>

<script>
import SubSolutionMenu from "./modules/SubSolutionMenu.vue";
import MobileHeader from "../components/Gnb/headerPartial/mobileHeader.vue";
import ClickOutside from "vue-click-outside";

const navList = [
  { title: "Value" },
  { title: "Products" },
  { title: "Support" },
  { title: "News" },
  { title: "Company" },
];
const optionList = [
  { title: "서비스 로그인" },
  { title: "다운로드 센터 2.0" },
  { title: "Workstation 2.0" },
  { title: "Remote 2.0" },
];

export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
    data() {
      return {
        visible: false,
        contentList: [],
      };
    },
  },
  data: () => ({
    gnb1: false,
    gnb2: false,
    gnb3: false,
    gnb4: false,
    gnb5: false,
    service: false,
    lang: false,
    serviceShow: false,
    gnbTextStyle: {},
    gnbClickStyle: {},
    ghost1: false,
    ghost2: false,
    ghost3: false,
    ghost4: false,
    ghost5: false,
    serviceShow: false,
    ghostService: false,
    gnbTextStyle1: {},
    gnb6: {},
    gnbStyleBorder: {},
    commonGnbStyle: {
      color: "#fff",
      backgroundColor: "#121212",
      borderBottom: "3px solid #fff",
    },
    gnbStyle1: {},
    gnbStyle2: {},
    gnbStyle3: {},
    gnbStyle4: {},
    gnbStyle5: {},
    gnbTextStyle2: {},
    gnbTextStyle3: {},
    gnbTextStyle4: {},
    gnbTextStyle5: {},
    optionList,
    navList,
    showEarth: false,
    isServiceMenu: false,
    isNavMenu: false,
    isWeb: true,
    isMenu: false,
    serviceOpen: false,
    langOpen: false,
    upIcon: false,
    mobileMenu: { list1: false },
  }),
  components: {
    SubSolutionMenu,
    MobileHeader,
  },
  mounted() {
    this.getData();
    this.handleGnbMenuBorderBottm();
    if (process.client)
      window.innerWidth > 1025 ? (this.isWeb = true) : (this.isWeb = false);
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.handleReactiveView);
    }
  },
  beforeDestroy() {
    if (process.client)
      window.removeEventListener("resize", this.handleReactiveView);
    // window.removeEventListener('scroll', this.hasScrolled)
  },
  watch: {
    $route() {
      this.handleGnbMenuBorderBottm();
    },
  },
  methods: {
    redirectPage (locale) {
      if (locale === 'ko') return;
      const routePath = this.$route.fullPath;
      if (routePath.includes("ir") || routePath.includes("talent")) {
        this.$router.push("/company/about");
      }
    },
    handleMobileMenu(e) {
      this.mobileMenu = e;
    },
    async getData() {
      try {
        const data = await this.$axios.get(`admin/news?page=1&size=${20}`);
        const dataJson = await data;
        this.contentList = dataJson.data.data.newsBoardResponseList;
      } catch (e) {
        console.error(e);
      }
    },
    /* handleClickButton(){
      this.visible = !this.visible
    }, */
    handleGnbMenuBorderBottm() {
      const solutions = "solutions";
      const products = "products";
      const support = "support";
      const news = "news";
      const company = "company";
      const fullPath = this.$route.fullPath;

      if (process.client) {
        if (fullPath.includes(solutions)) {
          this.changeBorder(1);
        } else if (fullPath.includes(products)) {
          this.changeBorder(2);
        } else if (fullPath.includes(support)) {
          this.changeBorder(3);
        } else if (fullPath.includes(news)) {
          this.changeBorder(4);
        } else if (fullPath.includes(company)) {
          this.changeBorder(5);
        } else {
          this.gnbStyleBorder = {};
        }
      }
    },
    langlang(locale) {
      this.showEarth = !this.showEarth;
      this.redirectPage(locale);
    },
    showServiceMenu() {
      this.isServiceMenu = !this.isServiceMenu;
      /* this.gnb6.backgroundColor = "#0a51b7"; */
    },
    showUpIcon() {
      this.upIcon = !this.upIcon;
    },
    toggle() {
      this.serviceOpen = true;
    },
    serviceHide() {
      this.serviceOpen = false;
      this.isServiceMenu = false;
    },
    toggle2() {
      this.langOpen = true;
    },
    langHide() {
      this.langOpen = false;
    },
    changeBorder(e) {
      this.gnbStyleBorder = { [`gnbStyle${e}`]: true };
    },
    originalBorder() {
      this.gnbStyle1.borderBottomColor = "#121212";
      this.gnbStyle1.backgroundColor = "#121212";
      this.gnbTextStyle1.color = "#fff";
    },
    changeGnbColor: function () {
      this.gnbStyle1.backgroundColor = "#fff";
      this.gnbTextStyle1.color = "#0a51b7";
    },
    originalGnbColor: function () {
      this.gnbStyle1.backgroundColor = "#121212";
      this.gnbTextStyle1.color = "#fff";
    },
    changeGnbColor2: function () {
      this.gnbStyle2.backgroundColor = "#fff";
      this.gnbTextStyle2.color = "#0a51b7";
    },
    originalGnbColor2: function () {
      this.gnbStyle2.backgroundColor = "#121212";
      this.gnbTextStyle2.color = "#fff";
    },
    changeGnbColor3: function () {
      this.gnbStyle3.backgroundColor = "#fff";
      this.gnbTextStyle3.color = "#0a51b7";
    },
    originalGnbColor3: function (e) {
      this.gnbStyle3.backgroundColor = "#121212";
      this.gnbTextStyle3.color = "#fff";
    },
    changeGnbColor4: function () {
      this.gnbStyle4.backgroundColor = "#fff";
      this.gnbTextStyle4.color = "#0a51b7";
    },
    originalGnbColor4: function () {
      this.gnbStyle4.backgroundColor = "#121212";
      this.gnbTextStyle4.color = "#fff";
    },
    changeGnbColor5: function () {
      this.gnbStyle5.backgroundColor = "#fff";
      this.gnbTextStyle5.color = "#0a51b7";
    },
    originalGnbColor5: function () {
      this.gnbStyle5.backgroundColor = "#121212";
      this.gnbTextStyle5.color = "#fff";
    },
    /* changeBorder: function (e) {
      this.isNavMenu = {[e]: !this.isNavMenu[e]}
      this.gnbClickStyle.color = this.isNavMenu ? {border:'solid 1px #fff'} : {border:'none'}
    }, */
    handleReactiveView() {
      if (window.innerWidth > 1025 && !this.isWeb) {
        this.isWeb = true;
        this.isMenu = false;
      } else if (window.innerWidth < 1025 && this.isWeb) {
        this.isWeb = false;
        this.gnbTextStyle.color = "#fff";
        this.gnbStyle.backgroundColor = "#121212";
        this.isNavMenu = {};
      }
    },
    showMenu(e) {
      this.isMenu = e;
      if (this.isMenu === true) {
        document.querySelector("html").style.overflow = "hidden";
      } else {
        document.querySelector("html").style.overflow = "scroll";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/header.scss";
@import "~assets/css/reset.scss";
@import "~assets/css/common.scss";

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
  a.gnbActive {
    color: #0a51b7 !important;
    background-color: #fff !important;
  }
}
* {
  padding: 0;
  margin: 0;
}
</style>