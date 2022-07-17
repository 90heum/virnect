<template>
 <!-- 페이지네이션 -->
    <div class="pageNation">
        <span class="pageNationWrap">
            <!-- pre -->
            <span>
                <!-- 제일 처음 -->
                <p @click="movePage(1)">  
                    <!-- 기본 -->
                    <img class="Normal" src="https://velog.velcdn.com/images/kyj0206/post/f0d76ded-a6ba-4133-8cfe-69acd5426cc8/image.png"
                        alt="preFirst">
                    <!-- 호버 -->
                    <img class="Hover" src="https://velog.velcdn.com/images/kyj0206/post/0536892f-39c4-4587-99e1-ae4984d419a6/image.png" alt="preFirstHover">
                </p>
                <!-- 바로 이전 -->
                <p @click="movePage(pagingData.currentPage <= 1 ? 1 : (pagingData.currentPage - 1))">
                    <!-- 기본 -->
                    <img class="Normal" src="https://velog.velcdn.com/images/kyj0206/post/3c675953-cc21-4d10-9392-f04cd794d895/image.png"
                        alt="pre">
                    <!-- 호버 -->
                    <img class="Hover" src="https://velog.velcdn.com/images/kyj0206/post/9608d8ab-f60b-4778-bdd8-6a99b53d7199/image.png" alt="preHover">
                </p>
            </span>
            <!-- 페이징 넘버 -->
            <span>
                <ul class="pagingNum">
                    <li v-for="(data, idx) in pagingData.endPage"
                        :key="idx"
                        :class="`${pagingData.currentPage === (pagingData.startPage + idx) ? 'pasingAct' : ''}`"
                        @click="movePage(pagingData.startPage+idx)">{{(pagingData.startPage + idx)}}</li>
                </ul>
            </span>
            <!--  next -->
            <span>
                <!-- 바로 다음 -->
                <p @click="movePage(pagingData.currentPage >= pagingData.totalPage ? pagingData.totalPage : (pagingData.currentPage + 1))">
                    <!-- 기본 -->
                    <img class="Normal" src="https://velog.velcdn.com/images/kyj0206/post/0d43d965-df34-410a-b559-c7adf2ddd7f7/image.png"
                        alt="next">
                    <!-- 호버 -->
                    <img class="Hover" src="https://velog.velcdn.com/images/kyj0206/post/9dd6c55e-325a-4c58-96e8-8021f7de6359/image.png" alt="nextHover">
                </p>
                <!-- 제일 마지막 -->
                <p @click="movePage(pagingData.totalPage)">
                    <!-- 기본 -->
                    <img class="Normal" src="https://velog.velcdn.com/images/kyj0206/post/5f43827b-683e-42c1-a5e6-9f3385241036/image.png"
                        alt="nextLast">
                    <!-- 호버 -->
                    <img class="Hover" src="https://velog.velcdn.com/images/kyj0206/post/651466e9-7821-4154-9f25-de946f7c291c/image.png" alt="nextLastHover">
                </p>
            </span>
        </span>
    </div>  
</template>

<script>
export default {
    props: {
        pagingData: Object,
        movePage: Function
    }
}
</script>

<style lang="scss" scoped>
 .pageNation{
     li, ul, a { text-decoration: none; list-style: none; }
     .pagingNum { padding-left: 0px; }
        display: flex;
        justify-content: center;
        .pageNationWrap{
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 50px;
            span{
                p{
                    .Normal{
                        display: block;
                    }
                    .Hover{
                        display: none;
                    }
                }
                &:first-child{
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    p{
                        cursor: pointer;
                        max-width: 30px;
                        max-height: 30px;
                        padding: 5px;
                        border: solid 1px #c5c8cf;
                        background-color: #fff;
                        &:hover{
                            .Normal{
                                display: none;
                            }
                            .Hover{
                                display: block;
                            }
                        }
                        img{
                            max-width: 19px;
                        }
                    }
                }
                &:nth-child(2){
                    width: 100%;
                    // 조성우 수정
                    max-width: 260px;
                    margin: 0 23.5px;
                    ul{
                        display: flex;
                        align-items: center;
                        height: 100%;
                        width: 100%;
                        li{
                            cursor: pointer;
                            padding-top: 5px;
                            flex: 1;
                            width: 100%;
                            height: 100%;
                            line-height: 24px;
                            text-align: center;
                            font-size: 16px;
                            font-weight: 500;
                            font-stretch: normal;
                            font-style: normal;
                            letter-spacing: normal;
                            color: #c5c8cf;
                            &:hover{
                                color: #121212;
                            }
                            &.pasingAct{
                                color: #0a51b7;
                            }
                        }
                    }
                }
                &:last-child{
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    p{
                        cursor: pointer;
                        padding: 5px;
                        max-width: 30px;
                        max-height: 30px;
                        border: solid 1px #c5c8cf;
                        background-color: #fff;
                        &:hover{
                            .Normal{
                                display: none;
                            }
                            .Hover{
                                display: block;
                            }
                        }
                        img{
                            max-width: 19px;
                        }
                    }
                }
            }
        }
    }
</style>