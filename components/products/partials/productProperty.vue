<template>
  <div class="productPropertyWrapper">
    <div class="features">
      <div class="featuresWrap">
        <span class="featuresTit">
          <p>
            {{ $t("productsText.productPropertyTitle.title") }}
          </p>
          <h2>
            {{ $t("productsText.productPropertyTitle.contents") }}
          </h2>
          <ul>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트1"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.multiple") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트2"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.translation") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트3"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.images") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트4"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.secured") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트5"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.autoStart") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트6"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.personalization") }}
              </p>
            </li>
          </ul>
        </span>
        <span class="featuresCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/1dc714b8-20fb-4609-b92b-1f1472ed777b/image.jpg"
            alt="features"
          />
        </span>
      </div>
    </div>
  </div>
</template>
</template>

<script>
export default {
  data() {
    return {
      xrSolutionWrapperPosition: 0,
    };
  },
  methods: {
    positionSetting() {
      if (process.client)
        window.scrollTo({
          left: 0,
          top: Number(divPosition.get(e.target).getAttribute("class")) - 250,
          behavior: "smooth",
        });
      Number(ids.getBoundingClientRect().top + window.pageYOffset);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
.productPropertyWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.features {
  max-width: 2400px;
}
.features .featuresWrap {
  max-width: 1200px;
  gap: 65px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 0 30px 85px 30px;
  border-bottom: 1px solid #c5c8cf;
}
.features .featuresWrap .featuresTit {
  width: 50%;
}
.features .featuresWrap .featuresTit > p {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.23px;
  color: #0a51b7;
  margin-bottom: 16px;
}
.features .featuresWrap .featuresTit h2 {
  font-size: 34px;
  font-weight: bold;
  line-height: 1.54;
  letter-spacing: -0.43px;
  color: #121212;
  margin-bottom: 80px;
}
.features .featuresWrap .featuresTit h2 p {
  font-size: 34px;
  font-weight: bold;
  line-height: 1.54;
  letter-spacing: -0.43px;
  color: #121212;
}
.features .featuresWrap .featuresTit ul li {
  gap: 10px;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: normal;
  color: #121212;
  display: flex;
}
.features .featuresWrap .featuresTit ul li i {
  display: flex;
  align-items: center;
}
.features .featuresWrap .featuresTit ul li i img {
  width: 16px;
}
.features .featuresWrap .featuresTit ul li {
  p {
    display: block;
  }
  &:first-child {
    p {
      line-height: 1.4;
    }
  }
}
.features .featuresWrap .featuresCont {
  width: 50%;
}
.features .featuresWrap .featuresCont img {
  max-width: 525px;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .features .featuresWrap .featuresTit > p {
    text-align: center;
  }
  .features .featuresWrap .featuresTit h2 {
    text-align: center;
  }
  .featuresTit ul {
    margin-bottom: 40px;
  }
  .featuresTit li {
    margin: 0 auto;
  }
  .featuresTit li p {
    text-align: center;
  }

  .features .featuresWrap {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
}
</style>