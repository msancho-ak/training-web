<template>
    <div class="mist-objects-container_grid_item">
        <img :src="img" alt="" />
        <div class="mist-container_grid_item_descripcion">
            <b><span>{{name}}</span></b>
            <span>{{description}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MistObjectGridItem",
        props:["img", "name", "description"]
    }
</script>

<style scoped>

</style>