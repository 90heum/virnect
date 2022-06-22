<template>
    <div class="productPropertyWrapper" id="productPropertyId">
        <img :src="require(`~/assets/images/pages/products/productProperty_remote.png`)" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            xrSolutionWrapperPosition: 0
            
        }
    },
    methods: {
        positionSetting () {
            if (process.client) window.scrollTo({ left: 0, top: (Number(divPosition.get(e.target).getAttribute("class"))-250), behavior: "smooth" });
            Number(ids.getBoundingClientRect().top + window.pageYOffset);
        },

    }
}
</script>

<style lang="scss" scoped>
    .productPropertyWrapper {
        width: 100%;
        display: flex;
        justify-content: center;    
        align-items: center;

        img { 
            width: 100%; 
            max-width: 1260px;
        }
    }
</style>