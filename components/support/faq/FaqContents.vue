<template>

<div>
    <span class="FAQList">
       <div class="FAQListInnerWrap"
            v-for="(data, idx) of contentList||[]"
            :key="idx"
            @click="chooseDetail(data.id)">
            <ul>
                <li><p>{{$i18n.localeProperties.code === "ko" ? data.typeName : data.typeNameEn}}</p></li>
                <li>
                    <p>{{$i18n.localeProperties.code === "ko" ? data.title : data.titleEn}}</p>
                </li>
                <li>
                    <i>
                        <img class="normal" src="https://velog.velcdn.com/images/kyj0206/post/c005c24b-ce96-4a0b-98eb-3f299de4bd5a/image.png" alt="문의기본">
                        <img class="hover" src="https://velog.velcdn.com/images/kyj0206/post/ea1ff28b-e1d6-4f0d-aafe-125a72606beb/image.png" alt="문의호버">
                    </i>
                </li>
            </ul>
            <div class="FAQInnerWrap"
                 v-if="isDetail === data.id">
                <span class="FaqInner"
                      v-html="$i18n.localeProperties.code === 'ko' ? responseData.contents : responseData.contentsEn">
                </span>
            </div>
        </div>

       <common-paging :pagingData="pagingData"
                      :movePage="movePage"/>
    </span>
    </div>
</template>

<script>
import CommonPaging from "~/components/paging/paging.vue";

export default {
    components: {
        CommonPaging
    },
    props: {
        contentList: Array,
        pagingData: Object,
        movePage: Function
    },
    data() {
        return {
            isDetail: null,
            responseData: {},
        }
    },
    methods: {
        chooseDetail(e) {
            this.isDetail = this.isDetail === e ? null : e;
            this.requestData(this.isDetail);
        },
        async requestData (e) {
            this.responseData = {};
            if (!this.isDetail) return;
            const {data} = await this.$axios.$get(`admin/support/faq/${e}`);
            this.responseData = data;
        }
    }
}
</script>

<style lang="scss" scoped>
    .FAQList{
    display: block;
    width: 100%;
    li, ul, a { list-style: none; text-decoration: none; }
    .FAQListInnerWrap{
        display: block;
        border-bottom: solid 1px #c5c8cf;
        &.active{
            ul{
                li{
                    &:nth-child(2){
                        p{
                            font-weight: bold;
                            color: #121212;
                            &:hover{
                                color: #0a51b7;
                            }
                        }
                    }
                    &:last-child{
                        i{
                            .normal{
                                display: none;
                            }
                            .hover{
                                display: block;
                            }
                        }
                    }
                }

            }
            .FAQInnerWrap{
                display: block;
                &::before{
                    display: block;
                }
            }
        }
        >ul{
            padding: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            li{
                padding: 31px 0;
                font-size: 16px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: normal;
                color: #616161;
                a{
                    color: #616161;
                }
                span{
                    display: none;
                }

                &:first-child{
                    flex: 1;
                    text-align: left;
                    padding: 30px;
                    p{
                        border-radius: 12px;
                        border: solid 1px #3f97d3;
                        background-color: #fff;
                        padding: 6px 12px 7px;
                        width: 100%;
                        max-height: 24px;
                        height: 100%;
                        font-size: 12px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1;
                        letter-spacing: normal;
                        text-align: center;
                        color: #3f97d3;

                    }
                }
                &:nth-child(2){
                    flex: 20;
                    p{
                        text-align: left;
                        cursor: pointer;
                        &:hover{
                            color: #0a51b7;
                        }
                    }
                }
                &:last-child{
                    flex: 1;
                    padding: 30px;
                    i{
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        img{
                            max-width: 19px;
                            &.normal{
                                display: block;
                            }
                            &.hover{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .FAQInnerWrap{
            &::before{
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background-image: linear-gradient(to 
                right, #aaa 33%, rgba(255,255,255,0) 0%);
                background-position: bottom;
                background-size: 8px 2px;
                background-repeat: repeat-x;
            }
            .FaqInner{
                display: block;
                padding: 50px 24px;
                h1{
                    font-size: 32px;
                    font-weight: bold;
                    line-height: 1.44;
                    color: #121212;
                    margin-bottom: 37px;
                }
                h2{
                    font-size: 26px;
                    font-weight: bold;   
                    line-height: 1.46; 
                    color: #121212;
                    margin-bottom: 31px;
                }
                h3{
                    font-size: 22px;
                    font-weight: 500;
                    line-height: 1.45;
                    color: #121212;
                    margin-bottom: 29px;
                }
                h4{
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 1.56;
                    color: #121212;
                    margin-bottom: 15px;
                }
                p{
                    font-size: 16px;
                    line-height: 1.75;
                    color: #121212;
                }
            }
        }
        &:nth-last-child(2){
            margin-bottom: 50px;
        }
    }
}
</style>