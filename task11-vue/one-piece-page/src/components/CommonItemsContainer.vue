<template>
    <div :id="Id" class="common-items-container">
                    <div class="common-items-container_content">
                        <div class="common-items-container_title">
                            <div class="common-items-container_title--main">
                                <span>{{title}}</span>
                            </div>
                            <div class="common-items-container_title-see-all">
                                <span>See all</span>
                            </div>
                        </div>
                        <CommonItemsContainerGridVue v-if="title==='Characters'" :type="title"></CommonItemsContainerGridVue>
                        <CommonItemsContainerGridVue v-if="title==='Islands'" :type="title"></CommonItemsContainerGridVue>
                        <CommonItemsContainerGridVue v-if="title==='Mist Objects'" :type="title"></CommonItemsContainerGridVue>
                    </div>
                </div>
</template>

<script>
    import CommonItemsContainerGridVue from './CommonItemsContainerGrid.vue'
    export default {
        name:"CommonItemsContainer",
        props:["Id", "title"],
        components:{CommonItemsContainerGridVue}
    }
</script>

<style scoped>

</style>