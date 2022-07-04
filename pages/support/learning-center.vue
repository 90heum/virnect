<template>
<div>
     <!-- 헤더 -->
    <head-banner />
    <sub-menu :isActive="'learning-center'"/>

    <!-- 콘텍트 콘텐츠 -->
    <div class="LearningCenter">

    <list-tab-menu />

    <!-- 학습센터 고정 모듈 -->
    <static-module />

     <!-- 컨텐츠 -->
        <div class="tabCont">
              <!-- aside -->
              <aside-menu />

               <!-- 블로그 탭 리스트 -->
                <span class="LearningCenterList">
                    <user-manual />
                    <video-tutoral />
                    <video-real-guide />
                </span>
        </div>
    </div>

</div>  
</template>

<script>
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/learning-center/AsideMenu.vue";
import ListTabMenu from "~/components/support/learning-center/ListTabMenu.vue";
import StaticModule from "~/components/support/learning-center/StaticModule.vue";
import UserManual from "~/components/support/learning-center/userManual.vue";
import VideoTutoral from "~/components/support/learning-center/videoTutorial.vue";
import VideoRealGuide from "~/components/support/learning-center/videoRealGuide.vue";

export default {
    components: {
        HeadBanner,
        SubMenu,
        AsideMenu,
        ListTabMenu,
        StaticModule,
        UserManual,
        VideoTutoral,
        VideoRealGuide
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
</style>