<template>
  <section>
    <!-- 데이타모듈 -->
    <ul class="dataModule">
      <li>
        <span>
          {{ $t("productsText.data.battery") }}
          <p>(mAh/min)</p>
        </span>
        <span>
          <p>35%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
      <li>
        <span>
           {{ $t("productsText.data.temperature") }}
          <p>(℃)</p>
        </span>
        <span>
          <p>22%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
      <li>
        <span>
          {{ $t("productsText.data.cpu") }}
          <p>(%)</p>
        </span>
        <span>
          <p>65%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
      <li>
        <span>
          {{ $t("productsText.data.memory") }}
          <p>(KB)</p>
        </span>
        <span>
          <p>58%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
    </ul>
    <!-- 데이타모듈 -->
  </section>
</template>


<script>
</script>

<style lang="scss" scoped>
@import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
@import "~/assets/css/modules/dataModule.scss";
</style>