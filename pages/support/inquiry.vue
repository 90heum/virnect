<template>
  <div>
      <!-- 헤더 -->
      <head-banner />

    <!-- 콘텍트 콘텐츠 -->
    <section class="contactTab">
        <sub-menu :isActive="'inquiry'"/>

    <div data-content="4">
        <span class="contactContTab">
            <ul class="contactContTabInner">
                <li :class="`${chosenMenu ? 'contactTabActive2' : ''}`" 
                    tap="1"
                    @click="chooseMenu(true)">문의하기</li>
                <li :class="`${!chosenMenu ? 'contactTabActive2' : ''}`" 
                    tap="2"
                    @click="chooseMenu(false)">찾아오는 길</li>
            </ul>


            <span class="contContMenu">
                <span :class="`${chosenMenu ? 'contactTabActive3' : ''}`" tap-content="1">
                    <h2>무엇을 도와드릴까요?</h2>
                    <p>아래 문의 유형을 선택하시고, 내용을 작성해주시면 신속하게 답변 드리겠습니다.</p>
                    <div class="formWrap">
                        <!-- //NOTE - 폼삽입 구역 -->
                        <!-- <form>
                            <span>
                                <label required>문의 유형</label>
                                <p>
                                    <input type="checkbox" name="part" value="Inquiry"> 제품 문의
                                    <input type="checkbox" name="part" value="experience"> 체험관 방문
                                    <input type="checkbox" name="part" value="seminar_application"> 찾아오는 세미나 신청
                                    <input type="checkbox" name="part" value="experience_application"> 체험 사용 신청
                                    <input type="checkbox" name="part" value="education_inquiry"> 교육 문의
                                    <input type="checkbox" name="part" value="recruitment_inquiry"> 채용 문의
                                    <input type="checkbox" name="part" value="affiliate"> 마케팅/제휴
                                    <input type="checkbox" name="part" value="etc"> 기타
                                </p>
                                
                            </span>
                            <span>
                                <label required>고객 정보</label>
                                <p>
                                    <input type="text" name="gender" placeholder="고객명"> 
                                    <input type="text" name="gender" placeholder="기업/기관"> 
                                    <input type="text" name="gender" placeholder="부서"> 
                                    <input type="text" name="gender" placeholder="직책"> 
                                    <input type="text" name="gender" placeholder="이메일"> 
                                    <input type="text" name="gender" placeholder="전화번호"> 
                                </p>
                            </span>
                            <span>
                                <label required>산업군</label>
                                <p>
                                    <select name="industry">
                                        <option label="산업군을 선택해주세요.">
                                        <option label="산업군을 선택해주세요.">
                                    </select>
                                </p>
                            </span>
                            <span>
                                <label required>현재 직면한 문제는 무엇입니까?</label>
                                <p>
                                    <select name="Problem">
                                        <option label="답변을 선택해주세요.">
                                        <option label="답변을 선택해주세요.">
                                    </select>
                                </p>
                            </span>
                            <span>
                                <label required>어떠한 업무를 개선하고 싶으신가요?</label>
                                <p>
                                    <select name="Improving">
                                        <option label="답변을 선택해주세요.">
                                        <option label="답변을 선택해주세요.">
                                    </select>
                                </p>
                            </span>
                            <span>
                                <label required>AR에 대한 사용 경험이 있으신가요?</label>
                                <p>
                                    <select name="AR_experience">
                                        <option label="답변을 선택해주세요.">
                                        <option label="답변을 선택해주세요.">
                                    </select>
                                </p>
                            </span>
                        </form> -->
                    </div>
                    <div class="inquiryButton">
                        <button>
                            <a href="#">
                                문의하기
                            </a>
                        </button>
                    </div>
                </span>


                <span :class="`${!chosenMenu ? 'contactTabActive3' : ''}`" 
                      tap-content="2">
                    <google-map />

                <!-- 하단 이미지 지도 및 사업지원 -->
                <span>
                    <h2>글로벌 버넥트</h2>
                    <img src="https://velog.velcdn.com/images/kyj0206/post/9b4e3616-1268-4aef-999e-ea07046a9174/image.png"
                        alt="글로벌 지도 이미지">
                    <div class="mapList">
                        <ul>
                            <li>
                                <p>KOREA</p>
                                <ul>
                                    <li>
                                        <p>본사</p>
                                        <p>서울시 용산구 한강대로 7길 10-15</p>
                                    </li>
                                    <li>
                                        <p>연구/개발 센터</p>
                                        <p>서울시 용산구 서빙고로 17, 센트럴파워타워 3층</p>
                                    </li>
                                    <li>
                                        <p>사업/프로젝트 센터</p>
                                        <p>서울시 용산구 한강대로 31, KY빌딩 1층</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>AUSTRIA</p>
                                <ul>
                                    <li>
                                        <p>유럽 법인</p>
                                        <p>Hoher Markt4, Stiege2, Top D1, 1010 Wien, Austria</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>U.S.</p>
                                <ul>
                                    <li>
                                        <p>미국 지사</p>
                                        <p>3003 N First St #221, San Jose CA95134, United States</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="mapInfo">
                        <span>
                            <span>사업 지원</span>
                            <p>이메일 : contact@virnect.com</p>
                            <p>연락처 : 02-749-1004</p>
                        </span>
                    </div>
                    
                </span>
                </span>
            </span>
        </span>
    </div>
    </section>
  </div>
