<template>
  <section>
    <div class="overViewRemote">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>{{ $t("productsText.xrSolutionTitle.category") }}</p>
          <h2>{{ $t("productsText.xrSolutionTitle.title") }}</h2>
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
            <p>
              {{ $t("productsText.xrSolutionText.Risks") }}
            </p>
          </span>
        </span>
        <span class="overViewBox">
          <ul>
            <li>
              <p>1,357</p>
              <p>디운로드 수</p>
            </li>
            <li>
              <p>63</p>
              <p>Enterprise</p>
            </li>
            <li>
              <p>120+</p>
              <p>계약건수</p>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
@import "~/assets/css/pages/overviewRemote.scss";
</style>