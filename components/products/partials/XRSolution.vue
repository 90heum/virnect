<template>
  <div class="xrSolutionWrapper" id="xrSolutionId">
    <div class="overView">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>제품개요</p>
          <h2>XR 원격 협업 솔루션</h2>
          <span>
            VIRNECT Remote의 실시간 원격협업 서비스를 통해 산업 현장에 필요한
            정보와 이슈를 실시간으로 공유하여 언제 어디서든 업무 대응이
            가능합니다.
            <p>
              빠르고 간편하게 협업이 가능하며 기존의 익숙한 업무 환경을 그대로
              유지하여 업무의 정확성과 효율성을 높일 수 있습니다.
            </p>
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/5717ee9b-9468-4e91-8027-0591305062f8/image.png"
                alt="Save Time and Cost"
            /></i>
            <p>Save Time and Cost</p>
            <p>현지공장 출장 비용, 시간을</p>
            <p>획기적으로 줄일 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/780b6479-d53a-48db-a89d-321a74ed6d5a/image.png"
                alt="Inform Quicky and ccurately"
            /></i>
            <p>Inform Quicky and ccurately</p>
            <p>정보를 신속하고 정확하게</p>
            <p>전달할 수 있습니다.</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/4e8a8d7e-2792-4e74-9618-7d03cbaa6b99/image.png"
                alt="Reduce Industry Risks"
            /></i>
            <p>Reduce Industry Risks</p>
            <p>긴급상황 발생 시 외부 전문가들의</p>
            <p>신속한 도움을 받을 수 있습니다.</p>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
.xrSolutionWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: cemter;
}

.overView {
  max-width: 2400px;
  width: 100%;
}
.overView .overViewWrap {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 180px 30px;
  box-sizing: unset;
}
.overView .overViewWrap .overViewTit {
  text-align: center;
}
.overView .overViewWrap .overViewTit > p {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.23px;
  text-align: center;
  color: #0a51b7;
  margin-bottom: 16px;
}
.overView .overViewWrap .overViewTit h2 {
  font-size: 4.4rem;
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: -0.55px;
  text-align: center;
  color: #121212;
  margin-bottom: 16px;
}
.overView .overViewWrap .overViewTit span {
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
  margin-bottom: 45px;
}
.overView .overViewWrap .overViewTit span p {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
}
.overView .overViewWrap .overViewCont {
  display: flex;
  justify-content: space-between;
}
.overView .overViewWrap .overViewCont span {
  border-top: 1px solid #c5c8cf;
  border-bottom: 1px solid #c5c8cf;
  padding: 35px 0;
  max-width: 355px;
}
.overView .overViewWrap .overViewCont span i {
  display: block;
  text-align: center;
  margin-bottom: 35px;
}
.overView .overViewWrap .overViewCont span i img {
  max-width: 128px;
  width: 100%;
}
.overView .overViewWrap .overViewCont span p:nth-child(2) {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.25px;
  text-align: center;
  color: #0a51b7;
  margin-bottom: 15px;
}
.overView .overViewWrap .overViewCont span p:nth-child(3),
.overView .overViewWrap .overViewCont span p:last-child {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
}
.overView .overViewWrap .overViewCont span:first-child {
  width: 33.3%;
}
.overView .overViewWrap .overViewCont span:nth-child(2) {
  width: 33.3%;
}
.overView .overViewWrap .overViewCont span:last-child {
  width: 33.3%;
}
</style>