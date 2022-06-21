<template>
    <div class="languages_item " v-bind:class="text ==='English' && 'languages_item--selected'">
        <span class="hideDesktop"> {{text}}</span>
        <img v-if="text ==='English'" src="../assets/usa.svg" alt="" />
        <img v-else src="../assets/spain.svg" alt="" />

    </div>
</template>
<script>
    export default {
        name:"LanguagesItem",
        props:["text","url"]
    }
</script>

<style scoped>

</style>