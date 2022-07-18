<template>
  <span class="noticeList">
    <ul>
      <li>분류</li>
      <li>제목</li>
      <li>등록일</li>
    </ul>

    <ul v-for="(data, idx) of contentData || []" :key="idx">
      <li>
        {{
          $i18n.localeProperties.code === "ko" ? data.typeName : data.typeNameEn
        }}
      </li>
      <li>
        <nuxt-link
          :to="`notice-detail?id=${data.id}&type=${
            isType === null ? '' : isType
          }`"
          >{{
            $i18n.localeProperties.code === "ko" ? data.title : data.titleEng
          }}</nuxt-link
        >
      </li>
      <li>{{ $dayjs(data.createdDate).format("YYYY-MM-DD") }}</li>
    </ul>

    <!-- 페이지네이션 -->
    <common-paging :pagingData="pagingData" :movePage="movePage" />
  </span>
</template>

<script>
import CommonPaging from "~/components/paging/paging.vue";

export default {
  components: {
    CommonPaging,
  },
  props: {
    pagingData: Object,
    contentData: Array,
    movePage: Function,
    isType: [Number, Boolean],
  },
};
</script>

<style lang="scss" scoped>
.noticeList {
  li,
  ul,
  a {
    text-decoration: none;
    list-style: none;
  }
  display: block;
  width: 100%;
  > ul {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    border-bottom: solid 1px #c5c8cf;
    padding-left: 0px;
    li {
      padding: 31px 0;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.75;
      letter-spacing: normal;
      color: #616161;
      a {
        color: #616161;
      }
      &:first-child {
        flex: 1;
        text-align: left;
        padding-left: 30px;
        font-weight: 500;
        color: #616161;
      }
      &:nth-child(2) {
        flex: 6;
        font-size: 18px;
        a {
          &:hover {
            color: #0a51b7;
          }
        }
      }
      &:last-child {
        flex: 1;
        text-align: right;
        white-space: nowrap;
        padding-right: 30px;
        font-weight: 500;
        color: #616161;
      }
    }
    &:first-child {
      border-top: solid 1px #616161;
      border-bottom: solid 1px #616161;
      > li {
        padding: 23px 0;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        text-align: center;
        color: #121212;
        &:first-child {
          text-align: left;
          padding-left: 30px;
        }
        &:nth-child(2) {
          text-align: center;
        }
        &:last-child {
          text-align: right;
          padding-right: 30px;
        }
      }
    }
    &:nth-last-child(2) {
      margin-bottom: 50px;
    }
  }
}

@media screen and (max-width: 1280px) {
     .contContMenu > span:first-child h2{
        font-size: 26px;
        margin-bottom: 16px;
    }

     .contContMenu > span:first-child > p{
        font-size: 15px;
    }

     .contContMenu > span:first-child .formWrap{
        min-height: 1610px;
    }
}

@media screen and (max-width: 1024px) {
     span.contactContTab,
     .FAQWrap{
        padding: 100px 24px 0;
    }

     .noticeWrap{
        gap: 40px;
    }

     .contContMenu > span:last-child span:last-child div.mapList > ul{
        flex-direction: column;
    }

     .noticeWrap{
        flex-direction: column;
        padding: 100px 24px;
    }

    // 노티스
    .noticeAside{
        display: none;
    }
    .noticeMbAside{
        display: block;
    }

    .LearningCenterList .userBox .userBoxCont > div,
    .LearningCenterList .tutorialBox .tutorialBoxCont > div,
    .LearningCenterList .guideBox .guideBoxCont > div{
        max-width: none;
        width: calc((100% - 15px) / 2);
    }

    .LearningCenterList .userBox .userBoxCont > div:nth-child(6),
    .LearningCenterList .userBox .userBoxCont > div:nth-child(4),
    .LearningCenterList .userBox .userBoxCont > div:nth-child(2),
    .LearningCenterList .guideBox .guideBoxCont > div:nth-child(2),
    .LearningCenterList .tutorialBox .tutorialBoxCont > div:nth-child(2){
        margin-right: 0;
    }

    .LearningCenterList .userBox .userBoxCont > div:nth-child(3),
    .LearningCenterList .tutorialBox .tutorialBoxCont > div:nth-child(3),
    .LearningCenterList .guideBox .guideBoxCont > div:nth-child(3){
        margin-right: 15px;
    }
    
     .LearningCenter{
        padding: 100px 24px;
    }
}

@media screen and (max-width: 850px) {
     .contContMenu > span:first-child .formWrap{
        min-height: 1650px;
    }
}

@media screen and (max-width: 768px) {
     .LearningCenter .LearningCenterTab,
     .FAQWrap .FAQTab{
        display: none;
    }

     .LearningCenter .LearningCenterMbTab,
     .FAQWrap .FAQMbTab{
        display: block;
    }

     .FAQWrap{
        padding: 100px 24px;
    }

     .LearningCenter,
     span.contactContTab{
        padding: 100px 24px 0;
    }

     .LearningCenter .tabCont,
     .FAQWrap .tabCont{
        flex-direction: column;
        gap: 40px;
    }

    // FAQ
    .LearningCenterAside,
    .FAQAside{
        display: none;
    }

    .LearningCenterMbAside,
    .FAQMbAside{
        display: block;
    }  

     .LearningCenter .LearningCenterMbTab .LearningCenterMbTab-wrapper .LearningCenterMbTab-slide{
        padding: 10px;
    }

    .LearningCenterList .userBox .userBoxTit p:last-child,
    .LearningCenterList .tutorialBox .tutorialBoxTit p:last-child,
    .LearningCenterList .guideBox .guideBoxTit p:last-child{
        display: none;
    }

    .LearningCenterList .guideBox .guideBoxTit,
    .LearningCenterList .tutorialBox .tutorialBoxTit,
    .LearningCenterList .userBox .userBoxTit{
        justify-content: center;
    }

    .LearningCenterList .tutorialBox .tutorialBoxTit p:first-child,
    .LearningCenterList .guideBox .guideBoxTit p:first-child{
        margin-top: 50px;
    }

    .LearningCenterList .guideBox .mobileMore,
    .LearningCenterList .tutorialBox .mobileMore,
    .LearningCenterList .userBox .mobileMore{
        display: block;
    }

     .LearningCenter .centerModule{
        margin-bottom: 12px;
    }

    .LearningCenterList .guideBox .guideBoxCont,
    .LearningCenterList .tutorialBox .tutorialBoxCont,
    .LearningCenterList .userBox .userBoxCont{
        margin-bottom: 0;
    }
}

@media screen and (max-width: 650px) {
    .LearningCenterList .userBox .userBoxCont > a span.listInfo span:nth-child(2){
        margin-bottom: 10px;
    }
    
    .noticeList > ul:first-child{
        display: none;
    }

    .FAQList .FAQListInnerWrap > ul ul,
    .FAQList .FAQListInnerWrap > ul > li:first-child{
        width: 100%;
    }

    .noticeList > ul:nth-child(2){
        border-top: 1px solid #616161;
    }

    .noticeList > ul li:last-child{
        display: none;
    }

    .FAQList .FAQListInnerWrap > ul,
    .noticeList > ul{
        gap: 5px;
    }

    .FAQList .FAQListInnerWrap > ul li:first-child,
    .noticeList > ul li:first-child{
        padding: 25px 0 0 0;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #616161;
    }

    .FAQList .FAQListInnerWrap > ul ul li:first-child,
    .FAQList .FAQListInnerWrap > ul ul li:last-child,
    .FAQList .FAQListInnerWrap > ul li:nth-child(2),
    .noticeList > ul li:nth-child(2){
        padding: 0 0 25px 0;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
        color: #616161;
    }

    .FAQList .FAQListInnerWrap > ul ul li:first-child p,
    .FAQList .FAQListInnerWrap > ul ul li:last-child{
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
        color: #616161;
    }

    .FAQList .FAQListInnerWrap > ul,
    .noticeList > ul{
        flex-direction: column;
    }

     .LearningCenter .centerModule{
        flex-direction: column;
        text-align: center;
        gap: 30px;
        padding: 40px;
    }

     .LearningCenter .centerModule .centerModuleMore{
        justify-content: center;
    }

     .LearningCenter .centerModule .centerModuleMore,
     .LearningCenter .centerModule .centerModuleTit{
        width: 100%;
    }

     .LearningCenter .centerModule .centerModuleMore span:last-child p,
     .LearningCenter .centerModule .centerModuleMore span:first-child p{
        white-space: nowrap;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.18px;
        color: #092e6e;
    }

     .LearningCenter .centerModule .centerModuleTit h2{
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: -0.23px;
        text-align: center;
        color: #092e6e;
    }

    .LearningCenterList .userBox .userBoxCont > div, .LearningCenterList .tutorialBox .tutorialBoxCont > div, .LearningCenterList .guideBox .guideBoxCont > div{
        width: 100%;
        margin-right: 0!important;
    }

    .LearningCenterList .userBox .userBoxCont > a,
    .LearningCenterList .tutorialBox .tutorialBoxCont > a,
    .LearningCenterList .guideBox .guideBoxCont > a{
        max-height: none;
    }
}

@media screen and (max-width: 500px) {
     .contContMenu > span:first-child .formWrap{
        min-height: 1725px;
    } 

     .contContMenu > span.contactTabActive3 .formTab ul{
        flex-wrap: wrap;
    }
     .contContMenu > span.contactTabActive3 .formTab ul li{
        width: 50%;
        border: 1px solid #ccc;
        padding: 15px 10px;
    }

     .contContMenu > span.contactTabActive3 .formTab ul li.active,  .contContMenu > span.contactTabActive3 .formTab ul li:hover{
        background-color: #092e6e;
        border: 1px solid #092e6e;
        color: #fff;
    }
}

@media screen and (max-width: 425px) {
    .LearningCenterMbAside,
    .LearningCenterMbAside ul,
    .FAQMbAside,
    .FAQMbAside ul,
    .noticeMbAside,
    .noticeMbAside ul{
        max-width: none;
    }

    .LearningCenterMbAside,
    .FAQMbAside,
    .noticeMbAside{
        position: relative;
    }

    .LearningCenterMbAside ul,
    .FAQMbAside ul,
    .noticeMbAside ul{
        box-sizing: content-box;
    }
}

@media screen and (max-width: 350px) {
     .contContMenu > span:first-child .formWrap{
        min-height: 1750px;
    } 
}
</style>>
