<template>
  <div class="CtaModule">
    <div class="CtaCont">
      <h2>현장의 XR/DT 혁신, 지금 바로 시작하세요.</h2>
      <p>준비된 기술 컨설턴트가 직접 도움을 드립니다.</p>
      <span>
        <button>
          <a href="/support/demo" target="blank"> 데모신청 </a>
        </button>
        <button>
          <a href="/support/inquiry" target="blank"> 도입문의 </a>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.CtaModule {
  display: flex;
  width: 100%;
  /* max-width: 2400px; */
  height: 479px;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/e22550d0-b661-41a6-8803-eef9ada91ff3/image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  padding-right: 11%;
  .CtaCont {
    max-width: 906px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 0px;

    h2 {
      font-size: 48px;
      color: #fff;
      margin-bottom: 11px;
      line-height: 1.28;
    }
    p {
      font-size: 24px;
      font-weight: 500;
      color: #bfdcff;
      margin-bottom: 64px;
    }
    span {
      display: flex;
      gap: 12px;
      button {
        border: none;
        transition: all 0.4s;
        a {
          height: 100%;
          line-height: 1.5;
          display: block;
          padding: 13px 48.87px;
          font-size: 18px;
          font-weight: bold;
        }
        &:first-child {
          background: #0a51b7;
          a {
            color: #fff;
          }
        }
        &:last-child {
          background: #f7f8f9;
          a {
            color: #121212;
          }
        }
      }
      // 조성우추가
      button:hover {
        border: none;
        a {
          height: 100%;
          line-height: 1.5;
          display: block;
          padding: 13px 48.87px;
          font-size: 18px;
          font-weight: bold;
        }
        &:first-child {
          background: #fff;
          a {
            color: #000;
          }
        }
        &:last-child {
          background: #092E6E;
          a {
            color: #fff;
          }
        }
      }
      // 조성우추가 끝
    }
  }
}

// 0716조성우 추가
@media screen and (max-width: 1440px) {
  .CtaModule {
    display: flex;
    width: 100%;
    /* max-width: 2400px; */
    height: 479px;
    background-image: url("https://velog.velcdn.com/images/kyj0206/post/e22550d0-b661-41a6-8803-eef9ada91ff3/image.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    padding-right: 23%;
    padding-left: 30px;
  }
}
// 조성우 추가 끝



@media screen and (max-width: 1024px) {
  .CtaModule{
    padding: 0;
  }

  .CtaModule .CtaCont {
    padding: 0 25px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .CtaModule .CtaCont span{
    justify-content: center;
  }
}
@media screen and (max-width: 768px) {
  .CtaModule .CtaCont h2 {
    font-size: 36px;
    line-height: 1.28;
  }
  .CtaModule {
    padding: 0;
  }

  .CtaModule .CtaCont p {
    font-size: 18px;
  }
}

@media screen and (max-width: 475px) {

  .CtaModule .CtaCont {
    padding: 0 24px;
  }
}
</style>