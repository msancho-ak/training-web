<template>
    <div v-if="text!==''" class="menu_item"><a :href="url">{{text}}</a></div>
    <div v-else class="menu_item">
        <LanguagesItemVue v-for="(language,index) in languages" :key="index" :text="language.name" :url="language.url"></LanguagesItemVue>      
    </div>
</template>

<script>
    import LanguagesItemVue from './LanguagesItem.vue'
    export default {
        name: "MenuItem",
        components:{LanguagesItemVue},
        props:["text", "url", "languages"]
    }
</script>

<style  scoped>

</style>