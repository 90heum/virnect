<template>
   <!-- 탭메뉴 -->
     <span class="LearningCenterAside">
        <span>
            <p>전체</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span>
            <p>User's Manual</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span>
            <p>Video Tutorial</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span>
            <p>Video Real Guide</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
    </span>
</template>

<script>
export default {

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