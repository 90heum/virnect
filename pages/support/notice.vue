<template>
<div>
<!-- 헤더 -->
    <head-banner />

    <!-- 콘텍트 콘텐츠 -->
    <div class="contactTab">
        <sub-menu :isActive="'notice'"/>

            <div data-content="1" class="contactTabActive1">
                <div class="noticeWrap">
                    <!-- aside -->
                   <aside-menu />

                    <!-- 블로그 리스트 -->
                  <notice-contents />
                </div>
            </div>
    </div>
</div> 
</template>

<script>
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/notice/AsideMenu.vue";
import NoticeContents from "~/components/support/notice/NoticeContents.vue";

export default {
    components: {
        HeadBanner,
        SubMenu,
        AsideMenu,
        NoticeContents
    },
    data() {
        return {

        }
    },
    methods: {

    },
    async asyncData ({$axios}) {
        
    },

}
</script>

<style lang="scss" scoped>
 .noticeWrap{
    display: flex;
    gap: 20px;
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    padding: 150px 30px;
 }
</style>