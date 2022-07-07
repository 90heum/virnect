<template>
    <!-- 인증 및 수상 모듈 -->
      <span class="companyAwards">
        <div class="awardsWrap">
          <div>
            <p>인증 및 수상</p>
          </div>
          <div class="awardsSlider">

             <img src="~/assets/images/pages/right@2x.png" class="prevBtn"
                           @click="() => {
                            if (awardIdx.start <= 0) return;
                            awardIdx.start = (Number(awardIdx.start) - 6);
                            awardIdx.end = (Number(awardIdx.end) - 6);
                         }"/>

            <span class="SliderList"
                  v-for="(data, idx) of award.filter((e, idx) => {
                    if (idx >= awardIdx.start && idx < awardIdx.end) { return e; } 
                  })"
                  :key="idx">
              <span>
                <img
                  :src="data.src"
                  :alt="data.alt"
                  class="CompanyBottomBannerAwardSlideImg"
                />
              </span>
              <span>
                <p>{{data.title}}</p>
                <p>{{data.host}}</p>
                <p>{{data.info}}</p>
              </span>
            </span>
           

            <img src="~/assets/images/pages/left@2x.png" class="nextBtn"
                         @click="() => {
                           if (awardIdx.end >= (award.length-1)) return;
                           awardIdx.start = (Number(awardIdx.start) + 6);
                           awardIdx.end = (Number(awardIdx.end) + 6);
                         }"/>
          </div>
        </div>
      </span>
</template>
<script>
import { awardData } from "~/components/dummy/award.js";
export default {
   data() {
    return {
      awardIdx: {
        start: 0,
        end: 6
      },
      award: awardData
    }
  }
}

</script>
<style lang="scss" scoped>
        // 인증 및 수상 모듈
    .companyAwards {
      display: block;
      width: 100%;
      background-color: #f7f8fa;
      .awardsWrap {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 42px;
        max-width: 1200px;
        box-sizing: unset;
        padding: 69px 30px 100px;
        div > .SliderList {
          font-size: 10px;
          span:nth-child(2) { height: 36px; }
        }
        div {
          &:first-child {
            p {
              font-size: 18px;
              font-weight: bold;
              letter-spacing: -0.23px;
              color: #121212;
            }
          }
          &:last-child {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            .SliderList {
              width: calc(100% / 7 - 40px);
              span {
                position: relative;
                max-width: 160px;
                &:first-child {
                  img {
                    max-width: 160px;
                    margin-bottom: 6px;
                  }
                  &::after {
                    display: block;
                    position: absolute;
                    content: "";
                    width: 100%;
                    border-bottom: 1px solid #c5c8cf;
                    left: 0;
                    bottom: 0;
                  }
                }
                &:last-child {
                  width: 100%;
                  display: block;
                  text-align: center;
                  margin-top: 24px;
                }
              }
            }
          }
        }
      }
    }

    .prevBtn, .nextBtn { width: 42px; height: 24px; cursor: pointer; }
    .awardsSlider { display: flex; align-items: center; }
    @media screen and(max-width: 1024px) {
  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 25px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 4 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1326px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }
  .company .companyWrap .companyVirnect div {
    min-width: auto;
  }
}

@media screen and(max-width: 768px) {
  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 28px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 3 - 19px);
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    transform: translate(0%, 10%);
    gap: 122px;
    padding-left: 24px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    min-width: auto;
    padding-right: 24px;
  }

  .company .companyWrap .companyBanner {
    height: 1274px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul {
    flex-wrap: wrap;
    gap: 19px;
    justify-content: space-between;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul li {
    width: calc(95% / 2);
    max-width: none;
  }
}

@media screen and(max-width: 735px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 99px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerCont {
    gap: 50px;
  }

  .company .companyWrap .companyBanner {
    height: 1090px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerCont
    span
    img {
    min-width: 377px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div {
    margin: 0;
    width: 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    > p {
    margin-bottom: 36px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    h2 {
    margin-bottom: 26px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3) {
    margin-bottom: 39px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div
    span:last-child
    p:last-child {
    text-align: left;
  }
  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    padding-right: 24px;
  }

  .company .companyWrap .companyVirnect div.virnectModule1 a div,
  .company .companyWrap .companyVirnect div.virnectModule2 a div {
    padding: 0 24px;
  }
}

@media screen and(max-width: 455px) {
  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul li {
    width: calc(100% / 1);
    max-width: none;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul {
    gap: 38px;
  }
}

@media screen and(max-width: 425px) {
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 38px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 2 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1090px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerCont
    span
    img {
    min-width: 377px;
  }
}
</style>