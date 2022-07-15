<template>
  
</template>

<script>
export default {
    async asyncData ({$axios}) {
            try {
                const data = await $axios.get(`/admin/terms/type`);
                const dataJson = await data;
                return {termsType: dataJson.data.data.termsTypeResponseList}
            } catch (e) {console.error(e)}
    }
}
</script>

<style lang="scss" scoped>
.termsWrapper {
    display: flex;
    justify-content: center;
    padding: 150px 20px;
    /deep/ .termsInnerWrapper {
        max-width: 1200px;
        width: 100%;
        word-break: keep-all;
        h1 { 
            margin-bottom: 32px;
            font-weight: 700;
            font-size: 40px;
            color: #0D2A58;
        }
        h2 { 
            font-weight: 700;
            margin-bottom: 20px;
            font-size: 24px;
        }
        h3 {
            margin-bottom: 20px;
            font-weight: 700;
            color: #0D2A58;
        }
        p {
            margin-top: 20px;
            color: #0D2A58;
        }
        li {
            margin-left: 13px;
            text-indent: -13px;
            margin-top: 16px;
            color: #0D2A58;
        }
    }
}
</style>