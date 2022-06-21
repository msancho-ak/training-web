<template>
    <div class="characters-container_grid_item" :class="!mostrar && 'hideMore'">
        <img :src="imgPath" alt="" />
        <p className="characters-container_grid_item_characterName">{{text}}</p>
    </div>
</template>

<script>
    export default {
        name:"CharactersContainerGridItem",
        props:["text", "imgPath", "mostrar" ]
    }
</script>

<style scoped>

</style>