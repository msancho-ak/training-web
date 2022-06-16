<template>
    <div class="sinopsis-container">
                    <SinopsisContainerImageVue></SinopsisContainerImageVue>
                    <SinopsisContainerReadMoreLogoVue></SinopsisContainerReadMoreLogoVue>
                    <SinopsisContainerContentVue></SinopsisContainerContentVue>
                </div>
</template>

<script>
    import SinopsisContainerImageVue from './SinopsisContainerImage.vue'
    import SinopsisContainerReadMoreLogoVue from './SinopsisContainerReadMoreLogo.vue'
    import SinopsisContainerContentVue from './SinopsisContainerContent.vue'
    export default {
        name:"SinopsisContainer",
        components:{SinopsisContainerImageVue, SinopsisContainerReadMoreLogoVue, SinopsisContainerContentVue}
    }
</script>

<style scoped>

</style>