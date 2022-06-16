<template>
    <div id="menuOptions" className="menu_items hideMenu">
            <MenuItemVue v-for="(opcion,index) in opciones" :key="index" :text="opcion.name" :url="opcion.link" :languages="''"></MenuItemVue>
            <MenuItemVue  :text="''" :url="''" :languages="languages"></MenuItemVue>
    </div>
</template>

<script>
    import MenuItemVue from './MenuItem.vue'
    export default {
        name:"MenuOptions",
        components:{MenuItemVue},
        data(){
            return {
                opciones : [{
                    name: "Home",
                    link: "#"
                }, 
                {
                    name: "Characters",
                    link: "#characterSection"
                }, 
                {
                    name: "Islands",
                    link: "#islandSection"
                }, 
                {
                    name: "Mist Objects",
                    link: "#mistSection"
                }],
                languages:[
                    {
                        'name':"English",
                        'url':"../assets/usa.svg"
                    },
                    {
                        'name':"Spanish",
                        'url':"../assets/spain.svg"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>