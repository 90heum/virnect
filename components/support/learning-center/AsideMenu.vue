<template>
   <!-- 탭메뉴 -->
     <span class="LearningCenterAside">
        <span>
            <p>전체</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span>
            <p>{{$i18n.localeProperties.code === "ko" ? typeList[0].name : typeList[0].nameEn}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>

        <span>
            <p>{{$i18n.localeProperties.code === "ko" ? "Video Tutorial" : "Video Tutorial"}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span>{{$i18n.localeProperties.code === "ko" ? typeList[1].name : typeList[1].nameEn}}</span>
        <span>{{$i18n.localeProperties.code === "ko" ? typeList[2].name : typeList[2].nameEn}}</span>


        <span>
            <p>{{$i18n.localeProperties.code === "ko" ? typeList[3].name : typeList[3].nameEn}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        typeList: Array
    }
}
</script>

<style lang="scss" scoped>
    .LearningCenterAside{
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
                    min-width: 19px;
                    width: 100%;
                }
            }
        }
    }
</style>