<template>
  <section class="offer-part">
    <!-- <p class="title" v-html="title"></p>
    <p class="contents" v-html="contents"></p>
    <ul>
       <li
        v-for="(list, idx) of lists"
        :key="idx"
        :class="{ active: active == idx }"
        @click="
          $router.push({ name: list.router });
          scrollReset();
        "
        @mouseenter="active = idx"
      > 
      <li
        v-for="(list, idx) of lists"
        :key="idx"
        :class="{ active: active == idx }"
        @mouseenter="active = idx"
      >
        <p v-html="list.text"></p>
        <img
          :src="`http://13.209.200.75:8080/static/assets/images/pages/solution/logo${[
            idx,
          ]}.png`"
        />
      </li>
    </ul> -->
    <div class="productModule">
      <div class="productModuleWrap">
        <div class="proModuleTit">
          <h2>VIRNECT Product</h2>
          <!-- <span>
            <a href="#">
              <p>자세히보기</p>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/1e22c531-f750-418a-ac13-bfaa72de33a6/image.png"
                  alt="자세히보기"
              /></i>
            </a>
          </span> -->
        </div>
        <div class="proModuleCont">
          <span class="proModuleCont1">
            <span class="proModuleContTit">
              <p>산업 현장을 위해 최적화된 제품을 만나보세요</p>
            </span>
            <ul class="proModuleContBox">
              <li>
                <nuxt-link to="/products/remote">
                  <span class="imgPull">
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://velog.velcdn.com/images/kyj0206/post/8a991709-81c6-43d8-8b0c-3ae9a946e2ff/image.png"
                        alt="Remote"
                      />
                      <img
                        class="contBoxHover"
                        src="https://velog.velcdn.com/images/kyj0206/post/41931e7c-6d22-465b-b13d-10c3d8745454/image.png"
                        alt="Remote"
                      />
                    </i>
                  </span>
                  <p>XR 원격 협업 솔루션</p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/make">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://velog.velcdn.com/images/kyj0206/post/8be63358-cefc-495c-ae48-8a3b1938ddb0/image.png"
                        alt="Make"
                      />
                      <img
                        class="contBoxHover"
                        src="https://velog.velcdn.com/images/kyj0206/post/103dc052-b2e5-4ce5-917e-529651421ffb/image.png"
                        alt="Make"
                      />
                    </i>
                  </span>
                  <p>확장현실(XR) 콘텐츠 제작 솔루션</p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/view">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://velog.velcdn.com/images/kyj0206/post/42218ec2-590c-4a4b-acb3-eb3a7127df80/image.png"
                        alt="View"
                      />
                      <img
                        class="contBoxHover"
                        src="https://velog.velcdn.com/images/kyj0206/post/75592f6f-b5e8-4671-a093-0c527f868d8d/image.png"
                        alt="View"
                      />
                    </i>
                  </span>
                  <p>확장현실(XR) 콘텐츠 시각화 솔루션</p>
                </nuxt-link>
              </li>
            </ul>
          </span>
          <span class="proModuleCont2">
            <span class="proModuleContTit">
              <p>
                XR 및 디지털 트윈 기술을 바탕으로 미래 산업 현장을 만들어갑니다
              </p>
            </span>
            <ul class="proModuleContBox">
              <li>
                <nuxt-link to="/products/twin">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://velog.velcdn.com/images/kyj0206/post/cb9b7ad7-43f4-4125-bf94-0bfd9b385c8c/image.png"
                        alt="Twin"
                      />
                      <img
                        class="contBoxHover"
                        src="https://velog.velcdn.com/images/kyj0206/post/f1856401-9e6a-444b-9038-1f33e1c95600/image.png"
                        alt="Twin"
                      />
                    </i>
                  </span>
                  <p>XR 기반 3D 현장 관리 솔루션</p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/track">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://velog.velcdn.com/images/kyj0206/post/a74200f0-b332-4de2-be0b-e728a21df6a4/image.png"
                        alt="Track"
                      />
                      <img
                        class="contBoxHover"
                        src="https://velog.velcdn.com/images/kyj0206/post/75ea7fca-28d4-44e3-9e98-d91da1932a2b/image.png"
                        alt="Track"
                      />
                    </i>
                  </span>
                  <p>검출/추적용 XR 개발 엔진</p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/ms">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://velog.velcdn.com/images/kyj0206/post/2a832a3d-6aae-4cd2-a9ce-660b99099e58/image.png"
                        alt="XRDevices"
                      />
                      <img
                        class="contBoxHover"
                        src="https://velog.velcdn.com/images/kyj0206/post/5266288d-6da0-45dc-961e-1d835915c1e5/image.png"
                        alt="XRDevices"
                      />
                    </i>
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    title: String,
    contents: String,
    lists: Array,
  },
  data() {
    return {
      active: 0,
      isMobile: false,
    };
  },
  computed: {
    isMobile() {
      let arr = [];
      // for (let val of this.lists) {
      //   if (!this.checkMobile()) {
      //     arr.push(val.image)
      //   } else {
      //     arr.push(`${val.image}-m@2x`)
      //   }
      // }
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/modules/ProductCtaModule.scss";
// @import "~assets/css/pages/products.scss";
// .offer-part {
//   margin-top: 180px;
//   text-align: center;
//   @include area-flex(1280px);
//   @include default-text(#222, 38px);
//   .title {
//     margin-bottom: 16px;
//     font-weight: bold;
//     font-family: $noto;
//     line-height: 1.51;
//   }
//   .contents {
//     font-size: 16px;
//     line-height: 1.78;
//   }
//   ul {
//     display: flex;
//     flex-wrap: wrap;
//     margin-top: 40px;
//     text-align: left;
//     li {
//       position: relative;
//       width: calc(100% / 3 - 28px);
//       height: 160px;
//       margin: 14px;
//       padding: 20px 24px;
//       border: 1px solid #e7eaef;
//       border-radius: 1px;
//       cursor: pointer;
//       &.active {
//         border: 1px solid rgba(255, 255, 255, 0);
//         box-shadow: 0 2px 14px 0 rgba(220, 225, 232, 0.7);
//       }
//     }
//     p {
//       font-weight: 500;
//       font-size: 17px;
//       font-family: $noto;
//       line-height: 1.43;
//       color: black;
//     }
//   }
//   img {
//     position: absolute;
//     right: 24px;
//     bottom: 14px;
//     width: 202px;
//   }
//   @media (max-width: 760px) {
//     margin-top: 120px;
//     .contents {
//       font-size: 15px;
//     }
//     ul {
//       margin: 0 -6px;
//       margin-top: 32px;
//       li {
//         width: calc(50% - 12px);
//         margin: 6px;
//         padding: 12px 16px;
//         border: 1px solid rgba(255, 255, 255, 0);
//         box-shadow: 0 2px 14px 0 rgba(220, 225, 232, 0.7);
//       }
//       p {
//         font-size: 14px;
//       }
//     }
//     img {
//       right: auto;
//       bottom: 10px;
//       width: calc(100% - 32px);
//     }
//   }
// }
</style>
