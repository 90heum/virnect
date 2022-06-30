<template>

<div>
    <span class="FAQList">
       <div class="FAQListInnerWrap active">
            <ul>
                <li><p>Twin</p></li>
                <li>
                    <p>Remote의 음성인식은 어떻게 on/off 하나요?</p>
                </li>
                <li>
                    <i>
                        <img class="normal" src="https://velog.velcdn.com/images/kyj0206/post/c005c24b-ce96-4a0b-98eb-3f299de4bd5a/image.png" alt="문의기본">
                        <img class="hover" src="https://velog.velcdn.com/images/kyj0206/post/ea1ff28b-e1d6-4f0d-aafe-125a72606beb/image.png" alt="문의호버">
                    </i>
                </li>
            </ul>
            <div class="FAQInnerWrap">
                <span class="FaqInner">
                    <h1>
                        H1 스타일 제목글<br>
                        H1 스타일 제목글
                    </h1>
                    <h2>
                        H2 스타일 제목글<br>
                        H2 스타일 제목글
                    </h2>
                    <h3>
                        H3 스타일 제목글<br>
                        H3 스타일 제목글
                    </h3>
                    <h4>
                        H4 스타일 제목글<br>
                        H4 스타일 제목글
                    </h4>
                    <p>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다.<br>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다.<br>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다.<br> 
                        <br>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다.<br> 
                        본문 글 스타일 입니다. 본문 글 스타일 입니다.<br>
                    </p>
                </span>
            </div>
        </div>
        <div class="FAQListInnerWrap">
            <ul>
                <li><p>Twin</p></li>
                <li>
                    <p>Remote의 음성인식은 어떻게 on/off 하나요?</p>
                </li>
                <li>
                    <i>
                        <img class="normal" src="https://velog.velcdn.com/images/kyj0206/post/c005c24b-ce96-4a0b-98eb-3f299de4bd5a/image.png" alt="문의기본">
                        <img class="hover" src="https://velog.velcdn.com/images/kyj0206/post/ea1ff28b-e1d6-4f0d-aafe-125a72606beb/image.png" alt="문의호버">
                    </i>
                </li>
            </ul>
            <div class="FAQInnerWrap">
                <span class="FaqInner">
                    <h1>
                        H1 스타일 제목글<br>
                        H1 스타일 제목글
                    </h1>
                    <h2>
                        H2 스타일 제목글<br>
                        H2 스타일 제목글
                    </h2>
                    <h3>
                        H3 스타일 제목글<br>
                        H3 스타일 제목글
                    </h3>
                    <h4>
                        H4 스타일 제목글<br>
                        H4 스타일 제목글
                    </h4>
                    <p>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다.<br>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다. 본문 글 스타일 입니다.<br>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다.<br> 
                        <br>
                        본문 글 스타일 입니다. 본문 글 스타일 입니다.<br> 
                        본문 글 스타일 입니다. 본문 글 스타일 입니다.<br>
                    </p>
                </span>
            </div>
        </div>

       <common-paging />
    </span>
    </div>
</template>

<script>
import CommonPaging from "~/components/paging/paging.vue";

export default {
    components: {
        CommonPaging
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
                        max-width: 67px;
                        padding: 6px 20px 7px;
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
            display: none;
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