<template>
  <!-- 학습센터 고정 모듈 -->
  <div class="centerModule">
    <span class="centerModuleTit">
      <h2>산업 현장을 위해 최적화 된 버넥트 XR 솔루션을 만나보세요</h2>
    </span>
    <span class="centerModuleMore">
      <span>
        <i>
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/181b2336-255d-44dc-bfe9-1d4affd12a9d/image.png"
            alt="제품정보 바로가기"
          />
        </i>
        <p>제품정보 바로가기</p>
      </span>
      <span>
        <i>
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/181b2336-255d-44dc-bfe9-1d4affd12a9d/image.png"
            alt="FAQ 바로가기"
          />
        </i>
        <p>FAQ 바로가기</p>
      </span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.centerModule {
  padding: 50px 40px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  background-color: #f7f8f9;
  .centerModuleTit {
    width: 50%;
    h2 {
      font-size: 22px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.45;
      letter-spacing: -0.28px;
      color: #092e6e;
    }
  }
  .centerModuleMore {
    width: 50%;
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    span {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      &:first-child {
        i {
          img {
            max-width: 22px;
            width: 100%;
            margin-top: 10px;
          }
        }
        p {
          text-decoration: underline;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.2px;
          color: #092e6e;
        }
      }
      &:last-child {
        i {
          img {
            max-width: 22px;
            width: 100%;
            margin-top: 10px;
          }
        }
        p {
          text-decoration: underline;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.2px;
          color: #092e6e;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .centerModule {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 40px;
  }
}
</style>