<template>
    <client-only>
         <div class="moduleApply">
          <div class="moduleApplyBgTop">
              <div class="moduleApplyTit">
                  <span>
                      <p>적용 사례</p>
                      <h2>
                          가치 향상의 경험을
                          <p>공유합니다</p>
                      </h2>
                  </span>
                  <span>
                      VIRNECT Remote가 만들어낸 효율과 혁신을 
                      <p>최신 사례와 자료를 통해 확인하세요.</p>
                  </span>
              </div>
              <div class="ApplyInner">
                  <div class="ApplySlider">
                      <!-- <div class="ApplySliderInner"> -->
                          <client-only>
                            <div class="carousel-wrapper">
                                <div v-swiper:mySwiper="options" 
                                     @readey="onSwiperRedied"
                                     @click-slide="onSwiperClickSlide"
                                     @slide-change-transition="onSwiperSlideChangeTransitionStart">

                                <div class="swiper-wrapper">
                                    <div v-for="(data, idx) of bannerData" :key="idx" class="img-warpper swiper-slide">
                                        <i>
                                            <img :src="data.src" :alt="data.src" />
                                        </i>
                                        <p>{{data.title}}</p>
                                    </div>
                                </div>
                                <div class="swiper-pagination swiper-pagination-bullets">
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                                </div>
                            </div>
                        </client-only>
                          <!-- <span v-for="(data, idx) of bannerData"
                                :key="idx"
                                :class="`sliderContents ${idx === curPos ? 'active' : ''}`"
                                @dragstart="(e) => touchStart(e)"
                                @dragend="(e) => touchEnd(e)">
                              <i>
                                  <img :src="data.src" 
                                       :alt="data.alt" />
                              </i>
                              <p>{{data.title}}</p>
                          </span> -->
                      <!-- </div> -->
                  </div>
              </div>
          </div>
          <!-- <div class="moduleApplyBgBottom"></div> -->
      </div>
      </client-only>
</template>

<script>
export default {
    methods: {
        onSwiperSlideChangeTransitionStart (e) {
            console.log("redied", e)
        },
        onSwiperRedied (swiper) {
            console.log("transtion", swiper)
        }, 
        onSwiperClickSlide (idx, realIdx) {
            console.log("click", idx, realIdx)
        }
    },
      data() {
          return {
                options: {
                slidesPerView: "auto",
                loop: true,
                spaceBetween: 13,
                centeredSlides: true,
                pagination: {
                    // el: ".swiper-pagination"
                },
                navigation: {
                nextEl: ".swiper-button-prev",
                prevEl: ".swiper-button-next",
                },
                breakpoints: {
                    1024: {
                        slidesPerView: "auto",
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: "1"
                    }
                }
            },
              bannerData: [
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/50d63145-9f5d-4634-8450-14fe2928485b/image.png",
                      alt: "삼성SDS",
                      title: "철도 차량 교육 훈련 및 정비 관리 지원",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/6723d6c9-eae0-48c5-bc36-9eafb8580414/image.png",
                      alt: "미래시티",
                      title: "발전소 설비 점검 및 유지보수 지원",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/99aab915-de88-4603-bb61-28416693be39/image.png",
                      alt: "미래시티",
                      title: "상세하고 정확한 장비 조작 가이드",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/623662f6-c25b-4475-b2bf-cea6e3e3747f/image.png",
                      alt: "미래시티",
                      title: "해외 제조 사업장 품질 관리",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/991c2d52-58d1-4b89-9da5-9a1eb9e32c1f/image.png",
                      alt: "미래시티",
                      title: "상세하고 정확한 장비 조작 가이드",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/991c2d52-58d1-4b89-9da5-9a1eb9e32c1f/image.png",
                      alt: "미래시티",
                      title: "장기/대규모 건설 시공 과정 중 안정적인 커뮤니케이션 지원",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/11b70aeb-659a-4d2e-bf63-09bc7a5cbd44/image.png",
                      alt: "미래시티",
                      title: "해외 원격 근무자 대체 도입 지원",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/8f37e236-8ad8-457c-b207-938aa560e182/image.png",
                      alt: "미래시티",
                      title: "MICE 행사 진행 시 온라인 도슨트/원격지원",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/3b2fa29f-317c-4dc1-8ead-04cd75ef93bf/image.png",
                      alt: "미래시티",
                      title: "건설 플랜트 신축 현장 시운전 원격 지원",
                      
                  },
                  {
                      src: "https://velog.velcdn.com/images/kyj0206/post/50d63145-9f5d-4634-8450-14fe2928485b/image.png",
                      alt: "미래시티",
                      title: "철도 차량 교육 훈련 및 정비 관리 지원",
                      
                  },
  
                  ]
          }
      }
}
</script>

