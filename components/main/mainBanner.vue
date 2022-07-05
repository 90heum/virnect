<template>
  <div class="mainBanner">
    <div class="mainBannerInner">
      <span class="mainBannerTit">
        <p class="bannerTitN1">생활 전반에 XR 기술이 스며들게 한다</p>
        <h1 class="bannerTitN2">
          글로벌 No.1 확장현실
          <p>(XR)</p>
          플랫폼 기업 VIRNECT
        </h1>
        <p class="bannerTitN3">
          산업 현장을 혁신으로 이끌 버넥트 XR 솔루션을 확인하세요
        </p>
        <span class="bannerButton">
          <button>
            <a href="#">자세히 보기</a>
          </button>
          <button>
            <a href="https://pardot.virnect.com/l/929783/2022-06-16/3nplr"
              >데모신청</a
            >
          </button>
        </span>
        <span class="bannerTitN4">
          <p>준비된 기술 컨설턴트가 직접 도움을 드립니다.</p>
          <span>
            <i>
              <img
                :src="`https://velog.velcdn.com/images/kyj0206/post/8430c7fd-128e-491d-9ff0-45b2ca725f5d/image.png`"
                alt="문의하기 이미지"
              />
            </i>
            <p>
              070.7733.2025 <a href="#"><u>문의하기</u></a>
            </p>
          </span>
        </span>
      </span>
      <span class="mainBannerCont">
        <img
          :src="`https://velog.velcdn.com/images/kyj0206/post/6d62537d-6161-42ab-ac36-244f978d597b/image.png`"
          alt="메인베너이미지"
        />
      </span>
      <span class="mainBannerTitMb">
        <p class="bannerTitMb">
          산업 현장을 혁신으로 이끌 버넥트 XR 솔루션을 확인하세요
        </p>
        <span class="bannerButtonMb">
          <button>
            <a href="#">자세히 보기</a>
          </button>
          <button>
            <a href="https://pardot.virnect.com/l/929783/2022-06-16/3nplr"
              >데모신청</a
            >
          </button>
        </span>
        <span class="bannerTitMb2">
          <p>준비된 기술 컨설턴트가 직접 도움을 드립니다.</p>
          <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/8430c7fd-128e-491d-9ff0-45b2ca725f5d/image.png"
                alt="문의하기 이미지"
              />
            </i>
            <p>
              070. 7733. 2025 <a href="#"><u>문의하기</u></a>
            </p>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
