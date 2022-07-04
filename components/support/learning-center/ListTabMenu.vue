<template>
   <!-- 리스트 탭 -->
    <div class="LearningCenterTab">
        <span class="active">
            <p>
                <img src="https://velog.velcdn.com/images/kyj0206/post/07e46fe5-174e-4d85-a180-eb0fdfba19ce/image.png" alt="Remote">
            </p>
            <p>Remote</p>
        </span>
        <span>
            <p>
                <img src="https://velog.velcdn.com/images/kyj0206/post/b5412054-589d-41d2-870b-c58f6e09f2dc/image.png" alt="Make">
            </p>
            <p>Make</p>
        </span>
        <span>
            <p>
                <img src="https://velog.velcdn.com/images/kyj0206/post/b8c65813-c3fb-453e-8aa4-c1a5a7050e03/image.png" alt="View">
            </p>
            <p>View</p>
        </span>
        <span>
            <p>
                <img src="https://velog.velcdn.com/images/kyj0206/post/11e9d25a-b0fc-4e23-99b5-799d11e6d320/image.png" alt="Workstation">
            </p>
            <p>Workstation</p>
        </span>
        <span>
            <p>
                <img src="https://velog.velcdn.com/images/kyj0206/post/90dc6681-fd1c-43de-ba9e-b1557f71b29a/image.png" alt="전체보기">
            </p>
            <p>전체보기</p>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .LearningCenterTab{
        display: flex;
        margin-bottom: 10px;
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            flex: 1;
            padding: 13px 5px 11px;
            border: solid 1px #c5c8cf;
            gap: 10px;
            p{

                &:first-child{
                    img{
                        max-width: 34px;
                        width: 100%;
                    }
                }
                &:last-child{
                    text-align: center;
                    font-size: 14px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1;
                    letter-spacing: normal;
                    text-align: center;
                    color: #616161;
                }
            }
            &.active,
            &:hover{
                border: solid 1px #092e6e;
                background-color: #092e6e;
                p{
                    color: #fff;
                }
            }
        }
    }
</style>