<style lang="scss" scoped>
.moduleApply{
    max-width: 100%;
    .moduleApplyBgTop{
        background-color: #fff;
        height: 581px;
        padding: 100px 24px 0;

        .moduleApplyTit{
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 53px;
            border-top: solid 2px #0a51b7;
            span{
                &:first-child{
                    >p{
                        font-size: 18px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: normal;
                        letter-spacing: -0.23px;
                        color: #0a51b7;
                        margin-bottom: 17px;
                    }
                    h2{
                        font-size: 34px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: -0.43px;
                        color: #121212;
                        p{
                            font-size: 34px;
                            font-weight: bold;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.54;
                            letter-spacing: -0.43px;
                            color: #121212;
                        }
                    }
                }
                &:last-child{
                    display: flex;
                    align-items: flex-end;
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.61;
                    letter-spacing: normal;
                    text-align: right;
                    color: #121212;
                    padding-bottom: 2px;
                    p{
                        font-size: 18px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.61;
                        letter-spacing: normal;
                        text-align: right;
                        color: #121212;
                    }
                }
            }
        }
       
    }
    .moduleApplyBgBottom{
        background-color: #0a51b7;
        height: 246px;
    }
    .ApplyInner {
        .swiper-button-prev, .swiper-button-next {
            bottom: 100px;
            top: auto;
        }
        .swiper-button-prev {
            background-image: url(~/assets/images/pages/right@2x.png);
        }
        .swiper-button-next {
            background-image: url(~/assets/images/pages/left@2x.png);
        }
    }
    .ApplyInner .ApplySlider {
        .swiper-slide {
            min-width: 33%;
            max-width: 33%;
        }
        .swiper-slide img {
            width: 85%;
            border-radius: 15px;
            max-height: 276px;
        }
        .swiper-slide i {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .swiper-slide p {
            text-align: center;
        }
    }
}

@media screen and(max-width:1350px) {
    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner{
        display: flex;
        margin: 0 auto;
        width: auto;
    }

    .moduleApply .moduleApplyBgTop{
        height: 572px;
    }

}

@media screen and(max-width : 1024px) {
    .moduleApply .moduleApplyBgTop .ApplyInner{
        margin-top: 100px;
    }
    .moduleApply .ApplyInner .ApplySlider {
        .swiper-slide {
            min-width: 50%;
            max-width: 50%;
        }
        .swiper-slide img {
            width: 85%;
            border-radius: 15px;
        }
    }
}

@media screen and(max-width : 950px) {

    .moduleApply .moduleApplyBgTop .moduleApplyTit{
        margin-bottom: 20px;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner > span{
        width: 100%;
        margin-right: 0;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child{
        flex-direction: column;
        justify-content: flex-end;
    }

}
@media screen and (max-width: 768px) {
    .moduleApply .ApplyInner .ApplySlider {
        .swiper-slide {
            min-width: 100%;
            max-width: 100%;
        }
    }
}
@media screen and(max-width: 650px) {
    .moduleApply .moduleApplyBgTop{
        padding-top: 49.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit{
        margin-bottom: 20px;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 33.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child > p{
        margin-bottom: 13.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2{
        margin-bottom: 28.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2,
    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2 p{
        font-size: 26px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: -0.33px;
        color: #121212;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child,
    .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child p{
        display: inline;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: #121212;
        text-align: start;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner > span i{
        margin-bottom: 20px;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .preNextButton .next,
    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .preNextButton .pre{
        top: unset;
        bottom: 20px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit{
        margin-bottom: 0;
    }

    .moduleApply .moduleApplyBgTop{
        height: 495px;
    }

    .moduleApply .moduleApplyBgBottom{
        height: 236px;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner{
        height: auto;
        margin: 50px 0 0;
        padding-bottom: 130px;
    }
}
</style>
