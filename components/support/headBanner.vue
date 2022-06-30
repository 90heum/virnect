<template>
      <!-- 헤더 -->
      <div class="contactBanner">
        <div class="ContactBannerInner">
            <h2>CONTACT</h2>
            <span>
                현장 속 어려움을 개선하거나 보다 진보된 현장을 구축하고 싶으신가요?
                <p>버넥트가 가지고 있는 기술력을 바탕으로 올바르고 정확한 해결책을 제시하겠습니다.</p>    
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// 헤더용 css
.contactBanner{
    width: 100%;
    height: 600px;
    display: flex;
    background-image: url('https://velog.velcdn.com/images/kyj0206/post/8261f4b8-7f71-46b6-aad9-a9ed90b3b3e7/image.jpg');
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    .ContactBannerInner{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0 24px;
        h2{
            font-size: 44px;
            font-weight: bold;
            line-height: 1.36;
            color: #fff;
            margin-bottom: 34px;
        }
        span{
            font-size: 18px;
            font-weight: 500;
            line-height: 1.61;
            letter-spacing: -0.23px;
            text-align: center;
            color: #f7f8f9;

            p{
                font-size: 18px;
                font-weight: 500;
                line-height: 1.61;
                letter-spacing: -0.23px;
                text-align: center;
                color: #f7f8f9;
            }
        }
    }
}

</style>