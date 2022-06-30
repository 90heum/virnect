<template>
<div>
    <!-- 헤더 -->
    <head-banner />

    <!-- 콘텍트 콘텐츠 -->
    <div class="contactTab">
        <sub-menu :isActive="'faq'"/>

         <!-- FAQ -->
        <div data-content="2">
            <div class="FAQWrap">
            <!-- 리스트 탭 -->
            <div class="FAQTab">
                <span v-for="(data, idx) of typeList" 
                      :class="`${isType === (data.id) ? 'active' : ''}`"
                      :key="idx"
                      @click="chooseType(data.id)">{{data.name}}</span>
            </div>

            <div class="tabCont">
                <aside-menu />
                <faq-contents />
            </div>
            </div>    
        </div>
    </div>
</div>
</template>

<script>
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/faq/AsideMenu.vue";
import FaqContents from "~/components/support/faq/FaqContents.vue";

export default {
    data() {
        return {
            isType: 3,
            isCategory: 0,
            typeList: [
      {
        "id": 1,
        "name": "회원",
        "nameEn": "customer",
        "createdDate": "2020-07-21T15:00:00",
        "updatedDate": "2020-07-21T15:00:00"
      },
      {
        "id": 2,
        "name": "서비스",
        "nameEn": "service",
        "createdDate": "2020-07-21T15:00:00",
        "updatedDate": "2020-07-21T15:00:00"
      },
      {
        "id": 3,
        "name": "제품",
        "nameEn": "product",
        "createdDate": "2020-07-21T15:00:00",
        "updatedDate": "2020-07-21T15:00:00"
      },
      {
        "id": 4,
        "name": "결제",
        "nameEn": "payment",
        "createdDate": "2020-07-21T15:00:00",
        "updatedDate": "2020-07-21T15:00:00"
      },
      {
        "id": 5,
        "name": "기타",
        "nameEn": "etc",
        "createdDate": "2020-07-21T15:00:00",
        "updatedDate": "2020-07-21T15:00:00"
      },
      {
        "id": 6,
        "name": "기기",
        "nameEn": "device",
        "createdDate": "2021-09-07T07:44:12",
        "updatedDate": "2021-09-07T07:44:12"
      },
      {
        "id": 7,
        "name": "experience_center",
        "nameEn": "experience_center",
        "createdDate": "2021-09-07T07:44:12",
        "updatedDate": "2021-09-07T07:44:12"
      },
      {
        "id": 13,
        "name": "category name update",
        "nameEn": "category update description",
        "createdDate": "2022-06-30T12:17:22.587013",
        "updatedDate": "2022-06-30T12:21:54.782236"
      }
    ]
        }
    },
    components: {
        SubMenu,
        AsideMenu,
        FaqContents,
        HeadBanner
    },
    async asyncData({$axios}) {
        await $axios.get("http://13.209.200.75:8080/admin/support/faq/category")
                    .then(res => console.log(res.data))
                    .catch(e => console.error(e));
    },
    methods: {
        chooseType (e) {
            this.isType = e;
        }
    }
    
}
</script>

<style lang="scss" scoped>
.tabCont{
        display: flex;
        gap: 20px;
        .FAQAside{
            display: flex;
            gap: 30px;
            flex-direction: column;
            max-width: 180px;
            width: 100%;
            span{
                
                display: flex;
                align-items: center;
                gap: 10px;
                &:hover{
                    p{
                        text-decoration: underline;
                        text-underline-position: under;
                        color: #0a51b7;
                    }
                }
                p{
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.25px;
                    color: #121212;
                }
                i{
                    cursor: pointer;
                    display: flex;
                    padding-bottom: 5px;
                    img{
                        max-width: 19px;
                        width: 100%;
                    }
                }
            }
        }
    }
.FAQTab{
    display: flex;
    margin-bottom: 50px;
    span{
        cursor: pointer;
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #616161;
        padding: 14px 5px 12px;
        border: solid 1px #c5c8cf;
        &.active,
        &:hover{
            border: solid 1px #092e6e;
            background-color: #092e6e;
            color: #fff;
        }
    }
}
// 공통 서브메뉴 
section.contactTab {
    width: 100%;
    background-color: #fff;
}

// asideMenu 공통 css
.FAQWrap{            
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    padding: 150px 30px;
}
@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 768px) {
    .contactBanner .ContactBannerInner span p{
        display: inline;
    }
}

@media screen and (max-width: 425px) {

}

</style>