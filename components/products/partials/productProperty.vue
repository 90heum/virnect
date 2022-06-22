<template>
    <div class="productPropertyWrapper">
        <img :src="require(`~/assets/images/pages/products/productProperty_remote.png`)" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .productPropertyWrapper {
        width: 100%;
        display: flex;
        justify-content: center;    
        align-items: center;

        img { width: 80%; }
    }
</style>