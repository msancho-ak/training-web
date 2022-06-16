<template>
    <div class="sinopsis-container_content">
        <SinopsisContainerContentTitleVue title="Sipnosis"></SinopsisContainerContentTitleVue>
        <SinopsisContainerContentTextVue></SinopsisContainerContentTextVue>
        <div class="division hideDesktop"></div>
        <SinopsisContainerContentReadAllVue ></SinopsisContainerContentReadAllVue>
    </div>
</template>

<script>
    import SinopsisContainerContentReadAllVue from './SinopsisContainerContentReadAll.vue'
    import SinopsisContainerContentTextVue from './SinopsisContainerContentText.vue'
    import SinopsisContainerContentTitleVue from './SinopsisContainerContentTitle.vue'
    export default {
        name:"SinopsisContainerContent", 
        components:{SinopsisContainerContentReadAllVue, SinopsisContainerContentTextVue, SinopsisContainerContentTitleVue}
    }
</script>

<style scoped>

</style>