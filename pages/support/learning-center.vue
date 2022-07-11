<template>
<div>
     <!-- 헤더 -->
    <learn-banner/>
    <sub-menu :isActive="'learning-center'"/>

    <!-- 콘텍트 콘텐츠 -->
    <div class="LearningCenter">

    <list-tab-menu :categoryList="categoryList"
                   :isTabMenu="isTabMenu"
                   :chooseTabMenu="chooseTabMenu"/>

    <!-- 학습센터 고정 모듈 -->
    <static-module />

     <!-- 컨텐츠 -->
        <div class="tabCont">
              <!-- aside -->
              <aside-menu :typeList="typeList"
                          :chooseTypeMenu="chooseTypeMenu"
                          :isTypeMenu="isTypeMenu"/>

               <!-- 블로그 탭 리스트 -->
                <span class="LearningCenterList">
                    <user-manual :contentList="contentList.manual||contentList.supportLearningResponseList"
                                 :isDetailList="isTypeMenu"
                                 :pagingData="pagingData"
                                 :movePage="movePage"
                                 :chooseTypeMenu="chooseTypeMenu"/>
                    <video-tutoral :contentList="contentList.tutorial||contentList.supportLearningResponseList"
                                   :isDetailList="isTypeMenu"
                                   :pagingData="pagingData"
                                   :movePage="movePage"
                                   :chooseTypeMenu="chooseTypeMenu"/>
                    <!-- <video-real-guide :contentList="contentList.guide||contentList.supportLearningResponseList"
                                      :isDetailList="isTypeMenu"
                                      :pagingData="pagingData"
                                      :movePage="movePage"
                                      :chooseTypeMenu="chooseTypeMenu"/> -->
                </span>

        </div>
    </div>
    <support-tail 
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
      />
</div>  
</template>

<script>
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/learning-center/AsideMenu.vue";
import ListTabMenu from "~/components/support/learning-center/ListTabMenu.vue";
import StaticModule from "~/components/support/learning-center/StaticModule.vue";
import UserManual from "~/components/support/learning-center/userManual.vue";
import VideoTutoral from "~/components/support/learning-center/videoTutorial.vue";
import VideoRealGuide from "~/components/support/learning-center/videoRealGuide.vue";
import LearnBanner from "../../components/support/learnBanner.vue";

import SupportTail from "~/layouts/common/Tail.vue";
export default {
watch: {
    '$route' (to, from) {
      console.log("asdasdasd")
    }
  },
    data () {
        return {
              visualText: {
        // 상단 비주얼 텍스트
        image:
          "https://image.virnect.com/images/pages/products/img-products-main.png",
        category: "Products",
      },
      tailText: {
        // 막줄 꼬리 텍스트
        bg: "assets/images/pages/products/img-products-banner.png",
        blue: "SOLUTIONS",
        blueRouter: "energy_resource",
        grey: "Contact",
        greyRouter: "inquiry",
      },
            isTabMenu: 1,
            isTypeMenu: null,
            pagingData: {
                currentPage: 1,
                currentSize: 20,
                totalPage: 1,
                totalElements: 1,
                startPage: 1,
                endPage: 1
            },
            contentList: [],
        }
    },
    methods: {
        movePage (currentPage, isPaging = false) {
            this.pagingData = {...this.pagingData, currentPage: isPaging ? currentPage : 1};
            this.requestData();
        },
        chooseTabMenu (e) {
            this.isTabMenu = e;
            this.requestData();
        },
        chooseTypeMenu (e) {
            this.isTypeMenu = e;
            this.requestData();
        },
        requestData () {
            this.$axios.get(`admin/support/learning?page=${this.pagingData.currentPage}&size=${this.pagingData.currentSize}&categoryId=${this.isTabMenu === 0 ? '' : this.isTabMenu}&typeId=${this.isTypeMenu === 5 ? 0 : this.isTypeMenu ? this.isTypeMenu : ''}`)
            .then(res => this.contentList = res.data.data)
            .catch(e => console.error(e))
        }
    },
    components: {
    SubMenu,
    AsideMenu,
    ListTabMenu,
    StaticModule,
    UserManual,
    VideoTutoral,
    VideoRealGuide,
    LearnBanner,
    SupportTail
},
    async asyncData ({$axios}) {
        try {
            const data = Promise.all([$axios.get("admin/support/learning/category"),
                                      $axios.get("admin/support/learning/type"),
                                      $axios.get(`admin/support/learning?categoryId=1&page=1&size=${20}`)]);
            const dataJson = await data;
            return {
                categoryList: dataJson[0].data.data.categoryList, 
                typeList: dataJson[1].data.data.typeList, 
                contentList: dataJson[2].data.data
            }
        } catch (e) {console.error(e)}
    }
}
</script>

<style lang="scss" scoped>

.LearningCenter{
    li, ul, a { list-style: none; text-decoration: none; }
                margin: 0 auto;
                max-width: 1260px;
                width: 100%;
                padding: 150px 30px;
                
    .tabCont{
                    display: flex;
                    gap: 20px;
    }
    .LearningCenterList{
                        display: block;
                        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .LearningCenter .tabCont { display: block; }
}

</style>