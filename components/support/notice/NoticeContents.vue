<template>
  <span class="noticeList">
        <ul>
            <li>분류</li>
            <li>제목</li>
            <li>등록일</li>
        </ul>

        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        <ul>
            <li>안내</li>
            <li>
                <a href="#">VIRNECT View Hololens 1.1.0_2022.5.26 릴리즈 노트</a>
            </li>
            <li>2022-5-24</li>
        </ul>
        
        <!-- 페이지네이션 -->
        <common-paging :pagingData="pagingData"/>

    </span>  
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
    .noticeList{
        li, ul, a { text-decoration: none; list-style: none; }
        display: block;
        width: 100%;
        >ul{
            display: flex;
            gap: 10px;
            justify-content: space-between;
            border-bottom: solid 1px #c5c8cf;
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
                &:first-child{
                    flex: 1;
                    text-align: left;
                    padding-left: 30px;
                }
                &:nth-child(2){
                    flex: 6;
                    a{
                        &:hover{
                            color: #0a51b7;
                        }
                    }
                }
                &:last-child{
                    flex: 1;
                    text-align: right;
                    white-space: nowrap;
                    padding-right: 30px;
                }
            }
            &:first-child{
                border-top: solid 1px #616161;
                border-bottom: solid 1px #616161;
                >li{
                    padding: 23px 0;
                    font-size: 16px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.75;
                    letter-spacing: normal;
                    text-align: center;
                    color: #121212;
                    &:first-child{
                        text-align: left;
                        padding-left: 30px;
                    }
                    &:nth-child(2){
                        text-align: center;
                    }
                    &:last-child{
                        text-align: right;
                        padding-right: 30px;
                    }
                }
            }
            &:nth-last-child(2){
                margin-bottom: 50px;
            }
        }
    }
</style>>
