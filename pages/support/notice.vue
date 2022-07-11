<template>
  <div>
    <!-- 헤더 -->
    <head-banner />

    <!-- 콘텍트 콘텐츠 -->
    <div class="contactTab">
      <sub-menu :isActive="'notice'" />

      <div data-content="1" class="contactTabActive1">
        <div class="noticeWrap">
          <!-- aside -->
          <aside-menu
            :asideData="asideData"
            :chooseType="chooseType"
            :isType="isType"
          />

          <!-- 블로그 리스트 -->
          <notice-contents
            :pagingData="pagingData"
            :contentData="contentData"
            :movePage="movePage"
            :isType="isType"
          />
        </div>
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
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/notice/AsideMenu.vue";
import NoticeContents from "~/components/support/notice/NoticeContents.vue";
import SupportTail from "~/layouts/common/Tail.vue";

export default {
  watch: {
    $route(to, from) {
      this.chooseType(Number(this.$route.query.type) || null);
    },
    components: {
        HeadBanner,
        SubMenu,
        AsideMenu,
        NoticeContents,
        SupportTail
    },
    data() {
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
            pagingData: {
                currentPage: 1,
                currentSize: 20,
                totalPage: 1,
                totalElements: 1,
                startPage: 1,
                endPage: 1
            },
            asideData: [],
            contentData: [],
            isType: Number(this.$route.query.type) || null
        }
    },
  },
  async asyncData({ $axios, route }) {
    const routeType = route.query.type ? route.query.type : null;
    try {
      const data = Promise.all([
        $axios.get("admin/support/notice/type"),
        $axios.get(
          `admin/support/notice?page=1&size=${20}${
            routeType ? "&type=" + routeType : ""
          }`
        ),
      ]);
      const dataJson = await data;
      return {
        asideData: dataJson[0].data.data.noticeType,
        contentData: dataJson[1].data.data.supportNoticeResponseList,
        pagingData: dataJson[1].data.data.pageMetadataResponse,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.noticeWrap {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  max-width: 1260px;
  width: 100%;
  padding: 150px 30px;
}
@media screen and (max-width: 1024px) {
  .noticeWrap {
    flex-direction: column;
    padding: 100px 24px;
  }
}
</style>