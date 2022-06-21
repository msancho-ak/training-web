<template>
    <div class="island-container_grid_item"  :class="mostrar && 'hideTablet' || index > 1 && 'hideMore'" >
        <img :src="img" alt="" />
        <div class="island-container_grid_item_descripcion">
        <b><span>{{name}}</span></b>
            <div class="island-container_grid_item_descripcion_region">
                <img style="width: 10px; height: 10px;" src="../assets/loc.svg" alt="" />
                <span>{{location}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IslandContainerGridItem",
        props:["img", "name", "mostrar" , "index", "location"]
    }
</script>

<style scoped>

</style>