</template>

<script>
import SubMenu from "~/components/support/SubMenu.vue";
import HeadBanner from '~/components/support/headBanner.vue';
import GoogleMap from "~/components/support/faq/GoogleMap.vue";

export default {
    components: {
        SubMenu,
        HeadBanner,
        GoogleMap
    },
    data() {
        return {
            chosenMenu: true
        }
    },
    methods: {
        chooseMenu (e) {
            this.chosenMenu = e;
        }
    }
}
</script>

<style lang="scss" scoped>

// 공통 서브메뉴 
.contactTab {
    width: 100%;
    background-color: #fff;
    li, ul, a { list-style: none; text-decoration: none; }
    ul { padding-left: 0px; }
}

    // 문의하기
    span{
        &.contactContTab{
            display: block;
            margin: 0 auto;
            max-width: 1260px;
            width: 100%;
            padding: 150px 30px;
            >ul{
                    display: flex;
                    margin-bottom: 110px;
                    li{
                        padding: 13px 0;
                        cursor: pointer;
                        border: solid 1px #c5c8cf;
                        width: 50%;
                        font-size: 14px;
                        font-weight: bold;
                        line-height: 1;
                        letter-spacing: normal;
                        text-align: center;
                        color: #616161;
                        &.contactTabActive2{
                            color: #fff;
                            border: solid 1px #092e6e;
                            background-color: #092e6e;
                        }
                    }
            }
            .contContMenu{
                >span{
                    text-align: center;
                    display: none;
                    &.contactTabActive3{
                        display: block;
                    }
                    &:first-child{
                        h2{
                            font-size: 44px;
                            font-weight: bold;
                            line-height: 1.4;
                            letter-spacing: -0.55px;
                            text-align: center;
                            color: #121212;
                            margin-bottom: 49px;
                        }
                        >p{
                            font-size: 16px;
                            font-weight: 500;
                            line-height: 1.75;
                            letter-spacing: normal;
                            text-align: center;
                            color: #121212;
                            margin-bottom: 49px;
                        }
                        .formWrap{
                            display: block;
                            padding: 49px 0;
                            border-top: solid 2px #999;
                            border-bottom: solid 2px #999;
                            margin-bottom: 49px;
                            // NOTE - 폼태그 적용 부분
                            // form{
                            //     display: block;
                            //     padding: 24px;
                            //     span{
                            //         display: flex;
                            //         &:first-child{
                            //             justify-content: space-between;
                            //         }
                            //         &:nth-child(2){
                            //             justify-content: space-between;
                            //             label{
                                        
                            //             }
                            //             p{
                            //                 display: flex;
                            //                 flex-wrap: wrap;
                            //                 justify-content: flex-end;
                            //                 input{
                            //                     display: flex;
                            //                     border: 1px solid #121212;
                            //                     height: 35px;
                            //                 }
                            //             }
                            //         }
                            //         &:nth-child(3){}
                            //         &:nth-child(4){}
                            //         &:nth-child(5){}
                            //         &:last-child{}
                            //         label{
                            //             white-space: nowrap;
                            //             font-size: 16px;
                            //             font-weight: 500;
                            //             line-height: 1.75;
                            //             letter-spacing: normal;
                            //             text-align: center;
                            //             color: #121212;
                            //         }
                            //         p{
                            //             font-size: 16px;
                            //             font-weight: 500;
                            //             line-height: 1.75;
                            //             letter-spacing: normal;
                            //             text-align: center;
                            //             color: #121212;
                            //             input{
                            //                 font-size: 16px;
                            //                 color: #121212;
                            //             }
                            //         }
                            //         select{
                            //             font-size: 14px;
                            //             font-weight: 500;
                            //             line-height: 1.75;
                            //             letter-spacing: normal;
                            //             text-align: center;
                            //             color: #121212;
                            //         }
                            //     }
                            // } 
                        }
                        .inquiryButton{
                            button{
                                display: flex;
                                margin: 0 auto;
                                border: solid 1px #0a51b7;
                                background-color: #0a51b7;
                                a{
                                    height: 100%;
                                    padding: 20px 63px 19px;
                                    font-size: 18px;
                                    font-weight: bold;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: normal;
                                    letter-spacing: normal;
                                    text-align: center;
                                    color: #fff;
                                }
                            }
                        }
                    }
                    &:last-child{
                        span{
                            &:first-child{
                                text-align: left;
                                h2{
                                    font-size: 44px;
                                    font-weight: bold;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.4;
                                    letter-spacing: -0.55px;
                                    color: #121212;
                                    margin-bottom: 15px;
                                }
                                p{
                                    font-size: 16px;
                                    font-weight: 500;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.75;
                                    letter-spacing: normal;
                                    color: #121212;
                                    margin-bottom: 50px;
                                }
                                iframe{
                                    padding-bottom: 50px;
                                    display: block;
                                    border-bottom: solid 1px #616161!important;
                                }
                            }
                            &:last-child{
                                text-align: left;
                                h2{
                                    font-size: 44px;
                                    font-weight: bold;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.4;
                                    letter-spacing: -0.55px;
                                    color: #121212;
                                    margin-top: 69.5px;
                                    margin-bottom: 50px;
                                }
                                img{
                                    max-width: 1200px;
                                    width: 100%;
                                    margin-bottom: 50px;
                                }
                                div{
                                    &.mapList{
                                        margin-bottom: 50px;
                                        >ul{
                                            display: flex;
                                            gap: 52px;
                                            >li{
                                                padding: 48px 0;
                                                min-height: 346px;
                                                flex: 1;
                                                border-top: solid 1px #c5c8cf;
                                                border-bottom: solid 1px #c5c8cf;
                                                >p{
                                                    font-size: 20px;
                                                    font-weight: bold;
                                                    letter-spacing: -0.25px;
                                                    color: #0a51b7;
                                                    margin-bottom: 30px;
                                                }
                                                ul{
                                                    display: flex;
                                                    flex-direction: column;
                                                    gap: 15px;
                                                    li{
                                                        p{
                                                            &:first-child{
                                                                font-size: 16px;
                                                                font-weight: bold;
                                                                font-stretch: normal;
                                                                font-style: normal;
                                                                line-height: 1.75;
                                                                letter-spacing: normal;
                                                                color: #121212;
                                                                
                                                            }
                                                            &:last-child{
                                                                font-size: 16px;
                                                                font-weight: normal;
                                                                line-height: 1.75;
                                                                color: #616161;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    &.mapInfo{
                                        width: 100%;
                                        background: #e6e8eb;
                                        padding: 45px;
                                        text-align: center;
                                        span{
                                            span{
                                                display: block;
                                                font-size: 20px;
                                                font-weight: bold;
                                                font-stretch: normal;
                                                font-style: normal;
                                                line-height: normal;
                                                letter-spacing: -0.25px;
                                                text-align: center;
                                                color: #092e6e;
                                                margin-bottom: 15px;
                                            }
                                            p{
                                                margin: 0;
                                                font-size: 16px;
                                                font-weight: normal;
                                                font-stretch: normal;
                                                font-style: normal;
                                                line-height: 1.75;
                                                letter-spacing: normal;
                                                text-align: center;
                                                color: #121212;
                                            }
                                        }    
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>