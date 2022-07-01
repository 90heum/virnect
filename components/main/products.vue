<template>
  <div class="productsModule">
    <div class="moduleTop">
      <span class="moduleTopTit">
        <p>Products</p>
        <h2>산업 문제를 해결할 XR/DT 제품</h2>
        <span>
          <p>
            VIRNECT의 제품들은 산업현장의 생산적인 커뮤니케이션과 효율적인 업무
            방식을 지원합니다.
          </p>
          <p>
            확장현실(XR) 원천기술과 다양한 IT 기술들을 융합하여 고객의 이슈를
            해결하는 맞춤형 제품과 솔루션을 제공하고 있습니다.
          </p>
        </span>
        <ul>
          <li>
            <span>생산성</span>
            <span>
              <p>20%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/a0ed0456-10c5-49a1-8d99-7e71777be5b4/image.png"
                  alt="상승아이콘"
                />
              </p>
            </span>
          </li>
          <li>
            <span>숙련도</span>
            <span>
              <p>4.7%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/a0ed0456-10c5-49a1-8d99-7e71777be5b4/image.png"
                  alt="상승아이콘"
                />
              </p>
            </span>
          </li>
          <li>
            <span>리드 타임</span>
            <span>
              <p>10%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
                  alt="하락아이콘"
                />
              </p>
            </span>
          </li>
          <li>
            <span>비용</span>
            <span>
              <p>10%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
                  alt="하락아이콘"
                />
              </p>
            </span>
          </li>
        </ul>
      </span>
      <span class="moduleTopNavi">
        <ul>
          <li
            @click="handleCategory(1)"
            :class="`${category === 1 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(2)"
            :class="`${category === 2 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(3)"
            :class="`${category === 3 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(4)"
            :class="`${category === 4 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(5)"
            :class="`${category === 5 && 'topNaviActive'}`"
          ></li>
        </ul>
      </span>
    </div>
    <div class="moduleBottom">
      <span class="bottomBackLogo">
        <img
          src="https://velog.velcdn.com/images/kyj0206/post/98cf4c83-d886-464e-8f33-e289c3908adc/image.png"
          alt="배경로고"
        />
      </span>
      <div :class="`moduleBottomWrapRemote`" v-if="category === 1">
        <span class="moduleBottomTitRemote">
          <p>VIRNECT Remote</p>
          <h2>XR 원격 협업 솔루션</h2>
          <span>
            <p>
              VIRNECT Remote의 실시간 원격협업 서비스를 통해 산업 현장에 필요한
              정보와
            </p>
            <p>
              이슈를​ 실시간으로 공유하여 언제 어디서든 업무 대응이 가능합니다.​
            </p>
            <p>
              쉽고 빠르게 협업이 가능하며 ​기존의 익숙한 업무 환경을 그대로
              유지하여
            </p>
            <p>업무의 정확성과 효율성을 높일 수 있습니다.</p>
          </span>
          <span>
            <button>
              <a href="#"> 자세히 보기 </a>
            </button>
            <button>
              <a href="#"> 데모신청 </a>
            </button>
          </span>
          <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                alt="다운로드이미지"
              />
            </i>
            <p><u>Make 제품 소개서 다운로드(PDF)</u></p>
          </span>
        </span>
        <span class="moduleBottomCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/83c051ef-5178-405e-a1f2-75dc1e351a25/image.jpg"
            alt="VIRNECT Remote"
          />
        </span>
      </div>
      <div
        :class="`moduleBottomWrapMake ${category === 2 && 'topNaviActive'}`"
        v-if="category === 2"
      >
        <span class="moduleBottomTitMake">
          <p>VIRNECT Make</p>
          <h2>XR 콘텐츠 제작 All-in-one 솔루션</h2>
          <span>
            <p>
              VIRNECT Make는 설비 운영/작업 절차 등 산업에 필요한 모든 정보와
              지식을 XR 콘텐츠로 제작 가능한 도구입니다. 다양한 산업용
              디바이스를 위한 XR 콘텐츠 제작, 배포, 수정이 한 번에 가능한
              All-In-One 제품입니다.
            </p>
            <p>
              안전하고 효율적인 업무 생태계를 기업에서 직접 만들고 관리합니다.
            </p>
          </span>
          <span>
            <button>
              <a href="#"> 자세히 보기 </a>
            </button>
            <button>
              <a href="#"> 데모신청 </a>
            </button>
          </span>
          <span>
            <a href="#">
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                  alt="다운로드이미지"
                />
              </i>
              <p><u>Remote 제품 소개서 다운로드(PDF)</u></p>
            </a>
          </span>
        </span>
        <span class="moduleBottomCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/d3b6f1ee-9f96-4645-8db3-86b6fb2ec337/image.png"
            alt="VIRNECT Make"
          />
        </span>
      </div>
      <div
        :class="`moduleBottomWrapView ${category === 3 && 'topNaviActive'}`"
        v-if="category === 3"
      >
        <span class="moduleBottomTitView">
          <p>VIRNECT View</p>
          <h2>XR 정보 및 데이터 시각화 솔루션</h2>
          <span>
            <p>VIRNECT View를 통해 운영 데이터를 확인할 수 있습니다.</p>
            <p>
              각종 중요 데이터를 현장에서 바로 확인하고 직관적으로 문제를
              식별하여, 올바른 의사결정 및 빠른 대응이 가능합니다.
            </p>
          </span>
          <span>
            <button>
              <a href="#"> 자세히 보기 </a>
            </button>
            <button>
              <a href="#"> 데모신청 </a>
            </button>
          </span>
          <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                alt="다운로드이미지"
              />
            </i>
            <p><u>View 제품 소개서 다운로드(PDF)</u></p>
          </span>
        </span>
        <span class="moduleBottomCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/d63cf94f-7150-4866-a0de-0697035f1de2/image.jpg"
            alt="VIRNECT View"
          />
        </span>
      </div>
      <div
        :class="`moduleBottomWrapTwin ${category === 4 && 'topNaviActive'}`"
        v-if="category === 4"
      >
        <span class="moduleBottomTitTwin">
          <p>VIRNECT Twin</p>
          <h2>XR 기반 3D 현장 관리 솔루션</h2>
          <span>
            <p>
              VIRNECT Twin은 산업 현장을 가상 모델로 재현하고 이를 실제 데이터와
              연동하여, 산업 현장의 운영 상태 및 프로세스를 모니터링할 수 있는
              제품입니다.
            </p>
          </span>
          <span>
            <button>
              <a href="#"> 자세히 보기 </a>
            </button>
            <button>
              <a href="#"> 데모신청 </a>
            </button>
          </span>
          <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                alt="다운로드이미지"
              />
            </i>
            <p><u>Twin 제품 소개서 다운로드(PDF)</u></p>
          </span>
        </span>
        <span class="moduleBottomCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/8cec24d8-3d90-404c-9608-9856d9a7681c/image.jpg"
            alt="VIRNECT Twin"
          />
        </span>
      </div>
      <div
        :class="`moduleBottomWrapTrack ${category === 5 && 'topNaviActive'}`"
        v-if="category === 5"
      >
        <span class="moduleBottomTitTrack">
          <p>VIRNECT Track</p>
          <h2>XR 원격 협업 솔루션</h2>
          <span>
            <p>
              VIRNECT Remote의 실시간 원격협업 서비스를 통해 산업 현장에 필요한
              정보와
            </p>
            <p>
              이슈를​ 실시간으로 공유하여 언제 어디서든 업무 대응이 가능합니다.​
            </p>
            <p>
              쉽고 빠르게 협업이 가능하며 ​기존의 익숙한 업무 환경을 그대로
              유지하여
            </p>
            <p>업무의 정확성과 효율성을 높일 수 있습니다.</p>
          </span>
          <span>
            <button>
              <a href="#"> 자세히 보기 </a>
            </button>
            <button>
              <a href="#"> 데모신청 </a>
            </button>
          </span>
          <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                alt="다운로드이미지"
              />
            </i>
            <p><u>Track 제품 소개서 다운로드(PDF)</u></p>
          </span>
        </span>
        <span class="moduleBottomCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/3f31dd88-8507-4d28-8b10-eee7a70c675e/image.jpg"
            alt="VIRNECT Track"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: 1,
    };
  },
  methods: {
    handleCategory(e) {
      this.category = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.productsModule {
  ul,
  li,
  span,
  a {
    list-style: none;
    text-decoration: none;
  }
  max-width: 2400px;
  width: 100%;
  display: flex;
  padding: 140px 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .moduleTop {
    max-width: 1200px;
    width: 100%;
    padding: 0 30px;
    .moduleTopTit {
      display: block;
      max-width: 1200px;
      margin-bottom: 73px;
      > p {
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.23px;
        text-align: center;
        color: #0a51b7;
        margin-bottom: 16px;
      }
      h2 {
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.55px;
        text-align: center;
        color: #121212;
        margin-bottom: 42px;
      }
      > span {
        display: block;
        margin-bottom: 34px;
        > p {
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.75;
          letter-spacing: -0.2px;
          text-align: center;
          color: #616161;
        }
      }
      ul {
        max-width: 600px;
        min-height: 107px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: #f7f8f9;
        li {
          border-right: 1px solid #c5c8cf;
          display: flex;
          gap: 13px;
          text-align: center;
          flex-direction: column;
          width: 25%;
          &:last-child {
            border-right: none;
          }
          span {
            &:first-child {
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1;
              letter-spacing: -0.18px;
              text-align: center;
              color: #121212;
            }
            &:last-child {
              display: flex;
              justify-content: center;
              p {
                &:first-child {
                  font-size: 28px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.35;
                  letter-spacing: normal;
                  text-align: center;
                  color: #121212;
                }
                &:last-child {
                  img {
                    max-width: 20px;
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
    .moduleTopNavi {
      display: block;
      max-width: 1200px;
      min-height: 70px;
      height: 100%;
      ul {
        display: flex;
        min-height: 70px;
        height: 100%;
        li {
          min-height: 70px;
          width: 20%;
          height: 100%;
          border-bottom: 4px solid transparent;
          &.topNaviActive,
          &:hover {
            border-bottom: 4px solid #092e6e;
          }
          &:first-child {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/d3979587-c0e2-430b-ad0f-1eec7deb8c84/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(2) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/c90bac54-bec8-415b-949f-b9e7e5142ffa/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(3) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/55999c1f-157d-4dde-85c3-4038aba26b91/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(4) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/0acbda75-7c59-48e7-ac7c-bc20fc45d618/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:last-child {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/9a3abaac-00cb-4eb1-9605-1ad5e3c38371/image.png");
            background-size: auto 100%;
            background-position: center;
          }
        }
      }
    }
  }
  .moduleBottom {
    position: relative;
    display: flex;
    max-width: 2400px;
    width: 100%;
    min-height: 728px;
    background-image: linear-gradient(to bottom, #f7f8f9 54%, #e4e4e4 107%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    align-items: center;
    justify-content: center;
    .bottomBackLogo {
      position: absolute;
      bottom: 0;
      left: 10%;
      img {
        max-width: 461px;
        width: 100%;
      }
    }

    .moduleBottomWrapTrack,
    .moduleBottomWrapTwin,
    .moduleBottomWrapView,
    .moduleBottomWrapMake,
    .moduleBottomWrapRemote {
      display: flex;
      position: absolute;
      max-width: 1200px;
      padding: 0 30px;
      gap: 59px;
      &.bottomContActive {
        display: flex;
      }
      .moduleBottomTitMake,
      .moduleBottomTitView,
      .moduleBottomTitTwin,
      .moduleBottomTitTrack,
      .moduleBottomTitRemote {
        width: 50%;
        > p {
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.23px;
          color: #0a51b7;
          margin-bottom: 13px;
        }
        h2 {
          font-size: 32px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.4px;
          color: #121212;
          margin-bottom: 40px;
        }
        span {
          display: block;
          text-align: left;

          &:nth-child(3) {
            margin-bottom: 76.5px;
            p {
              &:first-child {
                font-size: 16px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: -0.2px;
                color: #121212;
              }
              &:nth-child(2) {
                font-size: 16px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: -0.2px;
                color: #121212;
              }
              &:nth-child(3) {
                font-size: 16px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: -0.2px;
                color: #121212;
              }
              &:last-child {
                font-size: 16px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: -0.2px;
                text-align: justify;
                color: #121212;
              }
            }
          }

          &:nth-child(4) {
            display: flex;
            gap: 12px;
            margin-bottom: 25px;
            button {
              &:first-child {
                border: solid 1px #979797;
                background-color: #f7f8f9;
                display: flex;
                a {
                  padding: 10px 33px;
                  font-size: 18px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: normal;
                  letter-spacing: normal;
                  text-align: center;
                  color: #121212;
                }
              }
              &:last-child {
                border: solid 1px #0a51b7;
                background-color: #0a51b7;
                display: flex;
                a {
                  padding: 10px 33px;
                  font-size: 18px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: normal;
                  letter-spacing: normal;
                  text-align: center;
                  color: #fff;
                }
              }
            }
          }
          &:last-child {
            display: flex;
            align-items: center;
            gap: 10px;
            i {
              img {
                max-width: 22px;
              }
            }
            p {
              u {
                font-size: 14px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.36;
                letter-spacing: -0.18px;
                color: #092e6e;
              }
            }
          }
        }
      }
      .moduleBottomCont {
        width: 50%;
        display: flex;
        align-items: center;
        img {
          max-width: 588px;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .productsModule .moduleBottom .moduleBottomWrapTrack.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapTwin.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapView.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapMake.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapRemote.bottomContActive {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomCont {
    width: 100%;
  }

  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitRemote {
    width: 100%;
  }

  .productsModule .moduleBottom {
    min-height: 1000px;
  }
}
</style>