// 메인배너
.mainBanner {
  position: relative;
  box-sizing: border-box;
  max-width: 2400px;
  width: 100%;
  max-height: 1003px;
  height: 100%;
  padding: 150px 30px;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/1e0517a7-d564-465f-b8e2-458f7d4fcfac/image.jpg");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, rgba(18, 18, 18, 0.47) 0%, #000);
    // z-index: 9999;
    opacity: 0.6;
  }
  .mainBannerInner {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    gap: 64px;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    .mainBannerTit {
      margin-left: 130px;
      .bannerTitN1 {
        display: block;
        margin-bottom: 24px;
        font-size: 26px;
        letter-spacing: -0.33px;
        color: #c5c8cf;
      }
      .bannerTitN2 {
        display: block;
        font-size: 50px;
        letter-spacing: -0.63px;
        color: #fff;
        margin-bottom: 100px;
        line-height: 1.44;
        p {
          &:first-child {
            display: inline;
            font-weight: 300;
          }
        }
      }
      .bannerTitN3 {
        display: block;
        margin-bottom: 18px;
        font-size: 18px;
        letter-spacing: -0.23px;
        color: #fff;
      }
      .bannerButton {
        display: block;
        margin-bottom: 48px;
        display: flex;
        gap: 10px;
        button {
          padding: 9px 16px 7px;

          a {
            width: 100%;
            height: 100%;
            display: block;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
            text-decoration: none;
          }
          &:first-child {
            border: solid 1px #979797;
            background-color: #121212;
          }
          &:last-child {
            border: solid 1px #0a51b7;
            background-color: #0a51b7;
          }
        }
      }
      .bannerTitN4 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;
        > p {
          display: inline;
          height: 100%;
          font-size: 16px;
          letter-spacing: -0.2px;
          color: #bfdcff;
          height: 24px;
          line-height: 25px;
          white-space: nowrap;
        }
        span {
          display: flex;
          align-items: center;
          gap: 8px;
          i {
            img {
              max-width: 22px;
              display: inline;
            }
          }
          > p {
            display: inline;
            font-size: 16px;
            letter-spacing: -0.2px;
            height: 24px;
            color: #fff;
            white-space: nowrap;
            line-height: 25px;
            a {
              margin-left: 12px;
            }
            font-size: 16px;
            letter-spacing: -0.2px;
            u {
              color: #fff;
            }
          }
        }
      }
    }
    .mainBannerCont {
      display: block;
      img {
        max-width: 700px;
        min-width: 560px;
        width: 100%;
      }
    }
    .mainBannerTitMb {
      display: none;
      text-align: center;
      .bannerTitMb {
        display: block;
        margin-top: 30px;
        margin-bottom: 18px;
        font-size: 18px;
        letter-spacing: -0.23px;
        color: #fff;
      }
      .bannerButtonMb {
        display: block;
        margin-bottom: 48px;
        display: flex;
        gap: 10px;
        justify-content: center;
        button {
          padding: 9px 16px 7px;

          a {
            width: 100%;
            height: 100%;
            display: block;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
          }
          &:first-child {
            border: solid 1px #979797;
            background-color: #121212;
          }
          &:last-child {
            border: solid 1px #0a51b7;
            background-color: #0a51b7;
          }
        }
      }
      .bannerTitMb2 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;
        > p {
          display: inline;
          height: 100%;
          font-size: 16px;
          letter-spacing: -0.2px;
          color: #bfdcff;
          height: 24px;
          line-height: 25px;
          white-space: nowrap;
        }
        span {
          display: flex;
          align-items: center;
          gap: 8px;
          i {
            img {
              max-width: 22px;
              display: inline;
            }
          }
          > p {
            display: inline;
            font-size: 16px;
            letter-spacing: -0.2px;
            height: 24px;
            color: #fff;
            white-space: nowrap;
            line-height: 25px;
            a {
              margin-left: 12px;
            }
            font-size: 1.6px;
            letter-spacing: -0.2px;
            color: #fff;
          }
        }
      }
    }
  }
}

@media screen and(max-width: 1260px) {
  .mainBanner {
    padding: 126px 30px 129px;
  }

  .mainBanner .mainBannerInner .mainBannerTit {
    margin-left: 0;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 p {
    display: inline;
  }
}

@media screen and(max-width: 1024px) {
  .mainBanner .mainBannerInner .mainBannerTit {
    text-align: center;
  }

  .mainBanner {
    padding: 150px 30px 119px;
    max-height: none;
  }

  .mainBanner .mainBannerInner {
    gap: 0;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 {
    margin-bottom: 0;
  }

  .mainBanner .mainBannerInner {
    flex-direction: column;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 p {
    display: block;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerButton,
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN3,
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN4 {
    display: none;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb {
    display: block;
  }
}

@media screen and(max-width: 802px) {
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 p {
    display: inline;
  }
}

@media screen and(max-width: 768px) {
  .mainBanner {
    padding: 128px 34px 110px;
    max-height: none;
  }

  .mainBanner .mainBannerInner .mainBannerCont img {
    min-width: auto;
  }
}

@media screen and(max-width: 767px) {
  .mainBanner {
    padding: 104px 24px 100px;
    max-height: none;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 {
    font-size: 34px;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN1 {
    font-size: 22px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb {
    font-size: 16px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb2 {
    justify-content: center;
  }
}

@media screen and(max-width: 425px) {
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN1 {
    font-size: 22px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb {
    font-size: 16px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb2 {
    justify-content: center;
  }
}
</style>
