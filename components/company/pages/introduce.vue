<template>
  <section class="energy-section">
    <!-- <subVisualSection
      class="sm"
      :image="visualText.image"
      :category="visualText.category"
      :title="
        $route.name === 'company-about'
          ? $t('virtualConnect.title')
          : $t('companyText.visualText.title')
      "
      :contents="
        $route.name === 'company-about'
          ? $t('virtualConnect.visualContents')
          : $t('companyText.visualText.contents')
      "
    ></subVisualSection> -->
    <!-- <snbSection
      v-if="$route.name === 'company-about'"
      :snbArr="
        $t('gnb[4].array[0].depth').filter((d) => d.page !== 'company-about')
      "
    ></snbSection> -->

    <!-- <heading-module
      :title="$t('companyText.summaryText.summaryTitle.title')"
      :contents="$t('companyText.summaryText.summaryTitle.contents')"
    ></heading-module> -->
    <div class="aboutVirnect">
      <section class="aboutVirnect">
        <div class="aboutVirnectInner">
          <span class="aboutVirnectTit">
            <h2>버넥트는 국내 최고의 산업용 XR 솔루션 전문 기업입니다.</h2>
            <span>
              고객의 입장에서 현장의 문제를 분석하여 최고의 솔루션을 제공합니다.
              <p>
                항상 고객 중심으로 생각하며, 고객과 함께 XR 솔루션의 혁신을
                만들어 나가고 있습니다.
              </p>
            </span>
          </span>
          <span class="aboutVirnectCont">
            <ul class="no1Cont">
              <li>
                <span> Mission </span>
                <span>
                  사람/로봇, 시간/공간, 정보/지식/지혜를
                  <p>서로 연결하여 새로운 가치 창출</p>
                </span>
              </li>
              <li>
                <span> Vision </span>
                <span>
                  글로벌 No.1 XR 플랫폼 기업 -
                  <p>생활 전반에 XR 기술이 스며들게 한다</p>
                </span>
              </li>
            </ul>
            <ul class="no2Cont">
              <li>
                <p>설립연도</p>
                <span>2016년</span>
              </li>
              <li>
                <p>임직원</p>
                <span>150명 +</span>
              </li>
              <li>
                <p>지적재산권</p>
                <span>95건 +</span>
              </li>
              <li>
                <p>XR 프로젝트 수행</p>
                <span>130건 +</span>
              </li>
              <li>
                <p>인증 및 수상</p>
                <span>40건 +</span>
              </li>
            </ul>
          </span>
        </div>
      </section>
      <company-awards />
      <section class="aboutHistory">
        <div class="aboutHistoryInner">
          <span class="aboutHistoryTit">
            <h2>연혁</h2>
            <p>고객과 함께 성장해온 버넥트는 더 큰 성장으로 나아가겠습니다.</p>
          </span>
          <span class="aboutHistoryCont">
            <ul class="aboutHistoryContTab">
              <li class="active">2021</li>
              <li>2020</li>
              <li>2019</li>
              <li>2017~2018</li>
              <li>2016</li>
            </ul>
            <ul class="aboutHistoryContCont" id="2021">
              <li class="HisLeft">
                <div>
                  <span>산업용 XR 리더 입지</span>
                  <p>(글로벌 진출을 위한 발판 마련)</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/bec8bd74-3437-4927-8e7b-d61903a4fa1a/image.png"
                    alt="연혁2021"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>• 시리즈 B 투자 유치 (300억)</li>
                  <li>• VIRNECT Track Beta 출시</li>
                  <li>• 제 1회 VIRTUAL CONNECT 개최</li>
                  <li>• 7개사 비즈니스 파트너십 체결</li>
                  <li>• 페루 Proximity와 파트너십 체결 및 수출</li>
                  <li>• 국내 특허 15건, 해외 특허 2건 등록</li>
                  <li>• 국내외 저작권 등록 20건</li>
                  <li>• ESG팀 설립 및 활동 진행</li>
                </ul>
              </li>
            </ul>
            <!-- <ul class="aboutHistoryContCont" id="2020">
              <li class="HisLeft">
                <div>
                  <span>통합솔루션 출시</span>
                  <p>(아기유니콘 선정)</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/92c4317e-3153-4e50-b234-6f87795588c8/image.png"
                    alt="연혁2020"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>• 통합솔루션 출시(AR 솔루션 v2.0)</li>
                  <li>• VIRNECT Twin 출시</li>
                  <li>• 비엔나 리서치 센터 설립</li>
                  <li>• 버넥트 익스피리언스 센터 개관</li>
                  <li>• 해외 특허 등록 (5건)</li>
                  <li>• 디지털 뉴딜 민관 협력 MOU 체결</li>
                  <li>• 생산성 본부, 삼성 멀티미디어 캠퍼스 교육</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2019">
              <li class="HisLeft">
                <div>
                  <span>시리즈 A 투자 유치</span>
                  <p>(다양한 분야로의 사업 확장)</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/c1023645-90e2-4352-97ed-99302a7448d6/image.png"
                    alt="연혁2019"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>• VIRNECT Make 출시</li>
                  <li>• 시리즈 A 투자 유치 (90억)</li>
                  <li>• 현대HDS 외 5개사 MOU 체결</li>
                  <li>• Realwear 스마트글라스 공급사 등록</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2017~2018">
              <li class="HisLeft">
                <div>
                  <span>기업용 SW 시장 진출</span>
                  <p>(2년 연속 매출 2배 성장)</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/0ed0ed40-900d-44d7-b65b-d21b74dc51cd/image.png"
                    alt="연혁2017~2018"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>• VIRNECT Remote 출시(17’)</li>
                  <li>• VIRNECT View 출시(18’)</li>
                  <li>• 기업 부설 연구소 설립</li>
                  <li>• 엡손 스마트글라스 기술지원업체 선정</li>
                  <li>• KAIST ARRC 파트너십 체결</li>
                  <li>• 스마트공장추진단 협력사 등록</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2016">
              <li class="HisLeft">
                <div>
                  <span>주식회사 VIRNECT 설립</span>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/4ea0f11e-7bd7-43f3-b177-1342a88a13f8/image.png"
                    alt="연혁2016"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>• SEEREAL Viewer 출시</li>
                </ul>
              </li>
            </ul>  -->
          </span>
        </div>
      </section>
      <section class="customers">
        <div class="customersInner">
          <span class="customersTit">
            <h2>CUSTOMERS</h2>
            <p>버넥트는 항상 고객의 가치를 최우선으로 합니다.</p>
          </span>
          <span class="customersCont">
            <ul class="customerContTab">
              <li class="active">공공</li>
              <li>민간</li>
              <li>교육</li>
            </ul>
            <ul class="customerContCont">
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/1699289f-7c7e-411f-bc7d-587f891e3b34/image.png"
                  alt="한국전력공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/627b6ebc-8ac5-47a0-9004-a4572a7c42e5/image.png"
                  alt="전력연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0d4f8fcd-e45c-4e92-94e1-17cd1c7f94f6/image.png"
                  alt="국립문화재연구소"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9a6da9ad-ea39-47a2-8ed4-60377f58ebda/image.png"
                  alt="한국서부발전"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/c4cc7bc5-9080-4c15-96cb-e8549b19a2be/image.png"
                  alt="한국과학기술정보연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/17a784f3-1e9e-4443-a23f-43b38174f0b5/image.png"
                  alt="한국전자기술연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/4e92b83c-a19a-4b40-a1e6-e33c56461494/image.png"
                  alt="조달청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/853b1ab4-6fcd-4cd1-9c34-f3c0c4c1387b/image.png"
                  alt="한전kdn"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/e14e7f4d-cc10-45d9-aeb9-4965daa4e0ae/image.png"
                  alt="한국가스공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/06e6fb89-98b7-49aa-90ad-55212ad796ea/image.png"
                  alt="해양경찰청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f79de897-3336-4c22-a2ed-751064103bba/image.png"
                  alt="한국원자력환경공단"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/d8dd0000-f094-4a24-9db6-7958acaf5da4/image.png"
                  alt="서울창조경제혁신센터"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9408bb9c-fe24-4ce7-97ed-d6d61efd0064/image.png"
                  alt="부산현대미술관"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/259b1c50-7ef2-46cc-ac88-49a00627f316/image.png"
                  alt="중소벤처기업진흥공단"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/b22c1179-b10f-4232-977d-3ad882ee6f6d/image.png"
                  alt="한국공항공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/b834cb61-3561-4143-9224-72a39b17d24d/image.png"
                  alt="한국원자력연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/22d3c3ab-e503-498c-bf78-3d622f7634f4/image.png"
                  alt="한국도로공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/8c536493-1115-47a8-9809-22fb019a081e/image.png"
                  alt="한국철도기술연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f89b3702-657e-4dce-b38e-bf866d3913a4/image.png"
                  alt="한국과학기술정보연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/ed8929f6-e816-4491-9f53-7d54863c6434/image.png"
                  alt="부산광역시교육청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9adc7aaf-7ae6-4762-aebb-0c395f9eb54e/image.png"
                  alt="경기도경제과학진흥원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/02cfb563-3bfd-4a4d-98a0-aef5ef09aca4/image.png"
                  alt="충북테크노파크"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0542ecfc-12b9-4273-82f9-10d58451ef89/image.png"
                  alt="울산정보산업진흥원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/addf17de-b76f-46bf-9d0d-cb225ecf783c/image.png"
                  alt="KEA"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/4d765d3f-28de-4517-8775-65f009b619d4/image.png"
                  alt="서울기술연구원"
                />
              </li>
            </ul>
          </span>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
import snbSection from "~/components/modules/Snb";
import headingModule from "../../modules/Heading";
import companyAwards from "~/components/main/companyAwards.vue";

export default {
  components: {
    subVisualSection,
    snbSection,
    headingModule,
    companyAwards
},
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/products.scss";
@import "~assets/css/modules/aboutVirnect.scss";
</style>
