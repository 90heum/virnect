<template>
  <div class="SupportBanner">
    <div class="SupportBannerWrap">
      <span class="SupportTit">
        <div>
          <h2>Support</h2>
        </div>
        <div>
          <p>
            서비스 이용에 도움이 되도록 빠르고 친절하게 해결해 드리겠습니다.
          </p>
          <span>
            <p>바로가기</p>
            <p>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/d405b250-9807-41de-91f7-677076876929/image.png"
                alt="바로가기"
              />
            </p>
          </span>
        </div>
      </span>
      <span class="SupportCont">
        <div>
          <div>
            <nuxt-link to="/support/notice">
              <span>
                <p>Product Notice</p>
                <p>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/55729d34-c916-4922-97a2-ac8213bbeab6/image.png"
                    alt="Product Notice 더보기"
                  />
                </p>
              </span>
            </nuxt-link>
            <span>
              <a href="#">
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0c8a11b8-b6bc-4fb9-b722-e4ae81438c34/image.png"
                  alt="Product Notice 이미지"
                />
              </a>
            </span>
          </div>
          <div>
            <nuxt-link to="/support/faq">
              <span>
                <p>FAQ</p>
                <p>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/55729d34-c916-4922-97a2-ac8213bbeab6/image.png"
                    alt="FAQ 더보기"
                  />
                </p>
              </span>
            </nuxt-link>
            <span>
              <span>
                <nuxt-link to="/support/faq?category=1">
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/0fe02957-fa7f-42af-b714-cc9ba4e63cd9/image.png"
                    alt="회원"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=3">
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/f966b265-fdce-4b0d-bc9e-74412568aa3c/image.png"
                    alt="제품"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=4">
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/0548505e-93ee-4c20-9182-2021dc74f965/image.png"
                    alt="결제"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=2">
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/f2a90d11-ad6b-485e-8d85-e237354ffdc9/image.png"
                    alt="서비스"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=6">
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/e3918984-3f62-4e19-811e-27d7d1a3b77c/image.png"
                    alt="기기"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=5">
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/8198171b-41d4-4120-a382-e6f5ec307aaa/image.png"
                    alt="기타"
                  />
                </nuxt-link>
              </span>
            </span>
          </div>
        </div>
        <div>
          <nuxt-link to="/support/learning-center">
            <span>
              <p>학습센터</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/55729d34-c916-4922-97a2-ac8213bbeab6/image.png"
                  alt="학습센터 더보기"
                />
              </p>
            </span>
          </nuxt-link>
          <span>
            <span>
              <nuxt-link to="/support/learning-center?category=1">
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/740a5bc9-f3ec-47b3-98c3-982ac2fb4533/image.png"
                  alt="Remote"
                />
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/support/learning-center?category=2">
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9aa3ce6b-0244-4832-add7-c037be467ca7/image.png"
                  alt="Make"
                />
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/support/learning-center?category=3">
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/edb6a063-2cf3-4027-bf34-948e97aa0d77/image.png"
                  alt="View"
                />
              </nuxt-link>
            </span>
          </span>
        </div>
      </span>
      <span class="SupportBottomTit">
        <div>
          <p>고객지원/제품 및 기술/파트너 정책 등 궁금하신</p>
          <p>사항이 있으신가요?</p>
        </div>
        <div>
          <div>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/c469bca8-6475-42c6-bb90-4d54edec3e7a/image.png"
                alt="문의하기"
              />
            </i>
            <p>070.7733.2025</p>
          </div>
          <div>
            <a href="#"> 문의하기 </a>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/css/modules/Support.scss";
</style>