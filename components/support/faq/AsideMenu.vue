<template>
<div class="surplusFaqWrapper">
    <!-- aside -->
    <span class="FAQAside">
        <span @click="chooseType(null)">
            <p>전체</p>
        </span>
        <span v-for="(data, idx) of asideMenuList"
              :key="idx"
              @click="chooseType(data.id)">
            <p>{{data.name}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="noticeTag"></i>
        </span>
    </span>

</div>
</template>

<script>
export default {
    props: {
        asideMenuList: Array,
        chooseType: Function
    }
}
</script>


<style lang="scss" scoped>
.surplusFaqWrapper { width: 100%; max-width: 180px; }
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
                font-size: 20px;
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
</style>