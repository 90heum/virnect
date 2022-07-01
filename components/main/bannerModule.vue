<template>
 <!-- Test용 메인배너 -->
    <div class="banner">
        <div class="bannerWrap">
    <!-- Test용 메인배너 -->       

        <!-- 실제 사용 할 모듈구역 시작 -->
        <div class="bannerMoule">
            <span class="banner1024">
                <a href="#">
                    <img src="https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png" alt="배너모듈">
                </a>
            </span>
            <span class="banner768">
                <a href="#">
                    <img src="https://velog.velcdn.com/images/kyj0206/post/43101697-a301-433b-867b-d64841ce7553/image.png" alt="배너모듈">
                </a>
            </span>
        </div>
        <!-- 실제 사용 할 모듈구역 끝 -->

        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
// .banner 는 사용 안함 테스트용 껍데기
.banner {
    width: 100%;
    /* background-color: #000; */

    .bannerWrap {
        position: relative;
        /* width: 100%;
        height: 300px;
        padding: 50px 30px; */

        // 실제사용 모듈용 css 구역!!!!!!!!!!!!!!
        .bannerMoule {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 35%);
            padding: 0 30px;

            .banner1024 {
                display: block;
                max-width: 1200px;
                width: 100%;
                margin: 0 auto;
                a {
                    display: block;

                    img {
                        width: 100%;
                    }
                }
            }

            .banner768 {
                display: none;

                a {
                    display: block;

                    img {
                        width: 100%;
                    }
                }
            }
        }

        // 실제사용 모듈용 css 구역 여기까지!!!!!!!!!!!



    }
}

@media screen and(max-width:768px) {
    .banner .bannerWrap .bannerMoule .banner1024{
        display: none;
    }

    .banner .bannerWrap .bannerMoule .banner768{
        display: block;
    }

    .banner .bannerWrap .bannerMoule{
        padding: 0 24px;
        transform: translate(-50%, 60%);
    }
}
</style>