<template>
  <div class="xrSolutionWrapper" id="xrSolutionId">
    <div class="overView">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>
            {{ $t("productsText.xrSolutionTitle.category") }}
          </p>
          <h2>
            {{ $t("productsText.xrSolutionTitle.title") }}
          </h2>
          <span>
            {{ $t("productsText.xrSolutionTitle.contents") }}
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
            <p>{{ $t("productsText.xrSolutionText.TimeCost") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/780b6479-d53a-48db-a89d-321a74ed6d5a/image.png"
                alt="Inform Quicky and ccurately"
            /></i>
            <p>Inform Quicky and ccurately</p>
            <p>{{ $t("productsText.xrSolutionText.Quicky") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/4e8a8d7e-2792-4e74-9618-7d03cbaa6b99/image.png"
                alt="Reduce Industry Risks"
            /></i>
            <p>Reduce Industry Risks</p>
            <p>{{ $t("productsText.xrSolutionText.Risks") }}</p>
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
// @import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
.xrSolutionWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overView {
  max-width: 2400px;
  width: 100%;
}
.overView .overViewWrap {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 150px 30px;
  box-sizing: unset;
}
.overView .overViewWrap .overViewTit {
  text-align: center;
}
.overView .overViewWrap .overViewTit > p {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.23px;
  text-align: center;
  color: #0a51b7;
  margin-bottom: 16px;
}
.overView .overViewWrap .overViewTit h2 {
  font-size: 44px;
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: -0.55px;
  text-align: center;
  color: #121212;
  margin-bottom: 16px;
}
.overView .overViewWrap .overViewTit span {
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
  margin-bottom: 45px;
}
.overView .overViewWrap .overViewTit span p {
  font-size: 16px;
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
  font-size: 16px;
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