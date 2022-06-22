<template>
    <div class="xrSolutionWrapper" id="xrSolutionId">
        <img :src="require(`~/assets/images/pages/products/ARSection_remote.svg`)" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .xrSolutionWrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: cemter;
        img {
            width: 100%;
            max-width: 1260px;
        }
    }
</style>